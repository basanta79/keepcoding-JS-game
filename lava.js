function Lava(initialPosition, characterType) {
    this.position = initialPosition;
    this.size = new Vector(1,1);
    
    if (characterType === '=') this.speed = new Vector(2 ,0);
    else if (characterType === '|') this.speed = new Vector(0 ,2);
    else if (characterType === 'v') {
        this.speed = new Vector(0 ,2);
        this.respawnPosition = initialPosition;
    }
}

Lava.prototype.type = 'lava';