import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { OauthService } from "./oauth.service";
import { OauthGuard } from "./guard/google-oauth.guard";

@Controller()
export class OauthController {

    constructor(private readonly oauthService: OauthService) { }

    @Get()
    @UseGuards(OauthGuard)
    googleAuth(@Req() req) {

        return this.oauthService.googleAuth()

    }

    @Get('auth/google/callback')
    @UseGuards(OauthGuard)
    googleAuthRedirect(@Req() req) {

        return this.oauthService.googleAuthRedirect(req)

    }

}