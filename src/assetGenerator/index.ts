import {MESSAGES} from '../utils/projectConstant';
import {createAssetsIndexFile} from './fileService';
import {createFolder} from '../utils/fileHelper';
import path from 'path';
import {exec} from "child_process";

const generateAssets = () => {
  //Generate Folders
  createFolder(path.join('src', 'assets', 'svg', 'icons'));
  createFolder(path.join('src', 'assets', 'png'));
  createFolder(path.join('src', 'assets', 'lottie'));

  //Generate Icons
  createAssetsIndexFile(
    '**/assets/svg/**/*.svg',
    ['**/assets/svg/icons/*.svg'],
    'svg',
    MESSAGES.completeGenerateSvgAsset,
  );

  //Generate SVG
  createAssetsIndexFile('**/assets/svg/icons/*.svg', [], 'svg/icons', MESSAGES.completeGenerateIconAsset, true);

  //Generate PNG
  createAssetsIndexFile('**/assets/png/**/*.png', [], 'png', MESSAGES.completeGeneratePngAsset, false);

  //Generate Lottie
  createAssetsIndexFile('**/assets/lottie/**/*.json', [], 'lottie', MESSAGES.completeGenerateLottieAsset, false);

  //Run Prettier
  exec(`prettier --write **/assets/**/*.ts`);

  //Log Message
  console.log(MESSAGES.startGenerateAssetsAll);
};

const initialize = () => {
  try {
    generateAssets();
  } catch (e) {
    console.error(MESSAGES.errorGenerateAssetsAll, e);
  }
};

initialize();
