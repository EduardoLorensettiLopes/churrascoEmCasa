import react from "react";
import { View, Text } from "react-native";

import styles from "./style";

export default function Info() {
    return (
        <View style={styles.container}>
                <Text style={styles.cardTitle}>Vai fazer um churasco mas não sabe o que vai comprar?</Text>
                <Text style={styles.cardDescription}>Final de semana chegando e vem aquela vontade de fazer um churasco. Nessa hora bate uma dúvida da quantidade de carne e de bebidas que cada convidado vai consumir.Veja abaixo uma média do consumo por pessoa.</Text>
        </View>
    )
}