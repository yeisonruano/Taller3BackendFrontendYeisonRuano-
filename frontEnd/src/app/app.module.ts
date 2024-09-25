import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { MascotaService } from './shared/mascota.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EditarSolicitudesComponent } from './editar-solicitudes/editar-solicitudes.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMascotasComponent,
    EditarMascotasComponent,
    HomeComponent,
    EditarSolicitudesComponent,
    ListaSolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    MascotaService,
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
