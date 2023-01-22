import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions, PermissionsAndroid, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function HomeScreen({ navigation }) {
	// const { height, width } = Dimensions.get('window');
	// const [type, setType] = useState(CameraType.back);
	// const [imageUri, setImageUri] = useState(null);
	// const [permission, requestPermission] = Camera.useCameraPermissions();

	// function toggleCameraType() {
	// 	setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
	// }

	const [ cameraPhoto, setCameraPhoto ] = useState();

	let options = {
		mediaType: 'photo',
		cameraType: 'back',
	};

    function openCamera() {
		launchCamera(options);
    };
	
	return (
		<View style={styles.container}>
			<Button
				title="Navigate to test screen"
				onPress={() => navigation.navigate("Test")}
			/>
			
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={openCamera}>
					<Text style={styles.text}>Open Camera</Text>
				</TouchableOpacity>
				<Image style={styles.imageStyle} source={{uri: cameraPhoto}} />
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

