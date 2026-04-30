import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// Changed: improved layout. 04/30/2026

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.screen}>
      <View style={styles.mainContainer}>
        <View style={styles.profileCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/pfp.jpg')}
              style={styles.photo}
            />
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.name}>Eli Jiannee Caminero</Text>
            <Text style={styles.course}>Mobile Development</Text>
            <Text style={styles.bio}> A Multimedia student in section A302, who loves to create pretty visuals and explore her creativity. </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffe6f2',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#ff69b4',
    padding: 30,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#ff69b4',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#ffb3d9',
    borderRadius: 80,
    padding: 8,
    backgroundColor: '#fff5f8',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff1493',
    marginBottom: 8,
    textAlign: 'center',
  },
  course: {
    fontSize: 18,
    color: "#ff69b4",
    marginBottom: 12,
    textAlign: 'center',
    backgroundColor: '#fff0f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ffb3d9',
    fontWeight: '600',
  },
  bio: {
    fontSize: 16,
    color: "#ff1493",
    textAlign: 'center',
    lineHeight: 24,
    backgroundColor: '#fff5f8',
    padding: 16,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ffb3d9',
  },
});

export default App;
