#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

const projectName = process.argv[2];

if (!projectName) {
  console.error('Please provide a name for your project.');
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(`A project with the name ${projectName} already exists.`);
  process.exit(1);
}

fs.copySync(path.join(__dirname, 'template'), projectPath);

console.log('Installing dependencies...');
execSync(`cd ${projectPath} && npm install`, { stdio: 'inherit' });

console.log('Project setup complete. Happy coding!');