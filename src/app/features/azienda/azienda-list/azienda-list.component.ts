import { Component, OnInit } from '@angular/core';
import { AziendaService } from '../azienda.service';
import { Subscription } from 'rxjs';
import { Azienda } from 'src/app/model/azienda';

@Component({
  selector: 'app-azienda-list',
  templateUrl: './azienda-list.component.html',
  styleUrls: ['./azienda-list.component.css']
})
export class AziendaListComponent implements OnInit {

  constructor(private aziendaService: AziendaService) { }

  subscription?: Subscription;

  listaAziende: Azienda[] = [];

  ngOnInit(): void {
    this.subscription = this.aziendaService.getAll()
      .subscribe(listaAziende => { this.listaAziende = listaAziende })
  }

  ngOnDestroy(): void {
    // Annulla la sottoscrizione per evitare memory leak
    this.subscription?.unsubscribe();
  }

}
