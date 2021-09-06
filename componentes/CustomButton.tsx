import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = (props: any) => {
	return (
		<TouchableOpacity
			style={{ ...styles.buttonContainer, ...props.styles }}
			onPress={() => props.onPress(props.children)}
		>
			<Text style={{ ...styles.buttonText, ...props.textStyle }}>
				{props.children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		backgroundColor: "#e4e7ec",
		borderWidth: 1,
		borderColor: "rgba(0,0,0,0.2)",
		height: "100%",
		width: "25%",
		justifyContent: "center",
	},
	buttonText: {
		fontSize: 25,
		textAlign: "center",
	},
});

export default CustomButton;
