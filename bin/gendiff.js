#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/genDiff.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2);
    console.log(diff)
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

