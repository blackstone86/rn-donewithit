import * as Updates from 'expo-updates'

export enum EnvironmentType {
  DEV = 'dev',
  STAGING = 'staging',
  PROD = 'prod'
}

const settings = {
  dev: {
    // 本地环境
    environment: EnvironmentType.DEV
  },
  staging: {
    // 预发布环境
    environment: EnvironmentType.STAGING
  },
  prod: {
    // 生产环境
    environment: EnvironmentType.PROD
  }
}

// https://docs.expo.dev/distribution/release-channels/#example-workflow
// expo publish --release-channel staging-v1
// expo publish --release-channel prod-v1
const getCurrentSettings = () => {
  if (__DEV__) return settings.dev
  if (Updates.releaseChannel.startsWith(EnvironmentType.STAGING))
    return settings.staging
  return settings.prod
}

export default getCurrentSettings
