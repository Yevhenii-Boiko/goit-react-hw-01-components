import PropTypes from 'prop-types';
import {
  Wrap,
  TitleStats,
  StatList,
  StatsElement,
  Percent,
} from './statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Wrap>
      {title && <TitleStats>{title}</TitleStats>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatsElement key={id}>
            <span>{label}</span>
            <Percent>{percentage}%</Percent>
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
