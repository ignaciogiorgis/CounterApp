import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    name?: String
}

export const HelloWorldScreen = ({name = 'MUNDO'} : Props) => {
  return (
    <View style={styles.container}>
        <Text  style={styles.title}>Hello, {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        textAlign: 'center'
    }
})
