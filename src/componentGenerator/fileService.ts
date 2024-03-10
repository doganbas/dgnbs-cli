import {ComponentGeneratorModel} from '../models/configModel';
import path from 'path';
import {componentNameWithoutSpecialCharacter, getCliFolder, lowerFirstLetter} from '../utils/generalHelper';
import Handlebars from 'handlebars';
import fs from 'fs';

const generateLocalizationFile = (writePath: string, name: string, componentType: string, writeFolder: string) => {
  const componentName = componentNameWithoutSpecialCharacter(name);
  const componentNameLower = lowerFirstLetter(name);
  const writeFullPath = path.join(writePath, `${componentNameLower}.localization.ts`);

  const templateFilePath = path.join(
    getCliFolder(),
    'templates',
    'componentTemplates',
    'componentLocalizationTemp.hbs',
  );
  const templateFile = fs.readFileSync(templateFilePath, {encoding: 'utf8'});
  const hbsTemplate = Handlebars.compile(templateFile);
  const hbsFile = hbsTemplate({
    name: componentName,
    smallName: componentNameLower,
    componentType: componentType,
    customLocalizationPath: `${componentType}-${writeFolder ? writeFolder + '-' : ''}${componentNameLower}`,
  });
  fs.writeFileSync(writeFullPath, hbsFile, 'utf8');
};

const generateTypeFile = (writePath: string, name: string, componentType: string) => {
  const componentName = componentNameWithoutSpecialCharacter(name);
  const componentNameLower = lowerFirstLetter(name);
  const writeFullPath = path.join(writePath, `${componentNameLower}.type.ts`);

  const templateFilePath = path.join(getCliFolder(), 'templates', 'componentTemplates', 'componentTypeTemp.hbs');
  const templateFile = fs.readFileSync(templateFilePath, {encoding: 'utf8'});
  const hbsTemplate = Handlebars.compile(templateFile);
  const hbsFile = hbsTemplate({
    name: componentName,
    smallName: componentNameLower,
    componentType: componentType,
  });
  fs.writeFileSync(writeFullPath, hbsFile, 'utf8');
};

const generateDefaultFile = (writePath: string, name: string, componentType: string) => {
  const componentName = componentNameWithoutSpecialCharacter(name);
  const componentNameLower = lowerFirstLetter(name);
  const writeFullPath = path.join(writePath, `${componentNameLower}.default.ts`);

  const templateFilePath = path.join(getCliFolder(), 'templates', 'componentTemplates', 'componentDefaultTemp.hbs');
  const templateFile = fs.readFileSync(templateFilePath, {encoding: 'utf8'});
  const hbsTemplate = Handlebars.compile(templateFile);
  const hbsFile = hbsTemplate({
    name: componentName,
    smallName: componentNameLower,
    componentType: componentType,
  });
  fs.writeFileSync(writeFullPath, hbsFile, 'utf8');
};

const generateStyleFile = (writePath: string, name: string, componentType: string) => {
  const componentName = componentNameWithoutSpecialCharacter(name);
  const componentNameLower = lowerFirstLetter(name);
  const writeFullPath = path.join(writePath, `${componentNameLower}.module.scss`);

  const templateFilePath = path.join(getCliFolder(), 'templates', 'componentTemplates', 'componentStyleTemp.hbs');
  const templateFile = fs.readFileSync(templateFilePath, {encoding: 'utf8'});
  const hbsTemplate = Handlebars.compile(templateFile);
  const hbsFile = hbsTemplate({
    name: componentName,
    smallName: componentNameLower,
    componentType: componentType,
  });
  fs.writeFileSync(writeFullPath, hbsFile, 'utf8');
};

const generateComponentFile = (
  writePath: string,
  name: string,
  componentType: string,
  settings: ComponentGeneratorModel,
) => {
  const componentName = componentNameWithoutSpecialCharacter(name);
  const componentNameLower = lowerFirstLetter(name);
  const writeFullPath = path.join(writePath, `${componentNameLower}.component.tsx`);

  const templateFilePath = settings.generateLocalization
    ? path.join(getCliFolder(), 'templates', 'componentTemplates', 'componentContentTemp.hbs')
    : path.join(getCliFolder(), 'templates', 'componentTemplates', 'componentContentNoLocaleTemp.hbs');
  const templateFile = fs.readFileSync(templateFilePath, {encoding: 'utf8'});
  const hbsTemplate = Handlebars.compile(templateFile);
  const hbsFile = hbsTemplate({
    name: componentName,
    smallName: componentNameLower,
    componentType: componentType,
  });
  fs.writeFileSync(writeFullPath, hbsFile, 'utf8');
};

const generateIndexFile = (
  writePath: string,
  name: string,
  componentType: string,
  settings: ComponentGeneratorModel,
) => {
  const componentName = componentNameWithoutSpecialCharacter(name);
  const componentNameLower = lowerFirstLetter(name);
  const writeFullPath = path.join(writePath, `index.ts`);

  const templateFilePath = settings.generateLocalization
    ? path.join(getCliFolder(), 'templates', 'componentTemplates', 'componentIndexTemp.hbs')
    : path.join(getCliFolder(), 'templates', 'componentTemplates', 'componentIndexNoLocaleTemp.hbs');
  const templateFile = fs.readFileSync(templateFilePath, {encoding: 'utf8'});
  const hbsTemplate = Handlebars.compile(templateFile);
  const hbsFile = hbsTemplate({
    name: componentName,
    smallName: componentNameLower,
    componentType: componentType,
  });
  fs.writeFileSync(writeFullPath, hbsFile, 'utf8');
};

export {
  generateLocalizationFile,
  generateTypeFile,
  generateDefaultFile,
  generateStyleFile,
  generateComponentFile,
  generateIndexFile,
};
