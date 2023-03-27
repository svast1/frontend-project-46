#!/usr/bin/env node

/* eslint no-useless-escape: "off" */

import parser from '../src/parser.js'

import plainFormatter from '../formatters/plain.js'

import { isNested, nestedFiles, plainFiles } from '../formatters/stylish.js'

const genDiff = (formatType = 'stylish', data1, data2) => {
  if (formatType === 'plain') {
    return plainFormatter(nestedFiles(data1, data2))
  }
  if (isNested(data1, data2)) {
    return JSON.stringify(nestedFiles(data1, data2), null, 4).replace(/\"/g, "").replace(/\,/g, "")
  }
    return plainFiles(data1, data2)
}

export default (filepath1, filepath2) => {

const dataParse1 = parser(filepath1)
const dataParse2 = parser(filepath2)

return genDiff(dataParse1, dataParse2);
}