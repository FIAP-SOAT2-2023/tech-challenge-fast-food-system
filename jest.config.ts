module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  automock: true,
  collectCoverage: true,
  coverageReporters: ["json", "html", "text"],
};
