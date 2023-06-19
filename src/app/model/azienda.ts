import { Commessa } from "./commessa";

export interface Azienda {

    id?:number;
    ragioneSociale:string;
    partitaIva:string;
    indirizzo:string;
    commesse:Commessa[];

}
