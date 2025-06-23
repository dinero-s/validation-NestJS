import {
    CallHandler,
    Injectable,
    NestInterceptor,
    ExecutionContext,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log(
            {
                status: "success",
                data: context.getClass()
            });
        return next.handle();
    }

}