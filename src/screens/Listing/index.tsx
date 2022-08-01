import React from 'react';
import { CardProps } from '../../components/Card';

import { Header, Card } from '../../components';

import {
  Container,
  Content,
  ListHorizontal,
  Title,
  ListVertical,
  AreaCard,
} from './styles';

export interface IdCardProps extends CardProps {
  id: string;
}

const Dashbord: React.FC = () => {
  const data: IdCardProps[] = [
    {
      id: '1',
      title: 'Title',
      description: 'Lorem Ipsum',
    },
    {
      id: '2',
      title: 'Title',
      description: 'Lorem Ipsum',
    },
    {
      id: '3',
      title: 'Title',
      description: 'Lorem Ipsum',
    },
    {
      id: '4',
      title: 'Title',
      description: 'Lorem Ipsum',
    },
    {
      id: '5',
      title: 'Title',
      description: 'Lorem Ipsum',
    },
  ];

  return (
    <Container>
      <Header title="Listagem" />

      <Content>
        <Title>Horizontal</Title>

        <ListHorizontal>
          <Card title="Title" description="Lorim Ipsum" />
          <Card title="Title" description="Lorim Ipsum" />
          <Card title="Title" description="Lorim Ipsum" />
          <Card title="Title" description="Lorim Ipsum" />
        </ListHorizontal>

        <Title>Vertical</Title>

        <ListVertical
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <AreaCard>
              <Card title={item.title} description={item.description} />
            </AreaCard>
          )}
        />
      </Content>
    </Container>
  );
};

export default Dashbord;
