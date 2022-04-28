import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import { useState } from 'react'
import GameScreen from './screens/gameScreen';
import colors from './constants/colors';
import GameOverScreen from './screens/gameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [userNumber, setUserNumber] = useState('')
  const [gameIsOver, setGameIsOver] = useState(false)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  function gameOverHandler(noOfRounds) {
    setGameIsOver(true)
    setGuessRounds(noOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber('')
    setGuessRounds(0)
    setGameIsOver(false)
  }

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} setGuessRounds={setGuessRounds} />
  }

  if (gameIsOver) {
    screen = <GameOverScreen
      roundsNumber={guessRounds}
      userNumber={userNumber}
      onStartNewGame={startNewGameHandler}
    />
  }


  return (
    <>
      <StatusBar style='light' />
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
    </>
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
