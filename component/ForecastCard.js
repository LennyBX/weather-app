// ForecastCard.js
import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const ForecastCard = ({ forecast }) => {
    return (
        <View style={styles.card}>
            <View style={styles.iconPlusDate}>
                <Image style={styles.icon} source={{ uri: `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png` }} />
                <Text style={styles.date}> {new Date(forecast.dt_txt).toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
            </View>
            <Text style={styles.temperature}>Température : {forecast.main.temp}°C</Text>
            <Text>Description : {forecast.weather[0].description}</Text>
            <Text>Humidité : {forecast.main.humidity}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container2: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 200,
    },
    paragraph: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        color: '#333333',
        fontWeight: "bold",
    },
    icon: {
        width: 50,
        height: 50,
        textAlign: 'center'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,

        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width - 100,
        height: 130,
    },
    iconPlusDate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        fontWeight: "bold",
        fontSize: 20,
    },
    temperature: {
        fontWeight: "bold",
        fontSize: 15,
    }
});

export default ForecastCard;