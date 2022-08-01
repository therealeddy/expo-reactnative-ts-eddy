import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { IdCardProps } from '.';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 20px;
  padding-bottom: 0;
  flex: 1;
`;

export const AreaCard = styled.View`
  margin-bottom: 20px;
`;

export const ListHorizontal = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  height: ${RFValue(180)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 16px;
`;

export const ListVertical = styled(
  FlatList as new (props: FlatListProps<IdCardProps>) => FlatList<IdCardProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: getBottomSpace() },
})``;
