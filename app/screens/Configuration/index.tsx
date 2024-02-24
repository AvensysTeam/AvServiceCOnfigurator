import Layout from "../../components/Layout"
import ConfigurationComponent from "../../components/screens/Configuration"

const ConfigurationScreen = ({navigation}: any) => {
    return (
        <Layout type="base">
            <ConfigurationComponent navigation={navigation} />
        </Layout>
    )
}

export default ConfigurationScreen