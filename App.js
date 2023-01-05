import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

export default function App() {
	const {width} = useWindowDimensions();
	const height = Math.round((width *16) / 9);
	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = Camera.useCameraPermissions();

	function toggleCameraType() {
		setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
	}
	
	return (
		<View style={styles.container}>
			<Camera 
			ratio="16:9"
			style={{
				height: height,
				width: "100%",
			}}
			type={type}
			>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={toggleCameraType}>
						<Text style={styles.text}>Flip Camera</Text>
					</TouchableOpacity>
				</View>
			</Camera>
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

