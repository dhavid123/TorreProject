import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgxPaginateModule } from "ngx-paginate";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TimepickerModule, BsDatepickerModule } from "ngx-bootstrap";

import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";

import { PdfMakeWrapper } from "pdfmake-wrapper";
import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake

// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

import {
  NgbModule,
  NgbModalConfig,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import {
  MatPaginatorModule,
  MatPaginatorIntl,
} from "@angular/material/paginator";

// Rutas
import { APP_ROUTING } from "./app.routes";

//Components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { PersonsComponent } from "./components/persons/persons.component";




//Services
import { PersonService } from "./services/person.service";


//Pipes
import { PaginatePipe } from "./pipes/paginate.pipe";

//Directives
import { CustomMatPaginatorIntl } from "./paginator-es";
import { NecessityService } from './services/necessity.service';
import { OrganizationService } from './services/organization.service';
import { ProposalService } from './services/proposal.service';
import { AreaService } from './services/area.service';
import { OrganizationComponent } from './components/organization/organization.component';



registerLocaleData(localeEs, "es_co");

@NgModule({
  declarations: [
    AppComponent,
    PaginatePipe,
    NavbarComponent,
    HomeComponent,
    PersonsComponent,
    OrganizationComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginateModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NgbModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    APP_ROUTING,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es_co" },
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
    PersonService,
    NecessityService,
    OrganizationService,
    ProposalService,
    AreaService,
    NgbModalConfig,
    NgbActiveModal,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
