const { default: inquirer } = require("inquirer");

inquirer
    .prompt([{
        type:'input',
        name:'pTitle',
        message:'Enter your project title',
    }])
    .prompt([{
        type:'input',
        name:'pDescription',
        message:'Enter a description of the project',
    }])
    .prompt([{
        type:'input',
        name:'pInstall',
        message:'Enter installation instructions',
    }])
    .prompt([{
        type:'input',
        name:'pUsage',
        message:'Enter application usage',
    }])
    .prompt([{
        type:'input',
        name:'pContrib',
        message:'Enter contribution guidelines',
    }])
    .prompt([{
        type:'input',
        name:'pTests',
        message:'Enter tests for this application',
    }])
    .prompt([{
        type:'input',
        name:'pUsername',
        message:'Enter your GitHub username for users to find you on GitHub',
    }])
    .prompt([{
        type:'input',
        name:'pEmail',
        message:'Enter your contact email if users have questions',
    }])
    .prompt([{
        type:'rawlist',
        name:'pLicense',
        message:'Choose a license',
        choices:[['1) GNU GPLv3','2) MIT License','3) The Unlicense'],1]
    }])