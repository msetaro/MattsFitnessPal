import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import FABAddExercise from '../../components/FABAddExercise';
import { styles, colors} from '../../styles/styles'

export default function Legs({ navigation }) {

    
    return (
        <>
            <Text>What day is it?</Text>
            <FABAddExercise />
        </>
    )
}