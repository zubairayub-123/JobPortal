import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { job } from 'src/app/job';


@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {

  
  @Input() job: job = {

  };



  
  constructor() {

  }

  ngOnInit(): void {
  
  }

}