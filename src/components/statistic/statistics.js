// import PropTypes from 'prop-types';
// import { StatsItem } from './statisticsItem';

export const Statistics = ({ items }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {items.map(item => (
          <li key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// Statistics.PropTypes = {
//   title: PropTypes.string,
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string,
//   percentage: PropTypes.number,
// };
