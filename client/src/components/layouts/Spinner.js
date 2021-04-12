import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={SpinnerStyle}/>
        </Fragment>
    )
}

const SpinnerStyle = {
    width : '200px',
    margin : 'auto',
    display : 'block'
}

export default Spinner
