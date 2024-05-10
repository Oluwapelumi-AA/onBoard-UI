import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home page!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    color: colors.black,
  },
});

export default Home;
