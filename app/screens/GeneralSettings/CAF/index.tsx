import Layout from "../../../components/Layout"
import CAFComponent from "../../../components/screens/GeneralSettings/CAF"

const CAFScreen = ({navigation}: any) => {
    return (
        <Layout type="base">
            <CAFComponent navigation={navigation} />
        </Layout>
    )
}

export default CAFScreen