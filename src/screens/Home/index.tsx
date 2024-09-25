import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Participant from "@/components/Participant";

export default function Home() {
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

      <Participant
        name="Leonardo"
        onRemove={() => handleParticipantRemove("Leonardo")}
      />
      <Participant name="Barbara" onRemove={() => handleParticipantRemove} />
      <Participant name="Bill" onRemove={() => handleParticipantRemove} />
      <Participant name="Gauss" onRemove={() => handleParticipantRemove} />
      <Participant name="Luíza" onRemove={() => handleParticipantRemove} />
    </View>
  );
}
