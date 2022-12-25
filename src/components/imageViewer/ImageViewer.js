import { Image, View } from "react-native";
import { styles } from "../../styles/styles";

export default function ImageViewer({ placeholderImage, selectedImage }) {
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImage;

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}
