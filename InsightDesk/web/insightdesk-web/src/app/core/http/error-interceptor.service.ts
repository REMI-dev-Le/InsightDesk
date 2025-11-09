import { HttpInterceptorFn } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snack = inject(MatSnackBar);

  return next(req).pipe(
    catchError((err) => {
      const msg =
        err?.error?.title ||
        err?.error?.message ||
        err?.message ||
        'Unexpected error';
      snack.open(msg, 'Close', { duration: 4000 });
      return throwError(() => err);
    })
  );
};
