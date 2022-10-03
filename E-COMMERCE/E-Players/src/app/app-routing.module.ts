import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { IconBoxesComponent } from "./components/icon-boxes/icon-boxes.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const routes:Routes=[
  {path:'login',component:LoginComponent},
  { path: '', component: IconBoxesComponent },
  {path:'register',component:RegisterComponent}
]

@NgModule({
  declarations:[],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
