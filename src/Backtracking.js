import React from "react";
import OtherProjectDisplay from "./OtherProjectDisplay";


const Backtracking = ({title, subtitle, githubLink, storyText, challenges, learningText,}) => {
    return(

        <OtherProjectDisplay
        title="Backtracking Algorithm in"
        subtitle="Magic Maze"
        githubLink="https://github.com/L7R-a/Backtracking-Problem"
        storyText={[
          "This was one of my projects for my Data Structures and Algorithms 2 class. The goal is to find the exit path of a magic maze, where the maze is 2D char array represented by spaces to move (*), teleporting spots (numbers), walls (@), and the exit (X) and the algorithm must always start at the bottom right of the input",
          "The requirements for this project was to use HashMaps to store the teleporting destinations, apply backtracking, and make sure that the running time for all the test cases was less than 0,01 seconds.",
          "This project was important to me because it help me understand and apply better recursion algorithms that I would apply not only in backtracking but also in other algorithms as well."
        ]}
        challenges=
      {[
        {
          challenge: [
            "Make the algorithm pass all the test cases in less than 0,01 seconds."
          ],
          solution:[
            "After reviewing my code multiple times, I noticed that I was passing all test cases but I was taking seconds to solve them. That's when I noticed that my mistake was that at the end of each recursion before reutning false, I would set that position as not checked before in the algorithm, causing it to have to recheck it multiple unnecessary times."
          ]
        }
        
      ]}

        learningText={["The goal of this program was to further understand how backtraking works such as the exit condition, the logic check in, and the recursion step and it also made me understand in what scenarios are the one that I should use them. It also showed me how complex a recursion can get, making me think more carefully when I need to mark a position or unmark it."           
        ]}
      />
    );

};

export default Backtracking