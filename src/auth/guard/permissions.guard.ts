import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSION_KEY } from '../decorator/permissions.decorator';
@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredPermissions = this.reflector.get<string[]>(PERMISSION_KEY, context.getHandler());
        if (!requiredPermissions) return true; 

        const { user } = context.switchToHttp().getRequest();
        const userRoles = user.roles || [];

        const userPermissions: string[] = userRoles.flatMap(role => 
            role.permissions.map(permission => permission.name)
        );

        return requiredPermissions.every(permission => userPermissions.includes(permission));
    }
}
