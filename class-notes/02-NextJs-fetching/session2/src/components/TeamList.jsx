import React from "react";
import TeamItem from "./TeamItem";

const TeamList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        <TeamItem key={user.id} {...user} />;
      })}
    </ul>
  );
};

export default TeamList;
