module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  automock: true,
  collectCoverage: true,
  clearMocks: true,
  setupFiles: ["reflect-metadata"],

  moduleNameMapper: {
    "^core/(.*)$": "<rootDir>/src/core/$1",
    "^infra/(.*)$": "<rootDir>/src/infra/$1",
    "^framework/(.*)$": "<rootDir>/src/framework/$1",
  },
  coverageReporters: ["json", "html", "text"],
  collectCoverageFrom: [
    "<rootDir>/src/core/applications/usecases/*.ts",
    "<rootDir>/src/framework/controllers/*.ts",
    "<rootDir>/src/framework/validation/*.ts",
    "<rootDir>/src/framework/route.ts",
  ],
};
