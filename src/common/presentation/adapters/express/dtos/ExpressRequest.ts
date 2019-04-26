import { Request } from 'express'

class ExpressRequest {
  public request?: Request

  public getParams(): any {
    return this.request ? this.request.params : {}
  }
}

export { ExpressRequest }