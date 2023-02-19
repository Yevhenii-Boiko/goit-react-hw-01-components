import { Profile } from './profile/profile';
import user from './data/user.json';

import { Statistics } from './statistic/statistics';
import data from './data/data.json';

import { Friends } from './friends/friendList';
import friends from '../components/data/friends.json';

import { TransactionHistory } from './transactions/transactionHistory';
import transactions from '../components/data/transactions.json';

import { GlobalStyles } from './GlobalStyled';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyles />
      <Profile userData={user} />
      <Statistics items={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
