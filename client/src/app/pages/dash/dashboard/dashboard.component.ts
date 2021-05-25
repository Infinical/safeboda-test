import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  rides: any;
  rideOption: any;
  userOption: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dashboardService.fetchData().subscribe((resp: any) => {
      this.rides = resp.rides;

      this.rideOption = {
        legend: {
          top: 'bottom',
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        color: ['#F47B00', '#378D3B', '#F47B00'],
        series: [
          {
            name: 'Rides',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: true,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: true,
            },
            data: resp.rides,
          },
        ],
      };

      this.userOption = {
        legend: {
          top: 'bottom',
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        color: ['#F47B00', '#378D3B'],
        series: [
          {
            name: 'Rides',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: true,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: true,
            },
            data: resp.users,
          },
        ],
      };
    });
  }
}
