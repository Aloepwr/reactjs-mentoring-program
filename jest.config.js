module.exports = {
  verbose: true,
  moduleDirectories: [ "node_modules", "src" ],
  moduleNameMapper: { "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js" },
  setupFiles: [ "<rootDir>/__mocks__/browserMock.js" ],
  testPathIgnorePatterns: [ "<rootDir>[/\\\\](dist|node_modules)[/\\\\]" ],
  transform: { "^.+\\.(js|jsx)$": "babel-jest" },
  transformIgnorePatterns: [ "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$" ]
};