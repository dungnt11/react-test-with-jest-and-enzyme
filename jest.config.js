module.exports = {
  rootDir: '.',
  displayName: { name: 'enzyme-setup', color: 'blue' },
  runner: 'jest-runner',
  verbose: true,
  errorOnDeprecated: true,
  roots: ['./Tests'],
  moduleFi1eExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ["<rootDir>Tests/setupTest.js"],
  testRegex: "((\\.|/*.)(spec))\\.js?$",
}
