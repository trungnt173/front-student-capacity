import { Component, OnInit } from '@angular/core';
import { ContestService } from 'src/app/services/contest.service';
import { Contest } from 'src/app/models/contest';
@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {
  contests: Array<Contest> = [];
  days: number = 5;
  hours: number = 16;
  minutes: number = 20;
  seconds: number = 25;


  x = setInterval(() => {
    let futureDate = new Date("Apr 30, 2022 15:24:35").getTime();
    let today = new Date().getTime();
    let distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }, 1000);

  constructor(private contestService: ContestService) { }

  ngOnInit(): void {
    this.contestService.list().subscribe(resp => {
      this.contests = resp.payload;
      console.log(this.contests);
    });
  }
}
