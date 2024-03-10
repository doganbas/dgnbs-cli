import path from 'path';
import * as fs from 'fs';
import {ROOT_DIR} from './projectConstant';

const getProjectFolder = () => {
  const rootPath = 'node_modules/dgnbs-cli';
  if (fs.existsSync(rootPath)) {
    return ROOT_DIR;
  } else {
    return path.join(ROOT_DIR, 'sample');
  }
};

const getCliFolder = () => {
  const rootPath = 'node_modules/dgnbs-cli';
  if (fs.existsSync(rootPath)) {
    return rootPath;
  } else {
    return ROOT_DIR;
  }
};

const isUrl = (fileName: string) => {
  return fileName.startsWith('http');
};

const formatString = (message: string, params: Record<string, string>) => {
  Object.keys(params).forEach(item => {
    message = message.replace('{{' + item + '}}', params[item]);
  });
  return message;
};

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const lowerFirstLetter = (str: string) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

const componentNameWithoutSpecialCharacter = (str: string) => {
  return str.split('-').map(capitalizeFirstLetter).join('');
};

const folderNameWithoutSpecialCharacter = (str: string) => {
  return str.split('/').map(lowerFirstLetter).join('');
};

export {
  getProjectFolder,
  getCliFolder,
  isUrl,
  formatString,
  capitalizeFirstLetter,
  lowerFirstLetter,
  componentNameWithoutSpecialCharacter,
  folderNameWithoutSpecialCharacter,
};
