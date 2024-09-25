import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudModel } from './solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  BASE_URL = 'http://localhost:4000';  // Cambia la URL según tu configuración

  constructor(private http: HttpClient) { }

  // Lista completa de Solicitudes
  obtenerSolicitudes() {
    return this.http.get<SolicitudModel[]>(`${this.BASE_URL}/solicitudes/buscar`);
  }

  // Buscar una solicitud por ID
  obtenerSolicitud(idSolicitud: number) {
    return this.http.get<SolicitudModel>(`${this.BASE_URL}/solicitudes/buscar/${idSolicitud}`);
  }

  // Crear una solicitud
  agregarSolicitud(solicitud: SolicitudModel) {
    return this.http.post<string>(`${this.BASE_URL}/solicitudes/crear`, solicitud);
  }

  // Actualizar una solicitud
  actualizarSolicitud(solicitud: SolicitudModel) {
    return this.http.put<string>(`${this.BASE_URL}/solicitudes/actualizar/${solicitud.id}`, solicitud);
  }

  // Eliminar una solicitud
  borrarSolicitud(idSolicitud: number) {  // Manejar número
    return this.http.delete<string>(`${this.BASE_URL}/solicitudes/eliminar/${idSolicitud}`);
  }
}
