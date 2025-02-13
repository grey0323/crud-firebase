import { authStateService } from './../share/data-access/auth-state.services';
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { map } from 'rxjs';

export const privateGuard = ():CanActivateFn=>{
    return ( ) =>{

        const router  = inject(Router)
        const authState = inject(authStateService)
        return authState.authState$.pipe(
            map(state =>{
                if(!state){
                    router.navigateByUrl('/auth/sign-in')
                    return false
                }

                return true

            })
        )

    }
}

export const publicGuard = ():CanActivateFn =>{

    return () => {

        const router  = inject(Router)
        const authState = inject(authStateService)
        return authState.authState$.pipe(
            map(state =>{
                console.log(state)
                if(state){
                    router.navigateByUrl('/tasks')
                    
                }

                return true

            })
        )
        
    }
}