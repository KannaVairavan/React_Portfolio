import prj1 from "./../../img/TradifyGIFScroll.gif";
import prj2 from "./../../img/WD_3.PNG";
import prj3 from "./../../img/TechBlog.gif";
import prj4 from "./../../img/Curatio_Playlist.PNG";
import prj5 from "./../../img/TeamMember-Outputfile.png";
import prj6 from "./../../img/workoutTracker.gif";
import prj7 from "../../img/Road-Tripper.PNG";
import prj8 from "../../img/Book_Search.PNG";
const Projects=[
    {
      "id": 1,
      "category": 'Javascript',
      "title": "Tradify.IO",
      "image":prj1,
      "icon1":'Repo',
      "description": "Motivated by the recent financial revolution happening in US markets, our group develoed a tool that empowers investors of all types, levels, and interest. With Tradify, savvy investors who want to peer into the world of stocks, cryptocurrency, and foreign exchange markets, can access our platform to get up to the minute pricing data and insight in three financial markets in one tool, instead of having to use a separate tool for each.",
      "userstory":["Randomly render one featured stock price and 5 crypto currency prices",
                    "Display favorite stocks and currencies for quick reference",
                    "When the favorite button is clicked from the navigation bar the favorites modal will be displayed",
                    "Then the user can add their favorite stock or crytocurrency for quick reference",
                    "Favorite stocks and currencies are saved in local storage",
                    "Clear favorite stocks and cryptocurrencies",
                    "Search current stock price and cryptocurrency"],
      "features":["HTTP requests (using the Fetch API)","Event listener (onclick)","Object, function, array, for loop and if condition","Dynamically create new DOM elements","Local storage"],
      "deployed":"https://kannavairavan.github.io/Tradify.io/",
      "link1":"https://github.com/KannaVairavan/Tradify.io.git",
      

    },
    {
      "id": 2,
      "category": 'Javascript',
      "title": "Weather Dashboard",
      "image":prj2 ,
      "icon1":'Repo',
      "description": "Weather dashboard will run in the browser and feature dynamically updated HTML and CSS. ",
      "userstory": ["Search current and future weather conditions for that city.",
                    "UV index is presented with a color that indicates whether the conditions are favorable(green), moderate (yellow), or severe (red).",
                    "City is added to the search history.",
                    "User will be able to click on the search history list to view weather conditions",
                    "When weather dash board app is rendered it will present last search city forecast.",
                    "Clear history button will clear history.",
                    "When city name is not found in API it will present error text."],
      "features": " ",
      "deployed":"https://m-llo.github.io/weatherDashboard/",
      "link1":"https://github.com/m-llo/weatherDashboard"

    },
    {
      "id": 3,
      "category": 'Handlebars',
      "title": "Tech Blog",
      "image":prj3 ,
      "icon1":'Repo',
      "description": "In this CMS-style blog application developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure.",
                     "userstory": ["This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
                    "This site is deployed to Heroku.", "This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication."],
      "features": ["HTML5", "CSS", "JavaScript", "jQuery", "Node.js", "Express", "express-handlebars", "express-session", "handlebars", "bcrypt", "dotenv", "Sequelize", "connect-session-sequelize", "mysql2"],
      "deployed":"https://tranquil-beach-48394.herokuapp.com/",
      "link1":"https://github.com/KannaVairavan/Tech_Blog.git"

    },
    {
      "id": 4,
      "title": "CURATIO!",
      "category": 'Handlebars',
      "image":prj4,
      "icon1":'Repo',
      "description": "Curatio allows the users to create a youtube playlist. Users have the option to watch the playlist videos and take multiple notes. This format helps the user organize their many hobbies and the resources they need to complete their projects.",
      "userstory": " ",
      "features": ["Express.js", "Handlebars", "bcrypt", "Sequelize", "MySQL"],
      "deployed":"https://stormy-river-69253.herokuapp.com/",
      "link1":"https://github.com/m-llo/Project-2-Team-6"

    }
    ,
    {
      "id": 5,
      "title": "TeamProfileGenerator",
      "category": 'Javascript',
      "image":prj5,
      "icon1":'Repo',
      "description": "This application allows a user to create a team roster. This application uses node.js, fs, util and inquirer to create prompts for the user to fill out team members and their information. ",
      "userstory": " ",
      "features": ["node.js", "util", "fs", "jest ", "inquirer "],
      "deployed":"",
      "link1":"https://github.com/KannaVairavan/TeamProfileGenerator.git"

    }
    ,
    {
      "id": 6,
      "title": "Workout Tracker",
      "category": 'Express',
      "image":prj6,
      "icon1":'Repo',
      "description": "In this application user will be able to track their daily workouts with name, type, weight, sets, reps, distance and duration of exercise. Stats page will display chart with past seven workouts and total duration of each workouts. This application uses MongoDB Atlas connection.",
      "userstory": " ",
      "features": ["node.js", "Express", "mongoose", "morgan "],
      "deployed":"https://limitless-mountain-40875.herokuapp.com/",
      "link1":"https://github.com/KannaVairavan/Workout_Tracker.git"

    }
    ,
    {
      "id": 7,
      "title": "Road Trippers",
      "category": 'React',
      "image":prj7,
      "icon1":'Repo',
      "description": "This application renders information about local parks, restaurants, tourist attractions, RV parks, and much more near their desired destination. Logged in user can save their trip to dashboard.",
      "userstory": " ",
      "features": ["React JS", "Material UI (CSS)", "Road goat API", "Google places API", "Map GL", "MongoDB", "mongoose", "Axios", "JSON Web Token", "bcrypt", "Bootstrap"],
      "deployed":"https://enigmatic-taiga-76938.herokuapp.com/",
      "link1":"https://github.com/KannaVairavan/React_Employee_Directory.git"

    },
    {
      "id": 8,
      "title": "Book Search",
      "category": 'React',
      "image":prj8,
      "icon1":'Repo',
      "description": "This application uses React components, helper/util functions, and utilize React lifecycle methods to query and display books based on user searches.",
      "userstory": " ",
      "features": ["node.js", "Express", "mongoose", "React", "Axios", "Bootstrap"],
      "deployed":"https://peaceful-headland-84308.herokuapp.com/",
      "link1":"https://github.com/KannaVairavan/Books-Search.git"

    }
  ]

  export default Projects;