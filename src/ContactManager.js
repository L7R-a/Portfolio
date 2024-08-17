import React from "react";
import ProjectDisplay from "./ProjectDisplay";

const ContactManager = () => {
  return (
    <ProjectDisplay
      title="LAMP Stack Project"
      subtitle="UCF Contact Manager"
      videoSrc="https://www.youtube.com/embed/68KBiRLyuuo"
      githubLink="https://github.com/L7R-a/LAMP-Stack-project"
      storyText={["This was the first website that I have created and it was for a group project in my Processes for Object-Oriented Software Development class. It is a LAMP stack contact manager website with the theme of my university where users can create their accounts, and also search, add, and remove contacts.",
                  "My role in this project was doing the frontend side of the website using HTML, CSS, and JavaScript. I did not have any experience in frontend before, but none of my teamates had neither and we needed someone to do the frontend, so I volunteered in doing it, having to learn how to do it and then implement it.",
                  "The requirements for this website was that it had to be deployed and have backend that allow users to store their contacts. Unfortunately, I was not in charge of deploying this project and so now it is not possible to access it.",
                  "This project gave me an idea of how current websites are developed and also prepared me for my next project that I would use React and Bootstrap."
      ]}
      const learningText = {[
        {
          title: "Programming Languages",
          details: [
            "JavaScript",
            "HTML",
            "CSS"
          ]
        },
        {
          title: "Technical",
          details: [
            "Worked in a LAMP stack development",
            "Used GitHub as source control",
            "Called API endpoints",            
            "Updated the size of the contacts table dynamically"
          ]
        },
        {
          title: "Features",
          details: [
            "Create an account and log in",
            "Add contacts",
            "Search contacts",
            "Delete contacts",
            "Update contacts"
          ]
        },
      ]}
    challenges={[
      {
        title: "Debugging",
        challenge: [
         "Everybody in the group were new doing their roles, so when a new bug arised in the frontend, we were uncertain weather it was an backend or frontend problem"
    ],
        solution:[
          "Overall, some problems were in the frontend as well as in the backend. The backend had to start doing a better documentation while the frontend understand better how to call APIs"
        ]
      },
      {
        title: "Contacts table",
        challenge: [
          "Having the size of the table change dynamically was causing it to produce some unwanted behaviors such as extending the page if the table had too many contacts "
        ],
        solution:[
          "The best approach was to make the table to be scrollable after having certain height."
        ]
      },
      


    ]}
      showDownloadButton={false} 
    />
  );
};

export default ContactManager;
