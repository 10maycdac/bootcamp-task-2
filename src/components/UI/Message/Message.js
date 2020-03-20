import React, {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types';

const Message = ({ msg }) => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="info" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{msg}</Alert.Heading>
            </Alert>
        );
    }
};

Message.propTypes = {
    msg: PropTypes.string.isRequired
};

export default Message;
