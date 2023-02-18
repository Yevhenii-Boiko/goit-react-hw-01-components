import { Profile } from './profile/profile';
import user from './data/user.json';

import { Statistics } from './statistic/statistics';
import data from './data/data.json';

import { FriendList } from './friends/friendList';
import friends from '../components/data/friends.json';

import { TransactionHistory } from './transactions/transactionHistory';
import transactions from '../components/data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile userData={user} />
      <Statistics items={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
