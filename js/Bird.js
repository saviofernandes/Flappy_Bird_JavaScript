const Bird = function(x, y, ctx){
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.velY = 0;
    this.width = 34;
    this.height = 24;
    this.ticks = 0;
    this.spriteIndex = 0;
    this.sprites = [document.getElementById('bird1'),
                    document.getElementById('bird2'),
                    document.getElementById('bird3'),
                    document.getElementById('bird2')]
}
var self = this;


Bird.prototype.update = function(){
    this.ticks++;
    if(this.ticks % 15 === 0)
        {
            this.spriteIndex = (this.spriteIndex + 1) % this.sprites.length;
        }
    this.y += this.velY;
    this.velY += 1;
};

Bird.prototype.render = function(){
    let renderX = this.x - this.width/2;
    let renderY = this.y - this.height/2;
    this.ctx.drawImage(this.sprites[this.spriteIndex], renderX, renderY);
};