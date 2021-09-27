# resumeTools


## Requirements:
node [required]
<br />
pdflatex [to build resume]
<br />
csv2json [To convert Linkedin export Positions.csv to json]
<br />
node_module: inquirer [For command line prompthing of basic info]
<br />
Positions.csv [Either create your own csv or export from linkedin]
<br />


## To start from scratch and end in Resume

```
./start.sh
```

## To just build resume.json
```
git clone https://github.com/bsdpunk/resumeTools
cd resumeTools
mkdir -p output
csv2json $YOUR_POSITIONS_CSV > output/Positions.json
npm install inquirer
npm install package.json
node first.sh
```

## Position.csv


This is a csv either exported from linkedin or Hand Created
Example CSV: <br />
```
Company Name,Title,Description,Location,Started On,Finished On <br />
Freelance,Web Developer,"A lot of personal projects, and some telecom projects with various individuals PHP Development with propel. ( Symfony Compent) Node.js development  jQuery Development Perl Development",,Sep 2013,Sep 2014
```
<br />

## Resume.json

resume.json will reside in output/resume.json

## Known Problems

Unusual Charachters in companies name, may cause pdflatex to break, as well as control characters, extra long Descriptions, or No Descriptions.
# resumeTools
