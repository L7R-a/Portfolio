import React from "react";
import ProjectDisplay from "./ProjectDisplay";

const OnlineMultiplayer = () => {
  return (
    <ProjectDisplay
      title="Full Stack Project"
      subtitle="Guitar Enthusiast"
      videoSrc="https://www.youtube.com/embed/Ao-ZM-PEm6Q"
      githubLink="https://github.com/L7R-a/Guitar-Enthusiastic"
      storyText={[
                  "This project, full stack application, was the first time I did a complete full stack app by myself. This application uses MySQL, Express.js, and React.js as the key components and it was deployed on Microsoft Azure.",
                  "The main idea of this project arised when I decided it was time to apply everything that I have learned so far in my previous full stack applications and make one by myself with no help or restrictions. I decided to make this particular project because I play the guitar and sometimes some songs that I want to learn how to play are not there, so I thought it would be a good idea to make an application similar to StackOverflow where people can upload and request their own songs and tabs.",
                  "Completing this project made me realize how much I have learned in the past year and how much I still have to learn. I had to learn how to use Azure, how to make a MySQL database, and how to use Express.js. I had the theory of these features in my previous projects but not the practice until now. Definitely this is one of the projects that I am the most proud about.",]}
      const learningText = {[
                    {
                      title: "Backend",
                      details: [
                        "Created a MySQL database",
                        "Used Express.js to handle the API requests",
                        "Deployed the backend on Azure",
                        "Documented the API endpoints",
                        "Used Postman to test the API endpoints",
                        "Used Mocha and Chai to test the API endpoints"
                      ]
                    },
                    {
                      title: "Frontend",
                      details: [
                        "Improved my skills using Prime React components",
                        "Deployed the frontend on Azure using a static web app",
                        "Strengthened my skills using React.js and its hooks",
                        "Used Jest to test the frontend",
                        "Applied good practices and used many reusable components"
                      ]
                    },
                    {
                      title: "Microsoft Azure",
                      details: [
                        "Learned how to deploy a MySQL database",
                        "Deployed a backend on Azure",
                        "Deployed a frontend on Azure",
                        "Leanred about scaling, managing, and monitoring the services",
                        "Used Virtual Machines and App Services"
                      ]
                    },
                    {
                      title: "Code Review",
                      details: [
                        "Learned the importance of code review with another professional developer",
                        "Express my ideas and thoughts in a clear and concise way",
                        "Learned how to receive feedback",  
                      ]
                    },
                  ]}
      challenges={[
        {
          title: "Preparing the project for deployment",
          challenge: [
            "Initially, I did plan to use Heroku to deploy the backend and the frontend, but in my code review my partner encouraged me to try cloud services instead. Trying to deploy a completed fullstack application to Azure was challening because there are so many features and resources that its hard to know what to do, consuming many hours trying to find the right solution.",
          ],
          solution:[
            "In the end, using an Azure MySQL database for my database, an App Service for my backend, and a Static Web App for my frontend was the best solution."
        ]
        },
        {
            title: "Testing",
            challenge: [
                "This is another feature that I decided to implement after my coding review. Since I didn't prepare my project for testing, it took me a while to do all testings, understand their errors, and fix either the test cases or the code.",
            ],
            solution:[
                "After getting the first test cases to work, I started to understand the flow of testing which is getting the component or route, make a mock scenario, then put whats the expected result. "
          ]
        },
        {
            title: "Storing PDFs",
            challenge: [
                "Sending and receiving PDFs was challenging because I had to convert the PDF to a base64 string and then store it in the database. The same way for the frontend, I had to convert the base64 string to a PDF and display it.",
            ],
            solution:[
                "To display the PDFs, I only allowed users to download the PDFs, not display them in the browser. This was the best solution because it was the easiest and fastest way to implement it."
            ]
        }
      ]}
      showKnownBugs = {false}
      websiteLink="https://white-desert-019157d0f.5.azurestaticapps.net/"
    />
  );
};

export default OnlineMultiplayer;
