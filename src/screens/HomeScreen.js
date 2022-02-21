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
			<Button
				title="Go to Image Demo"
				onPress={() => navigate('Image')}
			/>
			<Button
				title="Go to Counter Demo"
				onPress={() => navigate('Counter')}
			/>
			<Button
				title="Go to Color Demo"
				onPress={() => navigate('Color')}
			/>
			<Button
				title="Go to Square Demo"
				onPress={() => navigate('Square')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
