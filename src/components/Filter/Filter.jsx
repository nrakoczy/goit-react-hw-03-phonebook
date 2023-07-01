import css from 'components/Filter/Filter.module.css';
import PropTypes from 'prop-types';


const Filter = ({ value, onChange }) => (
    <div>
        <label className={css.labelFilter}>Find contacts by name</label>

        <input
            className={css.inputFilter}
            type="text"
            value={value}
            onChange={onChange}
        />
    </div>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;