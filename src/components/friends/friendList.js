import { FriendListItem } from './friendListItem';

export const FriendList = ({ items }) => {
  return (
    <ul className="friend-list">
      {items.map(item => (
        <li key={item.id} className="item">
          <FriendListItem item={item} />
        </li>
      ))}
    </ul>
  );
};
