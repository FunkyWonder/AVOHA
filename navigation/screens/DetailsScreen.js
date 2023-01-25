import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import Images from "../../variables/images";
import ImageComponent from "../../components/ImageComponent"

export default function DetailsScreen({ navigation }) {
	const [garantieOpdrachtItems, setGarantieOpdrachtItems] = useState([])
	const [polisBladItems, setPolisBladItems] = useState([])
	const [renteVoorstelItems, setRenteVoorstelItems] = useState([])
	const [spaargeldItems, setSpaargeldItems] = useState([])
	
	if (Images.GarantieOpdracht != null) {
		try {
			var x = 0;
			
			while (Images.GarantieOpdracht[x] != null) {
				garantieOpdrachtItems[x] = Images.GarantieOpdracht[x];
				console.log(x);
				x = x + 1;
			}
		} catch (error) {
			console.log(error);
		}
	}

	if (Images.PolisBlad != null) {
		try {
			var x = 0;
			
			while (Images.PolisBlad[x] != null) {
				polisBladItems[x] = Images.PolisBlad[x];
				console.log(x);
				x = x + 1;
			}
		} catch (error) {
			console.log(error);
		}
	}

	if (Images.RenteVoorstel != null)
	{
		try {
			var x = 0;
			
			while (Images.RenteVoorstel[x] != null) {
				renteVoorstelItems[x] = Images.RenteVoorstel[x];
				console.log(x);
				x = x + 1;
			}
		} catch (error) {
			console.log(error);
		}
	}

	if (Images.Spaargeld != null) {
		try {
			var x = 0;
			
			while (Images.Spaargeld[x] != null) {
				spaargeldItems[x] = Images.Spaargeld[x];
				console.log(x);
				x = x + 1;
			}
		} catch (error) {
			console.log(error);
		}
	}
	
	return (
		<View style={{flexDirection: 'column', backgroundColor: '#102E44'}}>
			<View style={{flexDirection: 'row'}}>
				{
					Images.GarantieOpdracht === null ? null : garantieOpdrachtItems.map((image, index) => {
						return (
							<ImageComponent size={150} uri={image}>Garantie Opdracht Foto: {index}</ImageComponent>
						)
					})
				}
			</View>
			<View style={{flexDirection: 'row', backgroundColor: '#102E44'}}>
				{
					Images.PolisBlad === null ? null : polisBladItems.map((image, index) => {
						return (
							<ImageComponent size={150} uri={image}>Polis Blad Foto: {index}</ImageComponent>
						)
					})
				}
			</View>
			<View style={{flexDirection: 'row', backgroundColor: '#102E44'}}>
				{
					Images.RenteVoorstel === null ? null : renteVoorstelItems.map((image, index) => {
						return (
							<ImageComponent size={150} uri={image}>Rente Voorstel Foto: {index}</ImageComponent>
						)
					})
				}
			</View>
			<View style={{flexDirection: 'row', backgroundColor: '#102E44'}}>
				{
					Images.Spaargeld === null ? null : spaargeldItems.map((image, index) => {
						return (
							<ImageComponent size={150} uri={image}>Spaargeld Foto: {index}</ImageComponent>
						)
					})
				}
			</View>
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

