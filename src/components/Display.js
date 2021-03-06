import propTypes from 'prop-types';

function Display({ result }) {
  return (
    <div className="display">{result}</div>
  );
}

Display.propTypes = {
  result: propTypes.string,
};

Display.defaultProps = { result: '0' };

export default Display;
