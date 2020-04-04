import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AppState } from '@core/store/reducers';
import { isLoggedIn } from '@core/store/selectors/auth.selectors';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  /**
   * ログイン中か判定する.
   * ログインしていない場合はログイン画面へ遷移する.
   * @param _ ActivatedRouteSnapshot
   * @param state RouterStateSnapshot
   * @returns true:ログイン中
   */
  canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedIn),
      tap(loggedIn => this.navigateToLoginPage(loggedIn, state))
    );
  }

  /**
   * ログインしていない場合はログイン画面へ遷移する.
   * @param loggedIn ログイン状態
   * @param state　RouterStateSnapshot
   */
  private navigateToLoginPage(loggedIn: boolean, state: RouterStateSnapshot) {
    if (loggedIn) {
      return;
    }

    this.router.navigate(['/login'], {
      queryParams: { redirect: state.url }, replaceUrl: true
    });
  }
}
