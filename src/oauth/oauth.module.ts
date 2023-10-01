import { Module } from "@nestjs/common";
import { OauthController } from "./oauth.controller";
import { OauthService } from "./oauth.service";
import { ConfigModule } from "@nestjs/config";
import { GoogleStrategy } from "./strategy/google.strategy";

@Module({

    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        })
    ],

    controllers: [
        OauthController
    ],

    providers: [
        OauthService,
        GoogleStrategy
    ]

})
export class OauthModule { }