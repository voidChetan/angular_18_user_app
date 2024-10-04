import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path:'user-list',
                component:UserListComponent
            }, 
            {
                path:'createUser',
                component:CreateUserComponent
            }, 
            {
                path:'editUser/:id',
                component:CreateUserComponent
            }
        ]
    }
];
