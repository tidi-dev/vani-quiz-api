import { Strategy } from 'passport-local';

import { comparePassword } from '@/common/functions';
import { UserRepository } from '@/common/repositories';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class UserLocalAuthStrategy extends PassportStrategy(Strategy, 'user') {
  constructor(protected userRepository: UserRepository) {
    super({ usernameField: 'email' });
  }

  async validate(phone_number: string, password: string) {
    const user = await this.userRepository.findByPhoneNumber(phone_number);
    const isValidPassword = await comparePassword(password, user.password);

    if (!user || !isValidPassword) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
