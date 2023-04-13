import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { job } from 'src/app/job';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobs: job[] = [];

  constructor(private jobService: JobService) {
    
  }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe( (jobs) => this.jobs = jobs);
  }
  
  

}
