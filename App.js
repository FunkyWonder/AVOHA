import * as React from 'react';
import MainContainer from './navigation/MainContainer';

// const Stack = createNativeStackNavigator();

// <NavigationContainer>
// 			<Stack.Navigator>
// 				<Stack.Screen
// 					name="Home"
// 					component={HomeScreen}
// 					options={{headerShown: false}}
// 				/>
// 				<Stack.Screen
// 					name="Test"
// 					component={TestScreen}
// 					options={{headerShown: false}}
// 				/>
// 			</Stack.Navigator>
// 		</NavigationContainer>

export default function App() {
	return (
		<MainContainer/>
	);
}

