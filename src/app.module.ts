import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module'
import { dbConfig } from './db.config'

@Module({
    imports: [
        TypeOrmModule.forRoot(dbConfig),
        UserModule,
    ],
})
export class AppModule {}
