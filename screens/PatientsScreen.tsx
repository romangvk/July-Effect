import React from 'react';
import { View, Text, TouchableHighlight, FlatList, Image } from 'react-native';

const patients = [
    { 'key': '0', path: require('./bitmoji/0.png'), 'name': 'Johnnie Smallman', 'condition': 'Appendicitis', 'medication': 'Tylenol', 'frequency': 10, 'progress': 5 },
    { 'key': '1', path: require('./bitmoji/1.png'), 'name': 'George Wisefellow', 'condition': 'Lung Transplant', 'medication': 'Ibuprofen', 'frequency': 20, 'progress': 5 },
    { 'key': '2', path: require('./bitmoji/2.png'), 'name': 'Frankie Weinstein', 'condition': 'Dialysis', 'medication': 'Propofol', 'frequency': 60, 'progress': 5 },
    { 'key': '3', path: require('./bitmoji/3.png'), 'name': 'Lisa Yellowtoe', 'condition': 'Sepsis', 'medication': 'Fentanyl', 'frequency': 10, 'progress': 5 },
    { 'key': '4', path: require('./bitmoji/4.png'), 'name': 'Tiffany Tript', 'condition': 'Orthopedic Surgery', 'medication': 'Laughing Gas', 'frequency': 90, 'progress': 5 },
    { 'key': '5', path: require('./bitmoji/5.png'), 'name': 'Rodney Long', 'condition': 'Liver Failure', 'medication': '6', 'frequency': 1, 'progress': 5 },
    { 'key': '6', path: require('./bitmoji/6.png'), 'name': 'Maxine Weasel', 'condition': 'Breast Reconstruction', 'medication': 'Ketanal', 'frequency': 2, 'progress': 5 },
    { 'key': '7', path: require('./bitmoji/7.png'), 'name': 'Charlie Sheen', 'condition': 'Liposuction', 'medication': 'Cocaine', 'frequency': 3, 'progress': 5 },
    { 'key': '8', path: require('./bitmoji/8.png'), 'name': 'Laurel White', 'condition': 'Gastric Bypass', 'medication': 'Bupivacaine', 'frequency': 4, 'progress': 5 },
    { 'key': '9', path: require('./bitmoji/9.png'), 'name': 'Connor Evans', 'condition': 'Tonsillectomy', 'medication': 'Epinephrine', 'frequency': 2, 'progress': 5 }];

export default class PatientsScreen extends React.Component {
    static navigationOptions = {
        title: 'Patients',
    };
    render() {
        return (
            <FlatList
                style={{ flex: 1 }}
                data={patients}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigation.navigate('Patient', item);
                        }}
                        underlayColor='#fde8ec'
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={item.path}
                            />
                            <View>
                                <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                <Text>{item.progress} mistakes away from death!</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                )}
                ItemSeparatorComponent={() => (<View style={{ flex: 1, height: 3, backgroundColor: 'whitesmoke' }}></View>)}
            />
        );
    }
}
