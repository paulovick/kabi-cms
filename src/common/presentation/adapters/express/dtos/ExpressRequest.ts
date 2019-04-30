import { Request } from 'express'

class ExpressRequest {
  private readonly request?: Request
  private readonly extraParams?: any

  constructor(request: Request) {
    this.request = request
    this.extraParams = {}
  }

  public getParams(): any {
    return this.request ? { ...this.request.params, ...this.extraParams } : this.extraParams
  }
  
  public setParam(paramName: string, value: any): void {
    this.extraParams[paramName] = value
  }
}

export { ExpressRequest }