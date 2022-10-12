import React from "react";
import { StyleSheet,Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default Task = (task) =>  {
    return(
        <View style = {styles.container}>
            <View style = {styles.indexContainer}>
                <Text style={styles.index}>{task.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style = {styles.task}>{task.task}</Text>
                <TouchableOpacity onPress={()=> task.deleteTask()}>
                    <MaterialIcons style = {styles.delete} name="delete" size={20} color='#F9F7F5'/>
                </TouchableOpacity>
            </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            marginHorizontal: 15,
        },
        indexContainer: {
            backgroundColor: '#3E3364',
            borderRadius: 12,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
        },
        index: {
            color: '#fff',
            fontSize: 20,
        },
        taskContainer: {
            backgroundColor: '#3E3364',
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
            minHeight: 50,
        },
        task: {
            color: '#fff',
            width: '90%',
            fontSize: 16,
        },
        delete: {
            marginLeft: 10,
        },
    })