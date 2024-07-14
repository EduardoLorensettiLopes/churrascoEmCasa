import react from "react";
import { View, Text, Image } from "react-native";

import Img from "../../assets/imgLogo.jpg"

import styles from "./style";

export default function Topo() {
    return (
        <View style={styles.container}>
            <Image source={Img}  style={styles.img} />
            <View style={styles.containerItems}>
                <Text style={styles.cardTitle}>Churrasco em casa</Text>
                <Text style={styles.cardDescription}>Calculando a comida e bebida</Text>
            </View>
        </View>
    )
}