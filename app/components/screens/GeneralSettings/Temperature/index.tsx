import { View } from "react-native"
import { styles } from "./styles"
import _Text from '../../../../shared/core/ui/Text';
import _Input from '../../../../shared/core/ui/Input';
import { useEffect, useState } from "react";
import { useApp } from "../../../../providers/AppProvider";
import BackButton from "../../../../shared/core/ui/BackButton";
import TickButton from "../../../../shared/core/ui/TickButton";
import { IRoom } from "../../../../types/interface";

const TemperatureComponent = ({ navigation }: any) => {

  const { roomNumber, roomList, setRoomList } = useApp();
  const [temperature, setTemperature] = useState("")

  const handleBack = () => {
    navigation.navigate("GeneralSettings", {from: 'RH'})
  }

  const handleConfirm = () => {
    let tempList: Array<IRoom> = [...roomList]
    let temp: IRoom = {...tempList[roomNumber]}
    temp.temperature = temperature
    tempList[roomNumber] = temp
    setRoomList(tempList)
    navigation.navigate("OtherSettings", {from: 'Temperature'})
  }

  useEffect(() => {
    const temp = roomList[roomNumber].temperature
    if (temp != undefined) {
      setTemperature(temp)
    }
  }, [])

  return (
    <View style={styles.container}>
      <_Text text={`${roomList[roomNumber].unitname} (Temperature)`} size={24} lineHeight={24} />
      <View style={styles.form}>
        <_Text text="Temperature set point:" size={18} lineHeight={18} />
        <_Input value={temperature} setValue={setTemperature} width={100} />
        <_Text text={`${"\u00b0"}C`} size={18} lineHeight={20} />
      </View>
      <View style={{ position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <BackButton confirmed={false} handleBack={handleBack} />
        <TickButton confirmed={true} handleConfirm={handleConfirm} />
      </View>
    </View>
  )
}

export default TemperatureComponent