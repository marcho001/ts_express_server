import { Express } from 'express'
import { router as EdmApi } from './api/EdmApi'

export default (app: Express) => {
  app.use('/api', EdmApi)
}
