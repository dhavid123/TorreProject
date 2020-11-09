import { Component, OnInit } from "@angular/core";
import { PersonService } from "src/app/services/person.service";
import { Person } from "src/app/classes/Person";
import swal from "sweetalert2";

import { PageEvent } from "@angular/material/paginator";
import { Necessity } from "../../classes/Necessity";
import { NecessityService } from "../../services/necessity.service";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { Proposal } from "../../classes/Proposal";
import { ProposalService } from "../../services/proposal.service";

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
})
export class PersonsComponent implements OnInit {
  user: string = "davidmontes";
  user2: string = "andresgarcia";

  infoPerson: any;
  needs: Necessity[] = [];

  loading: boolean;

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];
  showNeeds: boolean = false;
  titulo: string;
  proposal: any;
  necessity: Necessity = new Necessity();
  person: Person = new Person();
  need: Necessity;
  proposals: any;
  showProposals: boolean;

  constructor(
    private _personService: PersonService,
    private _needService: NecessityService,
    private _proposalService: ProposalService,
    private modalService: NgbModal,
    config: NgbModalConfig
  ) {
    this.loading = true;
  }

  ngOnInit() {
    this.loginUser();
  }

  loadNeeds() {
    this._needService.getNeeds().subscribe((result) => {
      if (result) {
        this.needs = result;
        if (!this.infoPerson) {
          swal.fire("Error", "Failed to retrieve information", "error");
        } else {
          this.loading = false;
        }
      }
    });
  }

  loginUser() {
    this._personService.getPersonOfTorre(this.user).subscribe((result) => {
      if (result) {
        this.infoPerson = result;
      }
      if (!this.infoPerson) {
        swal.fire("Error", "Failed to retrieve information", "error");
      } else {
        this.loading = false;
      }
    });
  }

  seeNeeds() {
    if (this.showNeeds === true) {
      this.showNeeds = false;
      this.needs = [];
    } else {
      this.showNeeds = true;
      this.showProposals = false;
      this.proposals = [];
      this.loadNeeds();
    }
  }

  seeProposals() {
    if (this.showProposals === true) {
      this.showProposals = false;
      this.proposals = [];
    } else {
      this.showProposals = true;
      this.showNeeds = false;
      this.needs = [];
      this.loadProsals();
    }
  }
  
  
  loadProsals() {
    this._proposalService.getProposals().subscribe((result) => {
      if (result) {
        this.proposals = result;
        if (!this.infoPerson) {
          swal.fire("Error", "Failed to retrieve information", "error");
        } else {
          this.loading = false;
        }
      }
    });
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  openNewModal(content, info: Necessity) {
    this.modalService.open(content);
    this.need = info;
    this.proposal = new Proposal();
    this.titulo = "New Proposal";
  }

  closeModal() {
    this.modalService.dismissAll();
    this.loadNeeds();
  }

  create(): void {
    this.proposal.Necessity = this.need;
    this.proposal.CreateDate = new Date();

    this._proposalService.create(this.proposal).subscribe((proposal) => {
      this.modalService.dismissAll();
      this.proposals.push(proposal);
      swal.fire(
        "New Proposal",
        `The record was saved successfully!`,
        "success"
      );
    });
  }
}
