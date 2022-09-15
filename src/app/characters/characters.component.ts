import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

postsDos: any[] = [];

constructor(private dataService: DataService) {
  this.dataService.getDataDos().subscribe(data => {
    this.postsDos = data; 
  })
}

  ngOnInit(): void {
  }

}
