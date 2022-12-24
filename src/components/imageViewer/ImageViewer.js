import { Image } from "react-native";
import { styles } from "../../styles/styles";

export function ImageViewer({ placeholderImage, selectedImage }) {
  const imageSource = 
  selectedImage !== null ? { uri: selectedImage } : placeholderImage;

  return (
    <Image source={imageSource} style={styles.image} />
  );
}
