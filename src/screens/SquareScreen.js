import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
	const updatedNumber = state[action.type] + action.payload;

	return updatedNumber > 255 || updatedNumber < 0
		? state
		: {
				...state,
				[action.type]: state[action.type] + action.payload,
		  };

	// switch (action.type) {
	// 	case 'red':
	// 		return { ...state, red: state.red + action.payload };

	// 	case 'green':
	// 		return { ...state, green: state.green + action.payload };

	// 	case 'blue':
	// 		return { ...state, blue: state.blue + action.payload };

	// 	default:
	// 		return state;
	// }
};

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, {
		red: 0,
		green: 0,
		blue: 0,
	});

	const { red, green, blue } = state;

	return (
		<View>
			<ColorCounter
				color="Red"
				onIncrease={() =>
					dispatch({ type: 'red', payload: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({
						type: 'red',
						payload: -1 * COLOR_INCREMENT,
					})
				}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() =>
					dispatch({
						type: 'green',
						payload: COLOR_INCREMENT,
					})
				}
				onDecrease={() =>
					dispatch({
						type: 'green',
						payload: -1 * COLOR_INCREMENT,
					})
				}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() =>
					dispatch({ type: 'blue', payload: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({
						type: 'blue',
						payload: -1 * COLOR_INCREMENT,
					})
				}
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
