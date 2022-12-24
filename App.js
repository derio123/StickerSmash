import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Button } from './src/components/buttons/Button';
import { ImageViewer } from './src/components/imageViewer/ImageViewer';
import { styles } from './src/styles/styles';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const placeholderImage = require('./src/assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert('You did not select any image.')
    }
  }
  return (
    <View style={styles.container}>
      <ImageViewer placeholderImage={placeholderImage}
        selectedImage={selectedImage} />
      <View style={styles.footerContainer}>
        <Button theme={"primary"} label={'choose a photo'}
          onPress={pickerImage} />
        <Button theme={"primary"} label={'use this photo'}
          onPress={() => alert('Não Implementado')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

