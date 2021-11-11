import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'futbol',
  connector: 'mongodb',
  url: 'mongodb+srv://amednones:amednones@cluster0.eyukb.mongodb.net/PROYECTOO',
  host: 'cluster0.eyukb.mongodb.net',
  port: 27017,
  user: 'amednones',
  password: 'amednones',
  database: ' PROYECTO0',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class FutbolDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'futbol';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.futbol', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
