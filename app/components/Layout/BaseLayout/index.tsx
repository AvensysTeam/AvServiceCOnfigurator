import React from "react"
import { View, StyleSheet } from "react-native"

const BaseLayout = ({ children }: any) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: '5%',
    paddingHorizontal: '3%'
  }
})

export default BaseLayout
