import { useEffect, useState } from 'react'
import * as Location from 'expo-location'

type LocationType = {
  latitude: number
  longitude: number
}

const useLocation = (): LocationType => {
  const initLocation: LocationType = {
    latitude: 37.4219983,
    longitude: -122.084
  }
  const [location, setLocation] = useState<LocationType>(initLocation)
  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync()
    if (!granted) return
    // let {
    //   coords: { latitude, longitude }
    // } = await Location.getCurrentPositionAsync({
    //   accuracy: Location.Accuracy.Highest // 模拟器可以，小米11 Ultra失败
    // })
    let pos = await Location.getLastKnownPositionAsync()
    let { latitude, longitude } = pos?.coords || initLocation
    setLocation({ latitude, longitude })
  }
  useEffect(() => {
    getLocation()
  }, [])
  return location
}

export default useLocation
