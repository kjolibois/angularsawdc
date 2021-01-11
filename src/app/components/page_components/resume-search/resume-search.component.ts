import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {MessageService} from '../../../services/message.service';
import { Joblog } from 'src/app/models/joblog.model';
import { ResumeService } from 'src/app/services/resume.service';
@Component({
  selector: 'app-resume-search',
  templateUrl: './resume-search.component.html',
  styleUrls: ['./resume-search.component.sass']
})
export class ResumeSearchComponent implements OnInit {
  currentTutorial: Joblog= {
    email: '',
  category: '',
  job_log:[]
  };
  panelOpenState: boolean = false;
  searchClicked=false;
  resumes$:Joblog[]=[];
  editJobs=false;
  newJobs=false;

  private searchTerm = "";
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerm= term;

  }
  constructor(
    private messageService: MessageService,
    private resumeService: ResumeService,

    
    ) { }

  ngOnInit() {
    //this.getHero();
  }
  toggleEdit(){
    this.editJobs = !this.editJobs
  }
  toggleNewJobs(){
    this.newJobs = !this.newJobs
  }
  getResume(email: string): void {
  
   console.log(email)
   this.resumeService.getByEmail(email)
    .subscribe(
      data => {
        this.resumes$  = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}

