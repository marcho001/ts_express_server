import { Express } from 'express'
import apiRoutes from './api/index'

export default (app: Express) => {
  app.use('/api', apiRoutes)
}
