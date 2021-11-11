import {Entity, model, property} from '@loopback/repository';

@model()
export class Jugadores extends Entity {
  @property({
    type: 'string',
  })
  Nombre?: string;

  @property({
    type: 'number',
  })
  Edad?: number;

  @property({
    type: 'string',
  })
  Ciudad?: string;

  @property({
    type: 'string',
  })
  Equipo?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;


  constructor(data?: Partial<Jugadores>) {
    super(data);
  }
}

export interface JugadoresRelations {
  // describe navigational properties here
}

export type JugadoresWithRelations = Jugadores & JugadoresRelations;
