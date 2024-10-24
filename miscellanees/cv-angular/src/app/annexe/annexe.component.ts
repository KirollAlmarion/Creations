import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-annexe',
  templateUrl: './annexe.component.html',
  styleUrls: ['./annexe.component.css']
})
export class AnnexeComponent implements OnInit {
  @Input() renseignements: string[][];

  constructor() { }

  ngOnInit(): void {
  }

}
