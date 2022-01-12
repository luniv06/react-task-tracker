import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({title, onButtonClick, showAdd}) => {
    // const onClick = () => {
    //     console.log('click');
    // }

    return (
        <div>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onButtonClick} />
        </div>
    )
}

// Header.defaultProps = {
//     title: 'Sup World',
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }

export default Header;
