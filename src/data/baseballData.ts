export interface PitchData {
  velocity: number;
  count: number;
}

export interface BattingData {
  month: string;
  teamAvg: number;
  leagueAvg: number;
}

export interface PlayerRadarData {
  metric: string;
  value: number;
  fullMark: number;
}

export interface StrikeZoneCell {
  row: number;
  col: number;
  value: number;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  number: number;
}

export const PLAYERS: Player[] = [
  { id: "p1", name: "Marcus Rivera", position: "SS", number: 7 },
  { id: "p2", name: "Jake Thompson", position: "RHP", number: 34 },
  { id: "p3", name: "Dylan Park", position: "CF", number: 22 },
  { id: "p4", name: "Chris Morales", position: "1B", number: 15 },
];

export const PITCH_VELOCITY_DATA: Record<string, PitchData[]> = {
  p1: [
    { velocity: 70, count: 2 }, { velocity: 72, count: 5 }, { velocity: 74, count: 8 },
    { velocity: 76, count: 15 }, { velocity: 78, count: 22 }, { velocity: 80, count: 18 },
    { velocity: 82, count: 12 }, { velocity: 84, count: 6 }, { velocity: 86, count: 3 },
  ],
  p2: [
    { velocity: 86, count: 3 }, { velocity: 88, count: 8 }, { velocity: 90, count: 18 },
    { velocity: 92, count: 32 }, { velocity: 94, count: 28 }, { velocity: 96, count: 15 },
    { velocity: 98, count: 5 }, { velocity: 100, count: 1 },
  ],
  p3: [
    { velocity: 68, count: 3 }, { velocity: 70, count: 6 }, { velocity: 72, count: 12 },
    { velocity: 74, count: 20 }, { velocity: 76, count: 16 }, { velocity: 78, count: 10 },
    { velocity: 80, count: 5 }, { velocity: 82, count: 2 },
  ],
  p4: [
    { velocity: 72, count: 4 }, { velocity: 74, count: 9 }, { velocity: 76, count: 16 },
    { velocity: 78, count: 24 }, { velocity: 80, count: 20 }, { velocity: 82, count: 11 },
    { velocity: 84, count: 5 }, { velocity: 86, count: 2 },
  ],
};

export const BATTING_DATA: BattingData[] = [
  { month: "Feb", teamAvg: 0.245, leagueAvg: 0.252 },
  { month: "Mar", teamAvg: 0.268, leagueAvg: 0.258 },
  { month: "Apr", teamAvg: 0.292, leagueAvg: 0.261 },
  { month: "May", teamAvg: 0.301, leagueAvg: 0.265 },
  { month: "Jun", teamAvg: 0.288, leagueAvg: 0.260 },
];

export const PLAYER_RADAR_DATA: Record<string, PlayerRadarData[]> = {
  p1: [
    { metric: "Contact", value: 82, fullMark: 100 },
    { metric: "Power", value: 65, fullMark: 100 },
    { metric: "Speed", value: 88, fullMark: 100 },
    { metric: "Defense", value: 91, fullMark: 100 },
    { metric: "Discipline", value: 74, fullMark: 100 },
  ],
  p2: [
    { metric: "Velocity", value: 94, fullMark: 100 },
    { metric: "Control", value: 78, fullMark: 100 },
    { metric: "Spin Rate", value: 85, fullMark: 100 },
    { metric: "Stamina", value: 80, fullMark: 100 },
    { metric: "Composure", value: 72, fullMark: 100 },
  ],
  p3: [
    { metric: "Contact", value: 76, fullMark: 100 },
    { metric: "Power", value: 58, fullMark: 100 },
    { metric: "Speed", value: 95, fullMark: 100 },
    { metric: "Defense", value: 89, fullMark: 100 },
    { metric: "Discipline", value: 70, fullMark: 100 },
  ],
  p4: [
    { metric: "Contact", value: 88, fullMark: 100 },
    { metric: "Power", value: 92, fullMark: 100 },
    { metric: "Speed", value: 52, fullMark: 100 },
    { metric: "Defense", value: 75, fullMark: 100 },
    { metric: "Discipline", value: 81, fullMark: 100 },
  ],
};

export const STRIKE_ZONE_DATA: Record<string, StrikeZoneCell[]> = {
  p1: [
    { row: 0, col: 0, value: 12 }, { row: 0, col: 1, value: 28 }, { row: 0, col: 2, value: 15 },
    { row: 1, col: 0, value: 22 }, { row: 1, col: 1, value: 45 }, { row: 1, col: 2, value: 35 },
    { row: 2, col: 0, value: 18 }, { row: 2, col: 1, value: 38 }, { row: 2, col: 2, value: 20 },
  ],
  p2: [
    { row: 0, col: 0, value: 35 }, { row: 0, col: 1, value: 42 }, { row: 0, col: 2, value: 28 },
    { row: 1, col: 0, value: 30 }, { row: 1, col: 1, value: 55 }, { row: 1, col: 2, value: 38 },
    { row: 2, col: 0, value: 22 }, { row: 2, col: 1, value: 40 }, { row: 2, col: 2, value: 25 },
  ],
  p3: [
    { row: 0, col: 0, value: 8 }, { row: 0, col: 1, value: 20 }, { row: 0, col: 2, value: 10 },
    { row: 1, col: 0, value: 15 }, { row: 1, col: 1, value: 32 }, { row: 1, col: 2, value: 25 },
    { row: 2, col: 0, value: 12 }, { row: 2, col: 1, value: 28 }, { row: 2, col: 2, value: 14 },
  ],
  p4: [
    { row: 0, col: 0, value: 20 }, { row: 0, col: 1, value: 35 }, { row: 0, col: 2, value: 22 },
    { row: 1, col: 0, value: 28 }, { row: 1, col: 1, value: 50 }, { row: 1, col: 2, value: 40 },
    { row: 2, col: 0, value: 25 }, { row: 2, col: 1, value: 42 }, { row: 2, col: 2, value: 30 },
  ],
};
