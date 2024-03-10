"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssetsIndexFile = void 0;
var glob_1 = __importDefault(require("glob"));
var generalHelper_1 = require("../utils/generalHelper");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var createAssetsIndexFile = function (pathPattern, ignorePattern, writeFolder, finalMessage, isIcon) {
    if (isIcon === void 0) { isIcon = false; }
    (0, glob_1.default)(pathPattern, { ignore: ignorePattern }, function (err, files) {
        var finalList = [];
        var exportList = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            if (!files)
                continue;
            var readPathSplit = file.split('/');
            var assetNameFull = readPathSplit[readPathSplit.length - 1];
            var assetName = assetNameFull.split('.')[0].trim();
            var finalPathList = readPathSplit
                .slice(readPathSplit.indexOf('assets'), readPathSplit.length - 1)
                .slice(0, isIcon ? 2 : 3);
            finalPathList.push(assetNameFull);
            if (isIcon) {
                finalList.push("import ".concat((0, generalHelper_1.componentNameWithoutSpecialCharacter)(assetName), " from './").concat(assetNameFull, "';"));
            }
            else {
                finalList.push("import ".concat((0, generalHelper_1.componentNameWithoutSpecialCharacter)(assetName), " from '").concat(finalPathList.join('/'), "';"));
            }
            exportList.push((0, generalHelper_1.componentNameWithoutSpecialCharacter)(assetName));
        }
        if (finalList.length <= 0)
            return;
        var writePath = path_1.default.join((0, generalHelper_1.getProjectFolder)(), 'src', 'assets', writeFolder, 'index.ts');
        var fileContent = finalList.join('\n') + '\n\n' + "export { ".concat(exportList.join(', '), ", };\n");
        fs_1.default.writeFileSync(writePath, fileContent, 'utf8');
        console.log(finalMessage);
    });
};
exports.createAssetsIndexFile = createAssetsIndexFile;
