import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../models/instructor';


@Injectable({
  providedIn: 'root',
})
export class InstructorService {
    private apiUrl = 'http://localhost:3000/instructors';
instructors: Instructor[] = [];

    constructor(private http: HttpClient) {}

  getAll(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(this.apiUrl);
}


    add(instructor: Instructor): Observable<Instructor> {
        return this.http.post<Instructor>(this.apiUrl, instructor);
    }

    update(id: string, instructor: Instructor): Observable<Instructor> {
        return this.http.put<Instructor>(`${this.apiUrl}/${id}`, instructor);
    }

    delete(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
