import { Injectable, NestInterceptor, ExecutionContext, BadGatewayException, CallHandler } from "@nestjs/common";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        return throwError(new BadGatewayException('Custom Error Message'));
      }),
    );
  }
}