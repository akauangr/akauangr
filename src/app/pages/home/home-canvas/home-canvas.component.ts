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
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    this.render();
  }

  elements: any = [];

  render(): void {
    console.group("Render");

    // Adiciona objetos ao canvas
    this.elements.push(new Ball(this.ctx,
      200,
      200,
      40,
      'blue',
      (ball) => {
        console.log('ball', ball);
      }
    ));
    this.elements.push(new Ball(this.ctx, 100, 100, 30, 'green'));
    this.elements.push(new Ball(this.ctx, 25, 25, 25, 'red'));

    // Para cada elemento do canvas
    this.elements.forEach(element => {
      element.draw();
    });

    console.groupEnd();
  }
}

export class Ball {

  ctx: any;
  x: number;
  y: number;
  radius: number;
  color: string;
  animation: any;

  constructor(
    ctx: any,
    x: number = 0,
    y: number = 0,
    radius: number = 25,
    color: string = "red",
    animation: any = function () { }
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.animation = animation;
  }

  draw() {
    this.animation(this);

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}