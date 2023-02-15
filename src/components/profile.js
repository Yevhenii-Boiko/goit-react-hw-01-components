import PropTypes from 'prop-types';
import user from '../user.json';

export const Profile = () => (
  <div className="profile">
    <div className="description">
      <img src={user.avatar} alt={user.username} className="avatar" />
      <p className="name">{user.username}</p>
      <p className="tag">{user.tag}</p>
      <p className="location">{user.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{user.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{user.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.PropType = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
