import Layout from "../../../components/Layout"
import CO2Component from "../../../components/screens/GeneralSettings/CO2"

const CO2Screen = ({navigation}: any) => {
    return (
        <Layout type="base">
            <CO2Component navigation={navigation} />
        </Layout>
    )
}

export default CO2Screen