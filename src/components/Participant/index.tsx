import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Leonardo de Faveri</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
