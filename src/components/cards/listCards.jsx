import "./cards.css";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

const ListCards = ({ users, searchTerm, sort, userData }) => {
  return (
    <div className="userList">
      <div className="listGrid-cardList">
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
              className="listGrid-cards"
              key={
                sort !== true && sort !== false
                  ? users.login.uuid
                  : userData[arrNumber].login.uuid
              }
            >
              <div className="listGrid-leftCard">
                <div className="listGrid-profile-pic-container">
                  <div className="listGrid-profile-picture"></div>
                </div>
              </div>
              <div className="profile-pictures">
                <img
                  src={
                    sort !== true && sort !== false
                      ? users.picture.medium
                      : userData[arrNumber].picture.medium
                  }
                  alt="User Profile Pic"
                />
              </div>
              <div className="listGrid-rightCard">
                <div>
                  <h4>
                    {sort !== true && sort !== false
                      ? users.name.first + " " + users.name.last
                      : userData[arrNumber].name.first +
                        " " +
                        userData[arrNumber].name.last}
                  </h4>
                  <p>
                    {sort !== true && sort !== false
                      ? users.location.city
                      : userData[arrNumber].location.city}
                  </p>
                </div>
                <div className="listGrid-icons">
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

export default ListCards;
