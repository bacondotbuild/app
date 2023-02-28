import { type NextPage } from 'next'

import Button from '@/components/design/button'
import Main from '@/components/design/main'
import Title from '@/components/design/title'
import Page from '@/components/page'
import { api } from '@/lib/api'

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <Page>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>home</Title>
          <Button href='https://github.com/b4conjuice/baconponents'>
            external link
          </Button>
          <Button onClick={() => console.log('click')}>button</Button>
          {hello.data?.greeting}
        </div>
      </Main>
    </Page>
  )
}

export default Home
