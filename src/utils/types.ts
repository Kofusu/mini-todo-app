import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export interface ActivitiesType {
  id: number
  title: string
  created_at: string
}

export interface ActivityDetailType {
  id: number
  title: string
  created_at: string
  todo_items: TodoItemsType[]
}

export interface TodoItemsType {
  id: number
  title: string
  activity_group_id: number
  is_active: number
  priority: string
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
