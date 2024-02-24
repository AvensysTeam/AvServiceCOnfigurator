import { View } from "react-native"
import { styles } from "./styles"
import _Text from '../../../../shared/core/ui/Text';
import _Input from '../../../../shared/core/ui/Input';
import { useEffect, useState } from "react";
import BackButton from "../../../../shared/core/ui/BackButton";
import TickButton from "../../../../shared/core/ui/TickButton";
import { useApp } from "../../../../providers/AppProvider";
import { IRoom, IVOC } from "../../../../types/interface";

const VOCComponent = ({ navigation }: any) => {

  const { roomNumber, roomList, setRoomList } = useApp();

  const [threshold, setThreshold] = useState("")
  const [boost, setBoost] = useState("")

  const handleBack = () => {
    navigation.navigate("GeneralSettings", {from: 'RH'})
  }

  const handleConfirm = () => {
    let tempList: Array<IRoom> = [...roomList]
    let temp: IRoom = {...tempList[roomNumber]}
    let VOC: IVOC = { threshold: threshold, boost: boost }
    temp.VOC = VOC
    tempList[roomNumber] = temp
    setRoomList(tempList)
    navigation.navigate("Temperature", {from: 'VOC'})
  }

  useEffect(() => {
    const temp = roomList[roomNumber].VOC
    if (temp != undefined) {
      setThreshold(temp.threshold)
      setBoost(temp.boost)
    }
  }, [])

  return (
    <View style={styles.container}>
      <_Text text={`${roomList[roomNumber].unitname} (VOC)`} size={24} lineHeight={24} />
      <View style={{ gap: 20 }}>
        <View style={styles.form}>
          <View style={{ width: 100 }}>
            <_Text text="Threshold:" size={18} lineHeight={18} />
          </View>
          <_Input value={threshold} setValue={setThreshold} width={100} />
          <_Text text="ppm" size={18} lineHeight={20} />
        </View>
        <View style={styles.form}>
          <View style={{ width: 100 }}>
            <_Text text="Boost:" size={18} lineHeight={18} />
          </View>
          <_Input value={boost} setValue={setBoost} width={100} />
          <_Text text="%" size={18} lineHeight={20} />
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <BackButton confirmed={false} handleBack={handleBack} />
        <TickButton confirmed={true} handleConfirm={handleConfirm} />
      </View>
    </View>
  )
}

export default VOCComponent