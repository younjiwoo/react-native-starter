import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	const { navigate } = navigation;
	return (
		<View>
			<Text style={styles.text}>Hi there! :)</Text>
			<Button
				onPress={() => navigate('Components')}
				title="Go to Components Demo"
			/>
			<Button title="Go to List Demo" onPress={() => navigate('List')} />
			{/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
				<Text>Go to List Demo</Text>
			</TouchableOpacity> */}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
