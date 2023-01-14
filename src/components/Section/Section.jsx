import React from 'react';
import { Container, Title } from './Section.styled'

const Section = ({ title, children}) => (
    <Container>
        <Title>{title}</Title>
        {children}
    </Container>

);

export default Section;