import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  return (
    <View style={styles.screen}>
      <View style={styles.cornerTopLeft} />
      <View style={styles.cornerBottomRight} />

      <Image
        source={require('../../assets/images/pfp.jpg')}
        style={styles.photo}
        contentFit="cover"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {name !== '' && (
        <Text style={styles.greeting}>Hello, {name}!</Text>
      )}

      {name !== '' && (
        <Text style={styles.tapMessage}>
          {name}, you tapped {count} times!
        </Text>
      )}

      <View style={styles.card}>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCount(count > 0 ? count - 1 : 0)}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCount(0)}>
          <Text style={styles.resetText}>RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe6f2',
    padding: 20,
  },
  cornerTopLeft: {
    position: 'absolute',
    top: 30,
    bottom: 30,
    left: 10,
    width: 0,
    borderLeftWidth: 4,
    borderColor: '#ff4da6',
  },
  cornerBottomRight: {
    position: 'absolute',
    top: 30,
    bottom: 30,
    right: 10,
    width: 0,
    borderRightWidth: 4,
    borderColor: '#ff4da6',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#ff8dc7',
    borderRadius: 14,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  greeting: {
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  tapMessage: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  card: {
    width: '90%',
    backgroundColor: '#ff4da6',
    borderWidth: 2,
    borderColor: '#ff8dc7',
    borderStyle: 'dashed',
    borderRadius: 18,
    paddingVertical: 10,
    alignItems: 'center',
    gap: 4,
  },
  btnText: {
    fontSize: 22,
    color: '#fff',
    paddingVertical: 4,
  },
  resetText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 4,
    letterSpacing: 1,
  },
});