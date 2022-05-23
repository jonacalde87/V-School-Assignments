import React from "react";
import PropTypes from 'prop-types'

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}

//to specify the default data type for props
Card.propTypes = {
    cardColor: PropTypes.string.isRequired, // cardColor will always be a string
    // cardColor: PropTypes.oneOf(['blue', 'red']).isRequired, //color needs to be red or blue
    height: PropTypes.number.isRequired,
    width: PropTypes.number
}

//for default props value, can still override the value
Card.defaultProps = {
   
    height: 100,
    width: 100
}

export default Card
