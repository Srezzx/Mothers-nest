import React from "react";
import TeamCard from "./TeamCard";
const Team = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
      <TeamCard
        name={"SREZZ"}
        message={"Hello i am sriesh here"}
        image='sriesh.svg'
      />{" "}
      <TeamCard
        name={"SREZZ"}
        message={"Hello i am sriesh here"}
        image='sriesh.svg'
      />{" "}
      <TeamCard
        name={"SREZZ"}
        message={"Hello i am sriesh here"}
        image='sriesh.svg'
      />{" "}
      <TeamCard
        name={"SREZZ"}
        message={"Hello i am sriesh here"}
        image='sriesh.svg'
      />
    </div>
  );
};

export default Team;
