import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectionScreenComponent } from './home-screen/selection-screen/selection-screen.component';
import { SelectComponent } from './select/select.component';
import { ViewComponent } from './view/view.component';
import { TableComponent } from './table/table.component';



const routes: Routes = [
    {path: '', component:SelectionScreenComponent
  // ,children:[
  // //   {path:'Select' , component:SelectComponent,},
  // //   {path: 'Map', component:TableComponent},
  // //   {path:'List',component:ListComponent}
  // // ]}
    }];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }