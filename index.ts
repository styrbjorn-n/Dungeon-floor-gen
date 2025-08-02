// pnpx ts-node index.ts to run this shit

enum RoomTypes {
  starting = 'starting',
  boss = 'boss',
  combat = 'combat',
  loot = 'loot',
}

class Room {
  type: RoomTypes;
  width: number;
  height: number;
  difficulty: number = 0;
  lootTable?: string[];
  constructor(type: RoomTypes, width: number, height: number) {
    this.type = type;
    this.width = width;
    this.height = height;
  }

  generateLootTable(): void {
    const baseLootTable: string[] = [
      'Health Potion',
      'Mana Potion',
      'Iron Sword',
      'Steel Shield',
      'Gold Coin',
      'Leather Armor',
      'Magic Scroll',
      'Gemstone',
      'Bow and Arrows',
      'Enchanted Ring',
    ];

    const numberOfItems = Math.floor(Math.random() * baseLootTable.length);

    let newLootTable: string[] = [];

    for (let i = 0; i < numberOfItems; i++) {
      newLootTable.push(
        baseLootTable[Math.floor(Math.random() * baseLootTable.length)]
      );
    }
    this.lootTable = newLootTable;
  }
}

class StartingRoom extends Room {
  constructor() {
    super(RoomTypes.starting, 10, 10);
  }
}

class CombatRoom extends Room {
  constructor(difficulty: number, width: number, height: number) {
    super(RoomTypes.combat, width, height);
    this.difficulty = difficulty;
  }
}

class BossRoom extends Room {
  constructor() {
    super(RoomTypes.boss, 20, 20);
    this.difficulty = 10;
  }
}

class LootRoom extends Room {
  constructor(lootTable: string[]) {
    super(RoomTypes.loot, 8, 8);
    this.lootTable;
  }
}

// function generateLootTable() {
//   const baseLootTable: string[] = [
//     'Health Potion',
//     'Mana Potion',
//     'Iron Sword',
//     'Steel Shield',
//     'Gold Coin',
//     'Leather Armor',
//     'Magic Scroll',
//     'Gemstone',
//     'Bow and Arrows',
//     'Enchanted Ring',
//   ];

//   const numberOfItems = Math.floor(Math.random() * baseLootTable.length);

//   let newLootTable: string[] = [];

//   for (let i = 0; i < numberOfItems; i++) {
//     newLootTable.push(
//       baseLootTable[Math.floor(Math.random() * baseLootTable.length)]
//     );
//   }
//   return newLootTable;
// }

const start = new StartingRoom();
const combat = new CombatRoom(3, 12, 12);
combat.generateLootTable();

console.log(start);
console.log(combat);
