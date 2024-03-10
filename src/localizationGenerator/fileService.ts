import path from 'path';
import {getProjectFolder} from '../utils/generalHelper';
import fs from 'fs';
import {createFolder} from '../utils/fileHelper';

const readLocalizationFile = (filePath: string) => {
  let componentName = filePath.split('/')[filePath.split('/').length - 2];
  if (filePath.includes('global.localization.ts')) {
    componentName = 'global';
  }
  const readPath = path.join(filePath);
  const readFile = fs.readFileSync(readPath, {encoding: 'utf8'}).toString();
  const string = `(export const ${componentName}Localization = {([^>]+)};)`;
  const regex = new RegExp(string, 'g');
  const filteredText = readFile.replace(regex, '__start__$1__end__');
  const finalTest = filteredText
    .substring(filteredText.indexOf('__start__') + 9, filteredText.indexOf('__end__'))
    .split('=')[1]
    .trim();
  const jsonContent = Function('return ' + finalTest)() as Record<string, string>;

  const splitPath = filePath.split('/');
  let localizationStartPath = splitPath.slice(splitPath.indexOf('components') + 1, splitPath.length - 1);
  if (filePath.includes('global.localization.ts')) {
    localizationStartPath = ['global'];
  }
  const turnList: Record<string, string> = {};
  const allLocalizationKeys = Object.keys(jsonContent);
  for (const key of allLocalizationKeys) {
    const val = jsonContent[key];
    turnList[`${localizationStartPath.join('-')}-${key}`] = val;
  }

  return turnList;
};

const writeLocalizationFile = (localizationList: Record<string, string>) => {
  const writePath = path.join(getProjectFolder(), 'src', 'assets', 'locales', 'tr.json');
  createFolder(path.join('src', 'assets', 'locales'));
  fs.writeFileSync(writePath, JSON.stringify(localizationList), 'utf8');
  return writePath;
};

export {readLocalizationFile, writeLocalizationFile};
