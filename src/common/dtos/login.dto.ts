import { PHONE_NUMBER_REGEX } from '@/common/constants';
import { hashPassword } from '@/common/functions';
import { ExistingPhoneNumber } from '@/core/validators';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { Matches } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @ExistingPhoneNumber()
  @Matches(PHONE_NUMBER_REGEX, {
    message: 'phone_number is NOT valid Vietnamese phone number format',
  })
  phone_number: string;

  @ApiProperty({ example: 'p@ssword123' })
  @Transform(({ value }) => hashPassword(value))
  password: string;
}
