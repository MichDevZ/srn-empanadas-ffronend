import { Module } from '@nestjs/common';
import { EmpanadasModule } from './presentation/modules/empanadas.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [EmpanadasModule, ConfigModule.forRoot({isGlobal: true, envFilePath: ".env"})],
  controllers: [],
  providers: [],
})
export class AppModule {}
