import glob from 'glob';
import {componentNameWithoutSpecialCharacter, getProjectFolder} from '../utils/generalHelper';
import path from 'path';
import fs from 'fs';

const createAssetsIndexFile = (
  pathPattern: string,
  ignorePattern: string[],
  writeFolder: string,
  finalMessage: string,
  isIcon = false,
) => {
  glob(pathPattern, {ignore: ignorePattern}, function (err, files) {
    const finalList: string[] = [];
    const exportList: string[] = [];

    for (const file of files) {
      if (!files) continue;
      const readPathSplit = file.split('/');
      const assetNameFull = readPathSplit[readPathSplit.length - 1];
      const assetName = assetNameFull.split('.')[0].trim();
      const finalPathList = readPathSplit
        .slice(readPathSplit.indexOf('assets'), readPathSplit.length - 1)
        .slice(0, isIcon ? 2 : 3);
      finalPathList.push(assetNameFull);

      if (isIcon) {
        finalList.push(`import ${componentNameWithoutSpecialCharacter(assetName)} from './${assetNameFull}';`);
      } else {
        finalList.push(`import ${componentNameWithoutSpecialCharacter(assetName)} from '${finalPathList.join('/')}';`);
      }

      exportList.push(componentNameWithoutSpecialCharacter(assetName));
    }

    if (finalList.length <= 0) return;

    const writePath = path.join(getProjectFolder(), 'src', 'assets', writeFolder, 'index.ts');
    const fileContent = finalList.join('\n') + '\n\n' + `export { ${exportList.join(', ')}, };\n`;
    fs.writeFileSync(writePath, fileContent, 'utf8');
    console.log(finalMessage);
  });
};

export {createAssetsIndexFile};
