import React, { useState, useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const setColor = (color, change) => {
		switch (color) {
			case 'red':
				red + change > 255 || red + change < 0
					? null
					: setRed(red + change);
				break;
			case 'green':
				green + change > 255 || green + change < 0
					? null
					: setGreen(green + change);
				break;
			case 'blue':
				blue + change > 255 || blue + change < 0
					? null
					: setBlue(blue + change);
				break;
			default:
				break;
		}
	};

	return (
		<View>
			<ColorCounter
				color="Red"
				onMore={() => setColor('red', COLOR_INCREMENT)}
				onLess={() => setColor('red', -1 * COLOR_INCREMENT)}
			/>
			<ColorCounter
				color="Green"
				onMore={() => setColor('green', COLOR_INCREMENT)}
				onLess={() => setColor('green', -1 * COLOR_INCREMENT)}
			/>
			<ColorCounter
				color="Blue"
				onMore={() => setColor('blue', COLOR_INCREMENT)}
				onLess={() => setColor('blue', -1 * COLOR_INCREMENT)}
			/>
			<View
				style={{
					width: 150,
					height: 150,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
				}}
			></View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
