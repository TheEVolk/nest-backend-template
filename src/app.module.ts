import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import HealthController from './controller/health.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true,
      autoLoadEntities: true,
    }),
    // Paste modules
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
