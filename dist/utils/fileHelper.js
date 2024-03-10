"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFolder = exports.readConfigurationFile = void 0;
var path_1 = __importDefault(require("path"));
var generalHelper_1 = require("./generalHelper");
var projectConstant_1 = require("./projectConstant");
var fs = __importStar(require("fs"));
var parseConfigFile = function (fileContent) {
    try {
        return Function('return ' + fileContent)();
    }
    catch (e) {
        console.error(projectConstant_1.MESSAGES.configurationReadError, e);
        return;
    }
};
var readConfigurationFile = function (fileName) {
    var configFilePath = path_1.default.join((0, generalHelper_1.getProjectFolder)(), fileName !== null && fileName !== void 0 ? fileName : '.reactrc');
    if (!fs.existsSync(configFilePath)) {
        console.error(projectConstant_1.MESSAGES.configurationNotFound);
        return;
    }
    return parseConfigFile(fs.readFileSync(configFilePath, 'utf8'));
};
exports.readConfigurationFile = readConfigurationFile;
var createBaseFolder = function (folderName) {
    var folderPath = path_1.default.join((0, generalHelper_1.getProjectFolder)(), folderName);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }
};
var createFolder = function (folderName) {
    var allFolders = folderName.split('/');
    var checkFolderName = '';
    for (var i = 0; i < allFolders.length; i++) {
        checkFolderName += (checkFolderName ? '/' : '') + allFolders[i];
        createBaseFolder(checkFolderName);
    }
};
exports.createFolder = createFolder;
