import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
	const name = 'Younji';
	return (
		<View>
			<Text style={styles.textStyle}>
				Getting started with react native!
			</Text>
			<Text style={styles.smallTextStyle}>My name is {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45,
	},
	smallTextStyle: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
