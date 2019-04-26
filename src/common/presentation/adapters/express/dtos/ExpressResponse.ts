import { Response } from 'express'

class ExpressResponse {
  public response?: Response

  public send(json: any = null): void {
    if (this.response) {
      this.response.send(json)
    }
  }

  public status(statusCode: number): ExpressResponse {
    if (this.response) {
      this.response.status(statusCode)
    }
    return this
  }
}

export { ExpressResponse }