import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css' ]  // Corrección aquí
})
export class ListaMascotasComponent implements OnInit {
  mascotas: Observable<MascotaModel[]> | undefined;

  constructor(private mascotaService: MascotaService) {}

  ngOnInit() {
    this.mascotas = this.mascotaService.obtenerMascotas();
  }

  borrarMascota(idMascota: string) {
    this.mascotaService.borrarMascota(idMascota).subscribe({
      next: () => {
        console.log(`Registro Eliminado`);
        this.ngOnInit();  // Refresca la lista
      },
      error: (err) => {
        console.error(`Error al eliminar Registro: ${err}`);  // Mejor manejo de error
      }
    });
  }
}
