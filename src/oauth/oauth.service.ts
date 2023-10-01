import { ConflictException, Injectable } from "@nestjs/common";

@Injectable()
export class OauthService {

    async googleAuth() {



    }

    googleAuthRedirect(req: any) {

        if (!req.user) {
            throw new ConflictException('No user from google')
        }

        return { message: 'User Infor from Google', user: req.user }

    }

}