import { Response } from 'express'

class ExpressResponse {
  public response?: Response

  public send(json: any): void {
    if (this.response) {
      this.response.send(json)
    }
  }
}

export { ExpressResponse }