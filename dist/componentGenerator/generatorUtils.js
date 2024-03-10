"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeOptionsFromArgs = exports.getComponentType = void 0;
var getComponentType = function (args) {
    var paramArg = args.find(function (nq) { return nq.startsWith('--'); });
    var param = paramArg ? paramArg.replace('--', '') : 'atom';
    switch (param) {
        case 'molecule':
            return 'molecules';
        case 'organism':
            return 'organisms';
        case 'page':
            return 'pages';
        case 'layout':
            return 'layouts';
        case 'provider':
            return 'providers';
        default:
            return 'atoms';
    }
};
exports.getComponentType = getComponentType;
var removeOptionsFromArgs = function (args, argsWithValues) {
    if (argsWithValues === void 0) { argsWithValues = []; }
    var temp = [];
    if (args.length > 0) {
        args.reduce(function (previous, current) {
            if (!current.startsWith('-') && !argsWithValues.includes(previous)) {
                temp.push(current);
            }
            return current;
        }, '');
    }
    return temp;
};
exports.removeOptionsFromArgs = removeOptionsFromArgs;
