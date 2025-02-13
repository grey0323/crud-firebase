import { User } from '@angular/fire/auth';
import { USer } from './../../data-acces/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../data-acces/auth.service';
import { from } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { GoogleButtonComponent } from "../../ui/google-button/google-button.component";
import { ToastrService } from 'ngx-toastr';

interface formSigup{
  email: FormControl<string | null>;
  password:FormControl<string | null>;
}
@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, GoogleButtonComponent],
  templateUrl: './sing-up.component.html',
})
export default class SingUpComponent {
  toast = inject(ToastrService)
  private _route = inject(Router)
  private _formbuilder = inject(FormBuilder)
  private _authServices = inject(AuthService)

  form = this._formbuilder.group<formSigup>({
    email: this._formbuilder.control('', [Validators.required, Validators.email]),
    password: this._formbuilder.control('', Validators.required)
  })

  async submit(){
    try{
      const{email, password} = this.form.value
      if (!email || !password) return;
      await this._authServices.signUP({email, password})
      this.toast?.success("Successfully registered user", "Success");
      
    }catch(error){

    }
  }

  async submitGoogle(){
    try{
      await this._authServices.siginiwitgoogle();
      
    }catch(error){
      
    }
  }



  
  
}
