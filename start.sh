#!/bin/bash - 
#===============================================================================
#
#          FILE: start.sh
# 
#         USAGE: ./start.sh 
# 
#   DESCRIPTION: 
# 
#       OPTIONS: ---
#  REQUIREMENTS: ---
#          BUGS: ---
#         NOTES: ---
#        AUTHOR: YOUR NAME (), 
#  ORGANIZATION: 
#       CREATED: 09/27/21 21:59
#      REVISION:  ---
#===============================================================================

set -o nounset                              # Treat unset variables as an error
mkdir -p output
echo "Where is your Positions.csv file?"
echo "This is a csv either exported from linkedin or HandCreated"
echo "Example CSV:"
echo "Company Name,Title,Description,Location,Started On,Finished On"
echo "Freelance,Web Developer,\"A lot of personal projects, and some telecom projects with various individuals PHP Development with propel. ( Symfony Compent) Node.js development  jQuery Development Perl Development\",,Sep 2013,Sep 2014"

echo "Example Location:"
echo "/home/dusty/Download/Positions.csv"
echo "or"
echo "Positions.csv"
read POS
csv2json $POS > output/Positions.json
echo "Where is your Honors.csv file?"
echo "This is a csv either exported from linkedin or HandCreated"
echo "Example CSV:"

echo "Title,Description,Issued On"
echo "Information Technology Award Recipient,This is given to one student of each graduating class for excellence in their particular field.,"


echo "Example Location:"
echo "/home/dusty/Download/Honors.csv"
echo "or"
echo "Honors.csv"
read HON
csv2json $HON > output/Honors.json

echo "Where is your Skills.csv file?"
echo "This is a csv either exported from linkedin or HandCreated"
echo "Example CSV:"

echo "Name"
echo "Linux"


echo "Example Location:"
echo "/home/dusty/Download/Skills.csv"
echo "or"
echo "Skills.csv"
read SKI
csv2json $SKI > output/Skills.json

node first.js
node json2latex.js > output/resume.tex
pdflatex --output-directory=output output/resume.tex
