import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Code Craftsman", "System Orchestrator","Automation Architect", "API Alchemist" , "Full-Stack Visionary", "Pipeline Engineer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
