import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { HomeComponent } from './home/home.component'; 
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component'; 
import { EditarSolicitudesComponent } from './editar-solicitudes/editar-solicitudes.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a home por defecto
  { path: 'home', component: HomeComponent }, // Ruta para el componente Home
  { path: 'mascotas', component: ListaMascotasComponent }, // Lista de Mascotas
  { path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent }, // Editar Mascota por ID
  { path: 'mascotas/agregar', component: EditarMascotasComponent }, // Agregar Mascota
   
  { path: 'solicitudes/agregar', component: EditarSolicitudesComponent }, // Lista de Solicitudes

  { path: 'solicitudes', component: ListaSolicitudesComponent }, // Lista de Solicitudes
  { path: 'solicitudes/editar/:idSolicitud', component: EditarSolicitudesComponent }, // Editar Solicitud por ID
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // Redirige cualquier ruta no encontrada a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
