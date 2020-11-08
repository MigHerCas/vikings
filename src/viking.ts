// Soldier
export class Soldier {
  private health = 0;
  private strength = 0;

  constructor(health: number, strength: number) {
    this.health = health;
    this.strength = strength;
  }

  // Gettes
  getHealth(): number {return this.health}
  getStrength(): number {return this.strength}
}

// Viking
export class Viking extends Soldier {
  private name: string;

  constructor(name: string, health: number, strength: number) {
    super(health, strength);
    this.name = name;
  }

  getName(): string {return this.name}
}

// Saxon
export class Saxon extends Soldier {
  constructor(health: number, strength: number) {
    super(health, strength);
  }
}

// War
export class War {
  constructor() {}

  private VikingArmy: Viking[] = [];
  private SaxonArmy: Saxon[] = [];

  public addViking(viking: Viking): void {
    this.VikingArmy = [...this.VikingArmy, viking];
  }

  public addSaxon(saxon: Saxon): void {
  this.SaxonArmy = [...this.SaxonArmy, saxon];
  }
}
