import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import CustomButton from "./componentes/CustomButton";

export default function App() {
	const [resultText, setResultText] = useState("0");

	const handleBtnClick = (text: string) => {
		if (resultText === "0") {
			setResultText(text);
		} else {
			setResultText((prev) => `${prev}${text}`);
		}
	};

	const handleEvaluetion = () => {
		try {
			setResultText(eval(resultText));
		} catch (error) {
			Alert.alert("Error", "Unexpected end of input");
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" animated={true} backgroundColor="#efefef" />

			<View style={styles.resultContainer}>
				<Text style={styles.resultText}>{resultText}</Text>
			</View>

			<View style={styles.btnContainer}>
				<CustomButton onPress={handleBtnClick}>7</CustomButton>
				<CustomButton onPress={handleBtnClick}>8</CustomButton>
				<CustomButton onPress={handleBtnClick}>9</CustomButton>
				<CustomButton onPress={handleBtnClick}>/</CustomButton>
			</View>
			<View style={styles.btnContainer}>
				<CustomButton onPress={handleBtnClick}>4</CustomButton>
				<CustomButton onPress={handleBtnClick}>5</CustomButton>
				<CustomButton onPress={handleBtnClick}>6</CustomButton>
				<CustomButton onPress={handleBtnClick}>*</CustomButton>
			</View>
			<View style={styles.btnContainer}>
				<CustomButton onPress={handleBtnClick}>1</CustomButton>
				<CustomButton onPress={handleBtnClick}>2</CustomButton>
				<CustomButton onPress={handleBtnClick}>3</CustomButton>
				<CustomButton onPress={handleBtnClick}>-</CustomButton>
			</View>
			<View style={styles.btnContainer}>
				<CustomButton onPress={handleBtnClick}>0</CustomButton>
				<CustomButton onPress={handleBtnClick}>.</CustomButton>
				<CustomButton onPress={handleBtnClick}>+</CustomButton>
				<CustomButton
					onPress={handleEvaluetion}
					styles={{ backgroundColor: "red" }}
					textStyle={{ color: "white" }}
				>
					=
				</CustomButton>
			</View>
			<Button
				title="clear"
				onPress={() => {
					setResultText("0");
				}}
				color="#1f2933"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		marginTop: 30,
	},
	resultContainer: {
		backgroundColor: "#1f2933",
		paddingVertical: 25,
		paddingHorizontal: 15,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		height: "30%",
	},
	resultText: {
		color: "white",
		fontSize: 26,
	},
	btnContainer: {
		flexDirection: "row",
		flex: 1,
	},
});
