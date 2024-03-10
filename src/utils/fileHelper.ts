import path from 'path';
import {getProjectFolder} from './generalHelper';
import {MESSAGES} from './projectConstant';
import * as fs from 'fs';
import {ConfigModel} from '../models/configModel';

const parseConfigFile = (fileContent: string) => {
  try {
    return Function('return ' + fileContent)() as ConfigModel;
  } catch (e) {
    console.error(MESSAGES.configurationReadError, e);
    return;
  }
};

const readConfigurationFile = (fileName?: string) => {
  const configFilePath = path.join(getProjectFolder(), fileName ?? '.reactrc');
  if (!fs.existsSync(configFilePath)) {
    console.error(MESSAGES.configurationNotFound);
    return;
  }
  return parseConfigFile(fs.readFileSync(configFilePath, 'utf8'));
};

const createBaseFolder = (folderName: string) => {
  const folderPath = path.join(getProjectFolder(), folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
};

const createFolder = (folderName: string) => {
  const allFolders = folderName.split('/');
  let checkFolderName = '';
  for (let i = 0; i < allFolders.length; i++) {
    checkFolderName += (checkFolderName ? '/' : '') + allFolders[i];
    createBaseFolder(checkFolderName);
  }
};

export {readConfigurationFile, createFolder};
