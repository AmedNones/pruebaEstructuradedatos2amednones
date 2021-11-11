import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FutbolDataSource} from '../datasources';
import {Equipos, EquiposRelations} from '../models';

export class EquiposRepository extends DefaultCrudRepository<
  Equipos,
  typeof Equipos.prototype._id,
  EquiposRelations
> {
  constructor(
    @inject('datasources.futbol') dataSource: FutbolDataSource,
  ) {
    super(Equipos, dataSource);
  }
}
