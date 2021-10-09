import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal, View, ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/native'
import { FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';
import { CheckBox, Input, Button, Text } from 'react-native-elements';
import { FAB } from "react-native-paper";
import { styles, colors } from '../styles/styles';

export default function FABAddExercise() {
    const [visible, setVisible] = useState(false);

    // buttons
    const [smallChecked, setSmallChecked] = useState(false);
    const [medChecked, setMedChecked] = useState(false);
    const [largeChecked, setLargeChecked] = useState(false);
    const [thirtyChecked, setThirtyChecked] = useState(false);
    const [fortyChecked, setFortyChecked] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    }
    
    // toggles for weight buttons
    const toggleSmall = () => {
        setSmallChecked(!smallChecked);
    }
    const toggleMed = () => {
        setMedChecked(!medChecked);
    }
    const toggleLarge = () => {
        setLargeChecked(!largeChecked);
    }
    const toggleThirty = () => {
        setThirtyChecked(!thirtyChecked);
    }
    const toggleForty = () => {
        setFortyChecked(!fortyChecked);
    }

    return (
        <>
            <Modal
                visible={visible}
                presentationStyle="pageSheet"
                onRequestClose={toggleOverlay}
                animationType='slide'
                keyboardShouldPersistTaps='always'
            >
                <ScrollView style={styles.addExerciseModal}>

                    {/* Order and Name container */}
                    <View style={{ flexDirection: 'row' }}>
                        {/* Order */}
                        <View style={{flex: 1}}>
                            <Input
                                keyboardType='number-pad'
                                label="Order"
                            />
                        </View>
                        
                        {/* Name */}
                        <View style={{flex: 4}}>
                            <Input
                                label="Exercise name"
                            />
                        </View>
                    </View>
                    
                    {/* Sets and Reps container */}
                    <View style={{ flexDirection: 'row' }}>
                        {/* Sets */}
                        <View style={{flex: 1}}>
                            <Input
                                style={{}}
                                keyboardType='number-pad'
                                label="Sets"
                            />
                        </View>

                        {/* Reps */}
                        <View style={{flex: 1}}>
                            <Input
                                style={{}}
                                keyboardType='number-pad'
                                label="Reps"
                            />
                        </View>
                    </View>
                    
                    {/* Weight */}
                    <View style={{ alignItems: 'center', paddingTop: 10 }}>
                        {/* Header */}
                        <Text h3 style={{color: colors.navyBlue}}>Weight</Text>
                        
                        {/* Buttons */}
                        <View style={{ flexDirection: 'row', alignItems: 'baseline', paddingTop: 10 }}>
                            {/* Small */}
                            <CheckBox onPress={toggleSmall} checked={smallChecked} size={15} checkedColor={colors.navyBlue} uncheckedColor={colors.navyBlue} checkedIcon={<MaterialCommunityIcons name='circle' size={15} color={ colors.navyBlue }/>} uncheckedIcon={<MaterialCommunityIcons name='circle-outline' size={15} color={ colors.navyBlue }/>} />
                            
                            {/* Med */}
                            <CheckBox onPress={toggleMed} checked={medChecked} size={25} checkedColor={colors.navyBlue} uncheckedColor={colors.navyBlue} checkedIcon={<MaterialCommunityIcons name='circle' size={25} color={ colors.navyBlue }/>} uncheckedIcon={<MaterialCommunityIcons name='circle-outline' size={25} color={ colors.navyBlue }/>} />
                            
                            {/* Large */}
                            <CheckBox onPress={toggleLarge} checked={largeChecked} size={35} checkedColor={colors.navyBlue} uncheckedColor={colors.navyBlue} checkedIcon={<MaterialCommunityIcons name='circle' size={35} color={ colors.navyBlue }/>} uncheckedIcon={<MaterialCommunityIcons name='circle-outline' size={35} color={ colors.navyBlue }/>} />
                            
                            {/* 30 */}
                            <View>
                                <CheckBox onPress={toggleThirty} checked={thirtyChecked} size={40} checkedColor={colors.navyBlue} uncheckedColor={colors.navyBlue} checkedIcon={<MaterialCommunityIcons name='hexagon' size={40} color={ colors.navyBlue }/>} uncheckedIcon={<MaterialCommunityIcons name='hexagon-outline' size={40} color={ colors.navyBlue }/>} />
                                <Text style={{ marginLeft: 32, marginTop: -15, paddingBottom: 15, color: colors.navyBlue}}>30</Text>
                            </View>

                            {/* 40 */}
                            <View>
                                <CheckBox onPress={toggleForty} checked={fortyChecked} size={40} checkedIcon={<MaterialCommunityIcons name='octagon' size={40} color={ colors.navyBlue }/>} uncheckedIcon={<MaterialCommunityIcons name='octagon-outline' size={40} color={ colors.navyBlue }/>} />
                                <Text style={{ marginLeft: 32, marginTop: -15, color: colors.navyBlue }}>40</Text>
                            </View>
                        </View>
                    </View>
                    
                    <Button title="Add Exercise" onPress={toggleOverlay} buttonStyle={{backgroundColor: colors.navyBlue}} style={{paddingTop: 10}} />
                </ScrollView>
            </Modal>





            <FAB
                icon="plus"
                style={styles.fab}
                onPress={ toggleOverlay } // onPress I want to instantiate an <AddExercise />
            />
        </>
    )
}