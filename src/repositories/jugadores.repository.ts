import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FutbolDataSource} from '../datasources';
import {Jugadores, JugadoresRelations} from '../models';

export class JugadoresRepository extends DefaultCrudRepository<
  Jugadores,
  typeof Jugadores.prototype._id,
  JugadoresRelations
> {
  constructor(
    @inject('datasources.futbol') dataSource: FutbolDataSource,
  ) {
    super(Jugadores, dataSource);
  }
}
