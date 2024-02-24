import Layout from "../../components/Layout";
import StartupComponent from "../../components/screens/Startup";

const StartupScreen = ({navigation}: any) => {

    return (
        <Layout type="base">
            <StartupComponent navigation={navigation} />
        </Layout>
    )
}

export default StartupScreen