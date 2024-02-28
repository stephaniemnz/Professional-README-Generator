// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string\
const license = {
  'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
  'Apache-2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
  'GPL-3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  'BSD-2-Clause': 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
  'BSD-3-Clause': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
  'MPL-2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
  'CDDL-1.0': 'https://img.shields.io/badge/License-CDDL%201.0-blue.svg',
  'EPL-2.0': 'https://img.shields.io/badge/License-EPL%202.0-brightgreen.svg',
};

function renderLicenseBadge(license) {
  if (!license) {
    return '';
}
return `![License](${license[license]})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
return `https://opensource.org/licenses/${license}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
 

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Github](#github)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}
  
  ##License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Github
  ${data.github}
`;
}

module.exports = generateMarkdown;
