import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/core/services/general.service';
import { RidesService } from 'src/app/core/services/rides.service';

@Component({
  selector: 'app-all-rides',
  templateUrl: './all-rides.component.html',
  styleUrls: ['./all-rides.component.css'],
})
export class AllRidesComponent implements OnInit {
  constructor(
    private ridesService: RidesService,
    public general: GeneralService
  ) {}
  rides: any;

  ngOnInit(): void {
    this.fetchRides();
  }

  fetchRides() {
    this.general.loading = true;
    this.ridesService.allRides().subscribe((resp: any) => {
      this.rides = resp.ride;
      this.general.loading = false;
    });
  }
}
