import { useState } from 'react';
import { View } from 'react-native';
import { styles } from "./styles"
import _Text from '../../../shared/core/ui/Text';
import _Button from '../../../shared/core/ui/Button';
import Positioning from '../../Room/positioning';
import { useApp } from '../../../providers/AppProvider';

const RoomComponent = ({navigation}: any) => {

  const { roomNumber, roomList } = useApp()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <_Text text={`${roomList[roomNumber].unitname}`} size={24} lineHeight={30} />
      </View>
      <Positioning navigation={navigation} roomNumber={roomNumber} />
    </View>
  )
}

export default RoomComponent