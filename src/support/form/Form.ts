import type { FForm } from '@/support/form/use-form'

export class Form<TForm>  {
  [key: keyof TForm]: any
  errors: Partial<Record<keyof TForm, string>>

  constructor() {
    this.errors = {}
  }
}
