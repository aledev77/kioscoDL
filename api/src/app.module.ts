import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "aledev",
      password: "12345678",
      database: "db_kioscoDL_dev",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true, // Habilita la sincronización automática
    }),
    CategoryModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
