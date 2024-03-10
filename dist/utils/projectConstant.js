"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGES = exports.processArgs = exports.ROOT_DIR = void 0;
var ROOT_DIR = process.cwd();
exports.ROOT_DIR = ROOT_DIR;
var _a = process.argv, args = _a.slice(2);
exports.processArgs = args;
var MESSAGES = {
    configurationNotFound: 'Configurasyon dosyası proje dizininde bulunamadı.',
    configurationReadError: 'Configurasyon dosyası hatalı olduğu için okuma işlemi tamamlanamadı.',
    completeGenerate: 'Tüm Endpointler başarı ile oluşturulmuştur.',
    errorGenerate: 'Endpointler oluşturulurken beklemeyen bir hata meydana geldi.',
    notFoundApiCallConfigurations: 'Configurasyon dosyasında ApiCall için herhangi bir ayar bulunamadı.',
    apiCallGenerateComplete: "'{{name}}' isimli endpoint oluşturuldu.",
    apiCallGenerateCompleteAll: 'Tüm endpointler başarı ile oluşturuldu.',
    apiCallFileNotFound: "'{{name}}' isimli endpoint için belirtilen swagger dökümanı okunurken bir hata meydana geldi.",
    apiCallUrlNotFound: "'{{name}}' isimli endpoint için belirtilen swagger url okunurken bir hata meydana geldi.",
    notFoundComponentConfigurations: 'Configurasyon dosyasında component için herhangi bir ayar bulunamadı.',
    errorGenerateComponent: 'Component oluşturulurken beklemeyen bir hata meydana geldi.',
    completeComponentGenerateAll: 'Tüm componentler başarı ile oluşturulmuştur.',
    completeComponentGenerate: "'{{name}}' isimli component '{{path}}' yoluna başarı ile oluşturulmuştur.",
    errorGenerateLocalization: 'Localization dosyası oluşturulurken beklemeyen bir hata meydana geldi.',
    completeComponentLocalization: 'Localization dosyası başarı ile oluşturulmuştur.',
    errorGenerateAssetsAll: 'Assets dosyaları oluşturulurken beklemeyen bir hata meydana geldi.',
    startGenerateAssetsAll: 'Assets listeleri oluşturulmaya başlanmıştır.',
    completeGenerateSvgAsset: 'SVG listesi başarı ile oluşturulmulştur.',
    completeGenerateIconAsset: 'Icon listesi başarı ile oluşturulmulştur.',
    completeGeneratePngAsset: 'Icon listesi başarı ile oluşturulmulştur.',
    completeGenerateLottieAsset: 'Animasyon listesi başarı ile oluşturulmulştur.',
};
exports.MESSAGES = MESSAGES;
