import Main from '@/components/design/main'
import Title from '@/components/design/title'
import Button from '@/components/design/button'
import ClientButton from './client-button'
import Link from 'next/link'

export default function Home() {
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <Title>home</Title>
        <Link className='text-cb-pink hover:underline' href='/pages'>
          pages
        </Link>
        <Button href='https://github.com/b4conjuice/baconponents'>
          external link
        </Button>
        <ClientButton />
        {/* {hello.data?.greeting} */}
      </div>
    </Main>
  )
}
