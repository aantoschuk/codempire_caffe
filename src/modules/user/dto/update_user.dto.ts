import { Role } from 'src/constants/roles';

export class UpdateUserDTO {
  email?: string;

  password?: string;

  full_name?: string;

  avatar?: string;

  role: Role;

  phone?: number;

}
