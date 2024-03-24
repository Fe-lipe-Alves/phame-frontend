// @ts-ignore
import _ from 'lodash'

export class Url {
  domain: string

  constructor(
    public url: string,
    public protocol?: 'http' | 'https'
  ) {
    this.url = _.trimStart(this.url, '/')

    this.domain = import.meta.env.VITE_BACKEND_URL
    this.domain = _.trimEnd(this.domain, '/')

    if (!this.protocol) {
      const match = this.domain.match(/(http(s?))/i)
      this.protocol = _.get(match, 0) ?? 'http'
    }

    this.domain = this.domain.replace(/(http(s?):\/\/)/i, '')
  }

  resolve() {
    return `${this.protocol}://${this.domain}/${this.url}`
  }
}
