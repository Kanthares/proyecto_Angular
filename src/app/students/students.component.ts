import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

postsTres: any[] = [];

constructor(private dataService: DataService) {
  this.dataService.getDataTres().subscribe(data => {
  this.postsTres = data;
  })
}
  
  ngOnInit(): void {
  }
  
}
