"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var projectConstant_1 = require("../utils/projectConstant");
var fileService_1 = require("./fileService");
var fileHelper_1 = require("../utils/fileHelper");
var path_1 = __importDefault(require("path"));
var child_process_1 = require("child_process");
var generateAssets = function () {
    //Generate Folders
    (0, fileHelper_1.createFolder)(path_1.default.join('src', 'assets', 'svg', 'icons'));
    (0, fileHelper_1.createFolder)(path_1.default.join('src', 'assets', 'png'));
    (0, fileHelper_1.createFolder)(path_1.default.join('src', 'assets', 'lottie'));
    //Generate Icons
    (0, fileService_1.createAssetsIndexFile)('**/assets/svg/**/*.svg', ['**/assets/svg/icons/*.svg'], 'svg', projectConstant_1.MESSAGES.completeGenerateSvgAsset);
    //Generate SVG
    (0, fileService_1.createAssetsIndexFile)('**/assets/svg/icons/*.svg', [], 'svg/icons', projectConstant_1.MESSAGES.completeGenerateIconAsset, true);
    //Generate PNG
    (0, fileService_1.createAssetsIndexFile)('**/assets/png/**/*.png', [], 'png', projectConstant_1.MESSAGES.completeGeneratePngAsset, false);
    //Generate Lottie
    (0, fileService_1.createAssetsIndexFile)('**/assets/lottie/**/*.json', [], 'lottie', projectConstant_1.MESSAGES.completeGenerateLottieAsset, false);
    //Run Prettier
    (0, child_process_1.exec)("prettier --write **/assets/**/*.ts");
    //Log Message
    console.log(projectConstant_1.MESSAGES.startGenerateAssetsAll);
};
var initialize = function () {
    try {
        generateAssets();
    }
    catch (e) {
        console.error(projectConstant_1.MESSAGES.errorGenerateAssetsAll, e);
    }
};
initialize();
