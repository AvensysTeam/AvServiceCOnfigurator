import { useState } from "react"
import { Image, ScrollView, View } from "react-native"

const SliderComponent = ({ images }: { images: Array<any> }) => {

    const width = 150
    const height = 300

    const [active, setActive] = useState(0)

    const change = ({ nativeEvent }: { nativeEvent: any }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
        )
        if (slide != active) {
            setActive(slide)
        }
    }

    return (
        <View>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={change}
                style={{ width, height }}
            >
                {
                    images.map((image, index) => (
                        <Image
                            key={index}
                            source={image}
                            style={{ width, height, resizeMode: 'cover' }}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default SliderComponent