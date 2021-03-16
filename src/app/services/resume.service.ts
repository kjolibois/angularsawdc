import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//"https://careerext.herokuapp.com/api/careerlog" 
const baseUrl = function(region){
  return `https://careerext.herokuapp.com/api/${region}/careerlog`;
}
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

  getAll(region,data): Observable<any> {
    return this.http.get(baseUrl(region));
  }

  get(region,id): Observable<any> {
    return this.http.get(`${baseUrl(region)}/${id}`);
  }
  getByEmail(region,email): Observable<any> {
    return this.http.get(`${baseUrl(region)}/il/${email}`);
  }

  create(region,data): Observable<any> {
    return this.http.post(baseUrl(region), data);
  }

  update(region,id, data): Observable<any> {
    console.warn(data)

    console.log(id)
    console.log(`${baseUrl(region)}/${id}`)
    return this.http.put(`${baseUrl(region)}/${id}`, data,options);
  }
  addNewJob(region,id,jobnumber, data): Observable<any> {
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

    console.log(`${baseUrl(region)}/${id}`)
    return this.http.put(`${baseUrl(region)}/addjob/${id}`, dto,options);
  }
  delete(region,id): Observable<any> {
    return this.http.delete(`${baseUrl(region)}/${id}`);
  }

  deleteAll(region): Observable<any> {
    return this.http.delete(baseUrl(region));
  }

  findByTitle(region,title): Observable<any> {
    return this.http.get(`${baseUrl(region)}?title=${title}`);
  }
}

