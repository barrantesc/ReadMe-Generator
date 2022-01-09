// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

## Licensing:
![License](https://img.shields.io/badge/license-${data.license}-blue)

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Test](#test)


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
