import { Risorsa } from "./risorsa";

export interface Attachment {

    id?:number;
    fileName:string;
    contentType:string;
    descrizione:string;
    dataCreazione:Date;
    payload:Uint8Array[];
    risorsa:Risorsa;

}
