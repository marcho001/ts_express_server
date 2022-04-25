import { Router } from 'express'

const router: Router = Router()

router.get('/mjml', (req, res) => {
  res.send('test mjml file')
})


export { router }