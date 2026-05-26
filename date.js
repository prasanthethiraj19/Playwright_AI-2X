#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('date.js')
  .description('CLI tool to get ISO format of dates')
  .version('1.0.0');

program
  .command('now')
  .description('Get current date in ISO format')
  .action(() => {
    console.log(new Date().toISOString());
  });

program
  .command('convert <dateString>')
  .description('Convert a date string to ISO format')
  .action((dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error('Error: Invalid date string');
      process.exit(1);
    }
    console.log(date.toISOString());
  });

program
  .argument('[dateString]', 'Date string to convert (defaults to current date)')
  .action((dateString) => {
    const date = dateString ? new Date(dateString) : new Date();
    if (dateString && isNaN(date.getTime())) {
      console.error('Error: Invalid date string');
      process.exit(1);
    }
    console.log(date.toISOString());
  });

program.parse();
