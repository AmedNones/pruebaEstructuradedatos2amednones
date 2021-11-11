import {Entity, model, property} from '@loopback/repository';

@model()
export class Estadio extends Entity {
  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  ciudad?: string;

  @property({
    type: 'string',
    id: true,
    generated: true

  })
  _id?: string;


  constructor(data?: Partial<Estadio>) {
    super(data);
  }
}

export interface EstadioRelations {
  // describe navigational properties here
}

export type EstadioWithRelations = Estadio & EstadioRelations;
