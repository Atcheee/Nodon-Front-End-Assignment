import "./cards.css";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

const GridCards = ({ users, searchTerm, sort, userData }) => {
  return (
    <div className="userList">
      <div className="cardList">
        {users.results
          .filter((users) => {
            if (searchTerm === "") {
              return users;
            } else if (
              users.name.first.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return users;
            }
          })
          .map((users, arrNumber) => (
            <div
              className="cards"
              key={
                sort !== true && sort !== false
                  ? users.login.uuid
                  : userData[arrNumber].login.uuid
              }
            >
              <div className="upperCard">
                <h4>
                  {sort !== true && sort !== false
                    ? users.name.first + " " + users.name.last
                    : userData[arrNumber].name.first +
                      " " +
                      userData[arrNumber].name.last}
                </h4>
                <div className="profile-pic-container">
                  <div className="profile-picture">
                    <img
                      src={
                        sort !== true && sort !== false
                          ? users.picture.medium
                          : userData[arrNumber].picture.medium
                      }
                      alt="Users Profile Pic"
                    />
                  </div>
                </div>
              </div>
              <div className="bottomCard">
                <p>
                  {sort !== true && sort !== false
                    ? users.location.city
                    : userData[arrNumber].location.city}
                </p>
                <div className="icons">
                  <FiMail />
                  <FiPhoneCall />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridCards;
