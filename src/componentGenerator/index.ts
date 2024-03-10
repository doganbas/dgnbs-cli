import {createFolder, readConfigurationFile} from '../utils/fileHelper';
import {MESSAGES} from '../utils/projectConstant';
import {ComponentGeneratorModel} from '../models/configModel';
import {getComponentType, removeOptionsFromArgs} from './generatorUtils';
import path from 'path';
import {
  folderNameWithoutSpecialCharacter,
  formatString,
  getProjectFolder,
  lowerFirstLetter,
} from '../utils/generalHelper';
import {
  generateComponentFile,
  generateDefaultFile,
  generateIndexFile,
  generateLocalizationFile,
  generateStyleFile,
  generateTypeFile,
} from './fileService';
import {exec} from 'child_process';

const generateComponent = (settings: ComponentGeneratorModel) => {
  //Get Component Type
  const [, , ...args] = process.argv;
  const componentType = getComponentType(args);

  //Get Component Names
  const componentNames = removeOptionsFromArgs(args);

  //Generate Files
  for (const componentName of componentNames) {
    //Resolve Path
    const writeFileName = lowerFirstLetter(componentName.split('/')[componentName.split('/').length - 1]);
    const writeFolder = folderNameWithoutSpecialCharacter(componentName.replace(writeFileName, ''));

    //Create Base Folder
    const writePathBase = path.join(settings.basePath, componentType, writeFolder, writeFileName);
    const writePath = path.join(getProjectFolder(), writePathBase);
    createFolder(writePathBase);

    //Generate Localization
    if (settings.generateLocalization) {
      generateLocalizationFile(writePath, writeFileName, componentType, writeFolder);
    }

    //Generate Type
    generateTypeFile(writePath, writeFileName, componentType);

    //Generate Defaults
    generateDefaultFile(writePath, writeFileName, componentType);

    //Generate Style
    generateStyleFile(writePath, writeFileName, componentType);

    //Generate Components
    generateComponentFile(writePath, writeFileName, componentType, settings);

    //Generate Index
    generateIndexFile(writePath, writeFileName, componentType, settings);

    //Run Prettier
    exec(`prettier --write ${writePath}`);

    //Log complete file
    console.log(formatString(MESSAGES.completeComponentGenerate, {name: writeFileName, path: writePath}));
  }
};

const initialize = () => {
  try {
    const configurationFile = readConfigurationFile('.dgnbsrc');
    if (configurationFile?.component) {
      generateComponent(configurationFile.component);
    } else {
      console.warn(MESSAGES.notFoundComponentConfigurations);
      return;
    }
  } catch (e) {
    console.error(MESSAGES.errorGenerateComponent, e);
  } finally {
    console.log(MESSAGES.completeComponentGenerateAll);
  }
};

initialize();
