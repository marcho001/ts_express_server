import { application, Express } from 'express'
import { router as TestApi } from './api/TestApi'
import { router as EdmApi } from './api/EdmApi'

export default (app: Express) => {
  app.use('/', TestApi)
  app.use('/', EdmApi)
}
