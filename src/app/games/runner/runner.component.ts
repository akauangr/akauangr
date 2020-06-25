import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import "p5/lib/addons/p5.sound";

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.scss']
})
export class RunnerComponent implements OnInit {
  private p5;
  constructor() { }

  ngOnInit() {
    this.createCanvas();
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any) {

    // Imagens
    var imagemCenario;
    var imagemPersonagem;
    var imagemInimigo;
    var imagemInimigoGrande;
    var imagemInimigoVoador;
    var imagemGameOver;

    // Sons
    var somDoPulo;
    var somDoJogo;

    // Objetos
    var cenario;
    var personagem;
    var inimigo;
    var inimigoGrande;
    var inimigoVoador;
    var pontuacao;

    const matrizInimigo = [
      [0, 0],
      [104, 0],
      [208, 0],
      [312, 0],
      [0, 104],
      [104, 104],
      [208, 104],
      [312, 104],
      [0, 208],
      [104, 208],
      [208, 208],
      [312, 208],
      [0, 312],
      [104, 312],
      [208, 312],
      [312, 312],
      [0, 418],
      [104, 418],
      [208, 418],
      [312, 418],
      [0, 522],
      [104, 522],
      [208, 522],
      [312, 522],
      [0, 626],
      [104, 626],
      [208, 626],
      [312, 626],
    ];

    const matrizPersonagem = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ];

    const matrizInimigoGrande = [
      [0, 0],
      [400, 0],
      [800, 0],
      [1200, 0],
      [1600, 0],
      [0, 400],
      [400, 400],
      [800, 400],
      [1200, 400],
      [1600, 400],
      [0, 800],
      [400, 800],
      [800, 800],
      [1200, 800],
      [1600, 800],
      [0, 1200],
      [400, 1200],
      [800, 1200],
      [1200, 1200],
      [1600, 1200],
      [0, 1600],
      [400, 1600],
      [800, 1600],
      [1200, 1600],
      [1600, 1600],
      [0, 2000],
      [400, 2000],
      [800, 2000],
    ];
    const matrizInimigoVoador = [
      [0, 0],
      [200, 0],
      [400, 0],
      [0, 150],
      [200, 150],
      [400, 150],
      [0, 300],
      [200, 300],
      [400, 300],
      [0, 450],
      [200, 450],
      [400, 450],
      [0, 600],
      [200, 600],
      [400, 600],
      [0, 750],
    ];

    const inimigos = [];

    p.preload = () => {
      imagemCenario = p.loadImage('assets/games/runner/imagens/cenario/floresta.png');
      imagemGameOver = p.loadImage('assets/games/runner/imagens/ui/game-over.png');
      imagemPersonagem = p.loadImage('assets/games/runner/imagens/personagem/correndo.png');
      imagemInimigo = p.loadImage('assets/games/runner/imagens/inimigos/gotinha.png');
      imagemInimigoVoador = p.loadImage('assets/games/runner/imagens/inimigos/gotinha-voadora.png');
      imagemInimigoGrande = p.loadImage('assets/games/runner/imagens/inimigos/troll.png');
      // somDoJogo = p.loadSound('assets/games/runner/sons/trilha_jogo.mp3');
      // somDoPulo = p.loadSound('assets/games/runner/sons/somPulo.mp3');
    }

    p.keyPressed = () => {
      if (p.key === 'ArrowUp') {
        personagem.pula();
        // somDoPulo.play();
      }
    }

    p.setup = () => {
      p.createCanvas(600, 600);
      cenario = new Cenario(p, imagemCenario, 3);
      pontuacao = new Pontuacao(p);

      personagem = new Personagem(p, matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
      inimigo = new Inimigo(p, matrizInimigo, imagemInimigo, p.width - 52, 30, 52, 52, 104, 104, 10, 200);
      inimigoVoador = new Inimigo(p, matrizInimigoVoador, imagemInimigoVoador, p.width - 52, 200, 100, 75, 200, 150, 10, 1500);
      inimigoGrande = new Inimigo(p, matrizInimigoGrande, imagemInimigoGrande, p.width, 0, 200, 200, 400, 400, 10, 2500);

      inimigos.push(inimigo);
      inimigos.push(inimigoGrande);
      inimigos.push(inimigoVoador);

      p.frameRate(40);
      // somDoJogo.loop();
    }

    p.draw = () => {
      cenario.exibe();
      cenario.move();

      pontuacao.exibe()
      pontuacao.adicionarPonto()
      personagem.exibe();
      personagem.aplicaGravidade();

      inimigos.forEach(inimigo => {
        inimigo.exibe();
        inimigo.move();

        if (personagem.estaColidindo(inimigo)) {
          p.image(imagemGameOver, p.width / 2 - 200, p.height / 3);
          p.noLoop();
        }
      });
    }
  }
}

class Cenario {
  p;
  imagem;
  velocidade;
  x1;
  x2;

  constructor(p, imagem, velocidade) {
    this.p = p;
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = this.p.width;
  }

  exibe() {
    this.p.image(this.imagem, this.x1, 0, this.p.width, this.p.height);
    this.p.image(this.imagem, this.x2, 0, this.p.width, this.p.height);
  }

  move() {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;

    if (this.x1 < -this.p.width) {
      this.x1 = this.p.width;
    }
    if (this.x2 < -this.p.width) {
      this.x2 = this.p.width;
    }
  }
}

class Pontuacao {

  p;
  pontos;

  constructor(p: any) {
    this.p = p;
    this.pontos = 0;
  }

  exibe() {
    this.p.textAlign(this.p.RIGHT);
    this.p.fill('#fff');
    this.p.textSize(50);
    this.p.text(parseInt(this.pontos), this.p.width - 30, 50);
  }

  adicionarPonto() {
    this.pontos = this.pontos + 0.2;
  }
}


class Animacao {

  p;
  variacaoY;
  yInicial;
  x;
  y;
  velocidadeDoPulo;
  gravidade;
  alturaDoPulo;
  pulos;

  largura; s
  altura;

  matriz;
  imagem;
  larguraSprite;
  alturaSprite;

  frameAtual;

  constructor(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    this.p = p;
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = p.height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;

    this.frameAtual = 0;
  }

  exibe() {
    this.p.image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    this.anima();
  }

  anima() {
    this.frameAtual++
    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0
    }
  }
}


class Personagem extends Animacao {

  p;
  variacaoY;
  yInicial;
  x;
  y;
  velocidadeDoPulo;
  gravidade;
  alturaDoPulo;
  pulos;

  largura;
  altura;

  constructor(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.yInicial = p.height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50
    this.pulos = 0
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo
      this.pulos++
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

    if (this.y > this.yInicial) {
      this.y = this.yInicial
      this.pulos = 0
    }
  }

  collideRectRect(
    x1,
    y1,
    larguraprecisao1,
    alturaprecisao1,
    x2,
    y2,
    larguraprecisao2,
    alturaprecisao2
  ) {
    return false;
  }

  estaColidindo(inimigo) {
    const precisao = .7
    const colisao = this.collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;
  }
}

class Inimigo extends Animacao {

  p;
  variacaoY;
  yInicial;
  x;
  y;
  velocidadeDoPulo;
  gravidade;
  alturaDoPulo;
  pulos;

  largura; s
  altura;

  matriz;
  imagem;
  larguraSprite;
  alturaSprite;

  frameAtual;

  velocidade;
  delay;

  constructor(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
    super(p, matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.velocidade = velocidade
    this.delay = delay
    this.x = p.width + this.delay
  }

  move() {
    this.x = this.x - this.velocidade

    if (this.x < -this.largura - this.delay) {
      this.x = this.p.width
    }
  }
}