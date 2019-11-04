import { Component, OnInit } from '@angular/core';
import {DbLogsService} from '../services/dbLogsService'
import {DbLog} from '../models/DbLog'



@Component({
  selector: 'app-logviewer',
  templateUrl: './logviewer.component.html',
  styleUrls: ['./logviewer.component.scss']
})
export class LogviewerComponent implements OnInit {

  constructor(private dbLogServe: DbLogsService) { }
  logsData: DbLog[];
  displayedColumns: string[] = ['Message', 'TimeStamp'];
  ngOnInit() {
    this.dbLogServe.getLogs().subscribe(data => {
      this.logsData = data;//.map((log:any) => log as DbLog );
      console.log(data);
    });
  }
}
