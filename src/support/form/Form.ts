import type { UnwrapNestedRefs } from 'vue'
import { reactive } from 'vue'
import type { AxiosResponse } from 'axios'
import { FormEvents } from '@/support/form/FormEvents'

export class Form<TForm extends object> extends FormEvents {
  fields: UnwrapNestedRefs<TForm>
  // @ts-ignore
  errors: UnwrapNestedRefs<Record<keyof TForm, Array<string>>>
  response: AxiosResponse | undefined

  constructor(fields: TForm) {
    super()
    this.fields = reactive(fields)

    const errs: any = {}

    Object.keys(this.fields).forEach((key: string) => {
      errs[key] = []
    })

    this.errors = reactive<Record<keyof TForm, Array<string>>>(errs)
  }

  async send(request: (input: any) => Promise<any>) {
    this.clearErrors()

    return request(this.fields)
      .then((response: AxiosResponse) => {
        this.setResponse(response)
        this.events.onSuccess(response)
        return response
      })
      .catch((error) => {
        const errors = error?.response?.data?.errors

        if (errors) {
          this.setErrors(errors)
          this.events.onError(errors)
        } else {
          this.events.onFail(error)
        }

        return error
      })
      .finally(() => {
        this.events.onFinally()
      })
  }

  private setErrors(errors: object | undefined) {
    if (errors) {
      Object.assign(this.errors, errors)
    }
  }

  private clearErrors() {
    Object.keys(this.errors).forEach((key: string) => {
      // @ts-ignore
      this.errors[key] = []
    })
  }

  private setResponse(response: AxiosResponse) {
    this.response = response
  }
}
