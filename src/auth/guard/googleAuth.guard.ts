import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

    @Injectable()
    export class GoogleAuthGuard extends AuthGuard('google') {
        canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }

    handleRequest(err, user) {
        if (err || !user) {
            console.log("error : Unauthorized"); 
            throw err || new UnauthorizedException();
        }
        console.log('User from google auth:', user); 
        return user;
    }
}