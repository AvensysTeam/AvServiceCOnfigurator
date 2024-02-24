import { createContext, useContext, useMemo, useState } from "react"
import { IRoom } from "../types/interface"

const AppContext: any = createContext(null)

const AppProvider = ({children}: any) => {
    const [projectName, setProjectName] = useState<string>("")
    const [roomList, setRoomList] = useState<IRoom[]>([])
    const [roomNumber, setRoomNumber] = useState<number>(-1)

    const value = useMemo(
        () => ({
            projectName,
            setProjectName,
            roomList,
            setRoomList,
            roomNumber,
            setRoomNumber
        }),
        [
            projectName,
            setProjectName,
            roomNumber,
            setRoomNumber,
            roomList,
            setRoomList
        ]
    )

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
    const context: any = useContext(AppContext)
    if (!context) {
        throw new Error("useApp must used within AppProvider")
    }
    return context
}

export default AppProvider