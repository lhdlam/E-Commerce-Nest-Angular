import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductEntity } from './product/entities/product.entity';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/entities/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'e-commerce',
      entities: [ProductEntity, UserEntity],
      synchronize: true,
      logging: true,
    }),
    ProductModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, 
  {
    provide: APP_GUARD,
    useClass: RolesGuard
  }],
})
export class AppModule {}
