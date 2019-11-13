import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/services/levels.service';
import { MatTableDataSource } from '@angular/material';
import {MatButtonModule} from '@angular/material';

@Component({
  selector: 'app-accesslevel',
  templateUrl: './accesslevel.component.html',
  styleUrls: ['./accesslevel.component.css']
})

export class AccesslevelComponent implements OnInit {
  accessLevels :object[] = [];
  readers: [];
  types: [];
  levelNames: []
  readerName: string;
  description: string;
  typeName: string;
  name: string;

  displayedColumns: string[] = [ 'levelName', 'readerName', 'readerType'];
  accessLevel = new MatTableDataSource(...[this.accessLevels]);

  onRowClicked(row) {
    console.log(row);
    this.name = row['name'];
    this.description = row['Description'];
    this.readerName = row['readerName'];
    this.typeName = row['typeName'];
  }

  save() {
    this.accessLevels.push({
      id: Math.random(),
      name: this.name,
      Description: this.description,
      readerName: this.readerName,
      typeName: this.typeName
    })
    this.name = "";
    this.description = "";
    this.readerName = "";
    this.typeName = "";
    this.accessLevel = new MatTableDataSource(this.accessLevels);
    return this.accessLevels;
  }

  cancel() {
    this.name = "";
    this.description = "";
    this.readerName = "";
    this.typeName = "";
  }

  constructor(
    private service : LevelService
  ) { }

  ngOnInit() {

    this.service.getReaders().then((response) => {
      this.readers = JSON.parse(response);
      
       //return this.readers;
    })

     this.service.getTypes().then((type) => {
      this.types = JSON.parse(type); 
      

        // this.types.forEach((type) => {
        //   if(type['id'] === '1'){
        //     type['typeName'] = this.types[0];
        //   } else {
        //     if(type['id'] === '2'){
        //       type['typeName'] = this.types[1];
        //   } 
        // })
        // this.readers.forEach((reader) => {
        //   this.types.forEach((type) => {
        //     if(reader['typeId'] === type['typeId']) {
        //       type['typeName'] = type['name'];
              
        //     }
        //   })
        // })
        return this.types;
    })


   
    this.service.getName().then((res) => {
      this.accessLevels = JSON.parse(res);
      this.accessLevels.forEach((level) => {
        this.readers.forEach((reader) => {
            if(level['readerId'] === reader['id'] && level['readerName'] === undefined){
              level['readerName'] = reader['name'];
            }
          })
        })

      this.accessLevels.forEach((level) => {
        this.readers.forEach((reader) => {
          this.types.forEach((type) => {
            if(type['id'] === reader['typeId']){
              level['typeName'] = type['name'];
            }
          })
        })
      })

      // this.accessLevels.forEach((level) => {
      //   this.readers.forEach((reader) => {
      //     this.types.forEach((type) => {
      //       this.levelNames.forEach((levelName) => {
      //         if(levelName['id'] === type['typeId']){
      //           level['typeName'] = levelName['name'];
      //         }
      //       })
      //     });
      //   });
      // })
      console.log('----this.accessLevels----------', this.accessLevels);
      this.accessLevel = new MatTableDataSource(...[this.accessLevels]);
    })
  }
}
