import React from "react";
import OtherProjectDisplay from "./OtherProjectDisplay";


const PantryPal = ({title, subtitle, githubLink, storyText, challenges, learningText, websiteLink}) => {
    return(

        <OtherProjectDisplay
        title="Hackathon App"
        subtitle="PantryPal"
        githubLink="https://github.com/L7R-a/PantryPal"
        storyText={[
          "This project was inspired by participating in the Knight Hacks VII hackathon at UCF. During the event, we considered many potential options, but we decided to go with the idea of a pantry app that would help people to keep track of their groceries and help them to find recipes with the ingredients they have soon to expire. The main reason for this was that we noticed that not so many people have addressed this issue, and we thought it would be a good idea to help people to save money and reduce food waste.",
          "PantryPal's development was very interesting because of the 36 hours time constraints, the in-person coding environment, and also the new technologies that we decided to work with. More in detail, for the frontend in addition to React, I was attempting to use Firebase for the logging system and my teammate was trying to use Django for the first time in the backend. Setting up these two features took us more time than what it should have, making us be running out of time. Because of that, the project barely met the Minimun Viable Product set by the team but we still presented it to the judges. ",
          "Despite the challenges, we thoroughly enjoyed the event and the rush of adrenaline it brought. It was a fantastic opportunity to meet new people, explore new technologies, and have fun. I’m excited about participating in similar events in the future. Ultimately, one of my teammates continued developing the application, and it is now fully functional and available for use as intended."        
        ]}

      challenges={[
        {
          title: "Disagreement on Development Tools",
          challenge: [
            "Some of us wanted to use techonologies that we were used to and others wanted to use new technologies that we didn't know how to use."
          ],
          solution:[
            "We decided to use new technologies that we didn't know how to use and consider the event more as an opportunity to learn new technologies rather than competing for a prize."
          ]

        },
        {
          title: "Firebase",
            challenge: [
              "Firebase didn't work as expected. The login page was always showing errors.",
            ],
            solution:[
              "Instead of using Firebase directly, we decided to just use the Firebase Emulator, which we managed to get it to work.",
            ],
          },
          {
            title: "Time Management",
            challenge: [
              "We were spending many hours on features that weren't worth the time."
            ],
            solution:[
              "We took a break from those features and instead focus on creating and integrating the main features."
            ]
  
          },
          {
            title: "Integration",
            challenge: [
              "The frontend wasn't able to call API endpoints succesfully from the backend."
            ],
            solution:[
              "Instead of calling the API with fetch() method we used the axios library, which made it work."
            ]
          }
        
      ]}
      websiteLink="https://www.pantrypal.design/"
      learningText={[ 
        //  "In the end, we didn't win any prizes, but we learned a lot about the importance of time management, the importance of having a plan B, and the importance of knowing the technologies that we are going to use before the event. We also learned that we should have focused on the main features of the app and not on the secondary features that we wanted to implement."
"Ultimately, we learned the importance of having a backup plan in advance, as it could have saved us valuable time. We also gained insights into effective time management, particularly the need to set clear timelines to avoid spending excessive time on individual tasks. While exploring new technologies was exciting, we realized the importance of prioritizing the core features of the project before focusing on secondary, albeit intriguing, enhancements. Additionally, we recognized the value of coming better prepared to such events, with a well-defined plan and all necessary tools set up beforehand. Lastly, we developed a deeper understanding of teamwork—how to support one another, debug each other’s code, and collaborate effectively under tight deadlines."







      ]}/>
                  );

};

export default PantryPal