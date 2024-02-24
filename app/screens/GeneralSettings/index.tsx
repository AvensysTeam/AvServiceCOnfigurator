import GeneralSettingsComponent from "../../components/screens/GeneralSettings"
import Layout from "../../components/Layout"

const GeneralSettingsScreen = ({navigation}: any) => {
    return (
        <Layout type="base">
            <GeneralSettingsComponent navigation={navigation} />
        </Layout>
    )
}

export default GeneralSettingsScreen