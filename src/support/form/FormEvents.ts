import type { AxiosResponse } from 'axios'

type EventCallback = (response: Response) => void
type EventCallbackEmpty = () => void

type Response = AxiosResponse

interface IEvents {
  onError: EventCallback
  onSuccess: EventCallback
  onTest: EventCallback
  onFail: EventCallback
  onFinally: EventCallbackEmpty
}

export class FormEvents {
  events: IEvents = {
    onError: (response: Response): void => {},
    onSuccess: (response: Response): void => {},
    onTest: (response: Response): void => {},
    onFail: (response: Response): void => {},
    onFinally: (): void => {},
  }

  onSuccess(callback: EventCallback) {
    this.events.onSuccess = callback
    return this
  }

  onError(callback: EventCallback) {
    this.events.onError = callback
    return this
  }

  onTest(callback: EventCallback) {
    this.events.onTest = callback
    return this
  }

  onFail(callback: EventCallback) {
    this.events.onFail = callback
    return this
  }

  onFinally(callback: EventCallbackEmpty) {
    this.events.onFinally = callback
    return this
  }
}
