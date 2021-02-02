import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//"https://careerext.herokuapp.com/api/careerlog" 
const baseUrl = "https://careerext.herokuapp.com/api/careerlog";
const options = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  
  })
};
@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  getByEmail(email): Observable<any> {
    return this.http.get(`${baseUrl}/il/${email}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    console.warn(data)

    console.log(id)
    console.log(`${baseUrl}/${id}`)
    return this.http.put(`${baseUrl}/${id}`, data,options);
  }
  addNewJob(id,jobnumber, data): Observable<any> {
    console.warn(data)
    var dto= {
      jobnumber:jobnumber,
            jobtitle: data.jobTitle,
            companyname:data.companyName,
            city:data.city,
            state: data.state,
            startdate:data.startDate,
            enddate: data.endDate,
            notes:data.notes
    }

    console.log(`${baseUrl}/${id}`)
    return this.http.put(`${baseUrl}/addjob/${id}`, dto,options);
  }
  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}

