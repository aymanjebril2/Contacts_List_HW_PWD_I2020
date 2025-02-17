import React from "react";
import Main from "./Main";
import { results } from "../../data/contacts.json";

const Contact = () => {
  return (
    <div className="list">
      {results.map((peopleList) => {
        return <Main {...peopleList} />;
      })}
    </div>
  );
};

export default Contact;
