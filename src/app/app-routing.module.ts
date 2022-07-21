import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { LoginComponent } from './components/login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTemaComponent } from './components/agregar-tema/agregar-tema.component';
import { AgregarActividadComponent } from './components/agregar-actividad/agregar-actividad.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'alumnos',component:AlumnosComponent},
  {path:'administrador',component:AdministradorComponent},
  {path:'instructor',component:InstructorComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'signup',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'agregar-tema',component:AgregarTemaComponent},
  {path:'agregar-actividad',component:AgregarActividadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
