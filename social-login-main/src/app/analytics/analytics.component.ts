import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  
  _startDate:any;
  _endDate:any;
  _isChartShow:boolean;
  _countData:any=[];
  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

  startDateChange(event){
    this._startDate=event.target.value;
  }
  enddateDateChange(event){
    this._endDate=event.target.value;
  }

  getContactSearchData() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let jan = [], feb = [], mar = [], apr = [], may = [], jun = [], jul = [], aug = [], sep = [], oct = [], nov = [], dec = [];
    this._isChartShow = true;
    let existDataList = JSON.parse(localStorage.getItem('contactList'));
    if (existDataList.length > 0) {
      for (let i = 0; i < existDataList.length; i++) {
        let crData = new Date(existDataList[i].CreatedDt).getTime();
        let sdate = this._startDate.getTime();
        let edate = this._endDate.getTime();
        if ((crData < sdate || crData == sdate) && (crData > edate || crData == edate)) {
          let month = monthNames[new Date(existDataList[i].CreatedDt).getMonth()]
          switch (month) {
            case 'January':
              jan.push(crData);
              break;
            case 'February':
              feb.push(crData);
              break;
            case 'March':
              mar.push(crData);
              break;
            case 'April':
              apr.push(crData);
              break;
            case 'May':
              may.push(crData);
              break;
            case 'June':
              jun.push(crData);
              break;
            case 'July':
              jul.push(crData);
              break;
            case 'August':
              aug.push(crData);
              break;
            case 'September':
              sep.push(crData);
              break;
            case 'October':
              oct.push(crData);
              break;
            case 'November':
              nov.push(crData);
              break;
            case 'December':
              dec.push(crData);
              break;

              break;
            case 'April':
              console.log("It is a Saturday.");
              break;
          }




        }
      }
      this._countData.push(jan.length);
      this._countData.push(feb.length);
      this._countData.push(mar.length);
      this._countData.push(apr.length);
      this._countData.push(may.length);
      this._countData.push(jun.length);
      this._countData.push(jul.length);
      this._countData.push(aug.length);
      this._countData.push(sep.length);
      this._countData.push(oct.length);
      this._countData.push(nov.length);
      this._countData.push(dec.length);
    }
    this.getContactData();
  }

  getContactData(){
    const myChart = new Chart('myChart', {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'March', 'April', 'june', 'july','Aug','sep','oct','nov','dec'],
          datasets: [{
              label: '# of analytics',
              data: this._countData,
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
  });
  }
  goToContactPage(){
    this.router.navigate(['/mainpage'])
  }

  goToAnalyticsPage(){
    this.router.navigate(['/analytics'])
  }

  logOut(){
    this.router.navigate(['/login'])
  }
}
