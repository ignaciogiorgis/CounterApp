import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const PrimaryButton = () => {
  return (
    <Pressable
      style={styles.button}
      // onPress={()=>{setCount(count+1)}}
      // onLongPress={()=>{setCount(0)}}
    >
      <Text style={styles.buttonText}>Agregar</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#011692',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 25,
  },
});
