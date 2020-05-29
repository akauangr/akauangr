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

    this.resizeCanvas();
    this.render();
  }

  resizeCanvas() {
    console.group("Resize");

    console.log(this.ctx);

    console.log("Resize Done.");
    console.groupEnd();
  }

  render(): void {
    console.group("Render");

    this.ctx.fillStyle = "#FF0000";
    this.ctx.fillRect(0, 0, 150, 75);

    console.log("Render Done.");
    console.groupEnd();
  }

  animate(): void {
    console.group("Animation");

    console.log('Animtion Done.');
    console.groupEnd();
  }
}
