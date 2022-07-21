import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { HomeComponent } from './components/home/home.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavInstructorComponent } from './components/nav-instructor/nav-instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    AlumnosComponent,
    InstructorComponent,
    HomeComponent,
    NavegacionComponent,
    PiePaginaComponent,
    RegistroComponent,
    NavInstructorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
