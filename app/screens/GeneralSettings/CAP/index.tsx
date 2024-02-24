import Layout from "../../../components/Layout"
import CAPComponent from "../../../components/screens/GeneralSettings/CAP"

const CAPScreen = ({navigation}: any) => {
    return (
        <Layout type="base">
            <CAPComponent navigation={navigation} />
        </Layout>
    )
}

export default CAPScreen