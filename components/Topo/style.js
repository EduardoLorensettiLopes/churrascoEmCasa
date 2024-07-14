import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00A89E",
        alignItems: "center",
        justifyContent: "center",           
        flexDirection: "row",
        height: 120,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#FFF"
    },
    containerItems: {

    },
    cardTitle: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "700",
        textTransform: "uppercase",
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 0,
    },
    cardDescription: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "200",
        marginLeft: 10
    },
})

export default styles;