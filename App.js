import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import Task from './Task';
import TaskInput from './TaskInput';

export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) =>  {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index)=> index != deleteIndex))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ToDo List</Text>
      <StatusBar style="auto" />
      <ScrollView style =  {styles.scrollView}>
      {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <Task index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInput addTask = {addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29bdc1',
  },
  heading: {
    flex: 1,
    color: '#F9F7F5',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 40
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});
