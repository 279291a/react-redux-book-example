import { PropTypes } from 'react';

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement:PropTypes.func.isRequired,
	onDecrement:PropTypes.func.isRequired,
}