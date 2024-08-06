import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { OauthModule } from './oauth/oauth.module';

@Module({

  imports: [

    ConfigModule.forRoot({

      isGlobal: true,

      envFilePath: '.env'

    }),

    OauthModule

  ],

})
export class AppModule { }
