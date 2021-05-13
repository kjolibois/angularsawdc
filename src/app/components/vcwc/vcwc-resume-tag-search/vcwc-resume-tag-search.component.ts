import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {MessageService} from '../../../services/message.service';
import { Joblog } from 'src/app/models/joblog.model';
import { ResumeService } from 'src/app/services/resume.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
interface SearchTags {
  id: number;
  viewValue: string;
}
@Component({
  selector: 'app-vcwc-resume-tag-search',
  templateUrl: './vcwc-resume-tag-search.component.html',
  styleUrls: ['./vcwc-resume-tag-search.component.sass']
})
export class VCWCTagSearchComponent implements OnInit {
  currentJoblog: Joblog= {
    email: '',
  category: '',
  job_log:[]
  };
  email;
  tags;
  selectedChips: any[] = [];
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
    const toppings = [{ viewValue: 'agriculture', id: 1 }];
    this.toppingsControl.setValue(toppings);
  }
  changeSelected(parameter: string, query: string) {

    const index = this.selectedChips.indexOf(query);
    if (index >= 0) {
      this.selectedChips.splice(index, 1);
    } else {
      this.selectedChips.push(query);
    }
    console.log('this.selectedChips: ' + this.selectedChips);
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
     this.resumeService.addNewJob('vcwc',submissionId,newjobnumber,this.newJobForm.value).subscribe((data) => {
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
    this.resumeService.update('vcwc',submissionId,this.allEditForm.value).subscribe((data)=> { console.log(data)
    
      this.getResume(this.email)//console.log(data)
      this.toggleEdit();
    
    
    });


  }
  saveNewInfo() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newJobForm.value);
    //this.resumeService.update(this.newJobForm.value)
  }

  getResumesByTags(tags:SearchTags[]){
    this.tags=tags;
    let tagIdArray=[]
    tags.forEach(function (value) {
      tagIdArray.push(value.id)
    }); 
  //  for (var i=0; i<this.currentformControls.length;i++){
    //  console.log(this.currentformControls[i])
      //console.log(this.allEditForm.removeControl(this.currentformControls[i]))
   // }
   // this.currentformControls=[];
   this.resumeService.getByTags('vcwc',tagIdArray)
    .subscribe(
      data => {
        let entryGroup = new FormGroup({});
            
        this.joblogs$  = data;
        console.log("before");
         data.map((group, index) => {
           console.log(group);

           this.howmanyjobs=4;
          group.job_log.map((x )=> {
            console.warn(group._id)
          const controlname = 'joblog-' + group._id +'-'+x.jobnumber;
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
          console.log(entryGroup);
         } )
         this.allEditForm.addControl(group.id, entryGroup);

        })
    
        console.log(this.allEditForm);
      },
      error => {
        console.log(error);
      });
  }


  toppingsControl = new FormControl([]);
  toppingList: SearchTags[] = [
    { viewValue: 'Agriculture', id: 1 },
    { viewValue: 'Architecture & Construction', id: 2 },
    { viewValue: 'Arts A/V & Communication', id: 3 },
    { viewValue: 'Business & Administration', id: 4 },
    { viewValue: 'Education & Training', id: 5 },
    { viewValue: 'Energy', id: 6 },
    { viewValue: 'Finance', id: 7 },
    { viewValue: 'Government & Public Service', id: 8 },
    { viewValue: 'Health Science', id: 9 },
    { viewValue: 'Hospitality & Tourism', id: 10 },
    { viewValue: 'Human Services', id: 11 },
    { viewValue: 'Information Technology', id: 12 },
    { viewValue: 'Law Safety & Corrections', id: 13 },
    { viewValue: 'Manufacturing', id: 14 },
    { viewValue: 'Marketing', id: 15 },
    { viewValue: 'STEM', id: 16 },
    { viewValue: 'Transportation & Logistics', id: 17 }
  ];
  toppingListByID = {
    1: 'Agriculture',
    2: 'Architecture & Construction', 
    3: 'Arts A/V & Communication', 
    4: 'Business & Administration', 
    5: 'Education & Training', 
    6 :'Energy', 
    7: 'Finance', 
    8: 'Government & Public Service', 
    9: 'Health Science', 
    10: 'Hospitality & Tourism', 
    11: 'Human Services',
    12: 'Information Technology', 
    13: 'Law Safety & Corrections', 
    14: 'Manufacturing',
    15: 'Marketing',
    16: 'STEM',
    17: 'Transportation & Logistics'
  }

   
  



  onToppingRemoved(topping: SearchTags) {
    const toppings = this.toppingsControl.value as SearchTags[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(['']);
    this.toppingsControl.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  changeSelection() {
    const toppings = ['Extra cheese', 'Onion', 'Sausage'];
    this.toppingsControl.setValue(toppings);
  }

  emptySelection() {
    this.toppingsControl.setValue(['']);
    this.joblogs$=[]
  }
  getResume(email: string): void {
    this.email=email;
    for (var i=0; i<this.currentformControls.length;i++){
      console.log(this.currentformControls[i])
      console.log(this.allEditForm.removeControl(this.currentformControls[i]))
    }
    this.currentformControls=[];
   this.resumeService.getByEmail('vcwc',email)
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
