import { Text, View, StyleSheet } from 'react-native';

// Constants
import Colours from '../../constants/colours';

const NumberContainer = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{number}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colours.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colours.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
