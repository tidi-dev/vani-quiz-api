import { PASSWORD_REGEX, PHONE_NUMBER_REGEX } from '@/common/constants';
import { UniquePhoneNumber } from '@/core/validators';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty()
  @UniquePhoneNumber()
  @Matches(PHONE_NUMBER_REGEX, {
    message: 'phone_number is NOT valid Vietnamese phone number format',
  })
  phone_number: string;

  @ApiProperty({ example: 'p@ssword123' })
  @Matches(PASSWORD_REGEX, {
    message:
      'Password must contain character, number, special character and at least characters',
  })
  password: string;
}
