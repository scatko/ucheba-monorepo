import {NextPage} from 'next'
import dynamic from 'next/dynamic'
import {
  ObjectDevicesComponents,
  getDevicePage,
  PageProps,
} from '@ucheba/utils/helpers/next'

const devicesComponents: ObjectDevicesComponents = {
  mobile: dynamic(() => import('./_mobile')),
  desktop: dynamic(() => import('./_desktop')),
}
const IndexPage: NextPage<PageProps> = props => {
  return getDevicePage(props, devicesComponents)
}

export default IndexPage
