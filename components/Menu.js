import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../styles.js';
import Ellipse from '../assets/Ellipse.png';
import * as Animatable from 'react-native-animatable';
import ResizeImage from 'react-resize-image'
export default function Menu() {
    return (<View style={
        styles.container
    }>
        <Image source={Ellipse}
            style={
                {
                    width: 322,
                    height: 303
                }
            }/>
        <Text style={
            styles.titles
        }>
            hello!</Text>
    </View>);
}
