import { PartialType } from '@nestjs/mapped-types';
import { UserSubscribeDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(UserSubscribeDto) {}
