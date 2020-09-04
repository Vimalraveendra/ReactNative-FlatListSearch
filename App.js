import React from 'react';

import {View, StyleSheet, FlatList, TextInput} from 'react-native';

import {ListItem, Avatar} from 'react-native-elements';

import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

const list = [
  {
    id: 1,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    id: 2,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    id: 3,
    name: 'Farha Amy',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Manager',
  },
  {
    id: 4,
    name: 'Sally John',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Team Lead',
  },
  {
    id: 5,
    name: 'Don Boss',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Team supervisor',
  },
  {
    id: 6,
    name: 'John Honnay',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Team manager',
  },
  {
    id: 7,
    name: 'Amy watson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Team Lead',
  },
  {
    id: 8,
    name: 'Shakira',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Quality analyst',
  },
  {
    id: 9,
    name: 'Ola',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Tester',
  },
  {
    id: 10,
    name: 'Stephan',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'senior programmer',
  },
  {
    id: 11,
    name: 'Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'senior programmer',
  },
  {
    id: 12,
    name: 'Allan Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'mid programmer',
  },
  {
    id: 13,
    name: 'Jack sta',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'mid programmer',
  },
  {
    id: 14,
    name: 'Briton',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Regular programmer',
  },
  {
    id: 15,
    name: 'Antony',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Regular programmer',
  },
  {
    id: 16,
    name: 'Maagda',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Junior programmer',
  },
  {
    id: 17,
    name: 'Karolina',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Junior programmer',
  },
];

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

const handleSearch = (text) => {
  console.log(text);
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Type Here..."
          style={styles.search}
          lightTheme
          round
          onChangeText={handleSearch}
        />
        <Icon name="search" size={24} color="grey" style={styles.icon} />
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={list}
        renderItem={renderItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
  searchBar: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
    height: 50,
    width: '100%',
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  search: {
    color: '#000',
    width: '90%',
  },
});

export default App;
