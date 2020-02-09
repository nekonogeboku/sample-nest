import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { User } from './user/user.entity'

export const dbConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 1234,
  username: 'username',
  password: 'password',
  database: 'database',
  entities: [User],
  synchronize: false,
}
