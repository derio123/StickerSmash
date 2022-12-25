import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Button from './src/components/buttons/Button';
import ImageViewer from './src/components/imageViewer/ImageViewer';
import { styles } from './src/styles/styles';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from './src/components/iconButtons/IconButton';
import EmojiPicker from './src/components/emojiPicker/EmojiPicker';
import CircleButton from './src/components/circleButtons/CircleButton';
import EmojiList from './src/components/emojiList/EmojiList';
import EmojiSticker from './src/components/emojiSticker/EmojiSticker';

const placeholderImage = require('./src/assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const pickerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  }
  const onReset = () => {
    setShowAppOptions(false);
  }
  const onAddSticker = () => {
    setIsModalVisible(true);
  }
  const onModalClose = () => {
    setIsModalVisible(false);
  }
  const onSaveImage = () => {
    alert("Did not implement!");
  }
  return (
    <View style={styles.container}>
      <ImageViewer placeholderImage={placeholderImage}
        selectedImage={selectedImage} />
      {pickedEmoji !== null ? <EmojiSticker stickerSource={pickedEmoji} imageSize={40} /> : null}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label={"Reset"}
              onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label={"Save"}
              onPress={onSaveImage} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme={"primary"} label={'choose a photo'}
            onPress={pickerImage} />
          <Button label={'use this photo'}
            onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

