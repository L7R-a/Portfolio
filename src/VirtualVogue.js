import React from "react";
import ProjectDisplay from "./ProjectDisplay";

const VirtualVogue = () => {
  return (
    <ProjectDisplay
      title="MERN Stack Project"
      subtitle="Virtual Vogue"
      videoSrc="https://www.youtube.com/embed/s_qUowyU_Ac"
      githubLink="https://github.com/L7R-a/virtual-vogue"
      storyText={["This was my final group project for my Processes for Object-Oriented Software Development class. It is  virtual closet website and mobile MERN app where users create accounts and then they upload pictures of their clothing to the website and then can make outfits with them.",
                  "My role in this project was primarily doing the frontend of the website, and additionally, I also collaborated doing the APIs used to send email verification and reset passwords. Aside from that, I also consider that I was the project manager of the website portion of the project, always talking with other teammates and making sure everything was on track.",
                  "The requirements for the application were that it needed to have a backend with the user's accounts and images, have a domain that is not deployed locally, and be able to send emails to verify accounts and reset passwords. Unfortunately, I was not in charge of the deployment part of the project and the project can't be deployed or used now.",
                  "I believe this project was an important experience, as it was the first project that I would use React and Bootstrap, and thanks to this project, I got the confidence to do future websites like my portfolio."
      ]}
      const learningText = {[
        {
          title: "Frameworks",
          details: [
            "React.js",
            "Bootstrap",
            "Node.js"
          ]
        },
        {
          title: "Design",
          details: [
            "Utilized Bootstrap components and classes",
            "Created a Figma prototype",
            "Collaborated with a team in the design",
            "Designed an original logo for the project"
          ]
        },
        {
          title: "Technical",
          details: [
            "Worked in a MERN stack development",
            "Used GitHub as source control",
            "Called API endpoints",
            "Sent email to users",
            "Used useStates and useEffect",
            "Displayed images dynamically"
          ]
        },
        {
          title: "Features",
          details: [
            "Create an account and log in",
            "Verify emails",
            "Upload clothing pictures to a database",
            "Display all the user's images",
            "Create outfits with the clothing displayed",
            "Give names to the outfits",
            "Reset password and change personal information",
            "Sort the clothing by type",
            "Remove background of images"
          ]
        },
      ]}
    challenges={[
      {
        title: "Remove image's background",
        challenge: [
          "We wanted to instantly remove the clothing's background, however, with the way we implemented it, it was taking around a minute or two. "
        ],
        solution:[
          "We decided to allow the user to choose if they want to remove the background or not, letting them know it would take some time."
        ]
      },
      {
        title: "Making the outfits",
        challenge: [
          "Single clothing images had a unique id that identifies that image, however, for the outfits, we couldn't do the same thing since one outfit would have 2 ids which was not possible for an image to have"
        ],
        solution:[
          "Backend created an object that would store two ids along with APIs to request and update those objects' data. In the other hand, the frontend used one of those APIs to create the objects with the ids and then used the other API to fetch the objects."
        ]
      },
      {
        title: "Sending emails",
        challenge: [
        "Trying to send emails to users only using the frontend side",
],
        solution:[
          "After discovering that for security reasons frontend can't send emails, I decided to use the third party npm module NodeMailer inside the backend to send the emails"
        ]
      },


    ]}
// challenges={[
// ]}

    />
  );
};

export default VirtualVogue;
