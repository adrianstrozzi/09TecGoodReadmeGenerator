const inquirer = require('inquirer');
const fs = require('fs');

const createReadme = ({ title, description, url, author, github }) =>
  `README structure`;

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
      name: 'github',
      message: 'Please write your GitHub url:',
    },
  ])
  .then((answers) => {
    const readmeContent = createReadme(answers);

    fs.writeFile('./readme/README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md file at Readme folder')
    );
  });
