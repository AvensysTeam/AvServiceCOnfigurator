import { useState } from "react"
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Sizing } from "../../../styles"
import { ImageSource } from "../../../shared/static/imgeSource"
import CustomCheckbox from "../../../shared/core/ui/CustomCheckbox"

const LogInComponent = ({navigation}: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = () => {
    navigation.navigate("Welcome", {from: 'LogIn'})
  };

  return (
    <View style={[styles.container]}>
      <ScrollView style={[styles.scrollView, { marginTop: Sizing.vh * 5 }]}>
        <View style={styles.imgView}>
          <Image source={ImageSource.logoW} style={styles.imgLogo} />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.txtTitle}>Login</Text>
          <View style={styles.formView}>
            <View style={styles.formRow}>
              <Text style={styles.txtFlbl}>User Name : </Text>
              <TextInput style={styles.inputTxt} placeholder="" />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.txtFlbl}>Password : </Text>
              <TextInput
                style={styles.inputTxt}
                placeholder=""
                secureTextEntry={true}
              />
            </View>

            <View style={styles.formRow}>
              <CustomCheckbox
                handleCheckBox={handleCheckBox}
                isChecked={isChecked}
                lable="Remember"
              />
            </View>

            <View>
              <TouchableOpacity
                style={styles.signInOpacity}
                onPress={handleLogin}>
                <Text style={styles.signInText}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default LogInComponent