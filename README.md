# Virtual Character Sheet

## Design

This is a generic character sheet to be used for table top RPG games. I designed it with a few goals in mind:

- Keep all of the functionality of a pen and paper character sheet
- Track resources and replenish them on short/long rests appropriately
- Store all of the player's abilities, features, and any additional notes

This does **_not_** pull from any official sources. All classes, abilities, features, etc. must be provided by the user. I plan to add options to tie actions/resources to be refreshed on rests, or have them automatically impact ability scores or other values, but these relationships are going to be entirely user created.

This was also an excuse to learn React, so the code style/structure isn't going to be very consistent - as I learn, I may do things differently without going back and refactoring what I've done.

## Features

### Edit Mode

Using the 'Edit Mode' toggle at the top of the screen enables edit mode on all components. Several sections will turn into text fields, buttons, or dropdown menus for the user to customize their character. All values are applied immediately, and calculated values (like AC and Initiative) are calculated behind the scenes. Once edit mode is disabled, the normal character sheet is populated with user input as well as any calculated values.

### Character Info

The top panel holds character info, such as name, class, and background. This does not impact the rest of the sheet at all - the 5 text fields could be used for any custom purpose, and they are not intensely validated

### Ability Scores

The ability bar allows the user to input their ability scores, and automatically calculates the ability modifiers. These ability scores affect several other values, as defined in the rules I'm using for development.

_\*Note: This was designed with my group's rule set in mind. This might not be an exact fit to any official games or homebrew rules._

### Misc. Bonuses and Hit Dice

I threw these together because the hit dice count and proficiency bonuses are both tied to level. The Proficiency bonus and Inspiration fields must be manually set. The hit dice list can be edited in edit mode, setting the current and maximum count for each hit dice (d6-d12). These dice are then rendered as a list outside of edit mode, and consumed when taking a long rest. ( **NOT YET IMPLEMENTED** )

### Combat stats

Armor class, Speed, and Initiative are grouped together. Armor class is configurable in edit mode: you set your base AC, armor type, and whether or not you're using a shield. This calculates all AC bonuses, adds them to your base, and displays your armor class outside of edit mode. Speed is set by the user. Initiative takes your dexterity modifier and adds any custom bonus you provide.

Max hitpoints, current hitpoints, and temporary hitpoints are initially added manually. This program does not guide the user through level-ups (though it might in the distant future) so max hitpoints are always manually set. The program will adjust your current hitpoints after certain situations, such as after consuming hit dice on a short rest, or healing to full on a long rest.

### **More features planned, currently WIP**

- Sheet save/import system
  - At some point I'll need to persist a character sheet, still considering options while I add functionality
- Skills/saving throws with proficiencies
- Rest popups
  - Upon resting, create a popup to show relevant information such as refreshed abilities
  - Options such as consuming hit dice
  - User-set reminders
- Inventory section
  - Items with name/description
  - Currency tracking
  - Consumable items with customized stat/attribute changes
  - Inventory weight tracking (maybe)
- Resource tracking
  - Spell/ability charges
  - "Per-rest" features with customized refresh conditions

### Long term additions

- Sheet management
  - UI for creating, editing, and deleting sheets
- Combat mode
  - Enter a mode that tracks actions, status conditions, etc. in turn-based gameplay

### **_Really_** long term additions

- Transition to web tool with full-time hosting
- Logins to be shared with friends
- Game Master mode
