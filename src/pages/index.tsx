import {
    mdiAccountMultiple,
    mdiCartOutline,
    mdiChartPie,
    mdiChartTimelineVariant,
    mdiGithub,
    mdiMonitorCellphone,
    mdiReload,
    mdiSemanticWeb,
} from '@mdi/js'

import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import BaseButton from '../components/BaseButton'
import DashBoardMathematical from '../layouts/DashBoardMathematical'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBoxWidget from '../components/CardBoxWidget'
import { useSampleClients, useSampleTransactions } from '../hooks/sampleData'
import CardBoxTransaction from '../components/CardBoxTransaction'
import { Client, Transaction } from '../layouts/interfaces'
import CardBoxClient from '../components/CardBoxClient'
import SectionBannerStarOnGitHub from '../components/SectionBannerStarOnGitHub'
import CardBox from '../components/CardBox'
import { sampleChartData } from '../components/ChartLineSample/config'
import ChartLineSample from '../components/ChartLineSample'
import NotificationBar from '../components/NotificationBar'
import TableSampleClients from '../components/TableSampleClients'
import { useAppDispatch } from '../stores/hooks'
import { pushMessage } from '../stores/snackBarSlice'
import { getPageTitle } from '../layouts/config/properties'

const DashboardMathematical = () => {

  const { clients } = useSampleClients()
  const { transactions } = useSampleTransactions()
  const clientsListed = clients.slice(0, 4)
  const [chartData, setChartData] = useState(sampleChartData())

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault()

    setChartData(sampleChartData())
  }

  const [isWelcomePushed, setIsWelcomePushed] = useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isWelcomePushed) {
      setIsWelcomePushed(true)

      dispatch(
          pushMessage({
            text: 'Welcome. This is demo',
            color: 'contrast',
            lifetime: 3000,
          })
      )
    }
  }, [isWelcomePushed, dispatch])

  return (
      <>
        <Head>
          <title>{getPageTitle('Dashboard')}</title>
        </Head>
        <SectionMain>
          <SectionTitleLineWithButton icon={mdiSemanticWeb} title="" main>
            <BaseButton
                href="https://github.com/josedanielhernandezosorio"
                target="_blank"
                icon={mdiGithub}
                label="Star on GitHub"
                color="contrast"
                roundedFull
                small
            />
          </SectionTitleLineWithButton>

        </SectionMain>
      </>
  )
}

DashboardMathematical.getLayout = function getLayout(page: ReactElement) {
  return <DashBoardMathematical>{page}</DashBoardMathematical>
}

export default DashboardMathematical
