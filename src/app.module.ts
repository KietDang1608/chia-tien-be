import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from './configurations/database.configuration';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MembersModule
    , TypeOrmModule.forRoot(DatabaseConfiguration.getDatabaseConfig()),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
