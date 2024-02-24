import Layout from "../../../components/Layout"
import FSCComponent from "../../../components/screens/GeneralSettings/FSC"

const FSCScreen = ({navigation}: any) => {
    return (
        <Layout type="base">
            <FSCComponent navigation={navigation} />
        </Layout>
    )
}

export default FSCScreen