import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotosListComponent } from './photo-list/photos-list.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoAddComponent } from './photo-add/photo-add.component';

@NgModule({
    declarations: [PhotoComponent, PhotosListComponent, PhotoAddComponent],
    imports: [HttpClientModule, CommonModule]
})

export class PhotosModule {}