const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 700;
const canvasPosition = canvas.getBoundingClientRect(); // obtiene las coordenadas del elemento en el ventana

const explosions = [];

class Explosion {
    constructor(x, y){
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.whidth = this.spriteWidth * 0.7;
        this.height = this.spriteHeight * 0.7;
        this.x = x ;
        this.y = y ;
        this.image = new Image();
        this.image.src = './boom.png';
        this.frame = 0;
        this.timer = 0;
        this.angle = Math.random() * 6.2;
        this.sound = new Audio();
        this.sound.src = '../../public/SoundEffect/Ice attack 2.wav'
    }
    update(){
        if(this.frame === 0) this.sound.play();
        this.timer++
        if(this.timer % 10 === 0){
            this.frame++;
        }
    }
    draw(){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, 0 - this.whidth/2, 0 - this.height/2 , this.whidth, this.height );
        ctx.restore();
    }
}

window.addEventListener('click', (e) => {
  createAnimation(e);
});

/*window.addEventListener('mousemove', function(e){
    createAnimation(e)
})*/

function createAnimation(e){
    let positionX = e.x - canvasPosition.left;
    let positionY = e.y - canvasPosition.top;
   
    //ctx.fillStyle = 'white'
    //ctx.fillRect(positionX-50,positionY-50,100,100);
    explosions.push(new Explosion(positionX, positionY));
}

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    
    for (let i = 0; i < explosions.length; i++) {
        explosions[i].update();
        explosions[i].draw();
        if(explosions[i].frame > 5){
            explosions.splice(i,1);
            i--;
        }
    }
    requestAnimationFrame(animate);
}
animate()