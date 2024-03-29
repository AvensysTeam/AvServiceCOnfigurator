import { View, Text, TouchableOpacity } from "react-native"

interface IButton {
  text: string
  bgColor: string
  color: string
  borderRadius: number
  width?: "auto" | number | `${number}%`
  px: number | "auto"
  py: number
  filled: boolean
  onPress: () => void
}

const _Button = ({ text, bgColor, color, borderRadius, px, py, filled, width, onPress }: IButton) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: filled == true ? bgColor : "rgba(0,0,0,0)",
          borderWidth: 1,
          borderColor: "#1b67ff",
          borderRadius: borderRadius,
          paddingVertical: py,
          paddingHorizontal: px
        }}
      >
        <Text style={{ color: color }}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

_Button.defaultProps = {
  filled: false,
  borderRadius: 3,
  color: "white",
  bgColor: "#1b67ff",
  px: "auto",
}

export default _Button
