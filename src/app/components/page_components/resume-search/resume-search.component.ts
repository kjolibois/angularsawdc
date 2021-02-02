import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {MessageService} from '../../../services/message.service';
import { Joblog } from 'src/app/models/joblog.model';
import { ResumeService } from 'src/app/services/resume.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-resume-search',
  templateUrl: './resume-search.component.html',
  styleUrls: ['./resume-search.component.sass']
})
export class ResumeSearchComponent implements OnInit {
  currentJoblog: Joblog= {
    email: '',
  category: '',
  job_log:[]
  };
  email;
  panelOpenState: boolean = false;
  searchClicked=false;
  joblogs$:Joblog[]=[];
  editInfo:Joblog[]=[];
  howmanyjobs=0;
  editJobs=false;
  newJobs=false;
  newJobForm = new FormGroup({
    jobTitle: new FormControl(''),
    companyName: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),

    startDate: new FormControl(''),
    endDate: new FormControl(''),
    notes: new FormControl(''),
    
  })
  allEditForm = this.fb.group({

    jobs: this.fb.array([
    ])
  });
  currentformControls=[];
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
    private fb: FormBuilder
    
    ) { }

  ngOnInit() {
    //this.getHero();
    this.allEditForm = new FormGroup({});

    this.joblogs$
  }
  
  onChangeEvent(event: any, jobnumber:string){
    console.log(event.target);
    console.log(this.allEditForm.value);
  }
  toggleEdit(){
    this.editJobs = !this.editJobs
  }
  toggleNewJobs(){
    this.newJobs = !this.newJobs
  }
  onNJFSubmit(submissionId:string) {
    // TODO: Use EventEmitter with form value
    var newjobnumber=this.howmanyjobs +1;
    console.warn(this.newJobForm.value);
     this.resumeService.addNewJob(submissionId,newjobnumber,this.newJobForm.value).subscribe((data) => {
      this.getResume(this.email)//console.log(data)
      this.newJobForm.reset();
      this.toggleNewJobs();
     }
 
     );
     
  }
  onEditSubmit(submissionId:string) {
    // TODO: Use EventEmitter with form value
    console.log(submissionId);
    console.warn(this.allEditForm.value);
    this.resumeService.update(submissionId,this.allEditForm.value).subscribe((data)=>console.log(data));

  }
  saveNewInfo() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newJobForm.value);
    //this.resumeService.update(this.newJobForm.value)
  }
  getResume(email: string): void {
    this.email=email;
    for (var i=0; i<this.currentformControls.length;i++){
      console.log(this.currentformControls[i])
      console.log(this.allEditForm.removeControl(this.currentformControls[i]))
    }
    this.currentformControls=[];
   this.resumeService.getByEmail(email)
    .subscribe(
      data => {
        let entryGroup = new FormGroup({});

        this.joblogs$  = [data];
        console.log("before");
        // data.map((group, index) => {
           //console.log(group);
           console.log(data)

           this.howmanyjobs=data.job_log.length;
          data.job_log.map((x )=> {
            console.warn(data._id)
          const controlname = 'joblog-' + data._id +'-'+x.jobnumber;
          console.log(controlname);
          const formGroup = this.fb.group({
            jobNumber:[x.jobnumber],
            startDate: [x.startdate],
            jobTitle: [x.jobtitle],
            companyName:[x.companyname],
            city:[x.city],
            state:[x.state],
            endDate:[x.enddate],
            notes:[x.notes],
          });
          this.allEditForm.addControl(controlname, formGroup);
          this.currentformControls.push(controlname);
          //console.log(entryGroup);
         } )
         //this.allEditForm.addControl(group.id, entryGroup);

       // })
    
        console.log(this.allEditForm);
      },
      error => {
        console.log(error);
      });
  }
}

