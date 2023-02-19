import PropTypes from 'prop-types';
import {
  Wrap,
  TitleStats,
  StatList,
  StatsElement,
  Percent,
} from './statistics.styled';

export const Statistics = ({ items }) => {
  return (
    <Wrap>
      <TitleStats>Upload stats</TitleStats>

      <StatList>
        {items.map(item => (
          <StatsElement key={item.id}>
            <span>{item.label}</span>
            <Percent>{item.percentage}%</Percent>
          </StatsElement>
        ))}
      </StatList>
    </Wrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
