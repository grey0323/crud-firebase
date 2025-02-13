import { Component, inject } from "@angular/core";
import TaskListComponent from "../../task/features/task-list/task-list.component";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { authStateService } from "../data-access/auth-state.services";

@Component({
    standalone:true,
    selector:'app-layaout',
    imports:[TaskListComponent, RouterModule, RouterLink],
    template:`
    <header class="h-[80px] mb-8 w-full max-w-screen-lg mx-auto px-4">

    <nav class="flex items-center justify-between h-full">
      <a class="text-2x1 font-bold" routerLink="/tasks">Ng Task</a>
    <button (click)="Logout()"
    type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Salir</button>

    </nav>
    </header>
    
    <router-outlet /> 
    
    `,
})
export default class LayaoutComponent{
    private router  = inject(Router)
  private _authState = inject(authStateService)
  
  async Logout(){
    await this._authState.Logout()
    this.router.navigateByUrl('/auth/sign-in')

  }
}