import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';
import { Settings } from '../settings';

@Injectable()
export class Auth0JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${Settings.auth.auth0.issuer}.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: `${Settings.auth.auth0.audience}`,
      issuer: `${Settings.auth.auth0.issuer}`,
      algorithms: [`${Settings.auth.auth0.algorithm}`],
    });
  }

  validate(payload: unknown): unknown {
    return payload;
  }
}
