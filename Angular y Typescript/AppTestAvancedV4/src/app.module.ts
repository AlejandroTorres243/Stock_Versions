import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { LibroModule } from './libro-module/libro.module';
import {MongooseModule} from '@nestjs/mongoose';


@Module({
  imports: [TypeOrmModule.forRoot(), 
    LibroModule, 
    // MongooseModule.forRoot('mongodb://172.17.0.3/test',{useNewUrlParser:true,useUnifiedTopology:true,connectionName: 'test'})
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
