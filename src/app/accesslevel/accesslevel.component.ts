import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/services/levels.service';
import { MatTableDataSource } from '@angular/material/table';

let output = { };
let data = [];

@Component({
  selector: 'app-accesslevel',
  templateUrl: './accesslevel.component.html',
  styleUrls: ['./accesslevel.component.css']
})

export class AccesslevelComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'reader'];
  dataSource = new MatTableDataSource(data);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  accessLevels:[];
  readers: [];

  constructor(
    private service : LevelService
  ) { }

  ngOnInit() {
    this.service.getReaders().then((response) => {
      this.readers = JSON.parse(response);
       return this.readers;
    })

    this.service.getName().then((res) => {
      
      this.accessLevels = JSON.parse(res);
      this.accessLevels.map((level) => {
        debugger;
        this.readers.forEach((item) => {
          if(level['readerId'] === item['id'] && output[level['name']] === undefined){
            output['Levelname'] = level['name']
            output['readerName'] = item['name'];
          }
        })
      })
      output;
      console.log(output);
      // let arr = Object.values(output);
      //       console.log(arr);
    //   let ret;
    //   let result = Object.keys(output).map((key) => {
    //      ret = [output[key]]
    //     console.log(output);
    //   })
    //   console.log(result)
    });
    
  }
}
