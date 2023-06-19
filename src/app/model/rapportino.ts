import { Commessa } from "./commessa";
import { Risorsa } from "./risorsa";

export interface Rapportino {

    id?:number;
    risorsa:Risorsa;
    commessa:Commessa;
    numeroGiorni:number;

}
