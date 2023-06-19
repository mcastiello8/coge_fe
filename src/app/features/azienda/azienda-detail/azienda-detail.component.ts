import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AziendaService } from '../azienda.service';
import { Azienda } from 'src/app/model/azienda';

@Component({
  selector: 'app-azienda-detail',
  templateUrl: './azienda-detail.component.html',
  styleUrls: ['./azienda-detail.component.css']
})
export class AziendaDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private aziendaService: AziendaService, private router: Router) { }


  aziendaDetail?: Azienda;

  ngOnInit(): void {

    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.aziendaService.findById(id).subscribe(
      (azienda: Azienda) => {
        this.aziendaDetail = azienda;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onBack() {
    this.router.navigate(['/azienda/list']);
  }
}
