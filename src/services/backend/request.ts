// @ts-ignore
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { Url } from '@/services/backend/url'

export default function request<RequestType, ResponseType>(uri: string) {
  return new Request<RequestType, ResponseType>(uri)
}

export class Request<RequestType, ResponseType> {
  uri: string
  axiosOptions: AxiosRequestConfig

  constructor(uri: string) {
    this.uri = uri

    this.axiosOptions = {
      withCredentials: true,
      withXSRFToken: true,
    }
  }

  public abortController(controller: AbortController) {
    this.axiosOptions.signal = controller.signal
    return this
  }

  public async get(data: object = {}) {
    this.axiosOptions.params = data
    this.axiosOptions.method = 'GET'
    return await this.send()
  }

  public async post(data: object) {
    return await this.bodyRequest('POST', data)
  }

  public async patch(data: object) {
    return await this.bodyRequest('PATCH', data)
  }

  public async put(data: object) {
    return await this.bodyRequest('PUT', data)
  }

  public async delete(data: object = {}) {
    return await this.bodyRequest('DELETE', data)
  }

  private async bodyRequest(method: string, data: object) {
    this.axiosOptions.data = data
    this.axiosOptions.method = method
    return await this.send()
  }

  private headers(): object {
    return {
      'content-type': 'application/json',
      'Accept': 'application/json',
    }
  }

  private send() {
    this.axiosOptions.url = new Url(this.uri).resolve()
    this.axiosOptions.headers = this.headers()

    return axios.request<RequestType, AxiosResponse<ResponseType>>(this.axiosOptions)
  }
}
