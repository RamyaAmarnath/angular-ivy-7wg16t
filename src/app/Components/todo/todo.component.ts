import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import * as pluginDataLabels from "chartjs-plugin-datalabels";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  // dataurl=https://jsonplaceholder.typicode.com/todos
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        }
      }
    }
  };
  public pieChartLabels: Label[] = ["completed", "notcompleted"];
  public pieChartData: number[] = [0, 0];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ["rgba(255,0,0,0.3)", "rgba(0,255,0,0.3)"]
    }
  ];
  public isdataloaded = false;
  constructor(private http: HttpClient) {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos")
      .subscribe((data: any[]) => {
        console.log(data);
        // data.forEach(each => {
        //   console.log(each);
        //   each.completed ? this.pieChartData[0]++ : this.pieChartData[1]++;
        // });
        for (let i = 0; i < data.length; i++) {
          console.log(data[i]);
          data[i].completed ? this.pieChartData[0]++ : this.pieChartData[1]++;
        }
        // this.pieChartData[0] = 100; //completed
        // this.pieChartData[1] = 200; //not completed
        this.isdataloaded = true;
      });
  }

  ngOnInit() {}
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  changeLabels(): void {
    const words = [
      "hen",
      "variable",
      "embryo",
      "instal",
      "pleasant",
      "physical",
      "bomber",
      "army",
      "add",
      "film",
      "conductor",
      "comfortable",
      "flourish",
      "establish",
      "circumstance",
      "chimney",
      "crack",
      "hall",
      "energy",
      "treat",
      "window",
      "shareholder",
      "division",
      "disk",
      "temptation",
      "chord",
      "left",
      "hospital",
      "beef",
      "patrol",
      "satisfied",
      "academy",
      "acceptance",
      "ivory",
      "aquarium",
      "building",
      "store",
      "replace",
      "language",
      "redeem",
      "honest",
      "intention",
      "silk",
      "opera",
      "sleep",
      "innocent",
      "ignore",
      "suite",
      "applaud",
      "funny"
    ];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ =>
      randomWord()
    );
  }

  addSlice(): void {
    this.pieChartLabels.push(["Line 1", "Line 2", "Line 3"]);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push("rgba(196,79,244,0.3)");
  }

  removeSlice(): void {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

  changeLegendPosition(): void {
    this.pieChartOptions.legend.position =
      this.pieChartOptions.legend.position === "left" ? "top" : "left";
  }
}
