import { Routes } from '@angular/router';
import { Home as HomeComponent} from './home/home';

export const routes: Routes = [
    //mengatur halaman utama aplikasi
    {
        path : "",
        component : HomeComponent,
        title : "Home Page"
    },
    {
        path : "profile",
        component : Profile,
        //title : "profile page"
    },
    {
        path : "login",
        component : Login,
    },
    {
        path : "register",
        component : Register,
    },
    {
        path : "contact"
        component : Contact,
    },
];
