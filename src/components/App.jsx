import { Profile } from './Profile/profile';
import user from './data/user.json';

import { Statistics } from './Statistic/statistics';
import data from './data/data.json';

import { FriendList } from './Friends/friendList';
import friends from '../components/data/friends.json';

import { TransactionHistory } from './Transactions/transactionHistory';
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
