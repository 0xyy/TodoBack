import { AuthLoginDto } from '../../auth/dto/auth-login.dto';

export type AuthLoginRequest = AuthLoginDto;

export type AuthLoginResponse = Promise<any>;

export type AuthLogoutResponse = Promise<any>;