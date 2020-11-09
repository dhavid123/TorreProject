import { RouterModule, Routes } from '@angular/router';

import { PersonsComponent } from './components/persons/persons.component';

//Components AppDocumentsAdministrator
import { HomeComponent } from './components/home/home.component';
import { OrganizationComponent } from './components/organization/organization.component';










const APP_ROUTES: Routes = [

  // { path: 'recoverPass', component: PasswordRecoverComponent },
  // { path: 'login', component: LoginComponent },

  // { path: 'paymentsMethods', component: PaymentMethodsComponent , canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN']}},

  // { path: 'processStates', component: ProcessStatesComponent },
  // { path: 'productionProcess', component: ProductionProcessComponent },
  // { path: 'files/:id', component: FilesComponent },
  
  // { path: 'orders', component: OrdersComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_APOYO','ROLE_PRODUCCION']}},
  // { path: 'orders/orderform', component: OrderformComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_APOYO']}},
  // { path: 'orders/orderform/:id', component: OrderformComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_APOYO']}},
  // { path: 'orders/manage/:id', component: OrdermanageComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_APOYO']}},

  // { path: 'services', component: ServicesComponent,  canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO']}},
  // { path: 'products', component: ProductsComponent,  canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO']}},

 

  // { path: 'usersManagement', component: UsersmanagementComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN']} },
  // { path: 'documentType', component: DocumentTypesComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN']}},
  
  // { path: 'movementType', component: MovementTypesComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN']}},
  // { path: 'cashMovements', component: CashMovementsComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_APOYO']}},

  
  
  
  // { path: 'profile', component: PasswordChangeComponent, canActivate:[AuthGuard, RoleGuard], data:{role:['ROLE_ADMIN','ROLE_DIRECTIVO','ROLE_PRODUCCION','ROLE_APOYO']}},

  // { path: 'invoice', component: InvoiceComponent},
  // { path: 'invoice/form/:id', component: InvoiceformComponent},

  // { path: 'serviceorder', component: ServiceOrderComponent},
  // { path: 'serviceorder/form/:id', component: ServiceOrderFormComponent},


  { path: 'persons', component: PersonsComponent},
  // { path: 'person/personform', component: PersonformComponent},
  // { path: 'person/personform/:id', component: PersonformComponent},

  { path: 'home', component: HomeComponent},
  { path: 'organization', component: OrganizationComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// {useHash: true} es para utilizar el hashtag (#) --> es mas eficiente.
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
