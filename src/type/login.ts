import { User } from './user'

export type LoginReqBody = Omit<User, 'name'>
export interface RegisterReqBody extends User {
  confirmPassword: string
}
