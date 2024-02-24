import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "../screens/Welcome"
import StartupScreen from "../screens/Startup"
import RoomScreen from "../screens/Room"
import RoomListScreen from "../screens/RoomList"
import LogInScreen from "../screens/Auth/LogIn"
import GeneralSettingsScreen from "../screens/GeneralSettings"
import ConfigurationScreen from "../screens/Configuration"
import FSCScreen from "../screens/GeneralSettings/FSC"
import OtherSettingsScreen from "../screens/GeneralSettings/OtherSettings"
import CAPScreen from "../screens/GeneralSettings/CAP"
import CAFScreen from "../screens/GeneralSettings/CAF"
import CO2Screen from "../screens/GeneralSettings/CO2"
import RHScreen from "../screens/GeneralSettings/RH"
import VOCScreen from "../screens/GeneralSettings/VOC"
import TemperatureScreen from "../screens/GeneralSettings/Temperature"
import UploadScreen from "../screens/Upload"

const RootStack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="LogIn">
                <RootStack.Group screenOptions={{ headerShown: false }}>
                    <RootStack.Screen name="LogIn" component={LogInScreen} />
                </RootStack.Group>
                <RootStack.Group screenOptions={{ headerShown: false }}>
                    <RootStack.Screen name="Welcome" component={WelcomeScreen} />
                    <RootStack.Screen name="Configuration" component={ConfigurationScreen} />
                    <RootStack.Screen name="GeneralSettings" component={GeneralSettingsScreen} />
                    <RootStack.Screen name="Startup" component={StartupScreen} />
                    <RootStack.Screen name="Room" component={RoomScreen} />
                    <RootStack.Screen name="ROOMLIST" component={RoomListScreen} />
                    <RootStack.Screen name="Upload" component={UploadScreen} />
                </RootStack.Group>
                <RootStack.Group screenOptions={{ headerShown: false }}>
                    <RootStack.Screen name="FSC" component={FSCScreen} />
                    <RootStack.Screen name="CAP" component={CAPScreen} />
                    <RootStack.Screen name="CAF" component={CAFScreen} />
                    <RootStack.Screen name="CO2" component={CO2Screen} />
                    <RootStack.Screen name="RH" component={RHScreen} />
                    <RootStack.Screen name="VOC" component={VOCScreen} />
                    <RootStack.Screen name="Temperature" component={TemperatureScreen} />
                    <RootStack.Screen name="OtherSettings" component={OtherSettingsScreen} />
                </RootStack.Group>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator