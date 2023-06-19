import { Component, OnInit } from '@angular/core';
import { AziendaService } from '../azienda.service';
import { Router } from '@angular/router';
import { Azienda } from 'src/app/model/azienda';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-azienda-insert',
  templateUrl: './azienda-insert.component.html',
  styleUrls: ['./azienda-insert.component.css']
})
export class AziendaInsertComponent implements OnInit {

  constructor(private aziendaService: AziendaService, private router: Router) { }

  aziendaInsert: Azienda = {
    id:undefined,
    ragioneSociale:'',
    partitaIva:'',
    indirizzo:'',
    commesse:[]
  }
  errorMessage: string = '';

  ngOnInit(): void {}

  save(aziendaForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.aziendaInsert));
    if (aziendaForm.valid) {
      this.aziendaService.add(this.aziendaInsert).subscribe({
        next: aziendaItem => this.aziendaInsert = aziendaItem,
        complete: () => this.router.navigate([`azienda/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }
}
