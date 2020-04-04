import { Auth } from '@shared/enums/auth.enum';

/**
 * ユーザーモデル.
 */
export interface User {
  /** ID. */
  id: number;

  /** メールアドレス. */
  email: string;

  /** 権限. */
  auth: Auth;
}
