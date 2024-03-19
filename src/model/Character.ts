class Character {
    name: string;
    charClass: string;
    level: string;
    race: string;
    background: string;
    alignment: string;
    marginNotes: string;
    characterNotes: {title:string, content:string}[];
    constructor(name: string, charClass: string, level: string, race: string, background: string, alignment: string, marginNotes: string, characterNotes: {title:string, content:string}[]){
        this.name = name;
        this.charClass = charClass;
        this.level = level;
        this.race = race;
        this.background = background;
        this.alignment = alignment;
        this.marginNotes = marginNotes;
        this.characterNotes = characterNotes;
    }

}

export default Character