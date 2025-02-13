import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../data-acces/auth.service';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';


interface formSignin{
  email: FormControl<string | null>;
  password:FormControl<string | null>;
}
@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink,GoogleButtonComponent],
  templateUrl: './sing-in.component.html',
  styles: ``
})
export default class SingInComponent {

  private _route = inject(Router)
  private _formbuilder = inject(FormBuilder)
  private _authServices = inject(AuthService)

  form = this._formbuilder.group<formSignin>({
    email: this._formbuilder.control('', [Validators.required, Validators.email]),
    password: this._formbuilder.control('', Validators.required)
  })

  async submit(){
    try{
      const{email, password} = this.form.value
      if (!email || !password) return;
      await this._authServices.sigin({email, password})
      this._route.navigateByUrl("/tasks")
      
    }catch(error){

    }
  }

  async submitGoogle(){
    try{
      await this._authServices.siginiwitgoogle();
      this._route.navigateByUrl("/tasks")
    }catch(error){
      
    }
  }

}
