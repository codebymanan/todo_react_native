import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Task from "./components/Task";
import {KeyboardAvoidingView} from "react-native";
import {Platform, TextInput} from "react-native";
import {TouchableOpacity} from "react-native";

export default function App() {
    const [task, setTask] = useState();
    const [tasksItems, setTasksItems] = useState();
    // setTask('Walk');
    const handleAddTask = () => {
        console.log(task);
        setTasksItems(...tasksItems, task);
        setTask(null);
    }
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>
                <View style={styles.items}>
                    <Task text={'Task 1'}/>
                    <Task text={'Task 2'}/>
                </View>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === "IOS" ? "padding" : "height"}
                                  style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Enter Something'} value={task} onChangeText={text => setTask(text)}
                >
                </TextInput>
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,

    },
    addText: {}

});
