import { FriendListItem } from './friendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendList.protoTypes = {
  id: PropTypes.number.isRequired,
};
