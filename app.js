const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(3000, function(req,res){
  console.log("Server listening to post 3000");
});

let about_desc = "An enthusiastic and self-motivated coder and a recent graduate currently working as a software engineer for over an year. Diversified skills include web and android development with proven experience and I intent to use these skills for the betterment of the organization.";

let edu_desc = "I have received my education so far from the following institutions, along with the merits mentioned.";
let edu_ptr1 = "Bachelor of Engineering in Computer Science from BMS Institute of Technology & Management - 2014 to 2018 - with an aggregate of 80.32%";
let edu_ptr2 = "11th and 12th standard from CMR National Junior College - 2012 to 2014 - with an aggregate of 97% - college topper and state ranker";
let edu_ptr3 = "High shool from Ryan International School - until 2012 - with an aggregate of 90.2%";
let edu_ptr4 = "";

let exp_desc = "I am currently working as a Software Engineer at Temenos India Pvt Ltd. Previously, I had also completed my 5 months internship in the same company in June 2018.";
let exp_ptr1 = "Intern - 01/2018 to 05/2018";
let exp_ptr2 = "Software Engineer - 06/2018 to present";
let exp_ptr3 = "I belong to the development team and my tasks include the following:"
let exp_ptr4 = "Responsible for the delivery of the full software or the part of the project assigned, including its design, testing and documentation.Monitor and timely communicate the project status.Design the software according to the requirements and the specified test cases.Work effectively as a team. Active communication with other teams and verticals."

let skill_desc = "I have demonstrated experience and proficiency in the following domains:";
let skill_ptr1 = "C Programming & Object Oriented Programming: Java, C++, Python";
let skill_ptr2 = "Data structured and algorithms & Operating System";
let skill_ptr3 = "Full Stack Front-End Web Development: HTML5, CSS3, js, jQuery, JSON";
let skill_ptr4 = "Databases: SQL, MongoDB";


let cert_desc = "I have received certifications in the following courses:"
let cert_ptr1 = "<a href = 'https://www.udemy.com/certificate/UC-722SD104/'>The Complete 2019 Web Development Bootcamp</a>";
let cert_ptr2 = "<a href = 'https://www.udemy.com/certificate/UC-UV7PFQ0Q/'>Complete Python Bootcamp</a>";
let cert_ptr3 = "<a href = 'https://graduation.udacity.com/confirm/DT6DDLYD'>Android Basics Nanodegree by Google</a>";
let cert_ptr4 = "";
let cert_link1 = "https://www.udemy.com/certificate/UC-722SD104/";
let cert_desc1 = "The Complete 2019 Web Development Bootcamp";
let cert_link2 = "https://www.udemy.com/certificate/UC-UV7PFQ0Q/";
let cert_desc2 = "Complete Python Bootcamp";
let cert_link3 = "https://graduation.udacity.com/confirm/DT6DDLYD";
let cert_desc3 = "Android Basics Nanodegree by Google";

app.get("/",function(req,res){
  res.render("page",{desc:about_desc,
                     point1:"",
                     point2:"",
                     point3:"",
                     point4:"",
                     link1:"",
                     link2:"",
                     link3:"",
                     link_desc1:"",
                     link_desc2:"",
                     link_desc3:"",
                     pic:"profile.png"}
                   );
});

app.get("/education",function(req,res){
  res.render("page",{desc:edu_desc,
                     point1:edu_ptr1,
                     point2:edu_ptr2,
                     point3:edu_ptr3,
                     point4:edu_ptr4,
                     link1:"",
                     link2:"",
                     link3:"",
                     link_desc1:"",
                     link_desc2:"",
                     link_desc3:"",
                     pic:""});

});

app.get("/experience",function(req,res){
  res.render("page",{desc:exp_desc,
                     point1:exp_ptr1,
                     point2:exp_ptr2,
                     point3:exp_ptr3,
                     point4:exp_ptr4,
                     link1:"",
                     link2:"",
                     link3:"",
                     link_desc1:"",
                     link_desc2:"",
                     link_desc3:"",
                     pic:""});

});

app.get("/skills",function(req,res){
  res.render("page",{desc:skill_desc,
                     point1:skill_ptr1,
                     point2:skill_ptr2,
                     point3:skill_ptr3,
                     point4:skill_ptr4,
                     link1:"",
                     link2:"",
                     link3:"",
                     link_desc1:"",
                     link_desc2:"",
                     link_desc3:"",
                     pic:""});

});

app.get("/certificates",function(req,res){
  res.render("page",{desc:cert_desc,
                     point1:"",
                     point2:"",
                     point3:"",
                     point4:"",
                     link1:cert_link1,
                     link2:cert_link2,
                     link3:cert_link3,
                     link_desc1:cert_desc1,
                     link_desc2:cert_desc2,
                     link_desc3:cert_desc3,
                     pic:""});
});
