module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  automock: true,
  collectCoverage: true,
  coverageReporters: ["json", "html", "text"],
  collectCoverageFrom: [
    "<rootDir>/src/core/applications/usecases/*.ts",
    "<rootDir>/src/framework/controllers/*.ts",
    "<rootDir>/src/framework/validation/*.ts",
    "<rootDir>/src/framework/route.ts",
  ],
};
