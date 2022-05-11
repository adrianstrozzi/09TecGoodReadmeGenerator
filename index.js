const inquirer = require('inquirer');
const fs = require('fs');

const createReadme = ({ title }) =>
  `README structure`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please type your README title:',
    },
  ])
  .then((answers) => {
    const htmlPageContent = createReadme(answers);

    fs.writeFile('./readme/README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md file at Readme folder')
    );
  });
