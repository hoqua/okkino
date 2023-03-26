/* eslint-disable */
import { readFileSync } from 'fs'

// Reading the SWC compilation config and remove the "exclude"
// for the test files to be compiled by SWC
const { exclude: _, ...swcJestConfig } = JSON.parse(readFileSync(`${__dirname}/.swcrc`, 'utf-8'))
export default {
  displayName: 'web-utils-shared',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['@swc/jest', swcJestConfig]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/web/utils-shared'
}
