import { Response } from 'express'

class ExpressResponse {
  private readonly response?: Response

  constructor(response: Response) {
    this.response = response
  }

  public send(json: any = null): void {
    this.response!.send(json)
  }

  public status(statusCode: number): ExpressResponse {
    this.response!.status(statusCode)
    return this
  }

  public render(view: string, model: any): void {
    this.response!.render(view, model)
  }
}

export { ExpressResponse }