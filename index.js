const inquirer = require('inquirer');
const fs = require('fs');


const createReadme = ({ title, description, url, author, github, stack, install, email, license, }) =>

  `# <span style="color:skyblue">**${title}**</span>

  ## <span style="color:violet">Table of Contents:</span>

  1. [Description](#Description) 
  2. [Installation](#Installation)
  3. [Stack](#Stack)
  4. [Usage](#Usage)  
  5. [Contributing](#Contributing)
  6. [License](#License)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)
  9. [Author](#Author)

  ## <span style="color:violet">Description</span>
  
  > ${description}.

  ## <span style="color:violet">Installation</span>

  -${install}

  ## <span style="color:violet">Technologies Used</span>

  <span style="color:skyblue">**-${stack}**</span>
  
  ## <span style="color:violet">Usage</span>
  
  Use this **link** to access the App: [${title}](${url})

  ## <span style="color:violet">Contributing</span>

  Please feel free to contribute to this project by submitting a pull request.

  ## <span style="color:violet">License</span>

  ![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)
  
  ## <span style="color:violet">GitHub</span>
  
  **${author}: **[${github}](${github})

  ## <span style="color:violet">E-mail</span>
  
  **[${email}](${email})**
  
  ## <span style="color:violet">Author</span>
  
  **©2022 ${author}**`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please write your App name:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a brief description of your App:',
    },
    {
      type: 'input',
      name: 'install',
      message: 'How do you install the App?',
    },
    {
      type: 'checkbox',
      message: 'Plase choose the technologies used in your App from the options below:',
      name: 'stack',
      choices: [' HTML', ' CSS', ' JavaScript', ' Node.js', ' React JS', ' APIs', ' SASS', ' Tailwind']
    },
    {
      type: 'list',
      message: 'Plase choose the license use in you App:',
      name: 'license',
      choices: ['MIT', 'Apache_2.0', 'GPL_v2', 'GPLv3']
    },
    {
      type: 'input',
      name: 'url',
      message: 'Please write your App link:',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Please write the App author name:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please write the App author email:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please write your GitHub url:',
    },
  ])



  .then((answers) => {

    const readmeContent = createReadme(answers);

    fs.writeFile('./document/README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md file document folder!')
    );
  });
