import { MaterialIcons } from "@expo/vector-icons";
import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent} >
        <View style={styles.titleContainer} >
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color={"#fff"} size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}