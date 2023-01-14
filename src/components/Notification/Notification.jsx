import React from 'react';
import {Message} from './Notification.styled'

const Notification = ({ message }) => (
    <Message>{message}</Message>
);

export default Notification;