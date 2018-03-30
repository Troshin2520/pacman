export const BLOCK_SIZE = 4;

export const ACTION_CHANGE_ZONE = 'CHANGE_ZONE';
export const ACTION_MOVE_SPIDER = 'MOVE_SPIDER';
export const ACTION_MOVE_PACMAN = 'MOVE_PACMAN';

export const zones = [
  {
    field: [
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 0, 0, 0, 0, 0, 0, 0, 4, 1, 4],
      [4, 1, 4, 0, 4, 8, 8, 8, 4, 0, 4, 1, 4],
      [0, 1, 4, 0, 4, 0, 0, 0, 4, 0, 4, 1, 0],
      [4, 1, 4, 0, 4, 4, 4, 4, 4, 0, 4, 1, 4],
      [4, 1, 4, 1, 1, 1, 0, 1, 1, 1, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 4],
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    ],
    speed: 0.6,
    pacman: {x: 6, y: 8, dir: 'left'},
    spiders: {
      red:{x: 6, y: 6, move: 'top'},
      green:{x: 6, y: 6, move: 'top'},
      orange:{x: 5, y: 6, move: 'top'},
      blue:{x: 7, y: 6, move: 'top'}
    },
  },
  {
    field: [
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 1, 0, 0, 0, 0, 0, 1, 4, 1, 4],
      [4, 1, 4, 1, 4, 8, 8, 8, 4, 1, 4, 1, 4],
      [0, 1, 4, 1, 4, 0, 0, 0, 4, 1, 4, 1, 0],
      [4, 1, 4, 1, 4, 4, 4, 4, 4, 1, 4, 1, 4],
      [4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4],
      [4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 4],
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    ],
    speed: 0.5,
    pacman: {x: 6, y: 8, dir: 'left'},
    spiders: {
      red:{x: 6, y: 6, move: 'top'},
      green:{x: 6, y: 6, move: 'right'},
      orange:{x: 5, y: 6, move: 'left'},
      blue:{x: 7, y: 6, move: 'bottom'}
    }
  },
  {
    field: [
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 4],
      [4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 1, 0, 0, 0, 0, 0, 1, 4, 1, 4],
      [4, 1, 4, 1, 4, 8, 8, 8, 4, 1, 4, 1, 4],
      [0, 1, 4, 1, 4, 0, 0, 0, 4, 1, 4, 1, 0],
      [4, 1, 4, 1, 4, 4, 4, 4, 4, 1, 4, 1, 4],
      [4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4],
      [4, 1, 4, 1, 4, 4, 4, 4, 4, 1, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 4],
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    ],
    speed: 0.4,
    pacman: {x: 6, y: 9, dir: 'left'},
    spiders: {
      red:{x: 6, y: 7, move: 'top'},
      green:{x: 6, y: 7, move: 'right'},
      orange:{x: 5, y: 7, move: 'left'},
      blue:{x: 7, y: 7, move: 'bottom'}
    }
  }
];