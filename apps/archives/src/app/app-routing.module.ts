import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
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
