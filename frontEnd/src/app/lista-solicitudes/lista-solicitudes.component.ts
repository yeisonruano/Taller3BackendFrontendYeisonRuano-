import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent implements OnInit {
  solicitudes: Observable<SolicitudModel[]> | undefined;

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit() {
    this.solicitudes = this.solicitudService.obtenerSolicitudes();
  }

  borrarSolicitud(idSolicitud: number) {  // Asegúrate de que acepte number
    this.solicitudService.borrarSolicitud(idSolicitud).subscribe({
      next: () => {
        console.log(`Solicitud Eliminada`);
        this.ngOnInit();  // Refresca la lista después de eliminar
      },
      error: (err) => {
        console.error(`Error al eliminar la solicitud: ${err}`);
      }
    });
  }
}
