import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{ name: 'friend 1', age: 11 },
		{ name: 'friend 2', age: 99 },
		{ name: 'friend 3', age: 33 },
		{ name: 'friend 4', age: 33 },
		{ name: 'friend 5', age: 33 },
		{ name: 'friend 6', age: 33 },
	];
	return (
		<FlatList
			keyExtractor={(friend) => friend.name}
			data={friends}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle} key={item.index}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50,
	},
});
export default ListScreen;
