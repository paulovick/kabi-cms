import 'reflect-metadata'

import KabiApiRouter from "../../../src/api/router/KabiApiRouter";
import {IUsersController} from "../../../src/api/controllers/contracts";

describe('KabiApiRouter', () => {
    let iUsersController: IUsersController
    let kabiApiRouter: KabiApiRouter

    beforeEach(() => {
        iUsersController = new (jest.fn(() => ({
            registerRoutes: jest.fn()
        })))
        kabiApiRouter = new KabiApiRouter(iUsersController)
    })

    describe('registerRoutes', () => {
        it('should call UsersController', () => {
            kabiApiRouter.registerRoutes()

            expect(iUsersController.registerRoutes).toBeCalled()
        })
    })
})