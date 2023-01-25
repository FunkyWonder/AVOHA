import { useState , useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions, Platform } from 'react-native';

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>This is the homescreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#102E44',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
	}
});

