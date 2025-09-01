const { executablePath } = require('puppeteer');
process.env.CHROME_BIN = executablePath();

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage'
        ]
      }
    },
    reporters: ['progress','junit','coverage'],
    junitReporter: { outputDir: 'reports/junit', outputFile: 'junit-report.xml', useBrowserName: false },
    coverageReporter: { dir: 'coverage', reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }] }
  });
};
