import PropTypes from 'prop-types';
import {
  Card,
  Info,
  Image,
  Title,
  Description,
  StatsList,
  ListItem,
  StatsValue,
} from './profile.styled';

export const Profile = ({
  userData: {
    username,
    avatar,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => (
  <Card>
    <Info>
      <Image src={avatar} alt={username} className="avatar" />
      <Title>{username}</Title>
      <Description>{tag}</Description>
      <Description>{location}</Description>
    </Info>

    <StatsList>
      <ListItem>
        <span className="label">Followers</span>
        <StatsValue>{followers}</StatsValue>
      </ListItem>
      <ListItem>
        <span className="label">Views</span>
        <StatsValue>{views}</StatsValue>
      </ListItem>
      <ListItem>
        <span className="label">Likes</span>
        <StatsValue>{likes}</StatsValue>
      </ListItem>
    </StatsList>
  </Card>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
