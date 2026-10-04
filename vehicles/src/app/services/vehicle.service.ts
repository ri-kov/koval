import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    private apiUrl = 'https://valenauto-backend.onrender.com/api/vehicles';

    constructor(private http: HttpClient) {}

    getVehicleBySlug(slug: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/slug/${slug}`);
    }

    getFeatures(id: number): Observable<{ feature: string }[]> {
        return this.http.get<{ feature: string }[]>(`${this.apiUrl}/${id}/features`);
    }

    getImages(id: number): Observable<{ imageUrl: string }[]> {
        return this.http.get<{ imageUrl: string }[]>(`${this.apiUrl}/${id}/images`);
    }
}