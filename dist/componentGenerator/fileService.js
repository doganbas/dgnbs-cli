"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIndexFile = exports.generateComponentFile = exports.generateStyleFile = exports.generateDefaultFile = exports.generateTypeFile = exports.generateLocalizationFile = void 0;
var path_1 = __importDefault(require("path"));
var generalHelper_1 = require("../utils/generalHelper");
var handlebars_1 = __importDefault(require("handlebars"));
var fs_1 = __importDefault(require("fs"));
var generateLocalizationFile = function (writePath, name, componentType, writeFolder) {
    var componentName = (0, generalHelper_1.componentNameWithoutSpecialCharacter)(name);
    var componentNameLower = (0, generalHelper_1.lowerFirstLetter)(name);
    var writeFullPath = path_1.default.join(writePath, "".concat(componentNameLower, ".localization.ts"));
    var templateFilePath = path_1.default.join((0, generalHelper_1.getCliFolder)(), 'templates', 'componentTemplates', 'componentLocalizationTemp.hbs');
    var templateFile = fs_1.default.readFileSync(templateFilePath, { encoding: 'utf8' });
    var hbsTemplate = handlebars_1.default.compile(templateFile);
    var hbsFile = hbsTemplate({
        name: componentName,
        smallName: componentNameLower,
        componentType: componentType,
        customLocalizationPath: "".concat(componentType, "-").concat(writeFolder ? writeFolder + '-' : '').concat(componentNameLower),
    });
    fs_1.default.writeFileSync(writeFullPath, hbsFile, 'utf8');
};
exports.generateLocalizationFile = generateLocalizationFile;
var generateTypeFile = function (writePath, name, componentType) {
    var componentName = (0, generalHelper_1.componentNameWithoutSpecialCharacter)(name);
    var componentNameLower = (0, generalHelper_1.lowerFirstLetter)(name);
    var writeFullPath = path_1.default.join(writePath, "".concat(componentNameLower, ".type.ts"));
    var templateFilePath = path_1.default.join((0, generalHelper_1.getCliFolder)(), 'templates', 'componentTemplates', 'componentTypeTemp.hbs');
    var templateFile = fs_1.default.readFileSync(templateFilePath, { encoding: 'utf8' });
    var hbsTemplate = handlebars_1.default.compile(templateFile);
    var hbsFile = hbsTemplate({
        name: componentName,
        smallName: componentNameLower,
        componentType: componentType,
    });
    fs_1.default.writeFileSync(writeFullPath, hbsFile, 'utf8');
};
exports.generateTypeFile = generateTypeFile;
var generateDefaultFile = function (writePath, name, componentType) {
    var componentName = (0, generalHelper_1.componentNameWithoutSpecialCharacter)(name);
    var componentNameLower = (0, generalHelper_1.lowerFirstLetter)(name);
    var writeFullPath = path_1.default.join(writePath, "".concat(componentNameLower, ".default.ts"));
    var templateFilePath = path_1.default.join((0, generalHelper_1.getCliFolder)(), 'templates', 'componentTemplates', 'componentDefaultTemp.hbs');
    var templateFile = fs_1.default.readFileSync(templateFilePath, { encoding: 'utf8' });
    var hbsTemplate = handlebars_1.default.compile(templateFile);
    var hbsFile = hbsTemplate({
        name: componentName,
        smallName: componentNameLower,
        componentType: componentType,
    });
    fs_1.default.writeFileSync(writeFullPath, hbsFile, 'utf8');
};
exports.generateDefaultFile = generateDefaultFile;
var generateStyleFile = function (writePath, name, componentType) {
    var componentName = (0, generalHelper_1.componentNameWithoutSpecialCharacter)(name);
    var componentNameLower = (0, generalHelper_1.lowerFirstLetter)(name);
    var writeFullPath = path_1.default.join(writePath, "".concat(componentNameLower, ".module.scss"));
    var templateFilePath = path_1.default.join((0, generalHelper_1.getCliFolder)(), 'templates', 'componentTemplates', 'componentStyleTemp.hbs');
    var templateFile = fs_1.default.readFileSync(templateFilePath, { encoding: 'utf8' });
    var hbsTemplate = handlebars_1.default.compile(templateFile);
    var hbsFile = hbsTemplate({
        name: componentName,
        smallName: componentNameLower,
        componentType: componentType,
    });
    fs_1.default.writeFileSync(writeFullPath, hbsFile, 'utf8');
};
exports.generateStyleFile = generateStyleFile;
var generateComponentFile = function (writePath, name, componentType, settings) {
    var componentName = (0, generalHelper_1.componentNameWithoutSpecialCharacter)(name);
    var componentNameLower = (0, generalHelper_1.lowerFirstLetter)(name);
    var writeFullPath = path_1.default.join(writePath, "".concat(componentNameLower, ".component.tsx"));
    var templateFilePath = settings.generateLocalization
        ? path_1.default.join((0, generalHelper_1.getCliFolder)(), 'templates', 'componentTemplates', 'componentContentTemp.hbs')
        : path_1.default.join((0, generalHelper_1.getCliFolder)(), 'templates', 'componentTemplates', 'componentContentNoLocaleTemp.hbs');
    var templateFile = fs_1.default.readFileSync(templateFilePath, { encoding: 'utf8' });
    var hbsTemplate = handlebars_1.default.compile(templateFile);
    var hbsFile = hbsTemplate({
        name: componentName,
        smallName: componentNameLower,
        componentType: componentType,
    });
    fs_1.default.writeFileSync(writeFullPath, hbsFile, 'utf8');
};
exports.generateComponentFile = generateComponentFile;
var generateIndexFile = function (writePath, name, componentType, settings) {
    var componentName = (0, generalHelper_1.componentNameWithoutSpecialCharacter)(name);
    var componentNameLower = (0, generalHelper_1.lowerFirstLetter)(name);
    var writeFullPath = path_1.default.join(writePath, "index.ts");
    var templateFilePath = settings.generateLocalization
        ? path_1.default.join((0, generalHelper_1.getCliFolder)(), 'templates', 'componentTemplates', 'componentIndexTemp.hbs')
        : path_1.default.join((0, generalHelper_1.getCliFolder)(), 'templates', 'componentTemplates', 'componentIndexNoLocaleTemp.hbs');
    var templateFile = fs_1.default.readFileSync(templateFilePath, { encoding: 'utf8' });
    var hbsTemplate = handlebars_1.default.compile(templateFile);
    var hbsFile = hbsTemplate({
        name: componentName,
        smallName: componentNameLower,
        componentType: componentType,
    });
    fs_1.default.writeFileSync(writeFullPath, hbsFile, 'utf8');
};
exports.generateIndexFile = generateIndexFile;
