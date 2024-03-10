"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeLocalizationFile = exports.readLocalizationFile = void 0;
var path_1 = __importDefault(require("path"));
var generalHelper_1 = require("../utils/generalHelper");
var fs_1 = __importDefault(require("fs"));
var fileHelper_1 = require("../utils/fileHelper");
var readLocalizationFile = function (filePath) {
    var componentName = filePath.split('/')[filePath.split('/').length - 2];
    if (filePath.includes('global.localization.ts')) {
        componentName = 'global';
    }
    var readPath = path_1.default.join(filePath);
    var readFile = fs_1.default.readFileSync(readPath, { encoding: 'utf8' }).toString();
    var string = "(export const ".concat(componentName, "Localization = {([^>]+)};)");
    var regex = new RegExp(string, 'g');
    var filteredText = readFile.replace(regex, '__start__$1__end__');
    var finalTest = filteredText
        .substring(filteredText.indexOf('__start__') + 9, filteredText.indexOf('__end__'))
        .split('=')[1]
        .trim();
    var jsonContent = Function('return ' + finalTest)();
    var splitPath = filePath.split('/');
    var localizationStartPath = splitPath.slice(splitPath.indexOf('components') + 1, splitPath.length - 1);
    if (filePath.includes('global.localization.ts')) {
        localizationStartPath = ['global'];
    }
    var turnList = {};
    var allLocalizationKeys = Object.keys(jsonContent);
    for (var _i = 0, allLocalizationKeys_1 = allLocalizationKeys; _i < allLocalizationKeys_1.length; _i++) {
        var key = allLocalizationKeys_1[_i];
        var val = jsonContent[key];
        turnList["".concat(localizationStartPath.join('-'), "-").concat(key)] = val;
    }
    return turnList;
};
exports.readLocalizationFile = readLocalizationFile;
var writeLocalizationFile = function (localizationList) {
    var writePath = path_1.default.join((0, generalHelper_1.getProjectFolder)(), 'src', 'assets', 'locales', 'tr.json');
    (0, fileHelper_1.createFolder)(path_1.default.join('src', 'assets', 'locales'));
    fs_1.default.writeFileSync(writePath, JSON.stringify(localizationList), 'utf8');
    return writePath;
};
exports.writeLocalizationFile = writeLocalizationFile;
