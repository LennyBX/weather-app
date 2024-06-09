import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherCard = ({ weatherData }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>{weatherData.name}</Text>
            <Image style={styles.icon} source={{ uri: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` }} />
            <Text style={styles.paragraph}>Temperature: {weatherData.main.temp}°C</Text>
            <Text style={styles.paragraph}>Description: {weatherData.weather[0].description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
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
    },});

export default WeatherCard;