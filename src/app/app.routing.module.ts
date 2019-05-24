import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosListComponent } from './photos/photo-list/photos-list.component';
import { PhotoAddComponent } from './photos/photo-add/photo-add.component';

const routes: Routes = [
    { path: 'user/flavio', component: PhotosListComponent },
    { path: 'add/user', component: PhotoAddComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }