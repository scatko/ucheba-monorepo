import {NextPage} from 'next'
import * as React from 'react'
import Link from 'next/link'
import Button from '@ucheba/ui/basic/Button/web/Button@desktop'

const desktop: NextPage = () => {
  return (
    <div>
      <h1>Desktop</h1>
      <Link href='/ege'>
        <a>ЕГЭ</a>
      </Link>
      <Button type='button'>Button desk default</Button>
      <Button type='submit' size='large' color='primary'>
        Button desk primary
      </Button>
    </div>
  )
}

export default desktop
