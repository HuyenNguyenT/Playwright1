const { transform } = require("typescript");

module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    }
}
