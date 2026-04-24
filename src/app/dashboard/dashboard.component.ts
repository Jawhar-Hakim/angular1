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
  chartDataM: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: 'Members',
      data: [  ]
    }
  ];
  chartLabelsM:String[] = [];
  chartDataPie: ChartDataset[] = [
    {
      // ⤵️ Add these
      data: [ this.NbTeacher,this.NbStudent]
    }
  ];
  chartLabelsPie: string[] = ['Teacher'," Student"];
  chartOptions: ChartOptions = {};
   chartDataPie2: ChartDataset[] = [
    {
      // ⤵️ Add these
      data: [ this.NbTeacher,this.NbStudent]
    }
  ];
  chartLabelsPie2: String[] = ['Teacher'," Student"];

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
      const names=members.map(m=>m.name)
      this.chartLabelsM=names
      const count2=members.map(m=>m.tab_Events).length
      this.chartDataM=[
        {
          data:[count2]
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
      const titre=[...new Set(evts.map(e=>e.Titre))]
      this.chartLabelsPie2=titre
      const count3=titre.map(e=>evts.filter(L=>L.Titre==e).length)
      this.chartDataPie2=[
        {
          data:count3
        }
      ]
    });
  }
}
