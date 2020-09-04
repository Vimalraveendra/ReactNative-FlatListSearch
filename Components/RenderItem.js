import React from 'react';
import {ListItem, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

const renderItem = ({item}) => (
  <ListItem bottomDivider>
    <Avatar rounded source={{uri: item.avatar_url}} />
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
    </ListItem.Content>
    <Icon name="chevron-right" color="#eee" size={30} />
  </ListItem>
);

export default renderItem;
