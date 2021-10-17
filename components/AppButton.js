import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import colors from "../config/colors";

function AppButton({ title, onPress, ...otherprops }) {
    return (
        <TouchableHighlight underlayColor={colors.medium} style={[styles.button, { ...otherprops }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    button: {
        // backgroundColor: colors.primary,
        borderRadius: 25,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginVertical: 15
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})
export default AppButton;