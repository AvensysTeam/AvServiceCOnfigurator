import { useEffect, useState } from "react"
import { Dimensions, TouchableOpacity, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import { styles } from "./styles"
import TickButton from "../../../shared/core/ui/TickButton"
import RoomStatus from "../../../shared/static/RoomStatus.json"
import { useApp } from "../../../providers/AppProvider"
import _Text from '../../../shared/core/ui/Text';
import { ImageSource } from "../../../shared/static/imgeSource"
import SliderComponent from "../../../shared/core/ui/Slider"
import BackButton from "../../../shared/core/ui/BackButton"

const Positioning = ({ navigation, roomNumber }: any) => {

  const { roomList, setRoomList } = useApp()
  const [input, setInput] = useState(0)
  const [confirmed, setConfirmed] = useState<boolean>(false)
  const images = [
    ImageSource.draw_quark_syphon_c_correct,
    ImageSource.draw_quark_syphon_c_wrong,
    ImageSource.draw_quark_syphon_d_correct,
    ImageSource.draw_quark_syphon_d_wrong
  ]

  const handleBack = () => {
    navigation.navigate("GeneralSettings", { from: "Room" })
  }

  const handleConfirm = () => {
    if (confirmed) {
      navigation.navigate("FSC", { from: "Room", roomNumber: roomNumber })
      setInput(0)
    }
  }

  const handleAbort = () => {
    let temp = [...roomList]
    temp[roomNumber].status = RoomStatus.ABORTED
    setRoomList(temp)
    navigation.navigate("ROOMLIST", { from: "Room" })
    setInput(0)
  }

  useEffect(() => {
    if (input) {
      setConfirmed(true)
    } else {
      setConfirmed(false)
    }
  }, [input])

  return (
    <View style={{ height: Dimensions.get("window").height * 0.9 - 100, width: '94%' }}>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.header}>
          <TouchableOpacity style={[styles.rounded, { backgroundColor: input == 2 ? 'green' : 'white', borderColor: 'green' }]} onPress={() => setInput(2)}>
            <_Text text="D" color="green" size={18} lineHeight={20} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.rounded, { backgroundColor: 'red', borderColor: 'red' }]} onPress={handleAbort} />
          <TouchableOpacity style={[styles.rounded, { backgroundColor: input == 1 ? 'green' : 'white', borderColor: 'green' }]} onPress={() => setInput(1)}>
            <_Text text="C" color="green" size={18} lineHeight={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <SliderComponent images={images} />
          {input == 2 && <Feather name="corner-down-left" size={32} color={'green'} style={styles.downLeft} />}
          {input == 1 && <Feather name="corner-down-right" size={32} color={'green'} style={styles.downRight} />}
        </View>
      </View>

      <View style={styles.footer}>
        <BackButton confirmed={false} handleBack={handleBack} />
        <TickButton confirmed={confirmed} handleConfirm={handleConfirm} />
      </View>
    </View>
  )
}

export default Positioning