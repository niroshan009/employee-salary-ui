import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CreateEmployeeService {

    constructor(private http: HttpClient) { }

    public saveEmployees(file: File) {
        let path = 'http://localhost:8080/users/upload';
        let formData: FormData = new FormData();
        formData.append('file', file, file.name);

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = {
            headers: headers
        }

        return this.http.post(path, formData, options);

        //return this.httpService.post(path);
    }
}