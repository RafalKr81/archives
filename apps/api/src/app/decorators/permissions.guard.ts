import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const routePermissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler()
    );

    // todo: do we need to check roles - see Auth0 AuthPipline script (it sets up the roles) - maybe unnecessary in my case right now
    //       to see roles display user object
    const userPermissions = context.getArgs()[0].user.permissions;

    if (!routePermissions) {
      return true;
    }

    const hasPermission = () =>
      routePermissions.every((routePermission) =>
        userPermissions.includes(routePermission)
      );

    return hasPermission();
  }
}
