import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './user/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesSignupComponent } from './user/pages-signup/pages-signup.component';
import { PagesChangepasswordComponent} from './user/pages-changepassword/pages-changepassword.component';
import { PagesOtpverifyComponent } from './user/pages-otpverify/pages-otpverify.component';
import { PagesForgetpasswordComponent } from './user/pages-forgetpassword/pages-forgetpassword.component';
import { TournamentComponent } from './admin/tournament/tournament.component';
import { GameComponent } from './admin/game/game.component';
import { UpdateProfileUserComponent } from './user/update-profile-user/update-profile-user.component';
import { GamingStatusComponent } from './admin/gaming-status/gaming-status.component';
import { TypeComponent } from './admin/type/type.component'; 
import { RankComponent } from './admin/rank/rank.component';
import { PrizeComponent } from './admin/prize/prize.component';
import { GameviewComponent } from './admin/gameview/gameview.component';

import { ModeComponent } from './admin/mode/mode.component'; 
import { TaggingComponent } from './admin/tagging/tagging.component';
import { UserTournamentComponent } from './user/user-tournament/user-tournament.component';
import { UsercomplitedTournamentComponent } from './user/usercomplited-tournament/usercomplited-tournament.component';
import { UserlivetournamentComponent } from './user/userlivetournament/userlivetournament.component';
import { UserpaymentComponent } from './user/userpayment/userpayment.component';
import { UsersoloComponent } from './user/usersolo/usersolo.component';
import { HeaderComponent } from './admin/adminlayout/header/header.component';
import { FooterComponent } from './admin/adminlayout/footer/footer.component';
import { SidebarComponent } from './admin/adminlayout/sidebar/sidebar.component';
import { UheaderComponent } from './user/userlayout/uheader/uheader.component';
import { UfooterComponent } from './user/userlayout/ufooter/ufooter.component';
import { UsidebarComponent } from './user/userlayout/usidebar/usidebar.component';
import { DemoComponent } from './user/demo/demo.component';
import { TournamentviewComponent } from './user/tournamentview/tournamentview.component';
import { UsergameComponent } from './user/usergame/usergame.component';


const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: '', component: DashboardComponent },
  { path: 'user/dashboard', component: DashboardComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  { path: 'charts-chartjs', component: ChartsChartjsComponent },
  { path: 'form-editors', component: FormsEditorsComponent },
  { path: 'form-elements', component: FormsElementsComponent },
  { path: 'form-layouts', component: FormsLayoutsComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'list-group', component: ListGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  { path:  'pages-signup', component:PagesSignupComponent },
  { path:  'changepassword', component:PagesChangepasswordComponent },
  { path:  'otpverify', component:PagesOtpverifyComponent },
  { path:  'forgetpassword', component:PagesForgetpasswordComponent },
  { path:  'admin/tournament', component:TournamentComponent },
  { path:  'admin/game', component:GameComponent},
  { path:  'user/update-profile-user', component:UpdateProfileUserComponent},
  {path:'admin/GamingStatus',component:GamingStatusComponent},
  {path:'admin/device-type',component:TypeComponent},
  {path:'admin/rank-type',component:RankComponent},
  {path:'admin/prize',component:PrizeComponent},
  {path:'admin/mode',component:ModeComponent},
  {path:'admin/tagging',component:TaggingComponent},
  {path:'user/usertournament',component:UserTournamentComponent},
  {path:'user/usercompletedtournament',component:UsercomplitedTournamentComponent},
  {path:'user/userlivetournament',component:UserlivetournamentComponent},
  {path:'user/userpayment',component:UserpaymentComponent},
  {path:'user/usersolo',component:UsersoloComponent},
  {path:'admin/gameview',component:GameviewComponent},
{path:'adminheader',component:HeaderComponent},
{path:'adminfooter',component:FooterComponent},
{path:'adminsidebar',component:SidebarComponent},
{path:'userheader',component:UheaderComponent},
{path:'ufooter',component:UfooterComponent},
{path:'usidebar',component:UsidebarComponent},
{path:'user/tournament',component:TournamentviewComponent},
{path:'user/games',component:UsergameComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
