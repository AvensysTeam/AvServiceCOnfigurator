import { useEffect, useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import _Text from '../../../shared/core/ui/Text';
import TickButton from "../../../shared/core/ui/TickButton";
import _Button from '../../../shared/core/ui/Button';
import _Input from '../../../shared/core/ui/Input';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useApp } from "../../../providers/AppProvider";
import RoomStatus from "../../../shared/static/RoomStatus.json"
import { getDataFromPreviousScreen } from "../../../shared/helper/common";

const GeneralSettingsComponent = ({ navigation }: any) => {

  const { setProjectName, roomNumber, roomList, setRoomNumber, setRoomList } = useApp();
  const btnList = [
    {
      label: "FSC"
    },
    {
      label: "CAP"
    },
    {
      label: "CAF"
    },
    {
      label: "RH"
    },
    {
      label: "VOC"
    },
    {
      label: "CO2"
    }
  ]
  const [isGeneralSettings, setIsGeneralSettings] = useState(false)
  const [isProjectRef, setIsProjectRef] = useState(false)
  const [isUnitName, setIsUnitName] = useState(false)
  const [projectRef, setProjectRef] = useState("")
  const [unitname, setUnitname] = useState("")
  const res = getDataFromPreviousScreen(navigation)

  const handleConfirm = () => {
    setIsGeneralSettings(false)
    setIsUnitName(false)
    setUnitname("");
    navigation.navigate("Room", { from: "GeneralSettings" })
  }

  const activateGeneralSettings = () => {
    setTimeout(() => {
      setIsGeneralSettings(true)
    }, 4000)
  }

  const activateProjectRef = () => {
    setTimeout(() => {
      setIsProjectRef(true)
    }, 4000)
  }

  const activateUnitName = () => {
    setTimeout(() => {
      setIsUnitName(true)
    }, 4000)
  }

  const handleSetProjectName = () => {
    setProjectName(projectRef)
    setProjectRef("")
    setIsProjectRef(false)
  }

  const handleSetUnitName = () => {
    let temp = [...roomList]
    temp[roomNumber].unitname = unitname
    setRoomList(temp)
    setUnitname("")
    setIsUnitName(false)
  }

  const handleNextUnit = () => {
    let temp = [...roomList]
    temp.push({
      number: roomList.length,
      unitname: `Unit ${roomList.length + 1}`,
      status: RoomStatus.MISSING,
      FSC: {
        confirm: false,
      },
      CAF: {
        confirm: false,
      },
      CAP: {
        confirm: false,
      },
      CO2: {
        threshold: "500",
        boost: "100"
      },
      RH: {
        threshold: "50",
        boost: "100"
      },
      VOC: {
        threshold: "200",
        boost: "100"
      }
    })
    setRoomList(temp)
    setRoomNumber(roomList.length)
    setUnitname("")
    setIsUnitName(false)
    setIsGeneralSettings(false)
  }

  useEffect(() => {
    if (res.from == "Configuration") {
      handleNextUnit()
    }
  }, [res])

  return (
    <ScrollView style={{ maxHeight: Dimensions.get("window").height * 0.9 }}>
    <View style={styles.container}>
      <TouchableOpacity style={[styles.general_settings, {backgroundColor: !isGeneralSettings ? '#68D391' : '#22543d'}]} onPressIn={activateGeneralSettings}>
        <_Text text="General Settings" size={20} lineHeight={24} color="white" />
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        {
          isGeneralSettings &&
          <View style={styles.general_settings_panel}>
            {
              btnList.map((btn, index) => (
                <View key={index} style={{ width: '30%' }}>
                  <_Button text={btn.label} py={10} color="black" onPress={() => { navigation.navigate(btn.label, { from: "GeneralSettings" }) }} />
                </View>
              ))
            }
            <View style={{ width: '100%' }}>
              <_Button text="Temperature" py={10} color="black" onPress={() => { navigation.navigate("Temperature", { from: "GeneralSettings" }) }} />
            </View>
          </View>
        }
      </View>
      <TouchableOpacity style={[styles.project_ref, {backgroundColor: !isProjectRef ? '#4299e1' : '#3182ce'}]} onPressIn={activateProjectRef}>
        <_Text text="Project ref" size={20} lineHeight={24} color="white" />
      </TouchableOpacity>
      {
        isProjectRef && <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <_Input width={'80%'}  value={projectRef} setValue={setProjectRef} />
        <_Button text="SET" px={20} py={10} onPress={handleSetProjectName} filled />
      </View>
      }
      <TouchableOpacity style={[styles.unit_name, {backgroundColor: !isUnitName ? '#f6e05e' : '#d97706'}]} onPressIn={activateUnitName}>
        <_Text text="Unit name" size={20} lineHeight={24} color="white" />
      </TouchableOpacity>
      {
        isUnitName && <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <_Input width={'80%'} value={unitname} setValue={setUnitname} />
          <_Button text="SET" px={20} py={10} onPress={handleSetUnitName} filled />
        </View>
      }
      <View style={styles.footer}>
        <TickButton confirmed={true} handleConfirm={handleConfirm} />
      </View>
    </View>
    </ScrollView>
  )
}

export default GeneralSettingsComponent