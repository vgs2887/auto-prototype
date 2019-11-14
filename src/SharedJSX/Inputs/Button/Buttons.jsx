import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';


const Btn = props => {
    const {
       id,
       children,variant
        } = props;
   
    return (
        <Button
            id={id} variant={variant}>
    {children}
        </Button>
    );
};

Btn.propTypes = {
   
    id: PropTypes.string,
    variant:PropTypes.string,
    children: PropTypes.node.isRequired
};
Btn.defaultProps = {
    
    id: '',

};
export default Btn;