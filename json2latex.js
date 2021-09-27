
const fs = require('fs');
let rawdata = fs.readFileSync(new.json);  
let res = JSON.parse(rawdata);

console.log("\\documentclass[11pt,a4paper,sans]{moderncv}")
console.log("\\moderncvstyle{oldstyle}")
console.log("\\moderncvcolor{grey}")
console.log("\\usepackage[utf8]{inputenc}")
console.log("\\usepackage[scale=0.75]{geometry}")



//last replaced with space line below
console.log("\\name{" + res.basics.name + "}{}")
console.log("\\title{"+res.basics.label+"}")
console.log("\\phone[mobile]{"+res.basics.phone+"}")
console.log("\\email{"+res.basics.email+"}")
console.log("\\quote{"+res.basics.summary+"}")                                 
console.log("\\begin{document}")
console.log("\\makecvtitle")


//
//Education
//

console.log("\\section{Education}")
for (i = 0; i < res.education.length; i++) {
//Major and Location replaced with space below
    console.log(" \\cventry{"+ res.education[i]["startDate"] +"--"+ res.education[i]["endDate"] + "}{" + res.education[i]["area"]+"}{"+res.education[i]["institution"] + "}{}{\\textit{}}{}")
}

//
//Employment
//
console.log("\\section{Experience}")
console.log(" \\subsection{Vocational}")

for (i = 0; i < res.work.length; i++) {
//Location Replaced with a space, line below
    console.log(" \\cventry{"+ res.work[i]["startDate"] +"--"+ res.work[i]["endDate"] + "}{" + res.work[i]["position"]+"}{"+res.work[i]["name"] + "}{}{}{ Responsibilities: \\newline{}%")


    var descArr = res.work[i]["summary"].split(".")

    console.log(" \\begin{itemize}%")
    var descArr = res.work[i]["summary"].split(".")
    for (n = 0; n < descArr.length; n++) {

        if (descArr[n].length > 1){
            console.log(" \\item{"+ descArr[n]+".}")
        }
    }
    console.log(" \\end{itemize}}")
}

//
//Languages
//
//console.log("\\section{Languages}")
//for (i = 0; i < res.languages.length; i++) {

  //  console.log("\\cvitemwithcomment{"+res.languages[i]["name"]+"}{"+res.languages[i]["level"] +"}{"+res.languages[i]["comment"] +"}")
//}



//
//Certifications
//
//console.log("\\section{Certifications}")
//console.log("")

//for (i = 0; i < res.certifications.length; i++) {
//    console.log("\\cvlistitem{"+ res.certifications[i]["name"]+"}")
//}
console.log("\\end{document}")

