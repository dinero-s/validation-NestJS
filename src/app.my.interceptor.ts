import {
    CallHandler,
    Injectable,
    NestInterceptor,
    ExecutionContext, InternalServerErrorException,
} from '@nestjs/common';
import {catchError, Observable, tap, throwError} from 'rxjs';

@Injectable()
export class MyInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                tap(() => {
                    console.log({ status: "success", data: context.getClass() });
                }),
                catchError(err => {
                    console.log({ status: "success", data: err });
                    return throwError(new InternalServerErrorException());
                })
            );
    }

}