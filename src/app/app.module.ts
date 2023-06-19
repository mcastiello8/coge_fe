import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AziendaListComponent } from './features/azienda/azienda-list/azienda-list.component';
import { AziendaInsertComponent } from './features/azienda/azienda-insert/azienda-insert.component';
import { AziendaEditComponent } from './features/azienda/azienda-edit/azienda-edit.component';
import { AziendaDeleteComponent } from './features/azienda/azienda-delete/azienda-delete.component';
import { AziendaDetailComponent } from './features/azienda/azienda-detail/azienda-detail.component';
import { AttachmentInsertComponent } from './features/attachment/attachment-insert/attachment-insert.component';
import { AttachmentListComponent } from './features/attachment/attachment-list/attachment-list.component';
import { AttachmentDeleteComponent } from './features/attachment/attachment-delete/attachment-delete.component';
import { AttachmentDetailComponent } from './features/attachment/attachment-detail/attachment-detail.component';
import { AttachmentEditComponent } from './features/attachment/attachment-edit/attachment-edit.component';
import { CommessaListComponent } from './features/commessa/commessa-list/commessa-list.component';
import { CommessaEditComponent } from './features/commessa/commessa-edit/commessa-edit.component';
import { CommessaInsertComponent } from './features/commessa/commessa-insert/commessa-insert.component';
import { CommessaDeleteComponent } from './features/commessa/commessa-delete/commessa-delete.component';
import { CommessaDetailComponent } from './features/commessa/commessa-detail/commessa-detail.component';
import { RapportinoDetailComponent } from './features/rapportino/rapportino-detail/rapportino-detail.component';
import { RapportinoListComponent } from './features/rapportino/rapportino-list/rapportino-list.component';
import { RapportinoEditComponent } from './features/rapportino/rapportino-edit/rapportino-edit.component';
import { RapportinoDeleteComponent } from './features/rapportino/rapportino-delete/rapportino-delete.component';
import { RapportinoInsertComponent } from './features/rapportino/rapportino-insert/rapportino-insert.component';
import { RisorsaInsertComponent } from './features/risorsa/risorsa-insert/risorsa-insert.component';
import { RisorsaEditComponent } from './features/risorsa/risorsa-edit/risorsa-edit.component';
import { RisorsaDeleteComponent } from './features/risorsa/risorsa-delete/risorsa-delete.component';
import { RisorsaDetailComponent } from './features/risorsa/risorsa-detail/risorsa-detail.component';
import { RisorsaListComponent } from './features/risorsa/risorsa-list/risorsa-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    FooterComponent,
    AziendaListComponent,
    AziendaInsertComponent,
    AziendaEditComponent,
    AziendaDeleteComponent,
    AziendaDetailComponent,
    AttachmentInsertComponent,
    AttachmentListComponent,
    AttachmentDeleteComponent,
    AttachmentDetailComponent,
    AttachmentEditComponent,
    CommessaListComponent,
    CommessaEditComponent,
    CommessaInsertComponent,
    CommessaDeleteComponent,
    CommessaDetailComponent,
    RapportinoDetailComponent,
    RapportinoListComponent,
    RapportinoEditComponent,
    RapportinoDeleteComponent,
    RapportinoInsertComponent,
    RisorsaInsertComponent,
    RisorsaEditComponent,
    RisorsaDeleteComponent,
    RisorsaDetailComponent,
    RisorsaListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
