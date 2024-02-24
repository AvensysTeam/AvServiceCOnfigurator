import { View } from "react-native"
import Layout from "../../Layout"
import _Button from '../../../shared/core/ui/Button';
import { styles } from "./styles";
import Role from '../../../shared/static/Role.json'

const WelcomeComponent = ({ navigation }: any) => {

    let user_role = Role.Service

    const startUnitTest = () => { }
    const startupProcedure = () => {
        navigation.navigate("Configuration", { from: "Welcome" })
    }

    return (
        <View style={styles.btn_group}>
            {user_role == Role.Service && <_Button text="Unit test procedure" py={10} onPress={startUnitTest} filled />}
            <_Button text="Start up procedure" py={10} onPress={startupProcedure} filled />
        </View>
    )
}

export default WelcomeComponent