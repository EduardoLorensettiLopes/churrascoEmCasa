import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerBig: {
        flexDirection: "row",
        justifyContent: "center",
    },
    container: {
        backgroundColor: "#D5F2ED",
        alignItems: "center",
        justifyContent: "center",    
        flexDirection: "column",       
        width: 160,
        height: 130,
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30
    },
    cardTitle: {
        color: "#00A89E",
        fontSize: 15,
        fontWeight: "50",
        textAlign: "center",
        margin: 5
    },
    cardDescription: {
        textAlign: "center",
        color: "#00A89E",
        fontSize: 17,
        fontWeight: "bold",
    },
    icons: {
        textAlign: "center"
    }
})

export default styles;