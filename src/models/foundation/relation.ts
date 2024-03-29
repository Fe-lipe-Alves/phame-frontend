import type { Model } from '@/models/foundation/model'

export class Relation {
  constructor(
    public model: Model,
    public foreign?: string
  ) {
    if (!foreign) {
      this.foreign = model.name.toLowerCase()
    }
  }
}
