import * as React from 'react'

export interface ObjectDevicesComponents {
  mobile: React.ComponentType
  desktop: React.ComponentType
}

export interface PageProps {
  isMobile: boolean
}

interface DevicePage {
  (props: PageProps, devicesComponents: ObjectDevicesComponents): JSX.Element
}

export const getDevicePage: DevicePage = ({isMobile}, devicesComponents) => {
  const PageMobile = devicesComponents.mobile
  const PageDesktop = devicesComponents.desktop

  return <>{isMobile ? <PageMobile /> : <PageDesktop />}</>
}
