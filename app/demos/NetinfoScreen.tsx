import React from 'react'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppText from '../components/AppText'

function AsyncStorageScreen(props: any) {
  const netInfo = useNetInfo()
  /**
    Object {
      "details": Object {
        "carrier": "T-Mobile",
        "isConnectionExpensive": true,
      },
      "isConnected": true,
      "isInternetReachable": false,
      "isWifiEnabled": true,
      "type": "cellular",
    }
   */
  return (
    <AppSafeAreaView>
      <AppText style={{ fontSize: 30, textAlign: 'center' }}>
        isConnected: {JSON.stringify(netInfo.isConnected)}
      </AppText>
    </AppSafeAreaView>
  )
}

export default AsyncStorageScreen
