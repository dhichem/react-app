import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from '../shared/card';

export default function home({ navigation }) {

    return (
        <View >
            <View style={styles.titleBar} >
                <Image style={{ height: 30, width: 30 }} source={require('../assets/fonts/absence.png')} />
                <Text style={styles.title}>Rapport d'absence</Text>
            </View>

            <Card>
                <View style={styles.content} >
                    <Text>Octobre 2021</Text>
                    <Text>Ahmed</Text>
                </View>
            </Card>
            <View style={styles.titleBar} >
                <Image style={{ height: 30, width: 30 }} source={require('../assets/fonts/depense.png')} />
                <Text style={styles.title}>Rapport dépense</Text>
            </View>
            <Card>
                <View style={styles.content} >
                    <Text>Aout 2021</Text>
                    <Text>Ahmed</Text>
                </View>
            </Card>
            <View style={styles.titleBar} >
                <Image style={{ height: 30, width: 30 }} source={require('../assets/fonts/calender.png')} />
                <Text style={styles.title}>Rapport temps</Text>
            </View>
            <Card>

            </Card>
        </View>
    );
}




const styles = StyleSheet.create({
    title: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 5
    },
    titleBar: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    content: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: '',
        justifyContent: 'space-around',
    }
});