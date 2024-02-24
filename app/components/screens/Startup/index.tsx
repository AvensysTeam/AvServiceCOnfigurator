import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native"
import { styles } from "./styles";

import { useApp } from "../../../providers/AppProvider";
import _Text from '../../../shared/core/ui/Text';
import _Input from '../../../shared/core/ui/Input';
import _Button from '../../../shared/core/ui/Button';
import RoomStatus from '../../../shared/static/RoomStatus.json'

const StartupComponent = ({ navigation }: any) => {

    const { setRoomList, setRoomNumber } = useApp()
    const [roomCount, setRoomCount] = useState(10)

    const ArrangeRoom = () => {
        setRoomCount(roomCount)
        let temp = []
        for (let i = 0; i < roomCount; i++) {
            temp.push({ 
                number: i,
                status: RoomStatus.MISSING,
                CO2: {
                    threshold: "500",
                    boost: "100"
                },
                RH: {
                    threshold: "50",
                    boost: "100"
                },
                VOC: {
                    threshold: "200",
                    boost: "100"
                }
            })
        }
        setRoomList(temp)
    }

    const handleGotoRoom = (index: number) => {
        setRoomNumber(index)
        navigation.navigate("Configuration", { from: "Startup" })
    }

    useEffect(() => {
        ArrangeRoom()
    }, [])

    return (
        <View>
            {/* <View style={styles.header}>
                <_Text text="Input Room Quantity" size={20} lineHeight={20} />
                <View style={styles.room_qty}>
                    <_Input value={roomQty} setValue={setRoomQty} width={'70%'} />
                    <_Button text="GET" px={20} py={10} onPress={ArrangeRoom} filled />
                </View>
            </View> */}
            <ScrollView style={styles.scrollview_container}>
                <View style={styles.room_container}>
                    {
                        [...Array(roomCount)].map((_, index) => (
                            <_Button key={index} text={`ROOM ${index + 1}`} color="blue" py={10} onPress={() => handleGotoRoom(index)} />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default StartupComponent