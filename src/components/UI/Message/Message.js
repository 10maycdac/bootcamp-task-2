import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types';

const Message = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.show)
    }, [props.show]);

    if (show) {
        return (
            <Alert variant="info" onClose={props.showHandler} dismissible>
                <Alert.Heading>{props.msg}</Alert.Heading>
            </Alert>
        );
    }
    return (<React.Fragment></React.Fragment>);
};

// Message.propTypes = {
//     msg: PropTypes.string.isRequired
// };

export default Message;
