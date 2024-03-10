class Character {
    name: string;
    charClass: string;
    level: string;
    race: string;
    background: string;
    alignment: string;
    marginNotes: string;

    constructor(name: string, charClass: string, level: string, race: string, background: string, alignment: string, marginNotes: string){
        this.name = name;
        this.charClass = charClass;
        this.level = level;
        this.race = race;
        this.background = background;
        this.alignment = alignment;
        this.marginNotes = marginNotes;
    }

}

export default Character