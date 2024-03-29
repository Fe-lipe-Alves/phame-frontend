import moment from 'moment'
import { Relation } from '@/models/foundation/relation'
import _ from 'lodash'

export class Model {
  [key: string]: any

  datetime: string[] = []
  relationships: { [key: string]: Relation | Relation[] } = {}
  _hiddenProperties: string[] = []

  constructor() {
    Object.getOwnPropertyNames(this).map((prop) => this._hiddenProperties.push(prop))
  }

  relation(model: Model, foreign?: string): Relation {
    return new Relation(model, foreign)
  }

  fill(data: any) {
    this.fillDatetime(data)
    this.fillProperties(data)
    this.fillRelationships(data)

    return this
  }

  private fillProperties(data: object) {
    const keys = Object.getOwnPropertyNames(this).filter((prop) => {
      return !this.datetime.includes(prop) && !this._hiddenProperties.includes(prop)
    })

    keys.map((property) => {
      const value = _.get(data, property, undefined)
      _.set(this, property, value)
    })
  }

  private fillDatetime(data: any) {
    this.datetime.map((property) => {
      if (_.get(data, property)) {
        const value = _.get(data, property)
        _.set(this, property, moment(value))
      }
    })
  }

  private fillRelationships(data: any) {
    Object.keys(this.relationships).map((relationName) => {
      if (_.get(data, relationName)) {
        const relation: Relation | Relation[] = this.relationships[relationName]

        if (relation instanceof Relation) {
          // @ts-ignore
          this[relationName] = new relation.model().fill(data[relationName])
        } else if (Array.isArray(relation)) {
          this[relationName] = data[relationName].map((item: object) =>
            // @ts-ignore
            new relation[0].model().fill(item)
          )
        }
      }
    })
  }
}
