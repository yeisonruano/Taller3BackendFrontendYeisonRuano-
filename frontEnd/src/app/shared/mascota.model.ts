export class MascotaModel {
[x: string]: any;
  constructor(
    public id: string,
    public nombre: string,
    public edad: string,
    public especie: string,      
    public raza: string,            
    public descripcion: string,     
    public estado: string,          
    public fecha_registro: string,
    public imagen: string
  ) {}
}
