import React from "react";
import OtherProjectDisplay from "./OtherProjectDisplay";


const PortfolioApp = ({title, subtitle, githubLink, storyText, challenges, learningText,}) => {
    return(

        <OtherProjectDisplay
        title="This is my"
        subtitle="Portfolio"
        githubLink="https://github.com/L7R-a/portfolio"
        storyText={["This project is the website is being displayed right now. The need of a website arised when I realized that I have many projects that are worth to show but everything I wanted to present were not in all in one place. For example, having the videos on Youtube, the source code on GitHub, and then providing some details in LinkedIn, I felt it was time to put everything together.",
        "That's why thanks to my previous experience in frontend, I knew that I had all what I needed to make this website from the beginning so I decided to make it myself, resulting in this website that accomplish it's goal. ",
        "Overall, this project was a challenge for me to see how much I am able to achieve independently in frontend and additionally a chance for me to reflect in all the projects that I have accomplished since started attending university."
      ]}
      challenges=
      {[
        {
          challenge: [
            "Displaying the pages with videos in a way that is convincing to me."
          ],
          solution:[
            "Since I wanted to make the pages to be consistent, not being too large, and also allowing the user to clearly read and see the video I had to think for a while the design of those pages. This solution, the one with the video on the left and the cards with a scroll bar on the right was a creative way to solve this issue in my point of view since I personally haven't seen other websites doing it like that."
          ]
        }
        
      ]}

      learningText={[
            "In this project I reinforced my knowledge in React and Bootstrap and learned how to deploy web applications in GitHub Pages.",
            " Additionally, something very useful that I learned was to efficiently implement and reuse my own components with parameters in projects, something that was very useful to make pages that are similar format but different text content.",
            " Lastly, I also learned that the best way to center a component is to make the display of the parent component be flex and then use the align and justify content center."
      ]}/>
    
    );

};

export default PortfolioApp