import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View
} from "react-native";
import logo from "../assets/imgs/logo.png";
import CustomExercisesList from "../components/CustomExercisesList";


function WorkoutScreen() {
    const {height} = useWindowDimensions();


    return (
        <ScrollView showsVerticalScrollIndicator={true} nestedScrollEnabled={true}>
            <View style={styles.container}>
                <CustomExercisesList/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        maxHeight: 300,
    },



})

export default WorkoutScreen;