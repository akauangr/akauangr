import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

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
    this.resizeCanvas({});
  }

  @HostListener('window:resize', ['$event'])
  resizeCanvas(event) {
    console.group("Resize");
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    console.log("Resize Done.");

    this.render();
    console.groupEnd();
  }

  render(): void {
    console.group("Render");

    this.ctx.fillStyle = "#FF0000";
    this.ctx.fillRect(0, 0, 150, 150);

    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillText("Hi, I'm Akauan", 10, 50);

    console.log("Render Done.");
    console.groupEnd();
  }

  animate(): void {
    console.group("Animation");

    console.log('Animation Done.');
    console.groupEnd();
  }
}
