import { View, Text, StyleSheet } from 'react-native';

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess!</Text>
      {/* GUESS */}
      <View>
        <Text>Higher or Lower</Text>
        {/* + - */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 32,
  },
});
