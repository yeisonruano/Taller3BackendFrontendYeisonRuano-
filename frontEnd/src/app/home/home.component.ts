import { Component, OnInit } from '@angular/core';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mascotas: MascotaModel[] = []; // Array para almacenar las mascotas

  constructor(private mascotaService: MascotaService) { }

  ngOnInit(): void {
    // Obtener las mascotas al cargar el componente
    this.mascotaService.obtenerMascotas().subscribe(
      (data: MascotaModel[]) => {
        this.mascotas = data;
        console.log(this.mascotas); // Verifica el contenido de las mascotas
      },
      error => {
        console.error('Error al obtener las mascotas', error);
      }
    );
  }
}
