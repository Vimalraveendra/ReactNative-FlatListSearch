import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
import renderItem from './Components/RenderItem';
import listData from './Components/DataList';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState(listData);
  const [text, setText] = useState('');

  const handleSearch = (text) => setText(text);

  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase()),
  );
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
        <Icon name="search" size={24} style={styles.icon} />
      </View>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#bad555"
          style={styles.loading}
        />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={filteredList}
          renderItem={renderItem}
          style={styles.list}
        />
      )}
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
  },
});

export default App;
