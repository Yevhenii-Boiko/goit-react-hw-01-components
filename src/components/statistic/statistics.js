// import PropTypes from 'prop-types';
// import { StatsItem } from './statisticsItem';

export const Statistics = ({ items }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {items.map(data => (
          <li key={data.id}>
            <span>{data.label}</span>
            <span>{data.percentage}%</span>
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
