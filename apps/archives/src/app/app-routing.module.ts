import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRoutes, AuthGuard } from '@archives/auth';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    loadChildren: () =>
      import('./main-page/main-page.module').then((m) => m.MainPageModule),
    canLoad: [AuthGuard],
    // pathMatch: 'full',
  },
  {
    path: 'auth',
    children: authRoutes,
  },
  // {
  //   path: 'student-dashboard',
  //   component: StudentDashboardComponent,
  //   loadChildren: () => import('./student-dashboard/student-dashboard.module').then(m => m.StudentDashboardModule),
  //   canLoad: [AuthGuard, UserRoleLoadGuard],
  //   data: {userRole: UserRole.student}
  // },
  // {
  //   path: 'admin-dashboard',
  //   component: AdminDashboardComponent,
  //   loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
  //   canLoad: [AuthGuard, UserRoleLoadGuard],
  //   data: {userRole: UserRole.admin}
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
