import {useState} from 'react'
import {Text, SafeAreaView, FlatList, View} from 'react-native'
import { COLORS } from '../constants'

import { NFTCard,HomeHeader,FocusedStatusBar } from '../components'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
        <FocusedStatusBar backgroundColor={COLORS.primary} />
    </SafeAreaView>

  )
}

export default Home
