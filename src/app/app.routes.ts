import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'AppComponent',
        pathMatch: 'full'
    },
    {
        path: 'app-about-me',
        component: AboutMeComponent
    },
    {
        path: 'app-blog',
        component: BlogComponent
    },
    {
        path: 'app-contact',
        component: ContactComponent
    },
    {
        path: 'app-portfolio',
        component: PortfolioComponent
    }
];
