import { View } from "react-native"
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "./styles"
import _Text from '../../../../shared/core/ui/Text';
import { useApp } from "../../../../providers/AppProvider";
import BackButton from "../../../../shared/core/ui/BackButton";
import TickButton from "../../../../shared/core/ui/TickButton";
import RoomStatus from '../../../../shared/static/RoomStatus.json'

const OtherSettingsComponent = ({ navigation }: any) => {

  const {roomNumber, roomList, setRoomList} = useApp()

  const handleBack = () => {}

  const handleConfirm = () => {
    let temp = [...roomList]
    temp[roomNumber].status = roomList[roomNumber].FSC.confirm && roomList[roomNumber].CAF.confirm && roomList[roomNumber].CAP.confirm 
                              ? RoomStatus.COMPLETED
                              : RoomStatus.IGNORED
    setRoomList(temp)
    navigation.navigate("ROOMLIST", {from: "OtherSettings"})
  }

  return (
    <View style={{ position: 'relative', width: '100%', height: '100%' }}>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <_Text text={`${roomList[roomNumber].unitname}`} size={24} lineHeight={24} />
      </View>
      <View style={styles.formgroup}>
        <View style={styles.form}>
          <View style={styles.label}>
            <_Text text="Filter Alaram:" size={18} lineHeight={20} />
          </View>
          <SelectDropdown
            data={[...Array(331)].map((_, index) => index + 30)}
            onSelect={(selectedItem, index) => { console.log(selectedItem, index) }}
            buttonStyle={{ backgroundColor: '#aaa', width: 100, borderRadius: 10 }}
            defaultButtonText="Choose an option"
          />
          <_Text text="days" />
        </View>

        <View style={styles.form}>
          <View style={styles.label}>
            <_Text text="Summer/Winter t.chagne:" size={18} lineHeight={20} />
          </View>
          <SelectDropdown
            data={[...Array(31)].map((_, index) => index + 10)}
            onSelect={(selectedItem, index) => { console.log(selectedItem, index) }}
            buttonStyle={{ backgroundColor: '#aaa', width: 100, borderRadius: 10 }}
            defaultButtonText="Choose an option"
          />
          <_Text text={`${"\u00b0"}C`} size={18} lineHeight={20} />
        </View>

        <View style={styles.form}>
          <View style={styles.label}>
            <_Text text="FKI frequency:" size={18} lineHeight={20} />
          </View>
          <SelectDropdown
            data={[...Array(31)].map((_, index) => index + 10)}
            onSelect={(selectedItem, index) => { console.log(selectedItem, index) }}
            buttonStyle={{ backgroundColor: '#aaa', width: 100, borderRadius: 10 }}
            defaultButtonText="Choose an option"
          />
          <_Text text="days" />
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <BackButton confirmed={false} handleBack={handleBack} />
        <TickButton confirmed={true} handleConfirm={handleConfirm} />
      </View>
    </View>
  )
}

export default OtherSettingsComponent