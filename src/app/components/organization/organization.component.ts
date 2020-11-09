import { Component, OnInit } from "@angular/core";
import { OrganizationService } from "../../services/organization.service";
import swal from "sweetalert2";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { Necessity } from '../../classes/Necessity';
import { NecessityService } from '../../services/necessity.service';
import { now } from 'moment';
import { Area } from 'src/app/classes/Area';
import { Organization } from 'src/app/classes/Organization';

@Component({
  selector: "app-organization",
  templateUrl: "./organization.component.html",
})
export class OrganizationComponent implements OnInit {
  opp: string = "ZW2aEzr7";
  infoOrg: any;
  need: Necessity;
  titulo: string;
  needs: any;
  area: Area =  new Area();
  organization: Organization =  new Organization();
  constructor(
    private _orgService: OrganizationService,
    private _needService: NecessityService,
    private modalService: NgbModal,
    config: NgbModalConfig
  ) {}

  ngOnInit(): void {
    this.loginOrganization();
  }

  loginOrganization() {
    this._orgService.getOrgOfTorre(this.opp).subscribe((result) => {
      if (result) {
        this.infoOrg = result;
      }

      if (!this.infoOrg) {
        swal.fire("Error", "Failed to retrieve information", "error");
      } else {
        this.loadNeeds();
      }
    });
  }

  openNewModal(content) {
    this.modalService.open(content);
    this.need = new Necessity();
    this.titulo = "New Need";
  }

  closeModal() {
    this.modalService.dismissAll();
    this.loadNeeds();
  }
  
  create(): void {
    
    this.area.Id = 1;
    this.area.Description = "Health"

    this.organization.Id = 1;
    this.organization.Name = "Torre Labs"


    this.need.Area =  this.area;
    this.need.Organization =  this.organization;
    this.need.CreateDate = new Date();

   

    this._needService.create(this.need).subscribe(need => {
      this.modalService.dismissAll();
      this.needs.push(need);
      swal.fire(
        'New Need',
        `The record was saved successfully!`,
        'success'
      );
      this.loadNeeds();
    });
  }


  loadNeeds() {
    this._needService.getNeeds().subscribe(result => {
      this.needs = result;
      if (!this.needs) {
        alert('Failed to retrieve information');
      } 
    });
  }
}
