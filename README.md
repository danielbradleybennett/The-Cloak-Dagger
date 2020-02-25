# The Tavern

The Tavern is a single page app with full CRUD functionality and utilizes a 3rd party API. 

The purpose of this app is to allow new and veteran Dungeon & Dragons players to quickly search for D&D 5th Edition content and create content for their own home-brew worlds.

## Installation

```bash
npx create-react-app 
npm i --save react-router-dom
npm install --save bootstrap
npm install --save reactstrap react react-dom
npm start from the root directory to run application
```


## Usage

1. User registers and logs in.
2. User clicks on one of the 3 links on the Nav bar. 
3. The link the user clicks on will be taken to a new view where buttons will appear. 
4. User clicks on a button and the items they have created and will appear on the page along with a button to create a new item. 
5. User can click on new item button and a form will appear that they can fill out and save to a local JSON. 
6. User can click on item that they created and will be taken to a new view where they will see all the details pertaining to the clicked item. 
7. While in the detail view, user edit and/or delete item. 
8. User clicks on Library view. 
9. User chooses item on dropdown, types in a search term pertaining to chosen item, then clicks on search button. 
10. Items related to search will populate the page. 
11. User can click on an item and will be taken to a new view displaying the details of clicked item. 

## 3rd Party API

Fetch these APIs for detail view:

"spells": "https://api.open5e.com/spells/",
"monsters": "https://api.open5e.com/monsters/",
"documents": "https://api.open5e.com/documents/",
"backgrounds": "https://api.open5e.com/backgrounds/",
"planes": "https://api.open5e.com/planes/",
"sections": "https://api.open5e.com/sections/",
"feats": "https://api.open5e.com/feats/",
"conditions": "https://api.open5e.com/conditions/",
"races": "https://api.open5e.com/races/",
"classes": "https://api.open5e.com/classes/",
"magicitems": "https://api.open5e.com/magicitems/",
"weapons": "https://api.open5e.com/weapons/",
"search": "https://api.open5e.com/search/"

Main Search API is located in the Library section:

`https://api.open5e.com/search/?limit=999999&route=${searchType}&text=${searchText}`

## JSON

```bash
"brewArmor": [
    {
      "id": 1,
      "name": "platinum yeah",
      "desc": "platinum",
      "userId": 3
    },
    {
      "id": 2,
      "name": "wolverine yoooo boy",
      "desc": "sharp and sassy",
      "userId": 3
    },
    {
      "id": 4,
      "name": "Dragon Scale ",
      "type": "Martial",
      "desc": "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued.\n\nWhile wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to one damage type that is determined by the kind of a dragon that provided the scales (see the table).\n\nAdditionally, you can focus your senses as an action to magically discern the distance and direction to the closest dragon of the type of armor within 30 miles of you. This special action can't be used again until the next dawn.",
      "rarity": "Very Rare",
      "userId": 2
    },
    {
      "name": "Absorbing Shield",
      "desc": "A flat black shield that feels cool to the touch, it seems to absorb the light around it. While held you can use one charge to cast darkness centered on the shield and disintegrate can be cast using two charges. The shield has 4 charges and regains 1d4 charges each day at dusk. If you ever expend the last charge roll a d20. On a 1 or a 2 the shield shatters casting the darkness centered on you. This effect lasts for 2d6+2 hours or until dispel magic, remove curse, antimagic field, or other magic is used to get rid of it. ",
      "rarity": "Rare",
      "userId": 2,
      "id": 6
    },
    "brewSpells": [
    {
      "name": "Fireball",
      "description": "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren’t being worn or carried.\nAt Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
      "castingTime": "1 action",
      "typeId": 5,
      "duration": "instant",
      "range": "120ft",
      "userId": 2,
      "id": 1
    },
    {
      "name": "Power Word: Kill",
      "description": "You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you chose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect.",
      "castingTime": "1 action",
      "typeId": 4,
      "level": "9",
      "duration": "Instantaneous",
      "range": "60ft",
      "userId": 2,
      "id": 2
    },
    {
      "name": "True Resurrection",
      "description": "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature’s soul is free and willing, the creature is restored to life with all its hit points.\n\nThis spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs or limbs.\n\nThe spell can even provide a new body if the original no longer exists, in which case you must speak the creature’s name. The creature then appears in an unoccupied space you choose within 10 feet of you.",
      "castingTime": "1 hour",
      "typeId": 7,
      "level": "9th",
      "duration": "Instantaneous",
      "range": "Touch",
      "userId": 2,
      "id": 3
    },
```







