import Layout from "../../../components/Layout"
import TemperatureComponent from "../../../components/screens/GeneralSettings/Temperature"

const TemperatureScreen = ({navigation}: any) => {
    return (
        <Layout type="base">
            <TemperatureComponent navigation={navigation} />
        </Layout>
    )
}

export default TemperatureScreen