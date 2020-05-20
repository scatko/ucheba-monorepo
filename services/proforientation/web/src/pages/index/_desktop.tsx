import {NextPage} from 'next'
import * as React from 'react'
import Link from 'next/link'
import Button from '@ucheba/ui/basic/Button/web/desktop'

const Icon = ({type}: {type: string}): JSX.Element => <span>{type}</span>

const desktop: NextPage = () => {
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault()
    console.log('___', e)
  }

  return (
    <div>
      <h1>Desktop</h1>

      <Link href='/ege'>
        <a>ЕГЭ</a>
      </Link>

      <Button type='button' href='/' icon={<Icon type='+' />} onClick={handleClick}>
        Button desk default with icon
      </Button>

      <Button color='primary' size='large' icon={<Icon type='😊' />}>
        Button desk primary
      </Button>
    </div>
  )
}

export default desktop
