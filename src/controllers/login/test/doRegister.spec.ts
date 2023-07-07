import { Request, Response } from 'express'
import { ERROR_STATUS } from '../../../enums'
import UserModel from '../../../db/mongo/models/user'
import registerHandler from '../doRegister'

describe('Register Handler', () => {
  let req: Partial<Request>
  let res: Partial<Response>
  let statusMock: jest.Mock
  let jsonMock: jest.Mock
  let findOneMock: jest.Mock
  let saveMock: jest.Mock

  beforeEach(() => {
    req = { body: {} }
    statusMock = jest.fn().mockReturnThis()
    jsonMock = jest.fn()
    res = { status: statusMock, json: jsonMock }
    findOneMock = jest.fn()
    saveMock = jest.fn()

    // 模擬 UserModel 函數
    UserModel.findOne = findOneMock
    UserModel.prototype.save = saveMock
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return error if required fields are missing', async () => {
    await registerHandler(req as Request, res as Response)

    expect(statusMock).toBeCalledWith(400)
    expect(jsonMock).toBeCalledWith({
      msg: 'Missing required fields',
      status: ERROR_STATUS.MISSING_FIELD,
      data: null
    })
  })

  it('should return error if password does not match', async () => {
    req.body = {
      name: 'John Doe',
      password: 'password1',
      email: 'john@example.com',
      confirmPassword: 'password2'
    }

    await registerHandler(req as Request, res as Response)

    expect(statusMock).toBeCalledWith(400)
    expect(jsonMock).toBeCalledWith({
      msg: 'Password does not match',
      status: ERROR_STATUS.COMPARE_FAIL,
      data: null
    })
  })

  it('should return error if user already exists', async () => {
    req.body = {
      name: 'John Doe',
      password: 'password',
      email: 'john@example.com',
      confirmPassword: 'password'
    }

    findOneMock.mockResolvedValueOnce({}) // 模擬已存在的用戶

    await registerHandler(req as Request, res as Response)

    expect(statusMock).toBeCalledWith(400)
    expect(jsonMock).toBeCalledWith({
      msg: 'User already exists',
      status: ERROR_STATUS.EXISTED,
      data: null
    })
  })

  it('should save new user and return success message', async () => {
    req.body = {
      name: 'John Doe',
      password: 'password',
      email: 'john@example.com',
      confirmPassword: 'password'
    }

    saveMock.mockResolvedValueOnce({
      _id: 'user-id',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password'
    }) // 模擬保存的新用戶

    await registerHandler(req as Request, res as Response)

    expect(saveMock).toBeCalled()
    expect(statusMock).not.toBeCalled()
    expect(jsonMock).toHaveBeenCalledTimes(1)
  })
})
