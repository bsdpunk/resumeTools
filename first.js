const fs = require('fs');
const inquirer = require('inquirer')
let rawdata = fs.readFileSync("output/Positions.json");
let rawHon = fs.readFileSync("output/Honors.json");

let res = JSON.parse(rawdata);
let hon = JSON.parse(rawHon);


var questions = [
    {
        type: 'input',
        name: 'bname',
        message: "Full Name: "
    },
    {
        type: 'input',
        name: 'blabel',
        message: "Ultimate Title: "
    },
    {
        type: 'input',
        name: 'bemail',
        message: "Email: "
    },
    {
        type: 'input',
        name: 'burl',
        message: "URL that represents you: "
    },
    {
        type: 'input',
        name: 'bsummary',
        message: "Summary of yourself: "
    },

    {
        type: 'input',
        name: 'baddress',
        message: "Street Address: "
    },
    {
        type: 'input',
        name: 'bzip',
        message: "Zip: "
    },
    {
        type: 'input',
        name: 'bcountry',
        message: "Two Letter Country Code: "
    },
    {
        type: 'input',
        name: 'bregion',
        message: "Region/State/Province: "
    },
    {
        type: 'input',
        name: 'bcity',
        message: "City: "
    },
    {
        type: 'input',
        name: 'bimage',
        message: "Image File: "
    },
    {
        type: 'input',
        name: 'bphone',
        message: "Phone: "
    }
]
var basics


inquirer.prompt(questions).then(answers => {
    basics = {
        "name": answers.bname,
        "label": answers.blabel,
        "image": answers.bimage,
        "email": answers.bemail,
        "phone": answers.bphone,
        "url": answers.burl,
        "summary": answers.bsummary,
        "location": {
            "address": answers.baddress,
            "postalCode": answers.bzip,
            "city": answers.bcity,
            "countryCode": answers.bcountry,
            "region": answers.bregion
        }
    }

    resume = {
        "basics": {
            "name": "Dusty Carver",
            "label": "Aspiring Boyfriend Material",
            "image": "",
            "email": "dustycarver@gmail.com",
            "phone": "+1(615)9448728",
            "url": "",
            "summary": "Dusty is a kind sensitive soul looking for someone to adore.",
            "location": {
                "address": "2939 Franklin Pike",
                "postalCode": "37204",
                "city": "Nashville",
                "countryCode": "US",
                "region": "Tennessee"
            },
            "profiles": [{
                "network": "Twitter",
                "username": "bsdpunk",
                "url": "https://twitter.com/bsdpunk"
            }]
        },
        "work": [{
            "name": "Company",
            "position": "President",
            "url": "https://company.com",
            "startDate": "2013-01-01",
            "endDate": "2014-01-01",
            "summary": "Description",
            "highlights": [
                "Started the company"
            ]
        }],
        "volunteer": [{
            "organization": "Organization",
            "position": "Volunteer",
            "url": "https://organization.com/",
            "startDate": "2012-01-01",
            "endDate": "2013-01-01",
            "summary": "Description",
            "highlights": [
                "Awarded 'Volunteer of the Month'"
            ]
        }],
        "education": [{
            "institution": "University",
            "url": "https://institution.com/",
            "area": "Software Development",
            "studyType": "Bachelor",
            "startDate": "2011-01-01",
            "endDate": "2013-01-01",
            "score": "4.0",
            "courses": [
                "DB1101 - Basic SQL"
            ]
        }],
        "awards": [{
            "title": "Award",
            "date": "2014-11-01",
            "awarder": "Company",
            "summary": "There is no spoon."
        }],
        "publications": [{
            "name": "Publication",
            "publisher": "Company",
            "releaseDate": "2014-10-01",
            "url": "https://publication.com",
            "summary": "Descriptionâ¦"
        }],
        "skills": [{
            "name": "Web Development",
            "level": "Master",
            "keywords": [
                "HTML",
                "CSS",
                "JavaScript"
            ]
        }],
        "languages": [{
            "language": "English",
            "fluency": "Native speaker"
        }],
        "interests": [{
            "name": "Wildlife",
            "keywords": [
                "Ferrets",
                "Unicorns"
            ]
        }],
        "references": [{
            "name": "Jane Doe",
            "reference": "Reference"
        }],
        "projects": [{
            "name": "Project",
            "description": "Description",
            "highlights": [
                "Won award at AIHacks 2016"
            ],
            "keywords": [
                "HTML"
            ],
            "startDate": "2019-01-01",
            "endDate": "2021-01-01",
            "url": "https://project.com/",
            "roles": [
                "Team Lead"
            ],
            "entity": "Entity",
            "type": "application"
        }]
    }

    let data = JSON.stringify(basics);
    fs.writeFileSync('basics.json', data);
    resume.basics = basics
    for (i = 0; i < res.length; i++) {
        if(!res[i]["Description"].endsWith(".")){
            res[i]["Description"] = res[i]["Description"] + "."
        }
        resume.work[i] = {
            "name": res[i]["Company Name"],
            "position":res[i]["Title"],
            "url": "",
            "startDate": res[i]["Started On"],
            "endDate": res[i]["Finished On"],
            "summary": res[i]["Description"],
            "highlights": [
                ""
            ]
        }

    }
    for (i = 0; i < hon.length; i++) {
        resume.awards[i] = {
            "title": hon[i]["Title"],
            "summary":hon[i]["Description"],
            "date": hon[i]["Issued On"]
           
        }

    }


    console.log(resume)

    let compile = JSON.stringify(resume);
    fs.writeFileSync('output/new.json', compile);
    fs.writeFileSync('output/resume.json', compile);
})
