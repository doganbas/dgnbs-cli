#!/usr/bin/env node
const {program} = require('commander');
const packageJson = require('../package.json');

try {
  program
    .version(packageJson.version)
    .command(
      'create',
      'Atomik dizayna uygun olarak component oluşturur.\n Component türleri: --atom, --molecule, --organism, --page, --layout',
      {isDefault: true},
    )
    .command('localizations', 'Tüm dil dosyalarını tek dosya altında toplar.')
    .command('assets', 'Tüm asset dosyalarını otomatik olarak import eder ve index dosyasına yazdırır.')
    .parse(process.argv);
} catch (error) {
  console.warn('Belirtilen komut bulunamadı.', error);
}
