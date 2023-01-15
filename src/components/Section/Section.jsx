import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled'

const Section = ({ title, children}) => (
    <Container>
        <Title>{title}</Title>
        {children}
    </Container>

);

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired,
}