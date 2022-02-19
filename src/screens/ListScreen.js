import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{ name: 'friend 1' },
		{ name: 'friend 2' },
		{ name: 'friend 3' },
		{ name: 'friend 4' },
	];
	return (
		<FlatList
			data={friends}
			renderItem={({ item }) => {
				return <Text key={item.index}>{item.name}</Text>;
			}}
		/>
	);
};

export default ListScreen;
