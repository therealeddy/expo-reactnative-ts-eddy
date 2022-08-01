import React from 'react';

import { Container, Title } from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
