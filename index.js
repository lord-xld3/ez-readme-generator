const inquirer = require('inquirer');
const fs = require('fs')

inquirer
    .prompt([
    {
        type:'input',
        name:'pTitle',
        message:'Enter your project title',
    },{
        type:'input',
        name:'pDescription',
        message:'Enter a description of the project',
    },{
        type:'input',
        name:'pInstall',
        message:'Enter installation instructions',
    },{
        type:'input',
        name:'pUsage',
        message:'Enter application usage',
    },{
        type:'input',
        name:'pContrib',
        message:'Enter contribution guidelines',
    },{
        type:'input',
        name:'pTests',
        message:'Enter tests for this application',
    },{
        type:'input',
        name:'pUsername',
        message:'Enter your GitHub username for users to find you on GitHub',
    },{   
        type:'input',
        name:'pEmail',
        message:'Enter your contact email if users have questions',
    },{
        type:'rawlist',
        name:'pLicense',
        message:'Choose a license',
        choices:['GNU GPLv3','MIT License','None']
    }])
    .then((res => {
        let fileData = ''
        let contents = '## Table of Contents\n\n'
        let questions = ''
        let start = ''

        if (res.pTitle != '') {
            start = `# ${res.pTitle}\n\n`
        }
        if (res.pDescription != '') {
            fileData += `## Description\n\n${res.pDescription}\n\n`
            contents += `[Description](#description)\n\n`
        }
        if (res.pInstall != '') {
            fileData += `## Install\n\n${res.pInstall}\n\n`
            contents += `[Install](#install)\n\n`
        }
        if (res.pUsage != '') {
            fileData += `## Usage\n\n${res.pUsage}\n\n`
            contents += `[Usage](#usage)\n\n`
        }
        if (res.pTests != '') {
            fileData += `## Tests\n\n${res.pTests}\n\n`
            contents += `[Tests](#tests)\n\n`
        }
        if (res.pContrib != '') {
            fileData += `## Contribution\n\n${res.pContrib}\n\n`
            contents += `[Contribution](#contribution)\n\n`
        }
        if (res.pUsername != '' || res.pEmail != '') {
            questions += `## Questions\n\n`
            contents += `[Questions](#questions)\n\n`
        }
        if (res.pUsername != '') {
            questions += `GitHub: [${res.pUsername}](https://github.com/${res.pUsername})\n\n`
        }
        if (res.pEmail != '') {
            questions += `Email: ${res.pEmail}\n\n`
        }
        if (res.pLicense != 'None') {
            start += `## **${res.pLicense}**\n\n`
            questions += `This software is covered under ${res.pLicense}`
        }
        let finalData = `${start}${contents}${fileData}${questions}`
        fs.writeFile('./readme.md', finalData, err => {
            if (err != null) console.log(`Error : ${err}`)
        })
        console.log('Readme created!')
    }))