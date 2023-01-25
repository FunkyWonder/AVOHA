import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { SelectList } from 'react-native-dropdown-select-list';
import Images from "../../variables/images";

export default function MobileWebScreen({ navigation }) {
	const [image, setImage] = useState();
	const [selected, setSelected] = useState();
	const [buttonText, setButtonText] = useState("Submit");
	var uriData = []

	useEffect(() => {
		setButtonText("Submit")
	}, []);
	
	const selection = [
		{key:'1',value:'Garantie Opdracht'},
		{key:'2',value:'Polis Blad'},
		{key:'3',value:'Rente Voorstel'},
		{key:'4',value:'Spaargeld'},
	]
	
	const selectImage = async () => {
		launchImageLibrary({mediaType:'photo',selectionLimit:5,allowsEditing:true,}, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker')
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button', response.customButton);
			} else {
				var x = 0;

				try {
					while (response.assets[x].uri != null) {
						uriData[x] = response.assets[x].uri;
						console.log(x);
						x = x + 1;
					}
				} catch (error) {
					console.log(error);
				}
			}
		})
	}

	function Submit() {
		var x = 0;
		
		if (selected == 1) {
			try {
				while (uriData[x] != null) {
					Images.GarantieOpdracht[x] = uriData[x];
					console.log(x);
					x = x + 1;
				}
			} catch (error) {
				console.log(error);
			}
		} else if (selected == 2) {
			try {
				while (uriData[x] != null) {
					Images.PolisBlad[x] = uriData[x];
					console.log(x);
					x = x + 1;
				}
			} catch (error) {
				console.log(error);
			}
		} else if (selected == 3) {
			try {
				while (uriData[x] != null) {
					Images.RenteVoorstel[x] = uriData[x];
					console.log(x);
					x = x + 1;
				}
			} catch (error) {
				console.log(error);
			}
		} else if (selected == 4) {
			try {
				while (uriData[x] != null) {
					Images.Spaargeld[x] = uriData[x];
					console.log(x);
					x = x + 1;
				}
			} catch (error) {
				console.log(error);
			}
		}

		console.log(Images.GarantieOpdracht)

		setButtonText("Submitted")
    };

	return (
	<View style={styles.container}>
		<SelectList 
			search={false}
			data={selection}
			setSelected={setSelected}
			boxStyles={{backgroundColor:'60949F'}}
			dropdownTextStyles={{color: '#fff'}}
			inputStyles={{color: '#fff'}}
		/>
		<Button color="#60949F" title="Select Images" onPress={selectImage}/>
		<Button color="#60949F" title={buttonText} onPress={Submit}/>
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
	},
});

