"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var projectConstant_1 = require("../utils/projectConstant");
var glob_1 = __importDefault(require("glob"));
var fileService_1 = require("./fileService");
var child_process_1 = require("child_process");
var generalHelper_1 = require("../utils/generalHelper");
var generateLocalization = function () {
    (0, glob_1.default)("".concat((0, generalHelper_1.getProjectFolder)(), "/src/**/*.localization.ts"), {}, function (err, files) {
        var finalList = {};
        //Read File
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var localizationFile = files_1[_i];
            finalList = __assign(__assign({}, finalList), (0, fileService_1.readLocalizationFile)(localizationFile.replace('sample', '')));
        }
        //Write File
        var filePath = (0, fileService_1.writeLocalizationFile)(finalList);
        //Run Prettier
        (0, child_process_1.exec)("prettier --write ".concat(filePath));
        //Log Message
        console.log(projectConstant_1.MESSAGES.completeComponentLocalization);
    });
};
var initialize = function () {
    try {
        generateLocalization();
    }
    catch (e) {
        console.error(projectConstant_1.MESSAGES.errorGenerateLocalization, e);
    }
};
initialize();
