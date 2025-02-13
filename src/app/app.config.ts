import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers:  [provideAnimations(),provideToastr({timeOut:900, preventDuplicates:true}),provideRouter(routes, withComponentInputBinding()), provideFirebaseApp(() => initializeApp({"projectId":"crud-5359f","appId":"1:446688529946:web:6caa487721ac5ce7e1cba3","storageBucket":"crud-5359f.firebasestorage.app","apiKey":"AIzaSyC4pR1OhW5xgE5dswlqQnhnfo7tamngMvY","authDomain":"crud-5359f.firebaseapp.com","messagingSenderId":"446688529946","measurementId":"G-YBY3EC4ZB1"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), ]
};


