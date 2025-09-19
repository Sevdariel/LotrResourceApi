import { HttpInterceptorFn } from "@angular/common/http";
import { environment } from "../../environment";

export const lotrApiAuthInterceptor: HttpInterceptorFn = (req, next) => {
    const apiKey = environment.apiKey;

    const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${apiKey}`)
    });

    return next(authReq);
}
