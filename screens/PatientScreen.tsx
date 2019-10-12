import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';

export default class PatientsScreen extends React.Component {
    timer = null;
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
                    onPress={() => {
                        if (this.timer != null) { clearTimeout(this.timer); }
                        Alert.alert(
                            'Give meds!',
                            'Remember to give ' + this.props.navigation.getParam('name') + ' their ' + this.props.navigation.getParam('medication') + ' ' + this.props.navigation.getParam('frequency') + ' minutes from now!',
                            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                            { cancelable: false },
                        );
                        this.timer = setTimeout(() => {
                            Alert.alert(
                                'You forgot!',
                                '' + this.props.navigation.getParam('name') + ' is now 4 mistakes away from death!',
                                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                                { cancelable: false },
                            );

                        }, 5000);
                    }}
                    style={{ padding: 20, margin: 50, borderRadius: 20, backgroundColor: 'crimson' }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>Give Meds</Text>
                </TouchableOpacity>
            </View >
        );
    }
}