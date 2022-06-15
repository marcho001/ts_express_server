import { application, Express } from 'express'
import { router as CdpTestApi } from './api/CdpTestApi'
import { router as EdmApi } from './api/EdmApi'

export default (app: Express) => {
  app.use('/', CdpTestApi)
  app.use('/', EdmApi)
}
