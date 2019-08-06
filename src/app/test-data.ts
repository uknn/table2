export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
  x: string[];
  y: string[];
  z: string[];
}

export const testData: PeriodicElement[] = [
  { name: 'Hydrogen', weight: 1.0079, symbol: 'H', x: [], y: [], z: [] },
  { name: 'Helium', weight: 4.0026, symbol: 'He', x: [], y: [], z: [] },
  { name: 'Lithium', weight: 6.941, symbol: 'Li', x: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum', 'Dolor sit amet...'], y: ['Sit', 'Amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'], z: ['lorem', 'Ipsum', 'Dolor sit amet, consecterur...'] },
  { name: 'Beryllium', weight: 9.0122, symbol: 'Be', x: [], y: [], z: [] },
  { name: 'Boron', weight: 10.811, symbol: 'B', x: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum', 'Dolor sit amet...'], y: ['Sit', 'Amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'], z: ['lorem', 'Ipsum', 'Dolor sit amet, consecterur...'] },
  { name: 'Carbon', weight: 12.0107, symbol: 'C', x: [], y: [], z: [] },
  { name: 'Nitrogen', weight: 14.0067, symbol: 'N', x: [], y: [], z: [] },
  { name: 'Oxygen', weight: 15.9994, symbol: 'O', x: [], y: [], z: [] },
  { name: 'Fluorine', weight: 18.9984, symbol: 'F', x: [], y: [], z: [] },
  { name: 'Neon', weight: 20.1797, symbol: 'Ne', x: [], y: [], z: [] },
  { name: 'Sodium', weight: 22.9897, symbol: 'Na', x: [], y: [], z: [] },
  { name: 'Magnesium', weight: 24.305, symbol: 'Mg', x: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum', 'Dolor sit amet...'], y: ['Sit', 'Amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'], z: ['lorem', 'Ipsum', 'Dolor sit amet, consecterur...'] },
  { name: 'Aluminum', weight: 26.9815, symbol: 'Al', x: [], y: [], z: [] },
  { name: 'Silicon', weight: 28.0855, symbol: 'Si', x: [], y: [], z: [] },
  { name: 'Phosphorus', weight: 30.9738, symbol: 'P', x: [], y: [], z: [] },
  { name: 'Sulfur', weight: 32.065, symbol: 'S', x: [], y: [], z: [] },
  { name: 'Chlorine', weight: 35.453, symbol: 'Cl', x: [], y: [], z: [] },
  { name: 'Argon', weight: 39.948, symbol: 'Ar', x: [], y: [], z: [] },
  { name: 'Potassium', weight: 39.0983, symbol: 'K', x: [], y: [], z: [] },
  { name: 'Calcium', weight: 40.078, symbol: 'Ca', x: [], y: [], z: [] },
];