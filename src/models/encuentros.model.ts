import {Entity, model, property} from '@loopback/repository';

@model()
export class Encuentros extends Entity {
  @property({
    type: 'string',
  })
  Estadio?: string;

  @property({
    type: 'string',
  })
  Equipo?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,

  })
  _id: string;


  constructor(data?: Partial<Encuentros>) {
    super(data);
  }
}

export interface EncuentrosRelations {
  // describe navigational properties here
}

export type EncuentrosWithRelations = Encuentros & EncuentrosRelations;
