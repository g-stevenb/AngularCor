export class ReservaLavado {
  // nombre: string;
  // email: string;
  // celular: number;
  // fecha: string;
  // opcAuto: string;
  // opcLavado: string;

  // constructor(n: string, e: string, c: number, f: string, oa: string, ol: string) {
  // this.nombre = n;
  // this.email = e;
  // this.celular = c;
  // this.fecha = f;
  // this.opcAuto = oa;
  // this.opcLavado = ol;
  private selected: boolean;
  constructor(public nombre: string,
    public email: string,
    public celular: number,
    public fecha: string,
    public opcAuto: string,
    public opcLavado: string) { }

  isSelected() {
    return this.selected;
  }

  setSelected(s : boolean) {
    this.selected = s;
  }
}
