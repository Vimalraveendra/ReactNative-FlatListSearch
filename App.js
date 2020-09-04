import React, {useState} from 'react';

import {View, StyleSheet, FlatList, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
import renderItem from './Components/RenderItem';
import listData from './Components/DataList';

const App = () => {
  const [list, setList] = useState(listData);
  const handleSearch = (text) => {
    console.log(text);
    if (text === '') {
      setList(listData);
    } else {
      const filteredList = list.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
      setList(filteredList);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search Here..."
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
    width: '90%',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
