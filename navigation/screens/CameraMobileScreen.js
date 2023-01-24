import { Camera, CameraType } from 'expo-camera';
import { useState , useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions, Platform } from 'react-native';

export default function App() {
	// TODO: Improve camera resolution calculation
	//Camera Permissions
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	const [camera, setCamera] = useState(null);

	// Set screen ratio and padding
	const [imagePadding, setImagePadding] = useState(0);
	const [ratio, setRatio] = useState('4:3')
	const { height, width } = Dimensions.get('window');
	const screenRatio = height / width;
	const [isRatioSet, setIsRatioSet] = useState(false);

	useEffect(() => {
		async function getCameraStatus() {
			const { status } = await Camera.requestPermissionsAsync();
			setHasCameraPermission(status == 'granted');
		}
	}, []);
	
	const prepareRatio = async() => {
		let desiredRatio = '4:3'
	};
	
	const setCameraReady = async() => {
		if (!isRatioSet) {
			await prepareRatio();
		}
	}
	
	const [type, setType] = useState(CameraType.back);

	function toggleCameraType() {
		setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
	}

	if (hasCameraPermission === null) {
		return (
			<View style={styles.information}>
				<Text>Waiting for camera permissions</Text>
			</View>
			);
		} else if (hasCameraPermission === false) {
			return (
			<View style={styles.information}>
				<Text>No access to camera</Text>
			</View>
			);
		} else { 
			return (
			<View style={styles.container}>
				<Camera 
				style={[styles.cameraPreview, {marginTop: imagePadding, marginBottom: imagePadding}]}
				onCameraReady={setCameraReady}
				ratio={ratio}
				ref={(ref) => {
					setCamera(ref);
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

