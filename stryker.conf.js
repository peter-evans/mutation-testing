module.exports = function(config) {
  config.set({
    testRunner: "mocha",
    mutator: "javascript",
    reporter: ["clear-text", "progress"],
    packageManager: "npm",
    testFramework: "mocha",
    coverageAnalysis: "off",
    mutate: ["src/**/*.js"],
  });
};
