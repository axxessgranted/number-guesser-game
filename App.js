import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Components
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

// Constants
import Colours from './constants/colours';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const enteredNumberHandler = (enteredNumber) => {
    setUserNumber(enteredNumber);
  };

  let screen = <StartGameScreen onConfirmNumber={enteredNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[Colours.primary700, Colours.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/diceBackground.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImg}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.15,
  },
});
