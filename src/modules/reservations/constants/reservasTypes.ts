export interface Asiento {
  id: number;
  idEvento: number;
  idUsuario: number;
  usuario?: string;
  asiento: number;
  ocupado: boolean;
}
