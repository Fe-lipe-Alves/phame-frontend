import moment from 'moment'

import { Model } from '@/models/foundation/model'

export interface IUser {
  id?: string
  status?: number
  name?: string
  username?: string
  email?: string
  created_at?: moment.Moment
  updated_at?: moment.Moment
}

export class User extends Model implements IUser {
  id?: string
  status?: number
  name?: string
  username?: string
  email?: string
  created_at?: moment.Moment
  updated_at?: moment.Moment

  datetime = ['created_at', 'updated_at']
}
