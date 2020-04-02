import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadFileComponent } from './component/read-file/read-file.component';
import { WriteFileComponent } from './component/write-file/write-file.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  { path:  '', component:  NavbarComponent,
  children:[
    {path:'',component:ReadFileComponent},
    {path:'readFile',component:ReadFileComponent},
    {path:'writeFile',component:WriteFileComponent}
  ]
},
{ path:  '**', component:  NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
