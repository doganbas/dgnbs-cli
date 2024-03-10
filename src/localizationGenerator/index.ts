import {MESSAGES} from '../utils/projectConstant';
import glob from 'glob';
import {readLocalizationFile, writeLocalizationFile} from './fileService';
import {exec} from 'child_process';
import {getProjectFolder} from "../utils/generalHelper";

const generateLocalization = () => {
  glob(`${getProjectFolder()}/src/**/*.localization.ts`, {}, function (err, files) {
    let finalList: Record<string, string> = {};

    //Read File
    for (const localizationFile of files) {
      finalList = {
        ...finalList,
        ...readLocalizationFile(localizationFile.replace('sample', '')),
      };
    }

    //Write File
    const filePath = writeLocalizationFile(finalList);

    //Run Prettier
    exec(`prettier --write ${filePath}`);

    //Log Message
    console.log(MESSAGES.completeComponentLocalization);
  });
};

const initialize = () => {
  try {
    generateLocalization();
  } catch (e) {
    console.error(MESSAGES.errorGenerateLocalization, e);
  }
};

initialize();
