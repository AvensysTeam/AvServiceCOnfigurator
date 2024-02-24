import { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import _Text from '../../../../shared/core/ui/Text';
import AntDesign from 'react-native-vector-icons/AntDesign'
import _Input from '../../../../shared/core/ui/Input';
import { useApp } from "../../../../providers/AppProvider";
import { ImageSource } from "../../../../shared/static/imgeSource";
import TickButton from "../../../../shared/core/ui/TickButton";
import BackButton from "../../../../shared/core/ui/BackButton";
import { IFSC, IRoom } from "../../../../types/interface";

const FSCComponent = ({navigation}: any) => {

  const { roomList, roomNumber, setRoomList } = useApp();

  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")

  const [confirm1, setConfirm1] = useState(false)
  const [confirm2, setConfirm2] = useState(false)
  const [confirm3, setConfirm3] = useState(false)

  const [start1, setStart1] = useState(false)
  const [start2, setStart2] = useState(false)
  const [start3, setStart3] = useState(false)

  const handleConfirm = () => {
    let tempList: Array<IRoom> = [...roomList]
    let temp: IRoom = {...tempList[roomNumber]}
    let FSC: IFSC = { value1: value1, value2: value2, value3: value3, confirm1: true, confirm2: true, confirm3: true, confirm: true}
    temp.FSC = FSC
    tempList[roomNumber] = temp
    setRoomList(tempList)
    navigation.navigate("CAF", {from: "FSC"})
  }

  const handleBack = () => {
    setValue1("");
    setValue2("");
    setValue3("");
    setStart1(false);
    setStart2(false);
    setStart3(false);
    setConfirm1(false);
    setConfirm2(false);
    setConfirm3(false);
  }

  useEffect(() => {
    const temp = roomList[roomNumber].FSC
    if (temp != undefined) {
      setValue1(temp.value1)
      setValue2(temp.value2)
      setValue3(temp.value3)
      setStart1(temp.confirm1)
      setStart2(temp.confirm2)
      setStart3(temp.confirm3)
      setConfirm1(temp.confirm1)
      setConfirm2(temp.confirm2)
      setConfirm3(temp.confirm3)
    } 
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center', position: 'relative', width: '100%', height: Dimensions.get("window").height * 0.9 }}>
        <_Text text={`${roomList[roomNumber].unitname} (FSC)`} size={20} lineHeight={24} />
        <View style={{ position: 'relative' }}>
          <View style={styles.body}>
            <Image source={ImageSource.ico_ktp} width={200} height={300} style={{ width: 200, height: 200, resizeMode: 'cover' }} />
          </View>
          <View style={styles.item_group}>
            <TouchableOpacity style={styles.item} onPress={() => setStart3(true)}>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => setStart2(true)}>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => setStart1(true)}>
            </TouchableOpacity>
          </View>
          {start3 && <TouchableOpacity
            onPress={() => setConfirm3(!confirm3)}
            style={[styles.rounded, {
              backgroundColor: confirm3 ? 'green' : 'white',
              borderColor: confirm3 ? 'green' : '#808284',
              top: 45
            }]}
          >
            <AntDesign name="check" size={24} color={confirm3 ? 'white' : '#808284'} />
          </TouchableOpacity>}
          {start2 && <TouchableOpacity
            onPress={() => setConfirm2(!confirm2)}
            style={[styles.rounded, {
              backgroundColor: confirm2 ? 'green' : 'white',
              borderColor: confirm2 ? 'green' : '#808284',
              top: 100
            }]}
          >
            <AntDesign name="check" size={24} color={confirm2 ? 'white' : '#808284'} />
          </TouchableOpacity>}
          {start1 && <TouchableOpacity
            onPress={() => setConfirm1(!confirm1)}
            style={[styles.rounded, {
              backgroundColor: confirm1 ? 'green' : 'white',
              borderColor: confirm1 ? 'green' : '#808284',
              top: 155
            }]}
          >
            <AntDesign name="check" size={24} color={confirm1 ? 'white' : '#808284'} />
          </TouchableOpacity>}
        </View>
        <View style={{ width: '70%', gap: 10, marginTop: 20, alignItems: 'center' }}>
          {start3 && <View style={styles.form}>
            <_Text text="Regulation 3: " size={18} lineHeight={20} />
            <_Input value={value3} setValue={setValue3} width={100} />
            <_Text text="%" size={18} lineHeight={20} />
          </View>}
          {start2 && <View style={styles.form}>
            <_Text text="Regulation 2: " size={18} lineHeight={20} />
            <_Input value={value2} setValue={setValue2} width={100} />
            <_Text text="%" size={18} lineHeight={20} />
          </View>}
          {start1 && <View style={styles.form}>
            <_Text text="Regulation 1: " size={18} lineHeight={20} />
            <_Input value={value1} setValue={setValue1} width={100} />
            <_Text text="%" size={18} lineHeight={20} />
          </View>}
        </View>
        <View style={{ position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <BackButton confirmed={false} handleBack={handleBack} />
          <TickButton confirmed={confirm1 && confirm2 && confirm3} handleConfirm={(confirm1 && confirm2 && confirm3) ? handleConfirm : () => {}} />
        </View>
      </View>
    </ScrollView>
  )
}

export default FSCComponent