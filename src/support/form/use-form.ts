interface FormProps<TForm extends DataType> {
  errors: Partial<Record<keyof TForm, string>>;
  send(): this
}

type DataType = object;

export type FForm<TForm extends DataType> = TForm & FormProps<TForm>;

class Form<TForm extends DataType> implements FormProps<TForm> {
  errors = {}

  constructor(properties: TForm) {
    Object.assign(this, properties)
  }

  send(): this {
    return this
  }
}

function form()

export default function useForm<TForm extends DataType>(data: TForm | (() => TForm)): Form<TForm> {
  if (typeof data === 'function') {
    data = data()
  }

  return new Form<TForm>(data)
}
