import react from "react";
import Topo from "./components/Topo";
import Info from "./components/Info";
import Cards from "./components/Cards"
import { View } from "react-native";

export default function App(){
  return(
    <View>
      <Topo />
      <Info />
      <Cards />
    </View>
  )
}