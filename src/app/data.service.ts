export class DataService {
    getName() {
        return "Kushagra Kasliwal";
    }
    getProfession() {
        return "Software Engineer"
    }
    getLinkedInUrl() {
      return "https://www.linkedin.com/in/kushagra-kasliwal-a5b188158/";
    }
    getHackerrankUrl() {
      return "https://www.hackerrank.com/kushagrakasliwa1";
    }
    getGithubUrl() {
      return "https://github.com/KushagraK123";
    }
    getCourses() {
      return [
        {
          "id":1,
          "isActive":true,
          "title" :"Problem Solving Advanced",
        "titleImage":"/assets/courses/hackerrank.jpeg",
        "description" : "This covers topics like Data Structures such as Trees, Graph Traversal, using Dynamic Programming and Specialized Algorithms",
        "courseLink" : "https://www.hackerrank.com/certificates/802a24538a6d"
      }, 

      {
        "id":2,
        "isActive":true,
        "title" :"Machine Learning A-Z",
      "titleImage":"/assets/courses/udemy.jpeg",
      "description" : "In this course I learnt building robust Machine Learning model using python and handling specific topics like Reinforcement Learning, NLP and Deep Learning",
      "courseLink" : "https://www.udemy.com/certificate/UC-9WD21G3C/"
    }, 
      {
        "id":3,
        "isActive":true,
        "title" :"Java Intermediate",
      "titleImage":"/assets/courses/hackerrank.jpeg",
      "description" : "This covers topics like Multithreading in Java, Working with Networking in Java, and Collections and Serialization.",
      "courseLink" : "https://www.hackerrank.com/certificates/32919b504c32"
    }, 
    
      {
          "id":4,
          "isActive":true,
          "title" :"Data Analysis and Visualization",
          "titleImage":"/assets/courses/udemy.jpeg",
          "description" : "In this course I learnt about numpy library to create and manipulate arrays, pandas module to create and structure data and creating data visualizations using matplotlib with python.",
          "courseLink" : "https://www.udemy.com/certificate/UC-ZJ63EA6Q/"
    }
    
    ];
 
    }
    getAbout() {
        return "I am a Software Developer with a strong passion for improvement, and good problem solving skills, strong hold on data-structures and algorithms and always ready to learn. ";
    }
    getExperiences() {
        return [
            {
              "id":1,
              "isActive":true,
              "companyName" :"Tata Consultancy Servies, Bengaluru, India",
              "year" : "August 2020 - Current",
              "jobTitle" : "Full Stack Developer",
              "description" : ["Angular8, SpringBoot MySQL"],
              "companyWebsite" : "https://www.tcs.com"
          },
            {
              "id":2,
              "isActive":true,
              "companyName" :"GetBasis Technologies, Bengaluru, India",
              "year" : "January 2020 - August 2020",
              "jobTitle" : "Android Developer Intern",
              "description" : ["* Added several features on Basis Android App to increase user engagement","* Added analytics on all the existing features to extract meaningful data from user activity.","* Quality analyzed Basis Android App and Web App to make sure they are bug and defect free.","* Technologies used:- MvRx Architecture by Airbnb (MVVM), Koin, Retrofit, Epoxy, Firebase, Kotlin"],
              "companyWebsite" : "https://www.getbasis.co"
          },
          {
            "id":3,
            "isActive":true,
            "companyName" :"Tata Consultancy Servies, Mumbai, India",
            "year" : "June 2019 - July 2019",
            "jobTitle" : "Software Developer Intern",
            "description" : ["* Created a model for local stores price comparison application.","* Worked on front-end of a banking website using Angular 7."],
            "companyWebsite" : "https://www.tcs.com"
        }
        ];
    }
    
    //education
    getEducations() {
        return [
            {
              "id":1,
              "isActive":true,
              "collegeName" :"SGGSIE&T, Nanded",
            "year" : "August 2016 - October 2020",
            "courseName" : "B.Tech in Information Technology",
            "description" : "A government aided autonomous institute, where I learnt basics and fundamentals of Software Engineering.",
            "grade": "7.86 CPGA"
          }
        ];
    }

    //skills
    getSkills() {
        return  ["Spring Boot", "Android Development", "Angular", "Java", "Python", "C++", "HTML/CSS", "Bootstrap", "Javascript"];
    }

    getProjectWithId(id:number) {
      return this.getProjects().filter (
        project=> project.id === id
      )[0];
    }

    getProjects() {
      return [
          {
            "id":1,
            "isActive":true,
            "title" :"Reminder Android Application",
          "technologiesUsed" : ["Android Studio", "Java", "SQLLite Database"],
          "titleImage":"/assets/projects/reminder/title.png",
          "screenshots" : ["/assets/projects/reminder/ss1.png","/assets/projects/reminder/ss2.png","/assets/projects/reminder/ss3.png","/assets/projects/reminder/ss4.png"],
          "description" : "It is a very easy to use Reminder app, which will never let you miss a event."
        }, 
        {
          "id":2,
          "isActive":true,
          "title" :"Bouncy Ball Android Game",
        "technologiesUsed" : ["Unity3D Studio", "C#"],
        "titleImage":"/assets/projects/bouncyball/title.png",
        "screenshots" : ["/assets/projects/bouncyball/ss1.jpg","/assets/projects/bouncyball/ss2.jpg","/assets/projects/bouncyball/ss3.jpg","/assets/projects/bouncyball/ss4.jpg"],
        "description" : "An endless arcade game where players need to drag their finger on the screen and jump on the tiles to bounce around in space and make sure you don't fall off the edge."
      }, 
        {
        "id":3,
        "isActive":true,
        "title" :"Currency Convertor Android Application",
      "technologiesUsed" : ["Android Studio", "Java"],
      "titleImage":"/assets/projects/currencyconvertor/title.png",
      "screenshots" : ["/assets/projects/currencyconvertor/ss1.jpg","/assets/projects/currencyconvertor/ss2.jpg"],
      "description" : "Convert any currency with live exchange rates. Supports currencies for every country including the dollar, rupee, euro, pound, yen, yuan, won, franc, ruble, dinar, peso, rupee, shilling, rial, kwacha, dirham, florin, guinea, krona, krone, riyal, colon, som, leu, virtual currencies like Bitcoin, plus precious metals like gold, silver."
        }
      
      ];
    }

    getAchievements() {
      return [
          {
            "id":1,
            "isActive":true,
            "year" : "27 February 2019",
            "title" : "'Code is less’ programming competition",
            "description" : "Secured 2nd prize in ‘Code is less’ programming competition held by Pragyaa (A national level Technical Fiesta)."
        },
          {
            "id":2,
            "isActive":true,
            "year" : "17 March 2018",
            "title" : "‘C Brain’ programming competition",
            "description" : "Secured 3rd prize in ‘C Brain’ programming competition held by Pragyaa (A national level Technical Fiesta)."
          }
      ];
  }

}