import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttachmentDeleteComponent } from './features/attachment/attachment-delete/attachment-delete.component';
import { AttachmentDetailComponent } from './features/attachment/attachment-detail/attachment-detail.component';
import { AttachmentEditComponent } from './features/attachment/attachment-edit/attachment-edit.component';
import { AttachmentInsertComponent } from './features/attachment/attachment-insert/attachment-insert.component';
import { AttachmentListComponent } from './features/attachment/attachment-list/attachment-list.component';
import { AziendaDeleteComponent } from './features/azienda/azienda-delete/azienda-delete.component';
import { AziendaDetailComponent } from './features/azienda/azienda-detail/azienda-detail.component';
import { AziendaEditComponent } from './features/azienda/azienda-edit/azienda-edit.component';
import { AziendaInsertComponent } from './features/azienda/azienda-insert/azienda-insert.component';
import { AziendaListComponent } from './features/azienda/azienda-list/azienda-list.component';
import { CommessaDetailComponent } from './features/commessa/commessa-detail/commessa-detail.component';
import { CommessaListComponent } from './features/commessa/commessa-list/commessa-list.component';
import { CommessaInsertComponent } from './features/commessa/commessa-insert/commessa-insert.component';
import { CommessaDeleteComponent } from './features/commessa/commessa-delete/commessa-delete.component';
import { CommessaEditComponent } from './features/commessa/commessa-edit/commessa-edit.component';
import { RapportinoListComponent } from './features/rapportino/rapportino-list/rapportino-list.component';
import { RapportinoDetailComponent } from './features/rapportino/rapportino-detail/rapportino-detail.component';
import { RapportinoInsertComponent } from './features/rapportino/rapportino-insert/rapportino-insert.component';
import { RapportinoDeleteComponent } from './features/rapportino/rapportino-delete/rapportino-delete.component';
import { RapportinoEditComponent } from './features/rapportino/rapportino-edit/rapportino-edit.component';
import { RisorsaListComponent } from './features/risorsa/risorsa-list/risorsa-list.component';
import { RisorsaDetailComponent } from './features/risorsa/risorsa-detail/risorsa-detail.component';
import { RisorsaInsertComponent } from './features/risorsa/risorsa-insert/risorsa-insert.component';
import { RisorsaDeleteComponent } from './features/risorsa/risorsa-delete/risorsa-delete.component';
import { RisorsaEditComponent } from './features/risorsa/risorsa-edit/risorsa-edit.component';
import { WelcomeComponent } from './features/welcome/welcome.component';

const routes: Routes = [

  { path: 'welcome', component: WelcomeComponent},

  { path: 'azienda/list', component: AziendaListComponent },
  { path: 'azienda/detail/:id', component: AziendaDetailComponent },
  { path: 'azienda/insert', component: AziendaInsertComponent },
  { path: 'azienda/delete/:id', component: AziendaDeleteComponent },
  { path: 'azienda/edit/:id', component: AziendaEditComponent },

  { path: 'attachment/list', component: AttachmentListComponent },
  { path: 'attachment/detail/:id', component: AttachmentDetailComponent },
  { path: 'attachment/insert', component: AttachmentInsertComponent },
  { path: 'attachment/delete/:id', component: AttachmentDeleteComponent },
  { path: 'attachment/edit/:id', component: AttachmentEditComponent },

  { path: 'commessa/list', component: CommessaListComponent },
  { path: 'commessa/detail/:id', component: CommessaDetailComponent },
  { path: 'commessa/insert', component: CommessaInsertComponent },
  { path: 'commessa/delete/:id', component: CommessaDeleteComponent },
  { path: 'commessa/edit/:id', component: CommessaEditComponent },

  { path: 'rapportino/list', component: RapportinoListComponent },
  { path: 'rapportino/detail/:id', component: RapportinoDetailComponent },
  { path: 'rapportino/insert', component: RapportinoInsertComponent },
  { path: 'rapportino/delete/:id', component: RapportinoDeleteComponent },
  { path: 'rapportino/edit/:id', component: RapportinoEditComponent },

  { path: 'risorsa/list', component: RisorsaListComponent },
  { path: 'risorsa/detail/:id', component: RisorsaDetailComponent },
  { path: 'risorsa/insert', component: RisorsaInsertComponent },
  { path: 'risorsa/delete/:id', component: RisorsaDeleteComponent },
  { path: 'risorsa/edit/:id', component: RisorsaEditComponent },

  { path: '', redirectTo: 'welcome', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
