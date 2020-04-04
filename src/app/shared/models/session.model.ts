import { Auth } from '@shared/enums/auth.enum';

/**
 * セッションのモデル.
 */
export interface Session {
  /** ユーザID. */
  userId: number;

  /** アカウント名. */
  accountName: string;

  /** 所有権限. */
  authe: Auth;
}
