import { createAction, props } from '@ngrx/store';
import { User } from '@shared/models/user.model';

/**
 * ログインアクション.
 */
export const login = createAction(
  '[Login Page] User Login',
  props<{user: User}>()
);

/**
 * ログアウトアクション.
 */
export const logout = createAction(
  '[Top Menu] Logout'
);
