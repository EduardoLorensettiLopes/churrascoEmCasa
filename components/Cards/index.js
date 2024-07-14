import react from "react";
import { View, Text, Image } from "react-native";

import { FontAwesome, MaterialCommunityIcons, Entypo  } from '@expo/vector-icons';

import styles from "./style";

export default function Cards() {
    return (
        <View >
            <View style={styles.containerBig}>
                <View style={styles.container}>
                    <View>
                        <FontAwesome name="user" size={35} color="#00A89E" style={styles.icons} />
                        <View>
                            <Text style={styles.cardTitle}>Convidados</Text>
                            <Text style={styles.cardDescription}>1</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <MaterialCommunityIcons name="food-steak" size={35} color="#00A89E" style={styles.icons}/>
                        <View>
                            <Text style={styles.cardTitle}>Carne</Text>
                            <Text style={styles.cardDescription}>400 GR</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View >
                <View style={styles.containerBig}>
                    <View style={styles.container}>
                        <View>
                        <Entypo name="drink" size={35} color="#00A89E"  style={styles.icons}/>
                            <View>
                                <Text style={styles.cardTitle}>Refrigerante</Text>
                                <Text style={styles.cardDescription}>700 ML</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View>
                        <MaterialCommunityIcons name="glass-mug-variant" size={35} color="#00A89E"  style={styles.icons}/>
                            <View>
                                <Text style={styles.cardTitle}>Cerveja</Text>
                                <Text style={styles.cardDescription}>4 Latas</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}