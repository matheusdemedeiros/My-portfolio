import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navlogo',
  templateUrl: './navlogo.component.html',
  styleUrls: ['./navlogo.component.scss']
})
export class NavlogoComponent implements OnInit {
  public sourceImage!: string;
  public alternativeText!: string;
  public navTitle!: string;

  ngOnInit() {
    this.sourceImage = "../../../../assets/images/Matheus-logo.png";
    this.alternativeText = "Matheus de Medeiros - Logo";
    this.navTitle = "Matheus de Medeiros";
  }
}
