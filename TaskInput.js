import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default TaskInput = (properties) => {
    const [task, setTask] = useState()  

    const handleAdding = (value) => {
        properties.addTask(value);
        console.log(value)
        setTask(null);
    }

    return (
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.container}>
            <TextInput 
            style={styles.input} 
            value = {task} 
            onChangeText = {text => setTask(text)}
            placeholder={'Add new task'}
            placeholderTextColor = '#9e9e9e'/>
            <TouchableOpacity onPress={()=> handleAdding(task)}>
                <View style = {styles.button}>
                    <MaterialIcons name="add" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#3E3364',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    input: {
        color: '#fff',
        height: 50,
        flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});