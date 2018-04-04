export const BLOCK_SIZE = 4;

export const ACTION_CHANGE_PACMAN_DIRECTION = 'CHANGE_PACMAN_DIRECTION';
export const ACTION_CHANGE_ZONE = 'CHANGE_ZONE';
export const ACTION_MOVE_SPIDER = 'MOVE_SPIDER';
export const ACTION_MOVE_PACMAN = 'MOVE_PACMAN';
export const ACTION_PACMAN_EAT = 'PACMAN_EAT';
export const ACTION_FEED_ATE = 'FEED_ATE';

export const directions = {up: 'up', down: 'down', left: 'left', right:'right', no: 'no'};

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
    pacman: {x: 6, y: 8, move: directions.no, next: directions.no},
    spiders: {
      red: {x: 6, y: 6, move: directions.up},
      green: {x: 6, y: 6, move: directions.up},
      orange: {x: 5, y: 6, move: directions.up},
      blue: {x: 7, y: 6, move: directions.up}
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
    pacman: {x: 6, y: 8, move: directions.no, next: directions.no},
    spiders: {
      red: {x: 6, y: 6, move: directions.up},
      green: {x: 6, y: 6, move: directions.up},
      orange: {x: 5, y: 6, move: directions.up},
      blue: {x: 7, y: 6, move: directions.up}
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
    pacman: {x: 6, y: 9, move: directions.no, next: directions.no},
    spiders: {
      red: {x: 6, y: 7, move: directions.up},
      green: {x: 6, y: 7, move: directions.up},
      orange: {x: 5, y: 7, move: directions.up},
      blue: {x: 7, y: 7, move: directions.up}
    }
  }
];