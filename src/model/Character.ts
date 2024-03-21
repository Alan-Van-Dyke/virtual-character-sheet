class Character {
  name: string;
  charClass: string;
  level: string;
  race: string;
  background: string;

  marginNotes: string;
  characterNotes: { title: string; content: string }[];

  proficiencyBonus: number;

  statArray: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };

  skillProficiencies: {
    acrobatics: 0 | 1 | 2;
    animalHandling: 0 | 1 | 2;
    arcana: 0 | 1 | 2;
    athletics: 0 | 1 | 2;
    deception: 0 | 1 | 2;
    history: 0 | 1 | 2;
    insight: 0 | 1 | 2;
    intimidation: 0 | 1 | 2;
    investigation: 0 | 1 | 2;
    medicine: 0 | 1 | 2;
    nature: 0 | 1 | 2;
    perception: 0 | 1 | 2;
    performance: 0 | 1 | 2;
    persuasion: 0 | 1 | 2;
    religion: 0 | 1 | 2;
    sleightOfHand: 0 | 1 | 2;
    stealth: 0 | 1 | 2;
    survival: 0 | 1 | 2;
  };

  savingThrowProficiencies: {
    strength: 0 | 1;
    dexterity: 0 | 1;
    constitution: 0 | 1;
    intelligence: 0 | 1;
    wisdom: 0 | 1;
    charisma: 0 | 1;
  };

  constructor(
    name: string,
    charClass: string,
    level: string,
    race: string,
    background: string,
    marginNotes: string,
    characterNotes: { title: string; content: string }[],
    proficiencyBonus: number,
    statArray: {
      strength: number;
      dexterity: number;
      constitution: number;
      intelligence: number;
      wisdom: number;
      charisma: number;
    },
    skillProficiencies: {
      acrobatics: 0 | 1 | 2;
      animalHandling: 0 | 1 | 2;
      arcana: 0 | 1 | 2;
      athletics: 0 | 1 | 2;
      deception: 0 | 1 | 2;
      history: 0 | 1 | 2;
      insight: 0 | 1 | 2;
      intimidation: 0 | 1 | 2;
      investigation: 0 | 1 | 2;
      medicine: 0 | 1 | 2;
      nature: 0 | 1 | 2;
      perception: 0 | 1 | 2;
      performance: 0 | 1 | 2;
      persuasion: 0 | 1 | 2;
      religion: 0 | 1 | 2;
      sleightOfHand: 0 | 1 | 2;
      stealth: 0 | 1 | 2;
      survival: 0 | 1 | 2;
    },
    savingThrowProficiencies: {
      strength: 0 | 1;
      dexterity: 0 | 1;
      constitution: 0 | 1;
      intelligence: 0 | 1;
      wisdom: 0 | 1;
      charisma: 0 | 1;
    }
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
