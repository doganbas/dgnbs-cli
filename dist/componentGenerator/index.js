"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileHelper_1 = require("../utils/fileHelper");
var projectConstant_1 = require("../utils/projectConstant");
var generatorUtils_1 = require("./generatorUtils");
var path_1 = __importDefault(require("path"));
var generalHelper_1 = require("../utils/generalHelper");
var fileService_1 = require("./fileService");
var child_process_1 = require("child_process");
var generateComponent = function (settings) {
    //Get Component Type
    var _a = process.argv, args = _a.slice(2);
    var componentType = (0, generatorUtils_1.getComponentType)(args);
    //Get Component Names
    var componentNames = (0, generatorUtils_1.removeOptionsFromArgs)(args);
    //Generate Files
    for (var _i = 0, componentNames_1 = componentNames; _i < componentNames_1.length; _i++) {
        var componentName = componentNames_1[_i];
        //Resolve Path
        var writeFileName = (0, generalHelper_1.lowerFirstLetter)(componentName.split('/')[componentName.split('/').length - 1]);
        var writeFolder = (0, generalHelper_1.folderNameWithoutSpecialCharacter)(componentName.replace(writeFileName, ''));
        //Create Base Folder
        var writePathBase = path_1.default.join(settings.basePath, componentType, writeFolder, writeFileName);
        var writePath = path_1.default.join((0, generalHelper_1.getProjectFolder)(), writePathBase);
        (0, fileHelper_1.createFolder)(writePathBase);
        //Generate Localization
        if (settings.generateLocalization) {
            (0, fileService_1.generateLocalizationFile)(writePath, writeFileName, componentType, writeFolder);
        }
        //Generate Type
        (0, fileService_1.generateTypeFile)(writePath, writeFileName, componentType);
        //Generate Defaults
        (0, fileService_1.generateDefaultFile)(writePath, writeFileName, componentType);
        //Generate Style
        (0, fileService_1.generateStyleFile)(writePath, writeFileName, componentType);
        //Generate Components
        (0, fileService_1.generateComponentFile)(writePath, writeFileName, componentType, settings);
        //Generate Index
        (0, fileService_1.generateIndexFile)(writePath, writeFileName, componentType, settings);
        //Run Prettier
        (0, child_process_1.exec)("prettier --write ".concat(writePath));
        //Log complete file
        console.log((0, generalHelper_1.formatString)(projectConstant_1.MESSAGES.completeComponentGenerate, { name: writeFileName, path: writePath }));
    }
};
var initialize = function () {
    try {
        var configurationFile = (0, fileHelper_1.readConfigurationFile)('.dgnbsrc');
        if (configurationFile === null || configurationFile === void 0 ? void 0 : configurationFile.component) {
            generateComponent(configurationFile.component);
        }
        else {
            console.warn(projectConstant_1.MESSAGES.notFoundComponentConfigurations);
            return;
        }
    }
    catch (e) {
        console.error(projectConstant_1.MESSAGES.errorGenerateComponent, e);
    }
    finally {
        console.log(projectConstant_1.MESSAGES.completeComponentGenerateAll);
    }
};
initialize();
