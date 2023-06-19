import { Attachment } from "./attachment";
import { Commessa } from "./commessa";
import { Rapportino } from "./rapportino";

export interface Risorsa {

    id?:number;
    nome:string;
    cognome:string;
    data_in:Date;
    data_out:Date;
    cf:string;
    email:string;
    costoGiornaliero:number;
    cv:Attachment;
    rapportini:Rapportino[];
    commesse:Commessa[];

}
