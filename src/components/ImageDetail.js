import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetail = ({ title, imageSrc, score }) => {
	return (
		<View>
			<Image source={imageSrc} />
			<Text>{title}</Text>
			<Text>Image Score - {score}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;
