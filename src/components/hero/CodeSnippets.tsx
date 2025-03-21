// src/components/hero/CodeSnippets.tsx

import React from 'react';

const CodeSnippets: React.FC = () => {
  return (
    <>
      <div className="absolute bottom-[15%] right-[5%] opacity-20 dark:opacity-10 text-gray-800 dark:text-gray-200 font-mono text-xs transform rotate-6">
        <pre>
          {`function Developer() {
  const skills = ["JavaScript", "React", "Node.js"];
  const passion = "Building amazing web experiences";
  
  return {
    code: () => console.log("Hello World!"),
    learn: (newSkill) => skills.push(newSkill),
    create: (idea) => buildProject(idea, passion)
  }
}`}
        </pre>
      </div>
      
      <div className="absolute top-[20%] left-[5%] opacity-20 dark:opacity-10 text-gray-800 dark:text-gray-200 font-mono text-xs transform -rotate-3">
        <pre>
          {`const Portfolio = {
  name: "Ramiro Vazquez",
  role: "Desarrollador Full Stack",
  skills: ["Frontend", "Backend", "DevOps"],
  contact: "ramagv23@gmail.com"
};`}
        </pre>
      </div>
    </>
  );
};

export default CodeSnippets; 
