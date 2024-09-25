// Definición de la clase SolicitudModel
export class SolicitudModel {
  // Se permite que cualquier propiedad adicional sea de tipo 'any'
  [x: string]: any;

  constructor(
      public id: number,                        // ID de la solicitud
      public idMascota: number,                 // ID de la mascota relacionada
      public nombreSolicitante: string,         // Nombre del solicitante
      public email: string,                      // Email del solicitante
      public telefonoSolicitante: string,       // Teléfono del solicitante
      public fechaSolicitud: Date = new Date(), // Fecha de la solicitud (por defecto: ahora)
      public estado: string = "pendiente"       // Estado de la solicitud (por defecto: pendiente)
  ) {}
}
