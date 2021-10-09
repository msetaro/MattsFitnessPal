import React from "react";
import { StyleSheet } from "react-native";
import { shadow } from "react-native-paper";

// colors
export const colors = {
    navyBlue: '#071e42'
}

export const styles = StyleSheet.create({
    fab:{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: colors.navyBlue
    },
    addExerciseModal: {
        marginTop: 15,
        padding: 15,
        height: '50%'
    }
})