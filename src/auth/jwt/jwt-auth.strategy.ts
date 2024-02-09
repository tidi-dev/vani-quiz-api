import { UserRepository } from '@/common/repositories';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    protected userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(
    phone_number: string,
    password: string,
  ): Promise<Partial<User>> {
    // const isValidPassword = await comparePassword(password, admin?.password);

    const user = await this.userRepository.findOneBy({
      phone_number,
      password,
    });

    if (!user) throw new UnauthorizedException();

    return user;
  }
}
