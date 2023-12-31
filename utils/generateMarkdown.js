// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
-[Installation](#installation)\n
-[Usage](#usage)\n
-[License](#license)\n
-[Contributing](#contributing)\n
-[Tests](#tests)\n
-[Questions](#questions)\n
## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
[github.com/${data.gitUsername}](https://github.com/${data.gitUsername})\n
If further assistence is required, please send an email to the following below\n
${data.gitEmail}
`;
}

module.exports = {generateMarkdown};
