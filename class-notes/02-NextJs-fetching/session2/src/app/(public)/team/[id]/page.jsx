import React from "react";
import { getUsersDetail } from "../../../../helpers/apiFunctions";

const UserDetail = async ({ params }) => {
  const id = params.id;

  const person = await getUsersDetail(id);
  return (
    <div className="text-center">
      <h1 className="text-2xl">{person.name}</h1>
    </div>
  );
};

export default UserDetail;
