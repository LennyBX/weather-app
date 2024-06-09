import axios from "axios";
import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, Dimensions, ScrollView} from 'react-native';
import * as Location from 'expo-location';
import Loading from "./component/Loading";
import WeatherCard from "./component/WeatherCard";
import ForecastCard from "./component/ForecastCard";

export default function App() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [previousWeatherData, setPreviousWeatherData] = useState(null)
  const apiKey = '0c332756e570be7441bd4440c6cc3aa8';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 2000);
  }, []);

  useEffect(() => {
    (async () => {

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${apiKey}&lang=FR&units=metric`);
      setWeatherData(response.data);

      const previousResponse =  await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${apiKey}&lang=FR&units=metric`);
      setPreviousWeatherData(previousResponse.data)

    })();
  }, []);

  if (!weatherData || !previousWeatherData) {
    return <Loading />;
  }

  return (
      <ImageBackground source={require('./assets/fond.jpg')} style={styles.backgroundImage} resizeMode="cover">
        <WeatherCard weatherData={weatherData} />
        <View style={styles.container2}>
          <ScrollView>
            {previousWeatherData.list.map((forecast, index) => (
                <ForecastCard key={index} forecast={forecast} />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container2: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  },
  ville: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
    marginTop: "20",
    color: '#333333',
  },
  backgroundImage: {
    flex: 1,
  },
});