import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosListComponent } from './photos/photo-list/photos-list.component';
import { PhotoAddComponent } from './photos/photo-add/photo-add.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'user/:userName', component: PhotosListComponent },
    { path: 'add/user', component: PhotoAddComponent },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }