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
