import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        console.log('Incoming Headers:', request.headers);
        return super.canActivate(context);
    }

    handleRequest(err, user, info) {
        if (err || !user) {
            console.log('Error:', err);
            console.log('Info:', info);
            console.log('User:', user);
            throw err || new UnauthorizedException();
        }
        console.log('User profile from Google OAuth:', user);
        return user;
    }
}