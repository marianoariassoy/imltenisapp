import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from './src/constants/colors'
import { useFonts } from 'expo-font'
import Navigator from './src/navigation/Navigator'

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-VariableFont_wght.ttf')
  })

  if (!fontsLoaded || fontError) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Navigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})
