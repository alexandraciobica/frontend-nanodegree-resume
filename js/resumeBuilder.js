/*
This is empty on purpose! Your code to build the resume will go here.
 */


 // $("#main").append("Alexandra Ciobica");

 // var awsomeMe = "I am Lex and I am awsome!"
 // console.log(awsomeMe);


 // var funThoughts = awsomeMe.replace("awsome", "fun");

 //  $("#main").append(funThoughts);

// var name = "Alexandra Ciobica";
// var formattedName = HTMLheaderName.replace("%data%", name);
// $("#header").append(formattedName);

// var formattedRole = HTMLheaderRole.replace("%data%", "Front end developer");
// $("#header").append(formattedRole);

// var skills = ["skill1", "skill2"];
// var bio = {
// 	"name" : "Alexandra Ciobica",
// 	"role" : "Front End Developer",
// 	"contacts" : {
// 		"email" : "alexandraciobica@gmail.com",
// 		"phone_no" : "0720620033"
// 	},
// 	"pic_url" : "./images/lex.jpg",
// 	"welcome_msg" : "Heelo",
// 	"skills" : skills
// }

// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// $("#header").append(formattedName);

// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// $("#header").append(formattedRole);

// var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
// $("#header").append(formattedEmail);

// var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone_no);
// $("#header").append(formattedMobile);

// var formattedBioPic = HTMLbioPic.replace("%data%", bio.pic_url);
// $("#header").append(formattedBioPic);

// var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_msg);
// $("#header").append(formattedWelcomeMsg);

// var formattedSkills = HTMLskills.replace("%data%", bio.skills);
// $("#header").append(HTMLskillsStart).append(formattedSkills);


// bio.city = "Bucharest";

// $("#header").append(bio.city);





// var work = {};
// work.position = "Freelancer";
// work.employer = "Self";
// work.years = 1;

// var education = {};
// education["name"] = "University Politehnica of Bucharest";
// education["city"] = "Bucharest";
// education["years"] = "2013-2017";

var bio = {
	"name" : "Alexandra Ciobica",
	"role" : "Front End Developer",
	"contacts" : {
		"email" : "alexandraciobica@gmail.com",
		"phone_no" : "0720620033",
		"city" : "Bucharest"
	},
	"pic_url" : "./images/lex.jpg",
	"welcome_msg" : "Heelo",
	"skills" : ["skill1", "skill2"]
}

var work = {
	"jobs" :[
		{
			"position" : "Front end developer",
			"employer" : "self",
			"years" : 2,
			"description" : "I have developed websites and online shops for various clients. In plus, I have designed logos and product labels."
		},
		{
			"position" : "Junior Web Developer",
			"employer" : "Desix",
			"years" : 0.2,
			"description" : "Developed websites in Wordpress, built a custom theme from scratch and developed custom functions, menus and widgets."
		}
	]
}

var education = {
	"schools" : [

		{
			"name" : "University Politehnica of Bucharest",
			"city" : "Bucharest",
			"degree" : "BA",
			"major" : ["CS", "English"],
			"years" : "2013-2017"
		},
		{
			"name" : "University of Groningen",
			"city" : "Groningen",
			"degree" : "BA",
			"major" : ["CS", "English"],
			"years" : "2016-2017"

		}
	],
	"onlineCourses" : [
	{
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"date" : "Sept.2017",
		"url" : "https://classroom.udacity.com/courses/ud804"
	}

	]
}

var projects = {
	"projects" : [
		{
			"title" : "deTpression",
			"date" : "Feb 2017 - Jul 2017",
			"description" : "1st place at the biggest innovation competion in the world. Our system, deTpression, aids the doctors in treating depression by constantly monitoring the patient and predicting his depression severity. I have created the visual identity for deTpression, designed the logo, web interface, business cards, rollups and I have implemented the user interface and developed the interface backend for the web server.",
			"skills" : [ "Scala", "Play", "HTML/CSS", "JavaScript/jQuery", "Bootstrap", "WebSocket", "Illustrator", "Azure", "Linux VM"]	
		},
		{
			"title" : "PlayPin – Distributed Image Aggregator Application",
			"date" : "Sep 2016 - Nov 2016",
			"description" : "The application is a distributed image aggregator developed in Scala using the Play framework and Cassandra as storage. In our team project, I took responsibility for designing the user interface, which consists of a responsive, column-based layout. Using websockets, I developed the mechanism which displays the new images in real time.",
			"skills" : [ "Scala", "Play", "HTML/CSS", "JavaScript/jQuery", "Bootstrap", "WebSocket", "Illustrator", "Azure", "Linux VM"]		
		}
	]
	
}
// $("#main").append(work["position"]);
// $("#main").append(education.name);

