import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css['button-box']}>
            {options.map(([option, setOption]) => 
                <button type='button' key={option} onClick={() => onLeaveFeedback(setOption)}>{option}</button>
            )}
        </div>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options:PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.oneOfType([
                    PropTypes.string.isRequired,
                    PropTypes.func.isRequired,
                ])
            )
        ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}