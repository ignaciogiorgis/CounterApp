import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <View>
        <Text style={styles.numbreView}>{count}</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'black',
    fontWeight: '900',
  },
  numbreView: {
    fontSize: 90,
  },
});
