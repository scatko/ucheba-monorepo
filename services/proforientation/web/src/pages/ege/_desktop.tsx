import {NextPage} from 'next'
import * as React from 'react'
import Link from 'next/link'

const desktop: NextPage = () => {
  return (
    <div>
      <h1>Desktop ЕГЭ</h1>
      <Link href='/'>
        <a>Главная</a>
      </Link>
    </div>
  )
}

export default desktop
