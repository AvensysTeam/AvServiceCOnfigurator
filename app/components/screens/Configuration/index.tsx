import { View } from 'react-native';
import { styles } from "./styles"
import _Text from '../../../shared/core/ui/Text';
import _Button from '../../../shared/core/ui/Button';
import { useEffect, useState } from 'react';
import { getDataFromPreviousScreen } from '../../../shared/helper/common';

const Configuration = ({ navigation }: any) => {

  const [status, setStatus] = useState(-1)
  const res = getDataFromPreviousScreen(navigation)

  const configurations = [
    "KTP",
    "CAF, CAP",
    "APH, DPH",
    "FKI"
  ]

  const uploadConfiguration = () => {
  }

  const handleNextView = async () => {
    await navigation.navigate("GeneralSettings", { from: "Configuration" })
    await setStatus(-1)
  }

  useEffect(() => {
    if (res.from == "Welcome" || res.from == "ROOMLIST") {
      setTimeout(() => {
        setStatus(1)
      }, 5000)
    }
  }, [res])

  useEffect(() => {
    if (status == 1) {
      setTimeout(() => {
        handleNextView()
      }, 2000)
    }
  }, [status])

  return (
    <View style={styles.container}>
      {status == -1 && <View style={styles.alert}>
        <_Text text='Waiting for connection' color='white' size={20} lineHeight={20} />
      </View>}
      {
        status == 1 &&
        <>
          <_Text text='Available accessories' size={16} />
          <View style={styles.body}>
            {
              configurations.map((item: string, index: number) => (
                <View key={index}>
                  <_Text text={`${String.fromCharCode(65 + index)}) ${item}`} size={20} lineHeight={20} />
                </View>
              ))
            }
          </View>
        </>
      }
      {status == 0 && <_Button text="Download configuration" px={32} py={10} onPress={uploadConfiguration} filled />}
    </View>
  )
}

export default Configuration