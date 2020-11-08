export declare class Soldier {
    private health;
    private strength;
    constructor(health: number, strength: number);
    getHealth(): number;
    getStrength(): number;
}
export declare class Viking extends Soldier {
    private name;
    constructor(name: string, health: number, strength: number);
    getName(): string;
}
export declare class Saxon extends Soldier {
    constructor(health: number, strength: number);
}
export declare class War {
    constructor();
    private VikingArmy;
    private SaxonArmy;
    addViking(viking: Viking): void;
    addSaxon(saxon: Saxon): void;
}
