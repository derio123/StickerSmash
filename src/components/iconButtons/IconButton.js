import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}