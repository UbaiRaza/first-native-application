import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const NavBarScreen = () => {
//   React.useEffect(() => {
//     // Load custom fonts
//     Font.loadAsync({
//       'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
//     });
//   }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.logo}>Awesome App</Text>
        <View style={styles.navLinks}>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="home-outline" size={24} color="#333" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="information-circle-outline" size={24} color="#333" />
            <Text style={styles.navText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="calendar-outline" size={24} color="#333" />
            <Text style={styles.navText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="time-outline" size={24} color="#333" />
            <Text style={styles.navText}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="mail-outline" size={24} color="#333" />
            <Text style={styles.navText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        {/* Your main content goes here */}
        <Text style={styles.heading}>Welcome to Awesome App!</Text>
        <Text style={styles.subheading}>Explore and enjoy our amazing features.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    fontFamily: 'montserrat-bold',
    fontSize: 24,
    color: '#333',
  },
  navLinks: {
    flexDirection: 'row',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  navText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: 'montserrat-bold',
    fontSize: 28,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
});

export default NavBarScreen;
