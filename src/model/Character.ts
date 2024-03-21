class Character {
  name: string;
  charClass: string;
  level: string;
  race: string;
  background: string;

  marginNotes: string;
  characterNotes: { title: string; content: string }[];

  proficiencyBonus: number;

  statArray: Map<string, number>;

  skillProficiencies: Map<string, {attribute: string, value: number}>

  savingThrowProficiencies: Map<string, number>;

  constructor(
    name: string,
    charClass: string,
    level: string,
    race: string,
    background: string,
    marginNotes: string,
    characterNotes: { title: string; content: string }[],
    proficiencyBonus: number,
    statArray: Map<string, number>,
    skillProficiencies: Map<string, {attribute: string, value: number}>,
    savingThrowProficiencies: Map<string, number>
  ) {
    this.name = name;
    this.charClass = charClass;
    this.level = level;
    this.race = race;
    this.background = background;
    this.marginNotes = marginNotes;
    this.characterNotes = characterNotes;
    this.proficiencyBonus = proficiencyBonus;
    this.statArray = statArray;
    this.skillProficiencies = skillProficiencies;
    this.savingThrowProficiencies = savingThrowProficiencies;
  }
}

export default Character;
