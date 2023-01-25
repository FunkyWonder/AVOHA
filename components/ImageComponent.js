import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ImageComponent = ({size, children, uri}) => {
    return(
        <View style={styles.container}>
            <Image 
                style={{height: size, width: size}}
                source={{uri:uri}}
            />
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default ImageComponent

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

