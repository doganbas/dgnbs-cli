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
exports.folderNameWithoutSpecialCharacter = exports.componentNameWithoutSpecialCharacter = exports.lowerFirstLetter = exports.capitalizeFirstLetter = exports.formatString = exports.isUrl = exports.getCliFolder = exports.getProjectFolder = void 0;
var path_1 = __importDefault(require("path"));
var fs = __importStar(require("fs"));
var projectConstant_1 = require("./projectConstant");
var getProjectFolder = function () {
    var rootPath = 'node_modules/dgnbs-cli';
    if (fs.existsSync(rootPath)) {
        return projectConstant_1.ROOT_DIR;
    }
    else {
        return path_1.default.join(projectConstant_1.ROOT_DIR, 'sample');
    }
};
exports.getProjectFolder = getProjectFolder;
var getCliFolder = function () {
    var rootPath = 'node_modules/dgnbs-cli';
    if (fs.existsSync(rootPath)) {
        return rootPath;
    }
    else {
        return projectConstant_1.ROOT_DIR;
    }
};
exports.getCliFolder = getCliFolder;
var isUrl = function (fileName) {
    return fileName.startsWith('http');
};
exports.isUrl = isUrl;
var formatString = function (message, params) {
    Object.keys(params).forEach(function (item) {
        message = message.replace('{{' + item + '}}', params[item]);
    });
    return message;
};
exports.formatString = formatString;
var capitalizeFirstLetter = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
var lowerFirstLetter = function (str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
};
exports.lowerFirstLetter = lowerFirstLetter;
var componentNameWithoutSpecialCharacter = function (str) {
    return str.split('-').map(capitalizeFirstLetter).join('');
};
exports.componentNameWithoutSpecialCharacter = componentNameWithoutSpecialCharacter;
var folderNameWithoutSpecialCharacter = function (str) {
    return str.split('/').map(lowerFirstLetter).join('');
};
exports.folderNameWithoutSpecialCharacter = folderNameWithoutSpecialCharacter;
