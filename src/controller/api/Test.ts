import { Request, Response } from 'express'
export default {
  index(req: Request, res: Response) {
    const { address = '' } = req.query
    if (!address) {
      res.status(400).json({ message: '請帶網址' })
    }
    if (address === 'https://nocode.pages.dev/trace') {
      res.json({
        data: [
          {
            target: '#banner_1',
            eventId: '1',
            triggerType: 'click',
            eventDetail: ['Banner_1 名稱', 'Banner_1 類別', 'Banner_1 yoyo', 'Banner_1 yayah'],
          },
          {
            target: '#banner_2',
            eventId: '1',
            triggerType: 'click',
            eventDetail: ['Banner_2 名稱', 'Banner_2 類別', 'Banner_2 yoyo', 'Banner_2 yaya'],
          },
          {
            target: '#banner_3',
            eventId: '1',
            triggerType: 'click',
            eventDetail: ['Banner_3 名稱', 'Banner_3 類別', 'Banner_3 yoyo', 'Banner_3 yaya'],
          },
          {
            target: '#nav_1',
            eventId: '9',
            triggerType: 'click',
            eventDetail: ['nav_1 名稱', 'nav_1 類別'],
          },
          {
            target: '#nav_2',
            eventId: '9',
            triggerType: 'click',
            eventDetail: ['nav_2 名稱', 'nav_2 類別'],
          },
          {
            target: '#nav_3',
            eventId: '9',
            triggerType: 'click',
            eventDetail: ['nav_3 名稱', 'nav_3 類別'],
          },
        ],
      })
    }
  },
}
