import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class RefreshJwtAuthGuard extends AuthGuard('refresh') {
    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }

    handleRequest(err, user) {
        if (err || !user) {
            console.log("error : Unauthorized"); 
            throw err || new UnauthorizedException();
        }
        console.log('User from Refresh JWT:', user);
        return user;
    }
}