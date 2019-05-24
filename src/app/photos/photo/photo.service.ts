import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const urlApi = 'http://localhost:3000';
@Injectable({ providedIn: "root" })

export class PhotoService {


    constructor(private http: HttpClient) { }

    listByUser(userName: string) {

        return this.http
            .get<Photo[]>(`${urlApi}/${userName}/photos`);

    }
}