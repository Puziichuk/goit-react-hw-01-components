import React from "react";
import PropTypes from "prop-types";
const FriendList = ({ friends }) => (
  <ul>
    {friends.map((friend) => (
      <li key={friend.id}>
        <span></span>
        <img src={friend.avatar} alt="" width="48" />
        <p>{friend.name}</p>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
