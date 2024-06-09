import React from 'react';
import AnimatedLoader from 'react-native-animated-loader';
import { Text, StyleSheet } from 'react-native';

const Loading = () => {
    return (
        <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            animationStyle={styles.lottie}
            speed={1}>
            <Text>Veuillez Patientez.</Text>
        </AnimatedLoader>
    );
};

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100,
    },});

export default Loading;