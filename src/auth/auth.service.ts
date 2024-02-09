import type { LoginDto, RegisterDto } from '@/common/dtos';
import { decryptPhone, encryptPhone } from '@/common/functions';
import { UserRepository } from '@/common/repositories';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}

  login(loginDto: LoginDto) {
    return {
      access_token: this.jwtService.sign(loginDto),
    };
  }

  async register(registerDto: RegisterDto) {
    registerDto['phone_number'] = encryptPhone(registerDto.phone_number);
    const user = await this.userRepository.createUser(registerDto);
    console.log('decrypt', decryptPhone(user.phone_number));
    return {
      access_token: this.jwtService.sign({ user }),
      user,
      decrypt: decryptPhone(user.phone_number),
    };
  }
}
