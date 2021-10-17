import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import colors from "../config/colors";

function AppNumButton({ title, onPress, style }) {
    return (
        <TouchableHighlight underlayColor="#2f4f4f95" style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2f4f4f",
        borderRadius: 25,
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        padding: 15,
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})
export default AppNumButton;