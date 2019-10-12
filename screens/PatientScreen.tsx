import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class PatientsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', 'Patient'),
        };
    };
    render() {
        var path = this.props.navigation.getParam('path');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: 400, height: 400 }}>
                    <Image
                        style={{ flex: 1 }}
                        source={path}
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 20, marginBottom: 10, marginTop: 10 }}>{this.props.navigation.getParam('condition')}</Text>
                    <Text style={{ fontSize: 17 }}>
                        <Text>Takes </Text>
                        <Text style={{ color: 'crimson', fontWeight: 'bold' }}>{this.props.navigation.getParam('medication')}</Text>
                        <Text> every </Text>
                        <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.getParam('frequency')}</Text>
                        <Text> minutes.</Text>
                    </Text>
                    <Text style={{ fontSize: 17 }}>
                        <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.getParam('progress')}</Text>
                        <Text> mistakes away from death!</Text>
                    </Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{ padding: 20, margin: 50, borderRadius: 20, backgroundColor: 'crimson' }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>Give Meds</Text>
                </TouchableOpacity>
            </View>
        );
    }
}