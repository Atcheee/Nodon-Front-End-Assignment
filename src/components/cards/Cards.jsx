import React from "react";
import GridCards from "./gridCards";
import ListCards from "./listCards";
import useFetch from "./fetch";
import "./cards.css";

function Cards({ view, searchTerm, sort }) {
  const {
    data: users,
    isPending,
    error,
  } = useFetch("https://randomuser.me/api/?results=50");

  let userData = [];

  function userListDesc() {
    for (let i = 0; i < users.results.length; i++) {
      userData.push(users.results[i]);
    }
    userData.sort((a, b) => a.name.first.localeCompare(b.name.first));
    return userData;
  }

  function userListAsc() {
    for (let i = 0; i < users.results.length; i++) {
      userData.push(users.results[i]);
    }
    userData.sort((a, b) => a.name.first.localeCompare(b.name.first));
    userData = userData.reverse();
    return userData;
  }

  if (sort === true) {
    userListAsc();
  } else if (sort === false) {
    userListDesc();
  }

  return (
    <div>
      {error && <h1> {error} </h1>}
      {isPending && (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      )}
      {users &&
        (view ? (
          <GridCards
            users={users}
            searchTerm={searchTerm}
            sort={sort}
            userData={userData}
          />
        ) : (
          <ListCards
            users={users}
            searchTerm={searchTerm}
            sort={sort}
            userData={userData}
          />
        ))}
    </div>
  );
}

//Repeated code used because I had problems with giving the rules for when which view should be shown.

export default Cards;
