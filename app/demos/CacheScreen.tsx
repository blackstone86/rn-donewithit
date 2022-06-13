import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppText from '../components/AppText'
import AppSafeAreaView from '../components/AppSafeAreaView'
import logger from '../utils/logger'
import cache from '../utils/cache'

type Person = {
  id: number
}

const me: Person = {
  id: 1
}

const getPerson = async () => {
  try {
    // await cache.store('person', me)
    const person = cache.get('person')
    return person
  } catch (err) {
    logger.log(err)
    return null
  }
}

function AsyncStorageScreen(props: any) {
  const [person, setPerson] = useState<Person>()
  useEffect(() => {
    getPerson().then((res) => {
      setPerson(res)
    })
  }, [])

  return (
    <AppSafeAreaView>
      <AppText style={{ fontSize: 30, textAlign: 'center' }}>
        Person: {person?.id || 'null'}
      </AppText>
    </AppSafeAreaView>
  )
}

export default AsyncStorageScreen
