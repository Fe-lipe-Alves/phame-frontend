type TErrorField<T> = keyof T

export class ErrorsBag<T> {
  [key: TErrorField<T>]: any

  constructor() {
  }

  public add(field: TErrorField<T>) {
    this[field] = []
  }
}
