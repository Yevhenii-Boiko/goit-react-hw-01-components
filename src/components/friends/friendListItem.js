import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div>
      <span className="status">{isOnline ? 'isOnline' : 'offLine'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
