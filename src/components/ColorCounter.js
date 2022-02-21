import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorCounter = ({ color, onMore, onLess }) => {
	return (
		<View>
			<Text>{color}</Text>
			<Button onPress={onMore} title={`More ${color}`} />
			<Button onPress={onLess} title={`Less ${color}`} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ColorCounter;
