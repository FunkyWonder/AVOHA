import { useState , useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions, Platform } from 'react-native';

export default function HomeScreen({navigation}) {
	return (
		<View style={styles.information}>
			<Text>This is the homescreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	information: { 
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: '#000',
		justifyContent: 'center'
	},
	cameraPreview: {
		flex: 1,
	}
});

