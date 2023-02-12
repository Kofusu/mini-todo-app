import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { poppins300 } from '@/fonts/poppinsFont'
import { getAllActivity, getOneActivity } from '@/api/activity'
import useTodo from '@/hooks/useTodoList'
import ActivityDetailPage from '@/components/templates/ActivityDetailPage'
import { ActivitiesType, ActivityDetailType } from '@/utils/types'
import { PageLoading } from '@/components/atoms/PageLoading'

interface Props {
  activityDetail: ActivitiesType
}

interface IParams extends ParsedUrlQuery {
  activityGroupId: string
}

const ActivityDetail: NextPage<Props> = ({ activityDetail }) => {
  const { data: activity, isFetching } = useTodo(
    activityDetail as ActivityDetailType
  )

  return (
    <>
      <Head>
        <title>To Do List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins300.className}>
        <ActivityDetailPage activity={activity as ActivityDetailType} />
        {isFetching && <PageLoading />}
      </main>
    </>
  )
}

export default ActivityDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const activities = (await getAllActivity()) as ActivitiesType[]
  const activitiesId = activities.map((activity) => {
    return {
      params: { activityGroupId: `${activity.id}` },
    }
  })

  return {
    paths: activitiesId,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { activityGroupId } = context.params as IParams
  const activityDetail = await getOneActivity(+activityGroupId)

  return {
    props: {
      activityDetail,
    },
    revalidate: 1,
  }
}
