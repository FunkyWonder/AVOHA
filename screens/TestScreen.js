import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

export default function HomeScreen({ navigation }) {
	
	return (
		<View style={styles.container}>
			<Button
				title="Navigate to home screen"
				onPress={() => navigation.navigate("Home")}
			/>
			
			<View style={styles.buttonContainer}>
				<Text>
					This is an test
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

