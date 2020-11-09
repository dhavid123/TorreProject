import { Component, OnInit, ɵConsole } from "@angular/core";
import { Router } from "@angular/router";
import swal from "sweetalert2";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean;
  userName: string;

  constructor(private _router: Router) {}
 

  ngOnInit() {}

  
}
