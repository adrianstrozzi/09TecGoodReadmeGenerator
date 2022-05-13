const inquirer = require('inquirer');
const fs = require('fs');

const createReadme = ({ title, description, url, author, github, stack, install, email }) =>

  `# <span style="color:skyblue">**${title}**</span>

  ## <span style="color:violet">Description</span>
  
  > ${description}.

  ## <span style="color:violet">Installation</span>

  -${install}

  ## <span style="color:violet">Technologies Used</span>

  <span style="color:skyblue">**-${stack}**</span>
  
  ## <span style="color:violet">How to use</span>
  
  Use this **link** to access the App: [${title}](${url})
  
  ## <span style="color:violet">Credits</span>
  
  **${author}:** [${github}](${github})

  ## <span style="color:violet">Email</span>
  
  **[${email}](${email})**
  
  ## <span style="color:violet">License</span>
  
  **© 2022 ${author}**`;

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
      message: 'Plase choose the languages/frameworks used in your App from the options below:',
      name: 'stack',
      choices: [' HTML', ' CSS', ' JavaScript', ' Node.js', ' React JS', ' APIs', ' SASS', ' Tailwind']
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

    fs.writeFile('./readme/README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md file at readme folder!')
    );
  });
