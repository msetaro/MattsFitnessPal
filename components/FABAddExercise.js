import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FAB } from "react-native-paper";
import { styles, colors} from '../styles/styles';

export default function FABAddExercise() {
    return (
        <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => alert("pressed the fab")}
        />
    )
}