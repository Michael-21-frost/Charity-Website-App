import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { DonateComponent } from './pages/donate/donate.component';
import { NewsListingComponent } from './pages/news-listing-page/news-listing/news-listing.component';
import { NewsDetailsComponent } from './pages/news-details-page/news-details/news-details.component';

export const routes: Routes = [
{
    path: '', component:HomeComponent
},
{
    path: 'donate', component: DonateComponent
},
{
    path: 'news-listing', component:NewsListingComponent
},
{
    path: 'news-details', component:NewsDetailsComponent
}





];
