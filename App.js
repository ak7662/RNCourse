import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import { useState } from 'react'
import GameScreen from './screens/gameScreen';
import colors from './constants/colors';
import GameOverScreen from './screens/gameOverScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [userNumber, setUserNumber] = useState('')
  const [gameIsOver, setGameIsOver] = useState(false)

  useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  function gameOverHandler() {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver) {
    screen = <GameOverScreen onGameOver={gameOverHandler} />
  }


  return (
    <LinearGradient colors={[colors.primary500, colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
