import React from "react";
import OtherProjectDisplay from "./OtherProjectDisplay";


const Schedules = ({title, subtitle, githubLink, storyText, challenges, learningText,}) => {
    return(

        <OtherProjectDisplay
        title="Object Oriented Programming"
        subtitle="College Schedule Management System"
        githubLink="https://github.com/L7R-a/Schedules"
        storyText={[
          "For my Object-Oriented Programming class, my group undertook a project to develop a scheduling program for a university. The program was designed to create schedules for both students and staff, which included generating IDs, adding or removing courses from their schedules, and printing the finalized schedules.",
          "The requirements were to have an abstract parent class that the students and faculties class would inherit from, be able to read the file with all the courses, verify that there are no schedule conflicts, and use and ArrayList to store all the members in one place to access them.",
          "This project was important for me, as it solidified my understanding of Object-Oriented Programming. The skills and knowledge I gained from this project have been very useful in my subsequent projects."
      ]}
      challenges=
      {[
        {
          challenge: [
            "Check conflicts if a student wanted to enroll in a lecture that they were a TA in the lab of that same lecture or viceversa."
          ],
          solution:[
            "Set up some variables and functions that checks what lecture, and labs the student is as well as check if they are a TA as well. Then, make a for loop that goes through all the lectures or labs of the student and then check if it finds that lab or lecture, depending on the case."
          ]
        }
        
      ]}
      // challenges={[
      //   "The biggest challenge was checking conflicts in the schedules because a student could be both a TA and a student, so it needs to check that the student is not a TA in one of the labs for that lecture, which takes some time to implement correctly. "
      // ]}
        
      learningText={["Implement the principles that an OOP language provides such as inheritance, abstraction, different accessible members, getters and setters, static classes, reading and writing input files, and used Java build in variables types and functions."
                    ]}/>
    );

};

export default Schedules