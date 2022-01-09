// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // return `[MIT license Badge](https://img.shields.io/badge/license-${license}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

## Licensing:
![License](https://img.shields.io/badge/license-${data.license}-blue)(https://shields.io)

## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Test](#test)
* [Usage](#usage)
* [Contribution](#contribution)

## Description
${data.description}

## License
This repository is under the ${(data.license)} license.

## Installation
${data.installation}

## Test
${data.test}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Questions
### If you have any question please contact me at ${data.email}. View more of my work at [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
