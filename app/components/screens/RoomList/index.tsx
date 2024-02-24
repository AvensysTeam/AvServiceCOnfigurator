import { useState } from "react";
import { ScrollView, View } from "react-native"
import _Button from '../../../shared/core/ui/Button';
import { styles } from "./styles";
import RoomStatus from '../../../shared/static/RoomStatus.json'
import { useApp } from "../../../providers/AppProvider";
import { IRoom } from "../../../types/interface";

const RoomListComponent = ({ navigation }: any) => {

	const { roomList, setRoomNumber, setRoomList } = useApp()
	const [state, setState] = useState<boolean>(false)
	const handleGotoRoom = (index: number) => {
		if (roomList[index].status == RoomStatus.MISSING) {
			setRoomNumber(index)
			navigation.navigate("GeneralSettings", { from: "ROOMLIST" })
		} else {
			navigation.navigate("Upload", {from: "ROOMLIST"})
		}
	}

	const handleNextUnit = () => {
		navigation.navigate("Configuration", { from: "ROOMLIST" })
	}

	return (
		<View style={styles.container}>
			<ScrollView style={{ maxHeight: 500 }}>
				<View style={{ gap: 10, alignItems: 'center' }}>
					{
						roomList
							.filter((item: IRoom) => !state || item.status == RoomStatus.MISSING)
							.map((room: IRoom, index: number) => (
								<View key={index} style={{ width: '70%' }}>
									<_Button
										text={`${room.unitname}`}
										bgColor={
											room.status == RoomStatus.COMPLETED ? "green"
												: room.status == RoomStatus.IGNORED ? "#cc1"
													: room.status == RoomStatus.ABORTED ? "red"
														: "white"
										}
										py={10}
										px={20}
										onPress={() => handleGotoRoom(index)}
										color={room.status == RoomStatus.MISSING ? 'black' : 'white'}
										filled={room.status != RoomStatus.MISSING}
									/>
								</View>
							))
					}
				</View>
			</ScrollView>
			<View style={{ position: 'absolute', bottom: 0, width: '100%', gap: 8 }}>
				<_Button text={state ? "Full room list" : "Missing room list"} bgColor={state ? "#0f0" : "#1b67ff"} py={10} onPress={() => setState(!state)} filled />
				<_Button text={"Next Unit"} bgColor={"#FA0"} py={10} onPress={handleNextUnit} filled />
			</View>
		</View>
	)
}

export default RoomListComponent