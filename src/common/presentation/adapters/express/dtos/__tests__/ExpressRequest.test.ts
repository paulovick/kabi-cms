import { ExpressRequest } from '../ExpressRequest'
import { Request } from 'express'

describe('[COMMON] ExpressRequest', () => {

    let request: ExpressRequest

    beforeEach(() => {
        request = new ExpressRequest(new (jest.fn<Request, []>()))
    })

    it('getParams & setParam', () => {
        request.setParam('id', 1)
        const params = request.getParams()

        expect(params).not.toBeNull()
        expect(params.id).not.toBeNull()
        expect(params.id).toBe(1)
    })
})