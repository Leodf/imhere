import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Participant from "@/components/Participant";

export default function Home() {
  const participants = [
    "Leonardo",
    "Barbara",
    "Bill",
    "Gauss",
    "Luiza",
    "Rodrigo",
    "Mayky",
    "Jack",
    "Odair",
    "Silvana",
  ];

  function handleParticipantAdd() {
    console.log("Clicou");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você removeu o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
