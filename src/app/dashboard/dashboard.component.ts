import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/Services/member.service';
import { EvtService } from 'src/Services/evt.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  memberCount = 0;
  eventCount = 0;
  toolsCount = 0;
  articlesCount = 0;
  NbTeacher:number=0
  NbStudent:number=0

  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: 'Events',
      data: [  ]
    }
  ];
  chartLabels:String[] = [];
  chartDataPie: ChartDataset[] = [
    {
      // ⤵️ Add these
      data: [ this.NbTeacher,this.NbStudent]
    }
  ];
  chartLabelsPie: string[] = ['Teacher'," Student"];
  chartOptions: ChartOptions = {};

  constructor(
    private memberService: MemberService,
    private evtService: EvtService
  ) {}
  

  ngOnInit(): void {
    this.memberService.GetAllMembers().subscribe((members)=>{
      this.memberCount = members.length
      for(let i=0;i<this.memberCount;i++){
        if(members[i].type=="Teacher"){
          this.NbTeacher++
        }
        else this.NbStudent++
      }

      this.chartDataPie =[
        {
          data: [this.NbTeacher,this.NbStudent]
        }
      ]
    });

    this.evtService.GetAllEvts().subscribe((evts)=>{
      this.eventCount = evts.length;
      const counts: { [key: string]: number } = {};
      evts.forEach(evt => {
        const lieu = evt.Lieu.toString();
        counts[lieu] = (counts[lieu] || 0) + 1;
      });

      this.chartLabels = Object.keys(counts);
      this.chartData = [
        {
          label: "Events",
          data: Object.values(counts)
        }
      ];
    });
  }
}
