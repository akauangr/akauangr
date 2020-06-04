import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-canvas',
  templateUrl: './home-canvas.component.html',
  styleUrls: ['./home-canvas.component.scss']
})
export class HomeCanvasComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  width: number = 100;
  height: number = 100;
  style: any;
  params: any;

  ngOnInit(): void {
    this.style = {
      'position': 'relative',
      'display': 'inline-block',
      'width': '100%',
      'height': '100%',
      'background-color': '#000',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.params = {
      particles: {
        number: {
          value: 100,
        },
        color: {
          value: '#02a9f7'
        },
        shape: {
          type: 'polygon',
          polygon: {
            nb_sides: 6
          }
        },
        line_linked: {
          color: '#02a9f7',
          opacity: 0.5
        }
      }
    };


    this.resizeCanvas({});
  }

  @HostListener('window:resize', ['$event'])
  resizeCanvas(event) {
    // console.log(event);
    // this.width = window.innerWidth;
    // this.height = window.innerHeight;
  }
}