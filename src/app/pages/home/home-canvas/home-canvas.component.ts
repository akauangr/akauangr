import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-canvas',
  templateUrl: './home-canvas.component.html',
  styleUrls: ['./home-canvas.component.scss']
})
export class HomeCanvasComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  animate(): void { }

}
