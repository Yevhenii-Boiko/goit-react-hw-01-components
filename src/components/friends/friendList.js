import { FriendListItem } from './friendListItem';
import PropTypes from 'prop-types';
import { FriendList } from './friendList.styled';

export const Friends = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendList>
  );
};

FriendList.protoTypes = {
  id: PropTypes.number.isRequired,
};
