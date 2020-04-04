import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthActions } from '../actions/action.types';

@Injectable()
export class AuthEffects {

  /**
   * ログイン時、ローカルストレージにログインユーザーの情報を保存する.
   */
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
    ), { dispatch: false }
  );

  /**
   * ログアウト時、ローカルストレージからログインユーザーの情報を削除し、
   * ログイン画面へ遷移する.
   */
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(_ => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login');
      })
    ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router
  ) { }
}
