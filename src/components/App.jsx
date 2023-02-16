import { Profile } from './profile/profile';
import user from './data/user.json';

export const App = () => {
  return (
    <div>
      <Profile userData={user} />
    </div>
  );
};
