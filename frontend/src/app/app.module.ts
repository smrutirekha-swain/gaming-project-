import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/adminlayout/header/header.component';
import { FooterComponent } from './admin/adminlayout/footer/footer.component';
import { SidebarComponent } from './admin/adminlayout/sidebar/sidebar.component';

import { UfooterComponent } from './user/userlayout/ufooter/ufooter.component';
import { UheaderComponent } from './user/userlayout/uheader/uheader.component';
import { UsidebarComponent } from './user/userlayout/usidebar/usidebar.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './user/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesForgetpasswordComponent } from './user/pages-forgetpassword/pages-forgetpassword.component';
import { PagesSignupComponent } from './user/pages-signup/pages-signup.component';
import { PagesOtpverifyComponent } from './user/pages-otpverify/pages-otpverify.component';
import { PagesChangepasswordComponent } from './user/pages-changepassword/pages-changepassword.component';
import { TournamentComponent } from './admin/tournament/tournament.component';

import { GameComponent } from './admin/game/game.component';
import { FormsModule } from '@angular/forms';
import { TaggingComponent } from './admin/tagging/tagging.component';
import { UpdateprofileComponent } from './pages/updateprofile/updateprofile.component';
import { UpdateProfileUserComponent } from './user/update-profile-user/update-profile-user.component';

import { RankComponent } from './admin/rank/rank.component';
import { TypeComponent } from './admin/type/type.component';
import { ModeComponent } from './admin/mode/mode.component';
import { PrizeComponent } from './admin/prize/prize.component';
import { GamingStatusComponent } from './admin/gaming-status/gaming-status.component';
// import { UserTournamentComponent } from './user/userlivetournament/user-tournament/user-tournament.component';
// import { UsercomplitedTournamentComponent } from './user/userlivetournament/usercomplited-tournament/usercomplited-tournament.component';
import { UserTournamentComponent } from './user/user-tournament/user-tournament.component';
import { UsercomplitedTournamentComponent } from './user/usercomplited-tournament/usercomplited-tournament.component';
import { UserlivetournamentComponent } from './user/userlivetournament/userlivetournament.component';
import { UserpaymentComponent } from './user/userpayment/userpayment.component';
import { UsersoloComponent } from './user/usersolo/usersolo.component';
import { UsergameComponent } from './user/usergame/usergame.component';
import { DemoComponent } from './user/demo/demo.component';
import { GameviewComponent } from './admin/gameview/gameview.component';
import { TournamentviewComponent } from './user/tournamentview/tournamentview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    PagesForgetpasswordComponent,
    PagesSignupComponent,
    PagesOtpverifyComponent,
    PagesChangepasswordComponent,
    TournamentComponent,
    GameComponent,
    TaggingComponent,
    UpdateprofileComponent,
    UpdateProfileUserComponent,
    UfooterComponent,
    UheaderComponent,
    UsidebarComponent,
    RankComponent,
    TypeComponent,
    ModeComponent,
    PrizeComponent,
    GamingStatusComponent,
    UserTournamentComponent,
    UsercomplitedTournamentComponent,
    UserlivetournamentComponent,
    UserpaymentComponent,
    UsersoloComponent,
    UsergameComponent,
    DemoComponent,
    GameviewComponent,
    TournamentviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
