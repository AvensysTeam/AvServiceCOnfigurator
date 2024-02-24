import Layout from "../../../components/Layout"
import OtherSettingsComponent from "../../../components/screens/GeneralSettings/OtherSettings"

const OtherSettingsScreen = ({navigation}: any) => {
    return (
        <Layout type="base">
            <OtherSettingsComponent navigation={navigation} />
        </Layout>
    )
}

export default OtherSettingsScreen