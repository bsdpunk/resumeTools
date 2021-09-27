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
csv2json Positions.csv
node first.js
node json2latex.js > resume.tex
pdflatex resume.tex
