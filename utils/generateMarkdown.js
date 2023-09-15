const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-green.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `# ${userInput.title}

  ${renderLicenseBadge(userInput.license)}

  # Table of Contents
  * [Description](#description)
  * [Process](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Contributors](#contributors)
  * [Questions](#questions)

  ## Description
  ${userInput.description}
  ## Installation
  ${userInput.installation}
  ## Usage
  ${userInput.usage}
  ${renderLicenseSection(userInput.license)}
  ## Tests
  ${userInput.tests}
  ## Contributors
  ${userInput.contributors}
  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${userInput.github}  
  Email: ${userInput.email}
`;
}

module.exports = generateMarkdown;
