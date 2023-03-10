import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'

import ActivityListPage from '@/components/templates/ActivityListPage'
import { poppins300 } from '@/fonts/poppinsFont'
import { getAllActivity } from '@/api/activity'
import useActivity from '@/hooks/useActivity'
import { ActivitiesType } from '@/utils/types'
import { PageLoading } from '@/components/atoms/PageLoading'
interface Props {
  activities: ActivitiesType[]
}

const Home: NextPage<Props> = ({ activities }) => {
  const { data: activityData, refetch, isFetching } = useActivity(activities)

  return (
    <>
      <Head>
        <title>Activity List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins300.className}>
        <ActivityListPage
          activities={activityData as ActivitiesType[]}
          refetch={refetch}
        />
        {isFetching && <PageLoading />}
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const activities = await getAllActivity()
  return {
    props: {
      activities: activities,
    },
    revalidate: 1,
  }
}
