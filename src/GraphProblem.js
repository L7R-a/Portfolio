import React from "react";
import OtherProjectDisplay from "./OtherProjectDisplay";


const GraphProblem = ({title, subtitle, githubLink, storyText, challenges, learningText,}) => {
    return(

        <OtherProjectDisplay
        title="Kruskal Algorithm In"
        subtitle="Rail Roads"
        githubLink="https://github.com/L7R-a/Kruskal-Algorithm-Graph-Problem"
        storyText={["This was my last assignment for my data structures and algorithms II class. The task was that a railroad system represented with weighted undirected graphs was given in another file and the goal was to make a Java class that scans that file and finds the path that connects all the vertices with the lowest weight using Kruskal's algorithm.",
"I consider this an important project as it served as an excellent preparatory exercise for my capstone project, which also involves working with graphs. The experience and skills gained from this assignment have been instrumental in advancing my understanding and application of graph algorithms."
        ]}
        challenges=
      {[
        {
          challenge: [
            "Create the disjoint set class and buildRailroad method."
          ],
          solution:[
            "Once I understood that in Kruskal algorithm the disjoint class was there to detect possible cycles and merge the vertices sets, I was able to implement that class and afterwards I knew how I needed to use it inside the buildRoad method."
          ]
        }
        
      ]}

        learningText={[
"The primary objective of this project was to get familiar with graphs by creating a class capable of storing edges and vertices to construct a graph data structure. Then using this structure as input for Kruskal's algorithm will determine the most efficient path with the lowest weight cost."
          
        ]}
      />
    );

};

export default GraphProblem