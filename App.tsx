import React from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'
import { CounterScreen } from './src/presentation/CounterScreen'

export const App = () => {
  return (
    <SafeAreaView style={ styles.container} >
        {/* <HelloWorldScreen name={'Ignacio Giorgis'}/> */}
        <CounterScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
  }
})



