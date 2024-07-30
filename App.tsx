import { View, Text, StatusBar, Platform } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import RootNavigation from './src/screens/navigation/RootNavigation'

const App = () => {
  return (
    <Container>
        <StatusBar barStyle={Platform.OS=="android"?'default':'default'}></StatusBar>
        <RootNavigation></RootNavigation>
    </Container>
  )
}
const Container = styled(View)`flex:1`

export default App