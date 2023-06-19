import { Azienda } from "./azienda";
import { Risorsa } from "./risorsa";

export interface Commessa {

    id?:number;
    descrizione:string;
    codice:string;
    data_in:Date;
    data_out:Date;
    importo:number;
    azienda:Azienda;
    risorse:Risorsa[];

}
