import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { ROLES_KEY } from '../decorator/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const requiredRoles: string[] = Reflect.getMetadata(ROLES_KEY, context.getHandler());
        if (!requiredRoles) return true;

        const payload = context.switchToRpc().getData();

        if (payload?.service) {
            return requiredRoles.includes(payload.service.name); 
        }

        const userRoles = Array.isArray(payload.user?.roles) ? payload.user.roles : [payload.user?.roles];

        return userRoles.some(role => requiredRoles.includes(role.name));
    }
}
