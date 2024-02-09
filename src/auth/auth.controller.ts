import { LoginDto, RegisterDto } from '@/common/dtos';
import { LoginResponse } from '@/common/responses';
import { Public } from '@/core/decorators';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(protected readonly authService: AuthService) {}

  @Post('login')
  @Public()
  @ApiOkResponse({ type: LoginResponse, status: HttpStatus.CREATED })
  loginAdmin(@Body() loginDto: LoginDto): LoginResponse {
    return this.authService.login(loginDto);
  }

  @Post('register')
  @Public()
  @ApiOkResponse({ type: LoginResponse, status: HttpStatus.CREATED })
  register(@Body() registerDto: RegisterDto): any {
    return this.authService.register(registerDto);
  }
}
