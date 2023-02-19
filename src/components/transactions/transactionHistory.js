import PropTypes from 'prop-types';
import {
  Table,
  Headers,
  Header,
  Rows,
  ItemsRow,
} from './transactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Headers>
        <tr>
          <Header>Type</Header>
          <Header>Amount</Header>
          <Header>Currency</Header>
        </tr>
      </Headers>

      <tbody>
        {items.map(item => (
          <Rows key={item.id}>
            <ItemsRow>{item.type}</ItemsRow>
            <ItemsRow>{item.amount}</ItemsRow>
            <ItemsRow>{item.currency}</ItemsRow>
          </Rows>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
