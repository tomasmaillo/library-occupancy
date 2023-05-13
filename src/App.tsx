import React from 'react'
import styled from 'styled-components'
import { TextColor } from './common/colors'
import {
  LibraryDataContextProvider,
  useLibraryData,
} from './LibraryData/LibraryDataContext'
import TimeAxis from './TimeAxis'
import { Header } from './Header'

import { Footer } from './Footer'
import ThemeUpdater from './ThemeUpdater'
import { Loading } from './Loading'

import Days from './Days'
import { QandA } from './QandA'
import { Notification } from './Notification'
import { AnimatePresence, motion } from 'framer-motion'

const PageWrapper = styled.main`
  width: 100vw;
  overflow-x: hidden;
  margin: auto;
  color: ${TextColor};
  transition: 0.5s;
`

const Page = () => {
  const { currentData } = useLibraryData()

  return (
    <>
      <Loading
        isLoading={currentData?.lastMeasurement.percentage ? true : false}
      />

      <PageWrapper>
        <Notification />
        <Header />
        <TimeAxis />
        <Days />
        <QandA />
        <Footer />
      </PageWrapper>
    </>
  )
}

const App = () => (
  <LibraryDataContextProvider>
    <ThemeUpdater />
    <Page />
  </LibraryDataContextProvider>
)

export default App
