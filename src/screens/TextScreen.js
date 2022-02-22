import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
	const [password, setPassword] = useState('');

	return (
		<View>
			<Text>Enter Password:</Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={(val) => setPassword(val)}
			/>
			{password.length < 5 && (
				<Text>Password must be longer than 5 characters.</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		padding: 10,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
	},
});

export default TextScreen;
