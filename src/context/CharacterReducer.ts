import { defaultImage } from "./defaultImage";

type Attribute =
  | "Strength"
  | "Dexterity"
  | "Constitution"
  | "Intelligence"
  | "Wisdom"
  | "Charisma";

interface Stat {
  attribute: Attribute;
  saveProficiency: 0 | 1;
  value: number;
}

interface Skill {
  name: string;
  attribute: Attribute;
  proficiency: 0 | 1 | 2;
}

interface NoteSection {
  title: string;
  content: string;
}

interface HitDie {
  type: "d6" | "d8" | "d10" | "d12";
  max: number;
  current: number;
}

interface ItemNoCharge {
  name: string;
  shortDescription: string;
  fullDescription: string;
  cost: string;
}

interface ItemWithCharge {
  name: string;
  shortDescription: string;
  fullDescription: string;
  cost: string;
  maxCharges: number;
  currentCharges: number;
}

type Item = ItemNoCharge | ItemWithCharge;

interface Bag {
  name: string;
  description: string;
  items: Item[];
}

export interface CharacterState {
  name: string;
  charClass: string;
  level: string;
  race: string;
  background: string;

  marginNotes: string;
  characterNotes: NoteSection[];
  characterImage: string;

  proficiencyBonus: number;
  inspiration: string;

  stats: Stat[];
  skills: Skill[];

  passivePerceptionBonusCustom: number;
  passiveInvestigationBonusCustom: number;
  passiveInsightBonusCustom: number;
  passiveStealthBonusCustom: number;

  deathSaveSuccesses: 0 | 1 | 2 | 3;
  deathSaveFails: 0 | 1 | 2 | 3;

  hitDice: HitDie[];

  maxHitPoints: number;
  currentHitPoints: number;
  tempHitPoints: number;

  initiativeBonusCustom: number;

  speed: number;
  flySpeed: number;
  swimSpeed: number;

  baseArmorClass: number;
  applyDexterityBonusLimit: boolean;
  dexterityBonusLimit: number;
  shieldBonus: number;
  armorClassBonusCustom: number;

  copper: number;
  silver: number;
  gold: number;
  platinum: number;

  equippedItems: Item[];
  bags: Bag[];
}

export const defaultCharacter: CharacterState = {
  name: "",
  charClass: "",
  level: "",
  race: "",
  background: "",
  marginNotes: "",
  characterNotes: [
    { title: "", content: "" },
    { title: "", content: "" },
    { title: "", content: "" },
    { title: "", content: "" },
  ],
  characterImage: defaultImage,
  proficiencyBonus: 0,
  inspiration: "",
  stats: [
    { attribute: "Strength", value: 10, saveProficiency: 0 },
    { attribute: "Dexterity", value: 10, saveProficiency: 0 },
    { attribute: "Constitution", value: 10, saveProficiency: 0 },
    { attribute: "Intelligence", value: 10, saveProficiency: 0 },
    { attribute: "Wisdom", value: 10, saveProficiency: 0 },
    { attribute: "Charisma", value: 10, saveProficiency: 0 },
  ],
  skills: [
    { name: "Acrobatics", attribute: "Dexterity", proficiency: 0 },
    { name: "Animal Handling", attribute: "Wisdom", proficiency: 0 },
    { name: "Arcana", attribute: "Intelligence", proficiency: 0 },
    { name: "Athletics", attribute: "Strength", proficiency: 0 },
    { name: "Deception", attribute: "Charisma", proficiency: 0 },
    { name: "History", attribute: "Intelligence", proficiency: 0 },
    { name: "Insight", attribute: "Wisdom", proficiency: 0 },
    { name: "Intimidation", attribute: "Charisma", proficiency: 0 },
    { name: "Investigation", attribute: "Intelligence", proficiency: 0 },
    { name: "Medicine", attribute: "Wisdom", proficiency: 0 },
    { name: "Nature", attribute: "Intelligence", proficiency: 0 },
    { name: "Perception", attribute: "Wisdom", proficiency: 0 },
    { name: "Performance", attribute: "Charisma", proficiency: 0 },
    { name: "Persuasion", attribute: "Charisma", proficiency: 0 },
    { name: "Religion", attribute: "Intelligence", proficiency: 0 },
    { name: "Sleight of Hand", attribute: "Dexterity", proficiency: 0 },
    { name: "Stealth", attribute: "Dexterity", proficiency: 0 },
    { name: "Survival", attribute: "Wisdom", proficiency: 0 },
  ],
  passivePerceptionBonusCustom: 0,
  passiveInvestigationBonusCustom: 0,
  passiveInsightBonusCustom: 0,
  passiveStealthBonusCustom: 0,
  deathSaveSuccesses: 0,
  deathSaveFails: 0,
  hitDice: [
    { type: "d6", current: 0, max: 0 },
    { type: "d8", current: 0, max: 0 },
    { type: "d10", current: 0, max: 0 },
    { type: "d12", current: 0, max: 0 },
  ],
  maxHitPoints: 10,
  currentHitPoints: 10,
  tempHitPoints: 0,
  initiativeBonusCustom: 0,
  speed: 30,
  flySpeed: 0,
  swimSpeed: 15,
  baseArmorClass: 10,
  applyDexterityBonusLimit: false,
  dexterityBonusLimit: 0,
  shieldBonus: 0,
  armorClassBonusCustom: 0,
  copper: 0,
  silver: 0,
  gold: 0,
  platinum: 0,
  equippedItems: [],
  bags: [{ name: "Backpack", description: "The default backpack", items: [] }],
};

type CharacterAction =
  | { type: "CHANGE_NAME"; payload: { newName: string } }
  | { type: "CHANGE_CLASS"; payload: { newClass: string } }
  | { type: "CHANGE_RACE"; payload: { newRace: string } }
  | { type: "CHANGE_LEVEL"; payload: { newLevel: string } }
  | { type: "CHANGE_BACKGROUND"; payload: { newBackground: string } }
  | { type: "CHANGE_MARGIN_NOTES"; payload: { newMarginNotes: string } }
  | {
      type: "CHANGE_NOTE_SECTION";
      payload: { index: number; title: string; content: string };
    }
  | { type: "CHANGE_CHARACTER_IMAGE"; payload: { newImage: string } }
  | {
      type: "CHANGE_PROFICIENCY_BONUS";
      payload: { newProficiencyBonus: number };
    }
  | { type: "CHANGE_INSPIRATION"; payload: { newInspiration: string } }
  | {
      type: "CHANGE_STAT";
      payload: {
        attribute: Attribute;
        newValue: number;
        newSaveProficiency: 0 | 1;
      };
    }
  | { type: "CHANGE_SKILL"; payload: { name: string; newValue: 0 | 1 | 2 } }
  | {
      type: "CHANGE_PASSIVE_PERCEPTION_BONUS_CUSTOM";
      payload: { newValue: number };
    }
  | {
      type: "CHANGE_PASSIVE_INVESTIGATION_BONUS_CUSTOM";
      payload: { newValue: number };
    }
  | {
      type: "CHANGE_PASSIVE_INSIGHT_BONUS_CUSTOM";
      payload: { newValue: number };
    }
  | {
      type: "CHANGE_PASSIVE_STEALTH_BONUS_CUSTOM";
      payload: { newValue: number };
    }
  | {
      type: "CHANGE_DEATH_SAVE_SUCCESSES";
      payload: { newDeathSaveSuccesses: 0 | 1 | 2 | 3 };
    }
  | {
      type: "CHANGE_DEATH_SAVE_FAILS";
      payload: { newDeathSaveFails: 0 | 1 | 2 | 3 };
    }
  | {
      type: "CHANGE_HIT_DICE";
      payload: {
        type: "d6" | "d8" | "d10" | "d12";
        newMax: number;
        newCurrent: number;
      };
    }
  | { type: "CHANGE_MAX_HIT_POINTS"; payload: { newMaxHitPoints: number } }
  | {
      type: "CHANGE_CURRENT_HIT_POINTS";
      payload: { newCurrentHitPoints: number };
    }
  | { type: "CHANGE_TEMP_HIT_POINTS"; payload: { newTempHitPoints: number } }
  | {
      type: "CHANGE_INITIATIVE_BONUS_CUSTOM";
      payload: { newInitiativeBonusCustom: number };
    }
  | { type: "CHANGE_SPEED"; payload: { newSpeed: number } }
  | { type: "CHANGE_FLY_SPEED"; payload: { newFlySpeed: number } }
  | { type: "CHANGE_SWIM_SPEED"; payload: { newSwimSpeed: number } }
  | { type: "CHANGE_BASE_ARMOR_CLASS"; payload: { newBaseArmorClass: number } }
  | {
      type: "CHANGE_APPLY_DEXTERITY_BONUS_LIMIT";
      payload: { newApplyDexterityBonusLimit: boolean };
    }
  | {
      type: "CHANGE_DEXTERITY_BONUS_LIMIT";
      payload: { newDexterityBonusLimit: number };
    }
  | { type: "CHANGE_SHIELD_BONUS"; payload: { newShieldBonus: number } }
  | {
      type: "CHANGE_ARMOR_CLASS_BONUS_CUSTOM";
      payload: { newArmorClassBonusCustom: number };
    };

export function characterReducer(
  state: CharacterState,
  action: CharacterAction
): CharacterState {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.newName };
    case "CHANGE_CLASS":
      return { ...state, charClass: action.payload.newClass };
    case "CHANGE_RACE":
      return { ...state, race: action.payload.newRace };
    case "CHANGE_LEVEL":
      return { ...state, level: action.payload.newLevel };
    case "CHANGE_BACKGROUND":
      return { ...state, background: action.payload.newBackground };
    case "CHANGE_MARGIN_NOTES":
      return { ...state, marginNotes: action.payload.newMarginNotes };
    case "CHANGE_NOTE_SECTION":
      return {
        ...state,
        characterNotes: state.characterNotes.map((note, index) =>
          index === action.payload.index
            ? {
                ...note,
                title: action.payload.title,
                content: action.payload.content,
              }
            : note
        ),
      };
    case "CHANGE_CHARACTER_IMAGE":
      return { ...state, characterImage: action.payload.newImage };
    case "CHANGE_PROFICIENCY_BONUS":
      return { ...state, proficiencyBonus: action.payload.newProficiencyBonus };
    case "CHANGE_INSPIRATION":
      return { ...state, inspiration: action.payload.newInspiration };
    case "CHANGE_STAT":
      return {
        ...state,
        stats: state.stats.map((stat) =>
          stat.attribute === action.payload.attribute
            ? {
                ...stat,
                value: action.payload.newValue,
                saveProficiency: action.payload.newSaveProficiency,
              }
            : stat
        ),
      };
    case "CHANGE_SKILL":
      return {
        ...state,
        skills: state.skills.map((skill) =>
          skill.name === action.payload.name
            ? { ...skill, proficiency: action.payload.newValue }
            : skill
        ),
      };
    case "CHANGE_PASSIVE_PERCEPTION_BONUS_CUSTOM":
      return {
        ...state,
        passivePerceptionBonusCustom: action.payload.newValue,
      };
    case "CHANGE_PASSIVE_INVESTIGATION_BONUS_CUSTOM":
      return {
        ...state,
        passiveInvestigationBonusCustom: action.payload.newValue,
      };
    case "CHANGE_PASSIVE_INSIGHT_BONUS_CUSTOM":
      return {
        ...state,
        passiveInsightBonusCustom: action.payload.newValue,
      };
    case "CHANGE_PASSIVE_STEALTH_BONUS_CUSTOM":
      return {
        ...state,
        passiveStealthBonusCustom: action.payload.newValue,
      };
    case "CHANGE_DEATH_SAVE_SUCCESSES":
      return {
        ...state,
        deathSaveSuccesses: action.payload.newDeathSaveSuccesses,
      };
    case "CHANGE_DEATH_SAVE_FAILS":
      return {
        ...state,
        deathSaveFails: action.payload.newDeathSaveFails,
      };
    case "CHANGE_HIT_DICE":
      return {
        ...state,
        hitDice: state.hitDice.map((hitDie) =>
          hitDie.type === action.payload.type
            ? {
                ...hitDie,
                max: action.payload.newMax,
                current: action.payload.newCurrent,
              }
            : hitDie
        ),
      };

    case "CHANGE_MAX_HIT_POINTS":
      return { ...state, maxHitPoints: action.payload.newMaxHitPoints };

    case "CHANGE_CURRENT_HIT_POINTS":
      return { ...state, currentHitPoints: action.payload.newCurrentHitPoints };

    case "CHANGE_TEMP_HIT_POINTS":
      return { ...state, tempHitPoints: action.payload.newTempHitPoints };

    case "CHANGE_INITIATIVE_BONUS_CUSTOM":
      return {
        ...state,
        initiativeBonusCustom: action.payload.newInitiativeBonusCustom,
      };

    case "CHANGE_SPEED":
      return { ...state, speed: action.payload.newSpeed };

    case "CHANGE_FLY_SPEED":
      return { ...state, flySpeed: action.payload.newFlySpeed };

    case "CHANGE_SWIM_SPEED":
      return { ...state, swimSpeed: action.payload.newSwimSpeed };

    case "CHANGE_BASE_ARMOR_CLASS":
      return { ...state, baseArmorClass: action.payload.newBaseArmorClass };

    case "CHANGE_APPLY_DEXTERITY_BONUS_LIMIT":
      return {
        ...state,
        applyDexterityBonusLimit: action.payload.newApplyDexterityBonusLimit,
      };

    case "CHANGE_DEXTERITY_BONUS_LIMIT":
      return {
        ...state,
        dexterityBonusLimit: action.payload.newDexterityBonusLimit,
      };

    case "CHANGE_SHIELD_BONUS":
      return { ...state, shieldBonus: action.payload.newShieldBonus };

    case "CHANGE_ARMOR_CLASS_BONUS_CUSTOM":
      return {
        ...state,
        armorClassBonusCustom: action.payload.newArmorClassBonusCustom,
      };

    default:
      return state;
  }
}
