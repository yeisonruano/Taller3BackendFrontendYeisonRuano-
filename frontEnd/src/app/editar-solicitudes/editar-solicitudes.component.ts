import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from '../shared/solicitud.model'; // Asegúrate de que este modelo esté creado correctamente
import { SolicitudService } from '../shared/solicitud.service'; // Asegúrate de que este servicio esté creado correctamente
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-solicitudes',
  templateUrl: './editar-solicitudes.component.html',
  styleUrls: ['./editar-solicitudes.component.css']
})
export class EditarSolicitudesComponent implements OnInit {

  idSolicitud: number = 0; // Cambia a number
  solicitud: SolicitudModel;

  constructor(
    private solicitudService: SolicitudService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Inicializa la solicitud
    this.solicitud = new SolicitudModel(0, 0, '', '', '', new Date()); // Ajusta según tu modelo
  }

  ngOnInit() {
    this.idSolicitud = Number(this.route.snapshot.params['idSolicitud']); // Convierte a number
    console.log(`El idSolicitud es ${this.idSolicitud}`);

    if (this.idSolicitud) {
      // Viene de Editar
      console.log('La solicitud viene de Editar');
      this.solicitudService.obtenerSolicitud(this.idSolicitud).subscribe({
        next: data => {
          console.log(data);
          // Asegúrate de convertir la fecha a un objeto Date
          data.fechaSolicitud = new Date(data.fechaSolicitud);
          this.solicitud = data;
          console.log(this.solicitud);
        },
        error: err => {
          console.log(`Error ${err}`);
        }
      });
    } else {
      console.log('La solicitud viene de Nueva Solicitud');
    }
  }

  onSubmit() {
    console.log("On Submit");
    console.log("Solicitud a actualizar:", this.solicitud);

    // Viene de Editar
    if (this.solicitud.id) {
      this.solicitudService.actualizarSolicitud(this.solicitud).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/solicitudes']); // Redirige a la lista de solicitudes
        },
        error: err => {
          console.log(`Error al actualizar ${err}`);
        }
      });
    } else {
      // Viene de Nueva Solicitud
      this.solicitudService.agregarSolicitud(this.solicitud).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/solicitudes']); // Redirige a la lista de solicitudes
        },
        error: err => {
          console.log(`Error al Agregar ${err}`);
        }
      });
    }
  }
}
