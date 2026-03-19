/* Auto-generated from model output CSVs. */
export type RoundCode = "PlayIn" | "R1" | "R2" | "R3" | "R4" | "R5" | "R6";
export type MatchupRating = "Likely" | "Competitive" | "UPSET ALERT" | "COIN FLIP";

export interface MatchupRow {
  Round: RoundCode | string;
  Slot: string;
  StrongSeed: string;
  StrongTeam: string;
  StrongWinPct: number;
  WeakSeed: string;
  WeakTeam: string;
  WeakWinPct: number;
  UpsetProb: number;
  Rating: MatchupRating | string;
  region: string | null;
}

export interface ChampionshipRow {
  TeamID: number;
  ChampProb: number;
  TeamName: string;
}

export interface AdvancementRow {
  TeamID: number;
  Round: string;
  AdvProb: number;
  TeamName: string;
}

export interface ModelComparisonRow {
  Model: string;
  brier: number;
  logloss: number;
  auc: number;
  accuracy: number;
  ece: number;
  n_games: number;
}

export interface RoundBreakdownRow {
  Round: string;
  n: number;
  brier: number;
  accuracy: number;
  auc: number;
}

export interface BracketSlotRow {
  Season: number;
  Slot: string;
  StrongSeed: string;
  WeakSeed: string;
}

export const MATCHUPS_MEN: MatchupRow[] = [
  {
    "Round": "PlayIn",
    "Slot": "X16",
    "StrongSeed": "X16a",
    "StrongTeam": "Lehigh",
    "StrongWinPct": 93.0,
    "WeakSeed": "X16b",
    "WeakTeam": "Prairie View",
    "WeakWinPct": 7.0,
    "UpsetProb": 7.0,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "PlayIn",
    "Slot": "Y11",
    "StrongSeed": "Y11a",
    "StrongTeam": "Miami OH",
    "StrongWinPct": 26.1,
    "WeakSeed": "Y11b",
    "WeakTeam": "SMU",
    "WeakWinPct": 73.9,
    "UpsetProb": 26.1,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "PlayIn",
    "Slot": "Y16",
    "StrongSeed": "Y16a",
    "StrongTeam": "Howard",
    "StrongWinPct": 14.8,
    "WeakSeed": "Y16b",
    "WeakTeam": "UMBC",
    "WeakWinPct": 85.2,
    "UpsetProb": 14.8,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "PlayIn",
    "Slot": "Z11",
    "StrongSeed": "Z11a",
    "StrongTeam": "NC State",
    "StrongWinPct": 86.4,
    "WeakSeed": "Z11b",
    "WeakTeam": "Texas",
    "WeakWinPct": 13.6,
    "UpsetProb": 13.6,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1W1",
    "StrongSeed": "W01",
    "StrongTeam": "Duke",
    "StrongWinPct": 93.7,
    "WeakSeed": "W16",
    "WeakTeam": "Siena",
    "WeakWinPct": 6.3,
    "UpsetProb": 6.3,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W2",
    "StrongSeed": "W02",
    "StrongTeam": "Connecticut",
    "StrongWinPct": 94.7,
    "WeakSeed": "W15",
    "WeakTeam": "Furman",
    "WeakWinPct": 5.3,
    "UpsetProb": 5.3,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W3",
    "StrongSeed": "W03",
    "StrongTeam": "Michigan St",
    "StrongWinPct": 91.2,
    "WeakSeed": "W14",
    "WeakTeam": "N Dakota St",
    "WeakWinPct": 8.8,
    "UpsetProb": 8.8,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W4",
    "StrongSeed": "W04",
    "StrongTeam": "Kansas",
    "StrongWinPct": 91.6,
    "WeakSeed": "W13",
    "WeakTeam": "Cal Baptist",
    "WeakWinPct": 8.4,
    "UpsetProb": 8.4,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W5",
    "StrongSeed": "W05",
    "StrongTeam": "St John's",
    "StrongWinPct": 94.6,
    "WeakSeed": "W12",
    "WeakTeam": "Northern Iowa",
    "WeakWinPct": 5.4,
    "UpsetProb": 5.4,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W6",
    "StrongSeed": "W06",
    "StrongTeam": "Louisville",
    "StrongWinPct": 88.1,
    "WeakSeed": "W11",
    "WeakTeam": "South Florida",
    "WeakWinPct": 11.9,
    "UpsetProb": 11.9,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W7",
    "StrongSeed": "W07",
    "StrongTeam": "UCLA",
    "StrongWinPct": 85.9,
    "WeakSeed": "W10",
    "WeakTeam": "UCF",
    "WeakWinPct": 14.1,
    "UpsetProb": 14.1,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W8",
    "StrongSeed": "W08",
    "StrongTeam": "Ohio St",
    "StrongWinPct": 84.3,
    "WeakSeed": "W09",
    "WeakTeam": "TCU",
    "WeakWinPct": 15.7,
    "UpsetProb": 15.7,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1X1",
    "StrongSeed": "X01",
    "StrongTeam": "Florida",
    "StrongWinPct": 94.4,
    "WeakSeed": "X16a",
    "WeakTeam": "Lehigh",
    "WeakWinPct": 5.6,
    "UpsetProb": 5.6,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X2",
    "StrongSeed": "X02",
    "StrongTeam": "Houston",
    "StrongWinPct": 90.6,
    "WeakSeed": "X15",
    "WeakTeam": "Idaho",
    "WeakWinPct": 9.4,
    "UpsetProb": 9.4,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X3",
    "StrongSeed": "X03",
    "StrongTeam": "Illinois",
    "StrongWinPct": 94.2,
    "WeakSeed": "X14",
    "WeakTeam": "Penn",
    "WeakWinPct": 5.8,
    "UpsetProb": 5.8,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X4",
    "StrongSeed": "X04",
    "StrongTeam": "Nebraska",
    "StrongWinPct": 94.5,
    "WeakSeed": "X13",
    "WeakTeam": "Troy",
    "WeakWinPct": 5.5,
    "UpsetProb": 5.5,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X5",
    "StrongSeed": "X05",
    "StrongTeam": "Vanderbilt",
    "StrongWinPct": 95.0,
    "WeakSeed": "X12",
    "WeakTeam": "McNeese St",
    "WeakWinPct": 5.0,
    "UpsetProb": 5.0,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X6",
    "StrongSeed": "X06",
    "StrongTeam": "North Carolina",
    "StrongWinPct": 51.4,
    "WeakSeed": "X11",
    "WeakTeam": "VCU",
    "WeakWinPct": 48.6,
    "UpsetProb": 48.6,
    "Rating": "COIN FLIP",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X7",
    "StrongSeed": "X07",
    "StrongTeam": "St Mary's CA",
    "StrongWinPct": 72.4,
    "WeakSeed": "X10",
    "WeakTeam": "Texas A&M",
    "WeakWinPct": 27.6,
    "UpsetProb": 27.6,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X8",
    "StrongSeed": "X08",
    "StrongTeam": "Clemson",
    "StrongWinPct": 79.8,
    "WeakSeed": "X09",
    "WeakTeam": "Iowa",
    "WeakWinPct": 20.2,
    "UpsetProb": 20.2,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1Y1",
    "StrongSeed": "Y01",
    "StrongTeam": "Michigan",
    "StrongWinPct": 95.1,
    "WeakSeed": "Y16b",
    "WeakTeam": "UMBC",
    "WeakWinPct": 4.9,
    "UpsetProb": 4.9,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y2",
    "StrongSeed": "Y02",
    "StrongTeam": "Iowa St",
    "StrongWinPct": 94.6,
    "WeakSeed": "Y15",
    "WeakTeam": "Tennessee St",
    "WeakWinPct": 5.4,
    "UpsetProb": 5.4,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y3",
    "StrongSeed": "Y03",
    "StrongTeam": "Virginia",
    "StrongWinPct": 94.3,
    "WeakSeed": "Y14",
    "WeakTeam": "Wright St",
    "WeakWinPct": 5.7,
    "UpsetProb": 5.7,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y4",
    "StrongSeed": "Y04",
    "StrongTeam": "Alabama",
    "StrongWinPct": 94.8,
    "WeakSeed": "Y13",
    "WeakTeam": "Hofstra",
    "WeakWinPct": 5.2,
    "UpsetProb": 5.2,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y5",
    "StrongSeed": "Y05",
    "StrongTeam": "Texas Tech",
    "StrongWinPct": 89.3,
    "WeakSeed": "Y12",
    "WeakTeam": "Akron",
    "WeakWinPct": 10.7,
    "UpsetProb": 10.7,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y6",
    "StrongSeed": "Y06",
    "StrongTeam": "Tennessee",
    "StrongWinPct": 81.2,
    "WeakSeed": "Y11b",
    "WeakTeam": "SMU",
    "WeakWinPct": 18.8,
    "UpsetProb": 18.8,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y7",
    "StrongSeed": "Y07",
    "StrongTeam": "Kentucky",
    "StrongWinPct": 9.7,
    "WeakSeed": "Y10",
    "WeakTeam": "Santa Clara",
    "WeakWinPct": 90.3,
    "UpsetProb": 9.7,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y8",
    "StrongSeed": "Y08",
    "StrongTeam": "Georgia",
    "StrongWinPct": 68.8,
    "WeakSeed": "Y09",
    "WeakTeam": "St Louis",
    "WeakWinPct": 31.2,
    "UpsetProb": 31.2,
    "Rating": "Competitive",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Z1",
    "StrongSeed": "Z01",
    "StrongTeam": "Arizona",
    "StrongWinPct": 92.4,
    "WeakSeed": "Z16",
    "WeakTeam": "LIU Brooklyn",
    "WeakWinPct": 7.6,
    "UpsetProb": 7.6,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z2",
    "StrongSeed": "Z02",
    "StrongTeam": "Purdue",
    "StrongWinPct": 93.7,
    "WeakSeed": "Z15",
    "WeakTeam": "Queens NC",
    "WeakWinPct": 6.3,
    "UpsetProb": 6.3,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z3",
    "StrongSeed": "Z03",
    "StrongTeam": "Gonzaga",
    "StrongWinPct": 92.8,
    "WeakSeed": "Z14",
    "WeakTeam": "Kennesaw",
    "WeakWinPct": 7.2,
    "UpsetProb": 7.2,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z4",
    "StrongSeed": "Z04",
    "StrongTeam": "Arkansas",
    "StrongWinPct": 95.1,
    "WeakSeed": "Z13",
    "WeakTeam": "Hawaii",
    "WeakWinPct": 4.9,
    "UpsetProb": 4.9,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z5",
    "StrongSeed": "Z05",
    "StrongTeam": "Wisconsin",
    "StrongWinPct": 94.2,
    "WeakSeed": "Z12",
    "WeakTeam": "High Point",
    "WeakWinPct": 5.8,
    "UpsetProb": 5.8,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z6",
    "StrongSeed": "Z06",
    "StrongTeam": "BYU",
    "StrongWinPct": 69.5,
    "WeakSeed": "Z11a",
    "WeakTeam": "NC State",
    "WeakWinPct": 30.5,
    "UpsetProb": 30.5,
    "Rating": "Competitive",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z7",
    "StrongSeed": "Z07",
    "StrongTeam": "Miami FL",
    "StrongWinPct": 19.7,
    "WeakSeed": "Z10",
    "WeakTeam": "Missouri",
    "WeakWinPct": 80.3,
    "UpsetProb": 19.7,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z8",
    "StrongSeed": "Z08",
    "StrongTeam": "Villanova",
    "StrongWinPct": 50.3,
    "WeakSeed": "Z09",
    "WeakTeam": "Utah St",
    "WeakWinPct": 49.7,
    "UpsetProb": 49.7,
    "Rating": "COIN FLIP",
    "region": "Z"
  },
  {
    "Round": "R2",
    "Slot": "R2W1",
    "StrongSeed": "W01",
    "StrongTeam": "Duke",
    "StrongWinPct": 94.2,
    "WeakSeed": "W08",
    "WeakTeam": "Ohio St",
    "WeakWinPct": 5.8,
    "UpsetProb": 5.8,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R2",
    "Slot": "R2W2",
    "StrongSeed": "W02",
    "StrongTeam": "Connecticut",
    "StrongWinPct": 91.1,
    "WeakSeed": "W07",
    "WeakTeam": "UCLA",
    "WeakWinPct": 8.9,
    "UpsetProb": 8.9,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R2",
    "Slot": "R2W3",
    "StrongSeed": "W03",
    "StrongTeam": "Michigan St",
    "StrongWinPct": 69.5,
    "WeakSeed": "W06",
    "WeakTeam": "Louisville",
    "WeakWinPct": 30.5,
    "UpsetProb": 30.5,
    "Rating": "Competitive",
    "region": "W"
  },
  {
    "Round": "R2",
    "Slot": "R2W4",
    "StrongSeed": "W04",
    "StrongTeam": "Kansas",
    "StrongWinPct": 6.3,
    "WeakSeed": "W05",
    "WeakTeam": "St John's",
    "WeakWinPct": 93.7,
    "UpsetProb": 6.3,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R2",
    "Slot": "R2X1",
    "StrongSeed": "X01",
    "StrongTeam": "Florida",
    "StrongWinPct": 92.3,
    "WeakSeed": "X08",
    "WeakTeam": "Clemson",
    "WeakWinPct": 7.7,
    "UpsetProb": 7.7,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R2",
    "Slot": "R2X2",
    "StrongSeed": "X02",
    "StrongTeam": "Houston",
    "StrongWinPct": 94.2,
    "WeakSeed": "X07",
    "WeakTeam": "St Mary's CA",
    "WeakWinPct": 5.8,
    "UpsetProb": 5.8,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R2",
    "Slot": "R2X3",
    "StrongSeed": "X03",
    "StrongTeam": "Illinois",
    "StrongWinPct": 90.8,
    "WeakSeed": "X06",
    "WeakTeam": "North Carolina",
    "WeakWinPct": 9.2,
    "UpsetProb": 9.2,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R2",
    "Slot": "R2X4",
    "StrongSeed": "X04",
    "StrongTeam": "Nebraska",
    "StrongWinPct": 27.0,
    "WeakSeed": "X05",
    "WeakTeam": "Vanderbilt",
    "WeakWinPct": 73.0,
    "UpsetProb": 27.0,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R2",
    "Slot": "R2Y1",
    "StrongSeed": "Y01",
    "StrongTeam": "Michigan",
    "StrongWinPct": 95.0,
    "WeakSeed": "Y08",
    "WeakTeam": "Georgia",
    "WeakWinPct": 5.0,
    "UpsetProb": 5.0,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R2",
    "Slot": "R2Y2",
    "StrongSeed": "Y02",
    "StrongTeam": "Iowa St",
    "StrongWinPct": 82.0,
    "WeakSeed": "Y10",
    "WeakTeam": "Santa Clara",
    "WeakWinPct": 18.0,
    "UpsetProb": 18.0,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R2",
    "Slot": "R2Y3",
    "StrongSeed": "Y03",
    "StrongTeam": "Virginia",
    "StrongWinPct": 34.2,
    "WeakSeed": "Y06",
    "WeakTeam": "Tennessee",
    "WeakWinPct": 65.8,
    "UpsetProb": 34.2,
    "Rating": "Competitive",
    "region": "Y"
  },
  {
    "Round": "R2",
    "Slot": "R2Y4",
    "StrongSeed": "Y04",
    "StrongTeam": "Alabama",
    "StrongWinPct": 57.3,
    "WeakSeed": "Y05",
    "WeakTeam": "Texas Tech",
    "WeakWinPct": 42.7,
    "UpsetProb": 42.7,
    "Rating": "UPSET ALERT",
    "region": "Y"
  },
  {
    "Round": "R2",
    "Slot": "R2Z1",
    "StrongSeed": "Z01",
    "StrongTeam": "Arizona",
    "StrongWinPct": 85.8,
    "WeakSeed": "Z08",
    "WeakTeam": "Villanova",
    "WeakWinPct": 14.2,
    "UpsetProb": 14.2,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R2",
    "Slot": "R2Z2",
    "StrongSeed": "Z02",
    "StrongTeam": "Purdue",
    "StrongWinPct": 93.7,
    "WeakSeed": "Z10",
    "WeakTeam": "Missouri",
    "WeakWinPct": 6.3,
    "UpsetProb": 6.3,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R2",
    "Slot": "R2Z3",
    "StrongSeed": "Z03",
    "StrongTeam": "Gonzaga",
    "StrongWinPct": 89.8,
    "WeakSeed": "Z06",
    "WeakTeam": "BYU",
    "WeakWinPct": 10.2,
    "UpsetProb": 10.2,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R2",
    "Slot": "R2Z4",
    "StrongSeed": "Z04",
    "StrongTeam": "Arkansas",
    "StrongWinPct": 56.5,
    "WeakSeed": "Z05",
    "WeakTeam": "Wisconsin",
    "WeakWinPct": 43.5,
    "UpsetProb": 43.5,
    "Rating": "UPSET ALERT",
    "region": "Z"
  },
  {
    "Round": "R3",
    "Slot": "R3W1",
    "StrongSeed": "W01",
    "StrongTeam": "Duke",
    "StrongWinPct": 81.7,
    "WeakSeed": "W05",
    "WeakTeam": "St John's",
    "WeakWinPct": 18.3,
    "UpsetProb": 18.3,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R3",
    "Slot": "R3W2",
    "StrongSeed": "W02",
    "StrongTeam": "Connecticut",
    "StrongWinPct": 83.4,
    "WeakSeed": "W03",
    "WeakTeam": "Michigan St",
    "WeakWinPct": 16.6,
    "UpsetProb": 16.6,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R3",
    "Slot": "R3X1",
    "StrongSeed": "X01",
    "StrongTeam": "Florida",
    "StrongWinPct": 87.1,
    "WeakSeed": "X05",
    "WeakTeam": "Vanderbilt",
    "WeakWinPct": 12.9,
    "UpsetProb": 12.9,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R3",
    "Slot": "R3X2",
    "StrongSeed": "X02",
    "StrongTeam": "Houston",
    "StrongWinPct": 84.3,
    "WeakSeed": "X03",
    "WeakTeam": "Illinois",
    "WeakWinPct": 15.7,
    "UpsetProb": 15.7,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R3",
    "Slot": "R3Y1",
    "StrongSeed": "Y01",
    "StrongTeam": "Michigan",
    "StrongWinPct": 93.5,
    "WeakSeed": "Y04",
    "WeakTeam": "Alabama",
    "WeakWinPct": 6.5,
    "UpsetProb": 6.5,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R3",
    "Slot": "R3Y2",
    "StrongSeed": "Y02",
    "StrongTeam": "Iowa St",
    "StrongWinPct": 91.3,
    "WeakSeed": "Y06",
    "WeakTeam": "Tennessee",
    "WeakWinPct": 8.7,
    "UpsetProb": 8.7,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R3",
    "Slot": "R3Z1",
    "StrongSeed": "Z01",
    "StrongTeam": "Arizona",
    "StrongWinPct": 85.5,
    "WeakSeed": "Z04",
    "WeakTeam": "Arkansas",
    "WeakWinPct": 14.5,
    "UpsetProb": 14.5,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R3",
    "Slot": "R3Z2",
    "StrongSeed": "Z02",
    "StrongTeam": "Purdue",
    "StrongWinPct": 72.5,
    "WeakSeed": "Z03",
    "WeakTeam": "Gonzaga",
    "WeakWinPct": 27.5,
    "UpsetProb": 27.5,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R4",
    "Slot": "R4W1",
    "StrongSeed": "W01",
    "StrongTeam": "Duke",
    "StrongWinPct": 85.0,
    "WeakSeed": "W02",
    "WeakTeam": "Connecticut",
    "WeakWinPct": 15.0,
    "UpsetProb": 15.0,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R4",
    "Slot": "R4X1",
    "StrongSeed": "X01",
    "StrongTeam": "Florida",
    "StrongWinPct": 46.1,
    "WeakSeed": "X02",
    "WeakTeam": "Houston",
    "WeakWinPct": 53.9,
    "UpsetProb": 46.1,
    "Rating": "COIN FLIP",
    "region": "X"
  },
  {
    "Round": "R4",
    "Slot": "R4Y1",
    "StrongSeed": "Y01",
    "StrongTeam": "Michigan",
    "StrongWinPct": 85.5,
    "WeakSeed": "Y02",
    "WeakTeam": "Iowa St",
    "WeakWinPct": 14.5,
    "UpsetProb": 14.5,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R4",
    "Slot": "R4Z1",
    "StrongSeed": "Z01",
    "StrongTeam": "Arizona",
    "StrongWinPct": 38.6,
    "WeakSeed": "Z02",
    "WeakTeam": "Purdue",
    "WeakWinPct": 61.4,
    "UpsetProb": 38.6,
    "Rating": "UPSET ALERT",
    "region": "Z"
  },
  {
    "Round": "R5",
    "Slot": "R5WX",
    "StrongSeed": "W01",
    "StrongTeam": "Duke",
    "StrongWinPct": 79.9,
    "WeakSeed": "X02",
    "WeakTeam": "Houston",
    "WeakWinPct": 20.1,
    "UpsetProb": 20.1,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R5",
    "Slot": "R5YZ",
    "StrongSeed": "Y01",
    "StrongTeam": "Michigan",
    "StrongWinPct": 75.2,
    "WeakSeed": "Z02",
    "WeakTeam": "Purdue",
    "WeakWinPct": 24.8,
    "UpsetProb": 24.8,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R6",
    "Slot": "R6CH",
    "StrongSeed": "W01",
    "StrongTeam": "Duke",
    "StrongWinPct": 64.7,
    "WeakSeed": "Y01",
    "WeakTeam": "Michigan",
    "WeakWinPct": 35.3,
    "UpsetProb": 35.3,
    "Rating": "UPSET ALERT",
    "region": "C"
  }
];

export const MATCHUPS_WOMEN: MatchupRow[] = [
  {
    "Round": "PlayIn",
    "Slot": "X10",
    "StrongSeed": "X10a",
    "StrongTeam": "Arizona St",
    "StrongWinPct": 27.5,
    "WeakSeed": "X10b",
    "WeakTeam": "Virginia",
    "WeakWinPct": 72.5,
    "UpsetProb": 27.5,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "PlayIn",
    "Slot": "X16",
    "StrongSeed": "X16a",
    "StrongTeam": "Samford",
    "StrongWinPct": 14.3,
    "WeakSeed": "X16b",
    "WeakTeam": "Southern Univ",
    "WeakWinPct": 85.7,
    "UpsetProb": 14.3,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "PlayIn",
    "Slot": "Y16",
    "StrongSeed": "Y16a",
    "StrongTeam": "Missouri St",
    "StrongWinPct": 90.6,
    "WeakSeed": "Y16b",
    "WeakTeam": "SF Austin",
    "WeakWinPct": 9.4,
    "UpsetProb": 9.4,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "PlayIn",
    "Slot": "Z11",
    "StrongSeed": "Z11a",
    "StrongTeam": "Nebraska",
    "StrongWinPct": 19.2,
    "WeakSeed": "Z11b",
    "WeakTeam": "Richmond",
    "WeakWinPct": 80.8,
    "UpsetProb": 19.2,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1W1",
    "StrongSeed": "W01",
    "StrongTeam": "Connecticut",
    "StrongWinPct": 95.5,
    "WeakSeed": "W16",
    "WeakTeam": "UT San Antonio",
    "WeakWinPct": 4.5,
    "UpsetProb": 4.5,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W2",
    "StrongSeed": "W02",
    "StrongTeam": "Vanderbilt",
    "StrongWinPct": 95.8,
    "WeakSeed": "W15",
    "WeakTeam": "High Point",
    "WeakWinPct": 4.2,
    "UpsetProb": 4.2,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W3",
    "StrongSeed": "W03",
    "StrongTeam": "Ohio St",
    "StrongWinPct": 95.8,
    "WeakSeed": "W14",
    "WeakTeam": "Howard",
    "WeakWinPct": 4.2,
    "UpsetProb": 4.2,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W4",
    "StrongSeed": "W04",
    "StrongTeam": "North Carolina",
    "StrongWinPct": 96.0,
    "WeakSeed": "W13",
    "WeakTeam": "W Illinois",
    "WeakWinPct": 4.0,
    "UpsetProb": 4.0,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W5",
    "StrongSeed": "W05",
    "StrongTeam": "Maryland",
    "StrongWinPct": 84.7,
    "WeakSeed": "W12",
    "WeakTeam": "Murray St",
    "WeakWinPct": 15.3,
    "UpsetProb": 15.3,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W6",
    "StrongSeed": "W06",
    "StrongTeam": "Notre Dame",
    "StrongWinPct": 95.5,
    "WeakSeed": "W11",
    "WeakTeam": "Fairfield",
    "WeakWinPct": 4.5,
    "UpsetProb": 4.5,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W7",
    "StrongSeed": "W07",
    "StrongTeam": "Illinois",
    "StrongWinPct": 82.1,
    "WeakSeed": "W10",
    "WeakTeam": "Colorado",
    "WeakWinPct": 17.9,
    "UpsetProb": 17.9,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1W8",
    "StrongSeed": "W08",
    "StrongTeam": "Iowa St",
    "StrongWinPct": 56.2,
    "WeakSeed": "W09",
    "WeakTeam": "Syracuse",
    "WeakWinPct": 43.8,
    "UpsetProb": 43.8,
    "Rating": "UPSET ALERT",
    "region": "W"
  },
  {
    "Round": "R1",
    "Slot": "R1X1",
    "StrongSeed": "X01",
    "StrongTeam": "South Carolina",
    "StrongWinPct": 95.6,
    "WeakSeed": "X16b",
    "WeakTeam": "Southern Univ",
    "WeakWinPct": 4.4,
    "UpsetProb": 4.4,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X2",
    "StrongSeed": "X02",
    "StrongTeam": "Iowa",
    "StrongWinPct": 95.8,
    "WeakSeed": "X15",
    "WeakTeam": "F Dickinson",
    "WeakWinPct": 4.2,
    "UpsetProb": 4.2,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X3",
    "StrongSeed": "X03",
    "StrongTeam": "TCU",
    "StrongWinPct": 96.0,
    "WeakSeed": "X14",
    "WeakTeam": "UC San Diego",
    "WeakWinPct": 4.0,
    "UpsetProb": 4.0,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X4",
    "StrongSeed": "X04",
    "StrongTeam": "Oklahoma",
    "StrongWinPct": 95.4,
    "WeakSeed": "X13",
    "WeakTeam": "Idaho",
    "WeakWinPct": 4.6,
    "UpsetProb": 4.6,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X5",
    "StrongSeed": "X05",
    "StrongTeam": "Michigan St",
    "StrongWinPct": 94.7,
    "WeakSeed": "X12",
    "WeakTeam": "Colorado St",
    "WeakWinPct": 5.3,
    "UpsetProb": 5.3,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X6",
    "StrongSeed": "X06",
    "StrongTeam": "Washington",
    "StrongWinPct": 81.0,
    "WeakSeed": "X11",
    "WeakTeam": "S Dakota St",
    "WeakWinPct": 19.0,
    "UpsetProb": 19.0,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X7",
    "StrongSeed": "X07",
    "StrongTeam": "Georgia",
    "StrongWinPct": 65.5,
    "WeakSeed": "X10b",
    "WeakTeam": "Virginia",
    "WeakWinPct": 34.5,
    "UpsetProb": 34.5,
    "Rating": "Competitive",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1X8",
    "StrongSeed": "X08",
    "StrongTeam": "Clemson",
    "StrongWinPct": 21.6,
    "WeakSeed": "X09",
    "WeakTeam": "USC",
    "WeakWinPct": 78.4,
    "UpsetProb": 21.6,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R1",
    "Slot": "R1Y1",
    "StrongSeed": "Y01",
    "StrongTeam": "Texas",
    "StrongWinPct": 95.8,
    "WeakSeed": "Y16a",
    "WeakTeam": "Missouri St",
    "WeakWinPct": 4.2,
    "UpsetProb": 4.2,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y2",
    "StrongSeed": "Y02",
    "StrongTeam": "Michigan",
    "StrongWinPct": 95.8,
    "WeakSeed": "Y15",
    "WeakTeam": "Holy Cross",
    "WeakWinPct": 4.2,
    "UpsetProb": 4.2,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y3",
    "StrongSeed": "Y03",
    "StrongTeam": "Louisville",
    "StrongWinPct": 96.0,
    "WeakSeed": "Y14",
    "WeakTeam": "Vermont",
    "WeakWinPct": 4.0,
    "UpsetProb": 4.0,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y4",
    "StrongSeed": "Y04",
    "StrongTeam": "West Virginia",
    "StrongWinPct": 92.8,
    "WeakSeed": "Y13",
    "WeakTeam": "Miami OH",
    "WeakWinPct": 7.2,
    "UpsetProb": 7.2,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y5",
    "StrongSeed": "Y05",
    "StrongTeam": "Kentucky",
    "StrongWinPct": 93.9,
    "WeakSeed": "Y12",
    "WeakTeam": "James Madison",
    "WeakWinPct": 6.1,
    "UpsetProb": 6.1,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y6",
    "StrongSeed": "Y06",
    "StrongTeam": "Alabama",
    "StrongWinPct": 91.5,
    "WeakSeed": "Y11",
    "WeakTeam": "Rhode Island",
    "WeakWinPct": 8.5,
    "UpsetProb": 8.5,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y7",
    "StrongSeed": "Y07",
    "StrongTeam": "NC State",
    "StrongWinPct": 77.3,
    "WeakSeed": "Y10",
    "WeakTeam": "Tennessee",
    "WeakWinPct": 22.7,
    "UpsetProb": 22.7,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Y8",
    "StrongSeed": "Y08",
    "StrongTeam": "Oregon",
    "StrongWinPct": 18.5,
    "WeakSeed": "Y09",
    "WeakTeam": "Virginia Tech",
    "WeakWinPct": 81.5,
    "UpsetProb": 18.5,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R1",
    "Slot": "R1Z1",
    "StrongSeed": "Z01",
    "StrongTeam": "UCLA",
    "StrongWinPct": 96.0,
    "WeakSeed": "Z16",
    "WeakTeam": "Cal Baptist",
    "WeakWinPct": 4.0,
    "UpsetProb": 4.0,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z2",
    "StrongSeed": "Z02",
    "StrongTeam": "LSU",
    "StrongWinPct": 95.4,
    "WeakSeed": "Z15",
    "WeakTeam": "Jacksonville",
    "WeakWinPct": 4.6,
    "UpsetProb": 4.6,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z3",
    "StrongSeed": "Z03",
    "StrongTeam": "Duke",
    "StrongWinPct": 95.8,
    "WeakSeed": "Z14",
    "WeakTeam": "Col Charleston",
    "WeakWinPct": 4.2,
    "UpsetProb": 4.2,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z4",
    "StrongSeed": "Z04",
    "StrongTeam": "Minnesota",
    "StrongWinPct": 93.1,
    "WeakSeed": "Z13",
    "WeakTeam": "WI Green Bay",
    "WeakWinPct": 6.9,
    "UpsetProb": 6.9,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z5",
    "StrongSeed": "Z05",
    "StrongTeam": "Mississippi",
    "StrongWinPct": 90.8,
    "WeakSeed": "Z12",
    "WeakTeam": "Gonzaga",
    "WeakWinPct": 9.2,
    "UpsetProb": 9.2,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z6",
    "StrongSeed": "Z06",
    "StrongTeam": "Baylor",
    "StrongWinPct": 61.3,
    "WeakSeed": "Z11b",
    "WeakTeam": "Richmond",
    "WeakWinPct": 38.7,
    "UpsetProb": 38.7,
    "Rating": "UPSET ALERT",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z7",
    "StrongSeed": "Z07",
    "StrongTeam": "Texas Tech",
    "StrongWinPct": 21.2,
    "WeakSeed": "Z10",
    "WeakTeam": "Villanova",
    "WeakWinPct": 78.8,
    "UpsetProb": 21.2,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R1",
    "Slot": "R1Z8",
    "StrongSeed": "Z08",
    "StrongTeam": "Oklahoma St",
    "StrongWinPct": 70.6,
    "WeakSeed": "Z09",
    "WeakTeam": "Princeton",
    "WeakWinPct": 29.4,
    "UpsetProb": 29.4,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R2",
    "Slot": "R2W1",
    "StrongSeed": "W01",
    "StrongTeam": "Connecticut",
    "StrongWinPct": 96.0,
    "WeakSeed": "W08",
    "WeakTeam": "Iowa St",
    "WeakWinPct": 4.0,
    "UpsetProb": 4.0,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R2",
    "Slot": "R2W2",
    "StrongSeed": "W02",
    "StrongTeam": "Vanderbilt",
    "StrongWinPct": 70.5,
    "WeakSeed": "W07",
    "WeakTeam": "Illinois",
    "WeakWinPct": 29.5,
    "UpsetProb": 29.5,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R2",
    "Slot": "R2W3",
    "StrongSeed": "W03",
    "StrongTeam": "Ohio St",
    "StrongWinPct": 52.3,
    "WeakSeed": "W06",
    "WeakTeam": "Notre Dame",
    "WeakWinPct": 47.7,
    "UpsetProb": 47.7,
    "Rating": "COIN FLIP",
    "region": "W"
  },
  {
    "Round": "R2",
    "Slot": "R2W4",
    "StrongSeed": "W04",
    "StrongTeam": "North Carolina",
    "StrongWinPct": 88.4,
    "WeakSeed": "W05",
    "WeakTeam": "Maryland",
    "WeakWinPct": 11.6,
    "UpsetProb": 11.6,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R2",
    "Slot": "R2X1",
    "StrongSeed": "X01",
    "StrongTeam": "South Carolina",
    "StrongWinPct": 94.4,
    "WeakSeed": "X09",
    "WeakTeam": "USC",
    "WeakWinPct": 5.6,
    "UpsetProb": 5.6,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R2",
    "Slot": "R2X2",
    "StrongSeed": "X02",
    "StrongTeam": "Iowa",
    "StrongWinPct": 91.5,
    "WeakSeed": "X07",
    "WeakTeam": "Georgia",
    "WeakWinPct": 8.5,
    "UpsetProb": 8.5,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R2",
    "Slot": "R2X3",
    "StrongSeed": "X03",
    "StrongTeam": "TCU",
    "StrongWinPct": 86.6,
    "WeakSeed": "X06",
    "WeakTeam": "Washington",
    "WeakWinPct": 13.4,
    "UpsetProb": 13.4,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R2",
    "Slot": "R2X4",
    "StrongSeed": "X04",
    "StrongTeam": "Oklahoma",
    "StrongWinPct": 56.5,
    "WeakSeed": "X05",
    "WeakTeam": "Michigan St",
    "WeakWinPct": 43.5,
    "UpsetProb": 43.5,
    "Rating": "UPSET ALERT",
    "region": "X"
  },
  {
    "Round": "R2",
    "Slot": "R2Y1",
    "StrongSeed": "Y01",
    "StrongTeam": "Texas",
    "StrongWinPct": 94.1,
    "WeakSeed": "Y09",
    "WeakTeam": "Virginia Tech",
    "WeakWinPct": 5.9,
    "UpsetProb": 5.9,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R2",
    "Slot": "R2Y2",
    "StrongSeed": "Y02",
    "StrongTeam": "Michigan",
    "StrongWinPct": 59.6,
    "WeakSeed": "Y07",
    "WeakTeam": "NC State",
    "WeakWinPct": 40.4,
    "UpsetProb": 40.4,
    "Rating": "UPSET ALERT",
    "region": "Y"
  },
  {
    "Round": "R2",
    "Slot": "R2Y3",
    "StrongSeed": "Y03",
    "StrongTeam": "Louisville",
    "StrongWinPct": 92.4,
    "WeakSeed": "Y06",
    "WeakTeam": "Alabama",
    "WeakWinPct": 7.6,
    "UpsetProb": 7.6,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R2",
    "Slot": "R2Y4",
    "StrongSeed": "Y04",
    "StrongTeam": "West Virginia",
    "StrongWinPct": 46.7,
    "WeakSeed": "Y05",
    "WeakTeam": "Kentucky",
    "WeakWinPct": 53.3,
    "UpsetProb": 46.7,
    "Rating": "COIN FLIP",
    "region": "Y"
  },
  {
    "Round": "R2",
    "Slot": "R2Z1",
    "StrongSeed": "Z01",
    "StrongTeam": "UCLA",
    "StrongWinPct": 95.5,
    "WeakSeed": "Z08",
    "WeakTeam": "Oklahoma St",
    "WeakWinPct": 4.5,
    "UpsetProb": 4.5,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R2",
    "Slot": "R2Z2",
    "StrongSeed": "Z02",
    "StrongTeam": "LSU",
    "StrongWinPct": 91.8,
    "WeakSeed": "Z10",
    "WeakTeam": "Villanova",
    "WeakWinPct": 8.2,
    "UpsetProb": 8.2,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R2",
    "Slot": "R2Z3",
    "StrongSeed": "Z03",
    "StrongTeam": "Duke",
    "StrongWinPct": 93.8,
    "WeakSeed": "Z06",
    "WeakTeam": "Baylor",
    "WeakWinPct": 6.2,
    "UpsetProb": 6.2,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R2",
    "Slot": "R2Z4",
    "StrongSeed": "Z04",
    "StrongTeam": "Minnesota",
    "StrongWinPct": 28.7,
    "WeakSeed": "Z05",
    "WeakTeam": "Mississippi",
    "WeakWinPct": 71.3,
    "UpsetProb": 28.7,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R3",
    "Slot": "R3W1",
    "StrongSeed": "W01",
    "StrongTeam": "Connecticut",
    "StrongWinPct": 95.0,
    "WeakSeed": "W04",
    "WeakTeam": "North Carolina",
    "WeakWinPct": 5.0,
    "UpsetProb": 5.0,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R3",
    "Slot": "R3W2",
    "StrongSeed": "W02",
    "StrongTeam": "Vanderbilt",
    "StrongWinPct": 27.1,
    "WeakSeed": "W03",
    "WeakTeam": "Ohio St",
    "WeakWinPct": 72.9,
    "UpsetProb": 27.1,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R3",
    "Slot": "R3X1",
    "StrongSeed": "X01",
    "StrongTeam": "South Carolina",
    "StrongWinPct": 93.4,
    "WeakSeed": "X04",
    "WeakTeam": "Oklahoma",
    "WeakWinPct": 6.6,
    "UpsetProb": 6.6,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R3",
    "Slot": "R3X2",
    "StrongSeed": "X02",
    "StrongTeam": "Iowa",
    "StrongWinPct": 45.0,
    "WeakSeed": "X03",
    "WeakTeam": "TCU",
    "WeakWinPct": 55.0,
    "UpsetProb": 45.0,
    "Rating": "UPSET ALERT",
    "region": "X"
  },
  {
    "Round": "R3",
    "Slot": "R3Y1",
    "StrongSeed": "Y01",
    "StrongTeam": "Texas",
    "StrongWinPct": 90.1,
    "WeakSeed": "Y05",
    "WeakTeam": "Kentucky",
    "WeakWinPct": 9.9,
    "UpsetProb": 9.9,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R3",
    "Slot": "R3Y2",
    "StrongSeed": "Y02",
    "StrongTeam": "Michigan",
    "StrongWinPct": 30.3,
    "WeakSeed": "Y03",
    "WeakTeam": "Louisville",
    "WeakWinPct": 69.7,
    "UpsetProb": 30.3,
    "Rating": "Competitive",
    "region": "Y"
  },
  {
    "Round": "R3",
    "Slot": "R3Z1",
    "StrongSeed": "Z01",
    "StrongTeam": "UCLA",
    "StrongWinPct": 94.9,
    "WeakSeed": "Z05",
    "WeakTeam": "Mississippi",
    "WeakWinPct": 5.1,
    "UpsetProb": 5.1,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R3",
    "Slot": "R3Z2",
    "StrongSeed": "Z02",
    "StrongTeam": "LSU",
    "StrongWinPct": 62.4,
    "WeakSeed": "Z03",
    "WeakTeam": "Duke",
    "WeakWinPct": 37.6,
    "UpsetProb": 37.6,
    "Rating": "UPSET ALERT",
    "region": "Z"
  },
  {
    "Round": "R4",
    "Slot": "R4W1",
    "StrongSeed": "W01",
    "StrongTeam": "Connecticut",
    "StrongWinPct": 95.2,
    "WeakSeed": "W03",
    "WeakTeam": "Ohio St",
    "WeakWinPct": 4.8,
    "UpsetProb": 4.8,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R4",
    "Slot": "R4X1",
    "StrongSeed": "X01",
    "StrongTeam": "South Carolina",
    "StrongWinPct": 90.2,
    "WeakSeed": "X03",
    "WeakTeam": "TCU",
    "WeakWinPct": 9.8,
    "UpsetProb": 9.8,
    "Rating": "Likely",
    "region": "X"
  },
  {
    "Round": "R4",
    "Slot": "R4Y1",
    "StrongSeed": "Y01",
    "StrongTeam": "Texas",
    "StrongWinPct": 74.0,
    "WeakSeed": "Y03",
    "WeakTeam": "Louisville",
    "WeakWinPct": 26.0,
    "UpsetProb": 26.0,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R4",
    "Slot": "R4Z1",
    "StrongSeed": "Z01",
    "StrongTeam": "UCLA",
    "StrongWinPct": 85.0,
    "WeakSeed": "Z02",
    "WeakTeam": "LSU",
    "WeakWinPct": 15.0,
    "UpsetProb": 15.0,
    "Rating": "Likely",
    "region": "Z"
  },
  {
    "Round": "R5",
    "Slot": "R5WX",
    "StrongSeed": "W01",
    "StrongTeam": "Connecticut",
    "StrongWinPct": 88.8,
    "WeakSeed": "X01",
    "WeakTeam": "South Carolina",
    "WeakWinPct": 11.2,
    "UpsetProb": 11.2,
    "Rating": "Likely",
    "region": "W"
  },
  {
    "Round": "R5",
    "Slot": "R5YZ",
    "StrongSeed": "Y01",
    "StrongTeam": "Texas",
    "StrongWinPct": 19.7,
    "WeakSeed": "Z01",
    "WeakTeam": "UCLA",
    "WeakWinPct": 80.3,
    "UpsetProb": 19.7,
    "Rating": "Likely",
    "region": "Y"
  },
  {
    "Round": "R6",
    "Slot": "R6CH",
    "StrongSeed": "W01",
    "StrongTeam": "Connecticut",
    "StrongWinPct": 79.5,
    "WeakSeed": "Z01",
    "WeakTeam": "UCLA",
    "WeakWinPct": 20.5,
    "UpsetProb": 20.5,
    "Rating": "Likely",
    "region": "C"
  }
];

export const CHAMP_PROBS_MEN: ChampionshipRow[] = [
  {
    "TeamID": 1181,
    "ChampProb": 0.38362,
    "TeamName": "Duke"
  },
  {
    "TeamID": 1276,
    "ChampProb": 0.31743,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 1222,
    "ChampProb": 0.07011,
    "TeamName": "Houston"
  },
  {
    "TeamID": 1196,
    "ChampProb": 0.06672,
    "TeamName": "Florida"
  },
  {
    "TeamID": 1345,
    "ChampProb": 0.05434,
    "TeamName": "Purdue"
  },
  {
    "TeamID": 1385,
    "ChampProb": 0.03132,
    "TeamName": "St John's"
  },
  {
    "TeamID": 1163,
    "ChampProb": 0.02773,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 1112,
    "ChampProb": 0.02356,
    "TeamName": "Arizona"
  },
  {
    "TeamID": 1235,
    "ChampProb": 0.01582,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 1211,
    "ChampProb": 0.00542,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 1228,
    "ChampProb": 0.00123,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 1104,
    "ChampProb": 0.00053,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 1435,
    "ChampProb": 0.0005,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 1277,
    "ChampProb": 0.00033,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 1403,
    "ChampProb": 0.00029,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 1365,
    "ChampProb": 0.00029,
    "TeamName": "Santa Clara"
  },
  {
    "TeamID": 1116,
    "ChampProb": 0.00023,
    "TeamName": "Arkansas"
  },
  {
    "TeamID": 1458,
    "ChampProb": 0.00011,
    "TeamName": "Wisconsin"
  },
  {
    "TeamID": 1257,
    "ChampProb": 9e-05,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 1397,
    "ChampProb": 7e-05,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 1429,
    "ChampProb": 7e-05,
    "TeamName": "Utah St"
  },
  {
    "TeamID": 1304,
    "ChampProb": 5e-05,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 1438,
    "ChampProb": 4e-05,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 1155,
    "ChampProb": 3e-05,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 1417,
    "ChampProb": 2e-05,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 1437,
    "ChampProb": 2e-05,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 1242,
    "ChampProb": 1e-05,
    "TeamName": "Kansas"
  },
  {
    "TeamID": 1140,
    "ChampProb": 1e-05,
    "TeamName": "BYU"
  },
  {
    "TeamID": 1281,
    "ChampProb": 1e-05,
    "TeamName": "Missouri"
  }
];

export const CHAMP_PROBS_WOMEN: ChampionshipRow[] = [
  {
    "TeamID": 3163,
    "ChampProb": 0.62961,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 3417,
    "ChampProb": 0.22147,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 3376,
    "ChampProb": 0.08102,
    "TeamName": "South Carolina"
  },
  {
    "TeamID": 3400,
    "ChampProb": 0.03798,
    "TeamName": "Texas"
  },
  {
    "TeamID": 3261,
    "ChampProb": 0.01246,
    "TeamName": "LSU"
  },
  {
    "TeamID": 3257,
    "ChampProb": 0.00515,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 3181,
    "ChampProb": 0.00473,
    "TeamName": "Duke"
  },
  {
    "TeamID": 3395,
    "ChampProb": 0.00165,
    "TeamName": "TCU"
  },
  {
    "TeamID": 3314,
    "ChampProb": 0.00155,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 3326,
    "ChampProb": 0.00125,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 3234,
    "ChampProb": 0.0009,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 3323,
    "ChampProb": 0.0008,
    "TeamName": "Notre Dame"
  },
  {
    "TeamID": 3276,
    "ChampProb": 0.00064,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 3435,
    "ChampProb": 0.0002,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 3328,
    "ChampProb": 0.00013,
    "TeamName": "Oklahoma"
  },
  {
    "TeamID": 3301,
    "ChampProb": 0.00012,
    "TeamName": "NC State"
  },
  {
    "TeamID": 3246,
    "ChampProb": 9e-05,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 3279,
    "ChampProb": 7e-05,
    "TeamName": "Mississippi"
  },
  {
    "TeamID": 3277,
    "ChampProb": 6e-05,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 3452,
    "ChampProb": 5e-05,
    "TeamName": "West Virginia"
  },
  {
    "TeamID": 3228,
    "ChampProb": 3e-05,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 3425,
    "ChampProb": 2e-05,
    "TeamName": "USC"
  },
  {
    "TeamID": 3278,
    "ChampProb": 1e-05,
    "TeamName": "Minnesota"
  },
  {
    "TeamID": 3208,
    "ChampProb": 1e-05,
    "TeamName": "Georgia"
  }
];

export const ADVANCEMENT_MEN: AdvancementRow[] = [
  {
    "TeamID": 1181,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Duke"
  },
  {
    "TeamID": 1181,
    "Round": "R1",
    "AdvProb": 0.93648,
    "TeamName": "Duke"
  },
  {
    "TeamID": 1181,
    "Round": "R2",
    "AdvProb": 0.8836,
    "TeamName": "Duke"
  },
  {
    "TeamID": 1181,
    "Round": "R3",
    "AdvProb": 0.7378,
    "TeamName": "Duke"
  },
  {
    "TeamID": 1181,
    "Round": "R4",
    "AdvProb": 0.64328,
    "TeamName": "Duke"
  },
  {
    "TeamID": 1181,
    "Round": "R5",
    "AdvProb": 0.52395,
    "TeamName": "Duke"
  },
  {
    "TeamID": 1181,
    "Round": "R6",
    "AdvProb": 0.38362,
    "TeamName": "Duke"
  },
  {
    "TeamID": 1163,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 1163,
    "Round": "R1",
    "AdvProb": 0.94733,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 1163,
    "Round": "R2",
    "AdvProb": 0.86552,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 1163,
    "Round": "R3",
    "AdvProb": 0.73549,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 1163,
    "Round": "R4",
    "AdvProb": 0.1755,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 1163,
    "Round": "R5",
    "AdvProb": 0.0763,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 1163,
    "Round": "R6",
    "AdvProb": 0.02773,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 1277,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 1277,
    "Round": "R1",
    "AdvProb": 0.91026,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 1277,
    "Round": "R2",
    "AdvProb": 0.6545,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 1277,
    "Round": "R3",
    "AdvProb": 0.16333,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 1277,
    "Round": "R4",
    "AdvProb": 0.01678,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 1277,
    "Round": "R5",
    "AdvProb": 0.00298,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 1277,
    "Round": "R6",
    "AdvProb": 0.00033,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 1242,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Kansas"
  },
  {
    "TeamID": 1242,
    "Round": "R1",
    "AdvProb": 0.91588,
    "TeamName": "Kansas"
  },
  {
    "TeamID": 1242,
    "Round": "R2",
    "AdvProb": 0.09573,
    "TeamName": "Kansas"
  },
  {
    "TeamID": 1242,
    "Round": "R3",
    "AdvProb": 0.01158,
    "TeamName": "Kansas"
  },
  {
    "TeamID": 1242,
    "Round": "R4",
    "AdvProb": 0.00172,
    "TeamName": "Kansas"
  },
  {
    "TeamID": 1242,
    "Round": "R5",
    "AdvProb": 0.0001,
    "TeamName": "Kansas"
  },
  {
    "TeamID": 1242,
    "Round": "R6",
    "AdvProb": 1e-05,
    "TeamName": "Kansas"
  },
  {
    "TeamID": 1385,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "St John's"
  },
  {
    "TeamID": 1385,
    "Round": "R1",
    "AdvProb": 0.94617,
    "TeamName": "St John's"
  },
  {
    "TeamID": 1385,
    "Round": "R2",
    "AdvProb": 0.88687,
    "TeamName": "St John's"
  },
  {
    "TeamID": 1385,
    "Round": "R3",
    "AdvProb": 0.23813,
    "TeamName": "St John's"
  },
  {
    "TeamID": 1385,
    "Round": "R4",
    "AdvProb": 0.15266,
    "TeamName": "St John's"
  },
  {
    "TeamID": 1385,
    "Round": "R5",
    "AdvProb": 0.07623,
    "TeamName": "St John's"
  },
  {
    "TeamID": 1385,
    "Round": "R6",
    "AdvProb": 0.03132,
    "TeamName": "St John's"
  },
  {
    "TeamID": 1257,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 1257,
    "Round": "R1",
    "AdvProb": 0.88159,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 1257,
    "Round": "R2",
    "AdvProb": 0.31509,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 1257,
    "Round": "R3",
    "AdvProb": 0.05962,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 1257,
    "Round": "R4",
    "AdvProb": 0.00555,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 1257,
    "Round": "R5",
    "AdvProb": 0.0009,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 1257,
    "Round": "R6",
    "AdvProb": 9e-05,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 1417,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 1417,
    "Round": "R1",
    "AdvProb": 0.85913,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 1417,
    "Round": "R2",
    "AdvProb": 0.1139,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 1417,
    "Round": "R3",
    "AdvProb": 0.03738,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 1417,
    "Round": "R4",
    "AdvProb": 0.00287,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 1417,
    "Round": "R5",
    "AdvProb": 0.00022,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 1417,
    "Round": "R6",
    "AdvProb": 2e-05,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 1326,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 1326,
    "Round": "R1",
    "AdvProb": 0.84365,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 1326,
    "Round": "R2",
    "AdvProb": 0.0946,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 1326,
    "Round": "R3",
    "AdvProb": 0.00957,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 1326,
    "Round": "R4",
    "AdvProb": 0.00111,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 1326,
    "Round": "R5",
    "AdvProb": 7e-05,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 1326,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 1395,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "TCU"
  },
  {
    "TeamID": 1395,
    "Round": "R1",
    "AdvProb": 0.15635,
    "TeamName": "TCU"
  },
  {
    "TeamID": 1395,
    "Round": "R2",
    "AdvProb": 0.01419,
    "TeamName": "TCU"
  },
  {
    "TeamID": 1395,
    "Round": "R3",
    "AdvProb": 0.00086,
    "TeamName": "TCU"
  },
  {
    "TeamID": 1395,
    "Round": "R4",
    "AdvProb": 5e-05,
    "TeamName": "TCU"
  },
  {
    "TeamID": 1395,
    "Round": "R5",
    "AdvProb": 1e-05,
    "TeamName": "TCU"
  },
  {
    "TeamID": 1395,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "TCU"
  },
  {
    "TeamID": 1416,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "UCF"
  },
  {
    "TeamID": 1416,
    "Round": "R1",
    "AdvProb": 0.14087,
    "TeamName": "UCF"
  },
  {
    "TeamID": 1416,
    "Round": "R2",
    "AdvProb": 0.01176,
    "TeamName": "UCF"
  },
  {
    "TeamID": 1416,
    "Round": "R3",
    "AdvProb": 0.00107,
    "TeamName": "UCF"
  },
  {
    "TeamID": 1416,
    "Round": "R4",
    "AdvProb": 4e-05,
    "TeamName": "UCF"
  },
  {
    "TeamID": 1416,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "UCF"
  },
  {
    "TeamID": 1416,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "UCF"
  },
  {
    "TeamID": 1378,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "South Florida"
  },
  {
    "TeamID": 1378,
    "Round": "R1",
    "AdvProb": 0.11841,
    "TeamName": "South Florida"
  },
  {
    "TeamID": 1378,
    "Round": "R2",
    "AdvProb": 0.01506,
    "TeamName": "South Florida"
  },
  {
    "TeamID": 1378,
    "Round": "R3",
    "AdvProb": 0.00111,
    "TeamName": "South Florida"
  },
  {
    "TeamID": 1378,
    "Round": "R4",
    "AdvProb": 8e-05,
    "TeamName": "South Florida"
  },
  {
    "TeamID": 1378,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "South Florida"
  },
  {
    "TeamID": 1378,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "South Florida"
  },
  {
    "TeamID": 1320,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Northern Iowa"
  },
  {
    "TeamID": 1320,
    "Round": "R1",
    "AdvProb": 0.05383,
    "TeamName": "Northern Iowa"
  },
  {
    "TeamID": 1320,
    "Round": "R2",
    "AdvProb": 0.01279,
    "TeamName": "Northern Iowa"
  },
  {
    "TeamID": 1320,
    "Round": "R3",
    "AdvProb": 0.00128,
    "TeamName": "Northern Iowa"
  },
  {
    "TeamID": 1320,
    "Round": "R4",
    "AdvProb": 0.00013,
    "TeamName": "Northern Iowa"
  },
  {
    "TeamID": 1320,
    "Round": "R5",
    "AdvProb": 2e-05,
    "TeamName": "Northern Iowa"
  },
  {
    "TeamID": 1320,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Northern Iowa"
  },
  {
    "TeamID": 1465,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 1465,
    "Round": "R1",
    "AdvProb": 0.08412,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 1465,
    "Round": "R2",
    "AdvProb": 0.00461,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 1465,
    "Round": "R3",
    "AdvProb": 0.00033,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 1465,
    "Round": "R4",
    "AdvProb": 3e-05,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 1465,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 1465,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 1295,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "N Dakota St"
  },
  {
    "TeamID": 1295,
    "Round": "R1",
    "AdvProb": 0.08974,
    "TeamName": "N Dakota St"
  },
  {
    "TeamID": 1295,
    "Round": "R2",
    "AdvProb": 0.01535,
    "TeamName": "N Dakota St"
  },
  {
    "TeamID": 1295,
    "Round": "R3",
    "AdvProb": 0.0014,
    "TeamName": "N Dakota St"
  },
  {
    "TeamID": 1295,
    "Round": "R4",
    "AdvProb": 0.0001,
    "TeamName": "N Dakota St"
  },
  {
    "TeamID": 1295,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "N Dakota St"
  },
  {
    "TeamID": 1295,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "N Dakota St"
  },
  {
    "TeamID": 1202,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Furman"
  },
  {
    "TeamID": 1202,
    "Round": "R1",
    "AdvProb": 0.05267,
    "TeamName": "Furman"
  },
  {
    "TeamID": 1202,
    "Round": "R2",
    "AdvProb": 0.00882,
    "TeamName": "Furman"
  },
  {
    "TeamID": 1202,
    "Round": "R3",
    "AdvProb": 0.0006,
    "TeamName": "Furman"
  },
  {
    "TeamID": 1202,
    "Round": "R4",
    "AdvProb": 5e-05,
    "TeamName": "Furman"
  },
  {
    "TeamID": 1202,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Furman"
  },
  {
    "TeamID": 1202,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Furman"
  },
  {
    "TeamID": 1373,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Siena"
  },
  {
    "TeamID": 1373,
    "Round": "R1",
    "AdvProb": 0.06352,
    "TeamName": "Siena"
  },
  {
    "TeamID": 1373,
    "Round": "R2",
    "AdvProb": 0.00761,
    "TeamName": "Siena"
  },
  {
    "TeamID": 1373,
    "Round": "R3",
    "AdvProb": 0.00045,
    "TeamName": "Siena"
  },
  {
    "TeamID": 1373,
    "Round": "R4",
    "AdvProb": 5e-05,
    "TeamName": "Siena"
  },
  {
    "TeamID": 1373,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Siena"
  },
  {
    "TeamID": 1373,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Siena"
  },
  {
    "TeamID": 1196,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Florida"
  },
  {
    "TeamID": 1196,
    "Round": "R1",
    "AdvProb": 0.94485,
    "TeamName": "Florida"
  },
  {
    "TeamID": 1196,
    "Round": "R2",
    "AdvProb": 0.87677,
    "TeamName": "Florida"
  },
  {
    "TeamID": 1196,
    "Round": "R3",
    "AdvProb": 0.77506,
    "TeamName": "Florida"
  },
  {
    "TeamID": 1196,
    "Round": "R4",
    "AdvProb": 0.4427,
    "TeamName": "Florida"
  },
  {
    "TeamID": 1196,
    "Round": "R5",
    "AdvProb": 0.15058,
    "TeamName": "Florida"
  },
  {
    "TeamID": 1196,
    "Round": "R6",
    "AdvProb": 0.06672,
    "TeamName": "Florida"
  },
  {
    "TeamID": 1222,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Houston"
  },
  {
    "TeamID": 1222,
    "Round": "R1",
    "AdvProb": 0.90639,
    "TeamName": "Houston"
  },
  {
    "TeamID": 1222,
    "Round": "R2",
    "AdvProb": 0.85298,
    "TeamName": "Houston"
  },
  {
    "TeamID": 1222,
    "Round": "R3",
    "AdvProb": 0.7303,
    "TeamName": "Houston"
  },
  {
    "TeamID": 1222,
    "Round": "R4",
    "AdvProb": 0.44782,
    "TeamName": "Houston"
  },
  {
    "TeamID": 1222,
    "Round": "R5",
    "AdvProb": 0.15565,
    "TeamName": "Houston"
  },
  {
    "TeamID": 1222,
    "Round": "R6",
    "AdvProb": 0.07011,
    "TeamName": "Houston"
  },
  {
    "TeamID": 1228,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 1228,
    "Round": "R1",
    "AdvProb": 0.94284,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 1228,
    "Round": "R2",
    "AdvProb": 0.85808,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 1228,
    "Round": "R3",
    "AdvProb": 0.23053,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 1228,
    "Round": "R4",
    "AdvProb": 0.06025,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 1228,
    "Round": "R5",
    "AdvProb": 0.00765,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 1228,
    "Round": "R6",
    "AdvProb": 0.00123,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 1304,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 1304,
    "Round": "R1",
    "AdvProb": 0.94443,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 1304,
    "Round": "R2",
    "AdvProb": 0.28765,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 1304,
    "Round": "R3",
    "AdvProb": 0.03964,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 1304,
    "Round": "R4",
    "AdvProb": 0.00586,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 1304,
    "Round": "R5",
    "AdvProb": 0.00066,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 1304,
    "Round": "R6",
    "AdvProb": 5e-05,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 1435,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 1435,
    "Round": "R1",
    "AdvProb": 0.94956,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 1435,
    "Round": "R2",
    "AdvProb": 0.70465,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 1435,
    "Round": "R3",
    "AdvProb": 0.14265,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 1435,
    "Round": "R4",
    "AdvProb": 0.03451,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 1435,
    "Round": "R5",
    "AdvProb": 0.00414,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 1435,
    "Round": "R6",
    "AdvProb": 0.0005,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 1314,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 1314,
    "Round": "R1",
    "AdvProb": 0.51201,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 1314,
    "Round": "R2",
    "AdvProb": 0.07138,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 1314,
    "Round": "R3",
    "AdvProb": 0.00905,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 1314,
    "Round": "R4",
    "AdvProb": 0.00053,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 1314,
    "Round": "R5",
    "AdvProb": 3e-05,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 1314,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 1388,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "St Mary's CA"
  },
  {
    "TeamID": 1388,
    "Round": "R1",
    "AdvProb": 0.72461,
    "TeamName": "St Mary's CA"
  },
  {
    "TeamID": 1388,
    "Round": "R2",
    "AdvProb": 0.09971,
    "TeamName": "St Mary's CA"
  },
  {
    "TeamID": 1388,
    "Round": "R3",
    "AdvProb": 0.01684,
    "TeamName": "St Mary's CA"
  },
  {
    "TeamID": 1388,
    "Round": "R4",
    "AdvProb": 0.0013,
    "TeamName": "St Mary's CA"
  },
  {
    "TeamID": 1388,
    "Round": "R5",
    "AdvProb": 0.0001,
    "TeamName": "St Mary's CA"
  },
  {
    "TeamID": 1388,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "St Mary's CA"
  },
  {
    "TeamID": 1155,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 1155,
    "Round": "R1",
    "AdvProb": 0.79614,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 1155,
    "Round": "R2",
    "AdvProb": 0.09868,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 1155,
    "Round": "R3",
    "AdvProb": 0.03864,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 1155,
    "Round": "R4",
    "AdvProb": 0.00584,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 1155,
    "Round": "R5",
    "AdvProb": 0.00036,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 1155,
    "Round": "R6",
    "AdvProb": 3e-05,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 1234,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 1234,
    "Round": "R1",
    "AdvProb": 0.20386,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 1234,
    "Round": "R2",
    "AdvProb": 0.02088,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 1234,
    "Round": "R3",
    "AdvProb": 0.00353,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 1234,
    "Round": "R4",
    "AdvProb": 0.00036,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 1234,
    "Round": "R5",
    "AdvProb": 2e-05,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 1234,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 1401,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Texas A&M"
  },
  {
    "TeamID": 1401,
    "Round": "R1",
    "AdvProb": 0.27539,
    "TeamName": "Texas A&M"
  },
  {
    "TeamID": 1401,
    "Round": "R2",
    "AdvProb": 0.03853,
    "TeamName": "Texas A&M"
  },
  {
    "TeamID": 1401,
    "Round": "R3",
    "AdvProb": 0.00415,
    "TeamName": "Texas A&M"
  },
  {
    "TeamID": 1401,
    "Round": "R4",
    "AdvProb": 0.0003,
    "TeamName": "Texas A&M"
  },
  {
    "TeamID": 1401,
    "Round": "R5",
    "AdvProb": 1e-05,
    "TeamName": "Texas A&M"
  },
  {
    "TeamID": 1401,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Texas A&M"
  },
  {
    "TeamID": 1433,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "VCU"
  },
  {
    "TeamID": 1433,
    "Round": "R1",
    "AdvProb": 0.48799,
    "TeamName": "VCU"
  },
  {
    "TeamID": 1433,
    "Round": "R2",
    "AdvProb": 0.0654,
    "TeamName": "VCU"
  },
  {
    "TeamID": 1433,
    "Round": "R3",
    "AdvProb": 0.00801,
    "TeamName": "VCU"
  },
  {
    "TeamID": 1433,
    "Round": "R4",
    "AdvProb": 0.0004,
    "TeamName": "VCU"
  },
  {
    "TeamID": 1433,
    "Round": "R5",
    "AdvProb": 2e-05,
    "TeamName": "VCU"
  },
  {
    "TeamID": 1433,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "VCU"
  },
  {
    "TeamID": 1270,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "McNeese St"
  },
  {
    "TeamID": 1270,
    "Round": "R1",
    "AdvProb": 0.05044,
    "TeamName": "McNeese St"
  },
  {
    "TeamID": 1270,
    "Round": "R2",
    "AdvProb": 0.00349,
    "TeamName": "McNeese St"
  },
  {
    "TeamID": 1270,
    "Round": "R3",
    "AdvProb": 0.0001,
    "TeamName": "McNeese St"
  },
  {
    "TeamID": 1270,
    "Round": "R4",
    "AdvProb": 1e-05,
    "TeamName": "McNeese St"
  },
  {
    "TeamID": 1270,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "McNeese St"
  },
  {
    "TeamID": 1270,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "McNeese St"
  },
  {
    "TeamID": 1407,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Troy"
  },
  {
    "TeamID": 1407,
    "Round": "R1",
    "AdvProb": 0.05557,
    "TeamName": "Troy"
  },
  {
    "TeamID": 1407,
    "Round": "R2",
    "AdvProb": 0.00421,
    "TeamName": "Troy"
  },
  {
    "TeamID": 1407,
    "Round": "R3",
    "AdvProb": 0.00018,
    "TeamName": "Troy"
  },
  {
    "TeamID": 1407,
    "Round": "R4",
    "AdvProb": 2e-05,
    "TeamName": "Troy"
  },
  {
    "TeamID": 1407,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Troy"
  },
  {
    "TeamID": 1407,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Troy"
  },
  {
    "TeamID": 1335,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Penn"
  },
  {
    "TeamID": 1335,
    "Round": "R1",
    "AdvProb": 0.05716,
    "TeamName": "Penn"
  },
  {
    "TeamID": 1335,
    "Round": "R2",
    "AdvProb": 0.00514,
    "TeamName": "Penn"
  },
  {
    "TeamID": 1335,
    "Round": "R3",
    "AdvProb": 0.00036,
    "TeamName": "Penn"
  },
  {
    "TeamID": 1335,
    "Round": "R4",
    "AdvProb": 1e-05,
    "TeamName": "Penn"
  },
  {
    "TeamID": 1335,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Penn"
  },
  {
    "TeamID": 1335,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Penn"
  },
  {
    "TeamID": 1225,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 1225,
    "Round": "R1",
    "AdvProb": 0.09361,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 1225,
    "Round": "R2",
    "AdvProb": 0.00878,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 1225,
    "Round": "R3",
    "AdvProb": 0.00076,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 1225,
    "Round": "R4",
    "AdvProb": 6e-05,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 1225,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 1225,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 1250,
    "Round": "PlayIn",
    "AdvProb": 0.9287,
    "TeamName": "Lehigh"
  },
  {
    "TeamID": 1250,
    "Round": "R1",
    "AdvProb": 0.05081,
    "TeamName": "Lehigh"
  },
  {
    "TeamID": 1250,
    "Round": "R2",
    "AdvProb": 0.0034,
    "TeamName": "Lehigh"
  },
  {
    "TeamID": 1250,
    "Round": "R3",
    "AdvProb": 0.00019,
    "TeamName": "Lehigh"
  },
  {
    "TeamID": 1250,
    "Round": "R4",
    "AdvProb": 3e-05,
    "TeamName": "Lehigh"
  },
  {
    "TeamID": 1250,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Lehigh"
  },
  {
    "TeamID": 1250,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Lehigh"
  },
  {
    "TeamID": 1341,
    "Round": "PlayIn",
    "AdvProb": 0.0713,
    "TeamName": "Prairie View"
  },
  {
    "TeamID": 1341,
    "Round": "R1",
    "AdvProb": 0.00434,
    "TeamName": "Prairie View"
  },
  {
    "TeamID": 1341,
    "Round": "R2",
    "AdvProb": 0.00027,
    "TeamName": "Prairie View"
  },
  {
    "TeamID": 1341,
    "Round": "R3",
    "AdvProb": 1e-05,
    "TeamName": "Prairie View"
  },
  {
    "TeamID": 1341,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Prairie View"
  },
  {
    "TeamID": 1341,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Prairie View"
  },
  {
    "TeamID": 1341,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Prairie View"
  },
  {
    "TeamID": 1276,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 1276,
    "Round": "R1",
    "AdvProb": 0.95039,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 1276,
    "Round": "R2",
    "AdvProb": 0.90324,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 1276,
    "Round": "R3",
    "AdvProb": 0.84605,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 1276,
    "Round": "R4",
    "AdvProb": 0.74343,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 1276,
    "Round": "R5",
    "AdvProb": 0.59834,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 1276,
    "Round": "R6",
    "AdvProb": 0.31743,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 1235,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 1235,
    "Round": "R1",
    "AdvProb": 0.94625,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 1235,
    "Round": "R2",
    "AdvProb": 0.78611,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 1235,
    "Round": "R3",
    "AdvProb": 0.72463,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 1235,
    "Round": "R4",
    "AdvProb": 0.17989,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 1235,
    "Round": "R5",
    "AdvProb": 0.07519,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 1235,
    "Round": "R6",
    "AdvProb": 0.01582,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 1438,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 1438,
    "Round": "R1",
    "AdvProb": 0.94361,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 1438,
    "Round": "R2",
    "AdvProb": 0.38525,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 1438,
    "Round": "R3",
    "AdvProb": 0.03651,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 1438,
    "Round": "R4",
    "AdvProb": 0.00245,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 1438,
    "Round": "R5",
    "AdvProb": 0.00023,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 1438,
    "Round": "R6",
    "AdvProb": 4e-05,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 1104,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 1104,
    "Round": "R1",
    "AdvProb": 0.94834,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 1104,
    "Round": "R2",
    "AdvProb": 0.57748,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 1104,
    "Round": "R3",
    "AdvProb": 0.08495,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 1104,
    "Round": "R4",
    "AdvProb": 0.02886,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 1104,
    "Round": "R5",
    "AdvProb": 0.00557,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 1104,
    "Round": "R6",
    "AdvProb": 0.00053,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 1403,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 1403,
    "Round": "R1",
    "AdvProb": 0.89162,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 1403,
    "Round": "R2",
    "AdvProb": 0.40429,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 1403,
    "Round": "R3",
    "AdvProb": 0.05781,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 1403,
    "Round": "R4",
    "AdvProb": 0.0177,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 1403,
    "Round": "R5",
    "AdvProb": 0.00298,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 1403,
    "Round": "R6",
    "AdvProb": 0.00029,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 1397,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 1397,
    "Round": "R1",
    "AdvProb": 0.83049,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 1397,
    "Round": "R2",
    "AdvProb": 0.5615,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 1397,
    "Round": "R3",
    "AdvProb": 0.07522,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 1397,
    "Round": "R4",
    "AdvProb": 0.00629,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 1397,
    "Round": "R5",
    "AdvProb": 0.00057,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 1397,
    "Round": "R6",
    "AdvProb": 7e-05,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 1246,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 1246,
    "Round": "R1",
    "AdvProb": 0.09747,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 1246,
    "Round": "R2",
    "AdvProb": 0.00841,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 1246,
    "Round": "R3",
    "AdvProb": 0.00213,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 1246,
    "Round": "R4",
    "AdvProb": 0.00015,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 1246,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 1246,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 1208,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 1208,
    "Round": "R1",
    "AdvProb": 0.68632,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 1208,
    "Round": "R2",
    "AdvProb": 0.05881,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 1208,
    "Round": "R3",
    "AdvProb": 0.00675,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 1208,
    "Round": "R4",
    "AdvProb": 0.00054,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 1208,
    "Round": "R5",
    "AdvProb": 3e-05,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 1208,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 1387,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "St Louis"
  },
  {
    "TeamID": 1387,
    "Round": "R1",
    "AdvProb": 0.31368,
    "TeamName": "St Louis"
  },
  {
    "TeamID": 1387,
    "Round": "R2",
    "AdvProb": 0.02338,
    "TeamName": "St Louis"
  },
  {
    "TeamID": 1387,
    "Round": "R3",
    "AdvProb": 0.00145,
    "TeamName": "St Louis"
  },
  {
    "TeamID": 1387,
    "Round": "R4",
    "AdvProb": 7e-05,
    "TeamName": "St Louis"
  },
  {
    "TeamID": 1387,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "St Louis"
  },
  {
    "TeamID": 1387,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "St Louis"
  },
  {
    "TeamID": 1365,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Santa Clara"
  },
  {
    "TeamID": 1365,
    "Round": "R1",
    "AdvProb": 0.90253,
    "TeamName": "Santa Clara"
  },
  {
    "TeamID": 1365,
    "Round": "R2",
    "AdvProb": 0.20074,
    "TeamName": "Santa Clara"
  },
  {
    "TeamID": 1365,
    "Round": "R3",
    "AdvProb": 0.15691,
    "TeamName": "Santa Clara"
  },
  {
    "TeamID": 1365,
    "Round": "R4",
    "AdvProb": 0.02011,
    "TeamName": "Santa Clara"
  },
  {
    "TeamID": 1365,
    "Round": "R5",
    "AdvProb": 0.00328,
    "TeamName": "Santa Clara"
  },
  {
    "TeamID": 1365,
    "Round": "R6",
    "AdvProb": 0.00029,
    "TeamName": "Santa Clara"
  },
  {
    "TeamID": 1275,
    "Round": "PlayIn",
    "AdvProb": 0.26375,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 1275,
    "Round": "R1",
    "AdvProb": 0.03119,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 1275,
    "Round": "R2",
    "AdvProb": 0.00631,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 1275,
    "Round": "R3",
    "AdvProb": 0.0005,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 1275,
    "Round": "R4",
    "AdvProb": 4e-05,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 1275,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 1275,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 1374,
    "Round": "PlayIn",
    "AdvProb": 0.73625,
    "TeamName": "SMU"
  },
  {
    "TeamID": 1374,
    "Round": "R1",
    "AdvProb": 0.13832,
    "TeamName": "SMU"
  },
  {
    "TeamID": 1374,
    "Round": "R2",
    "AdvProb": 0.04358,
    "TeamName": "SMU"
  },
  {
    "TeamID": 1374,
    "Round": "R3",
    "AdvProb": 0.00318,
    "TeamName": "SMU"
  },
  {
    "TeamID": 1374,
    "Round": "R4",
    "AdvProb": 0.00029,
    "TeamName": "SMU"
  },
  {
    "TeamID": 1374,
    "Round": "R5",
    "AdvProb": 2e-05,
    "TeamName": "SMU"
  },
  {
    "TeamID": 1374,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "SMU"
  },
  {
    "TeamID": 1103,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Akron"
  },
  {
    "TeamID": 1103,
    "Round": "R1",
    "AdvProb": 0.10838,
    "TeamName": "Akron"
  },
  {
    "TeamID": 1103,
    "Round": "R2",
    "AdvProb": 0.01507,
    "TeamName": "Akron"
  },
  {
    "TeamID": 1103,
    "Round": "R3",
    "AdvProb": 0.00168,
    "TeamName": "Akron"
  },
  {
    "TeamID": 1103,
    "Round": "R4",
    "AdvProb": 7e-05,
    "TeamName": "Akron"
  },
  {
    "TeamID": 1103,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Akron"
  },
  {
    "TeamID": 1103,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Akron"
  },
  {
    "TeamID": 1220,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Hofstra"
  },
  {
    "TeamID": 1220,
    "Round": "R1",
    "AdvProb": 0.05166,
    "TeamName": "Hofstra"
  },
  {
    "TeamID": 1220,
    "Round": "R2",
    "AdvProb": 0.00316,
    "TeamName": "Hofstra"
  },
  {
    "TeamID": 1220,
    "Round": "R3",
    "AdvProb": 0.0002,
    "TeamName": "Hofstra"
  },
  {
    "TeamID": 1220,
    "Round": "R4",
    "AdvProb": 2e-05,
    "TeamName": "Hofstra"
  },
  {
    "TeamID": 1220,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Hofstra"
  },
  {
    "TeamID": 1220,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Hofstra"
  },
  {
    "TeamID": 1460,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Wright St"
  },
  {
    "TeamID": 1460,
    "Round": "R1",
    "AdvProb": 0.05639,
    "TeamName": "Wright St"
  },
  {
    "TeamID": 1460,
    "Round": "R2",
    "AdvProb": 0.00336,
    "TeamName": "Wright St"
  },
  {
    "TeamID": 1460,
    "Round": "R3",
    "AdvProb": 0.00018,
    "TeamName": "Wright St"
  },
  {
    "TeamID": 1460,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Wright St"
  },
  {
    "TeamID": 1460,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Wright St"
  },
  {
    "TeamID": 1460,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Wright St"
  },
  {
    "TeamID": 1398,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Tennessee St"
  },
  {
    "TeamID": 1398,
    "Round": "R1",
    "AdvProb": 0.05375,
    "TeamName": "Tennessee St"
  },
  {
    "TeamID": 1398,
    "Round": "R2",
    "AdvProb": 0.00474,
    "TeamName": "Tennessee St"
  },
  {
    "TeamID": 1398,
    "Round": "R3",
    "AdvProb": 0.00074,
    "TeamName": "Tennessee St"
  },
  {
    "TeamID": 1398,
    "Round": "R4",
    "AdvProb": 5e-05,
    "TeamName": "Tennessee St"
  },
  {
    "TeamID": 1398,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Tennessee St"
  },
  {
    "TeamID": 1398,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Tennessee St"
  },
  {
    "TeamID": 1224,
    "Round": "PlayIn",
    "AdvProb": 0.14803,
    "TeamName": "Howard"
  },
  {
    "TeamID": 1224,
    "Round": "R1",
    "AdvProb": 0.00727,
    "TeamName": "Howard"
  },
  {
    "TeamID": 1224,
    "Round": "R2",
    "AdvProb": 0.00061,
    "TeamName": "Howard"
  },
  {
    "TeamID": 1224,
    "Round": "R3",
    "AdvProb": 1e-05,
    "TeamName": "Howard"
  },
  {
    "TeamID": 1224,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Howard"
  },
  {
    "TeamID": 1224,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Howard"
  },
  {
    "TeamID": 1224,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Howard"
  },
  {
    "TeamID": 1420,
    "Round": "PlayIn",
    "AdvProb": 0.85197,
    "TeamName": "UMBC"
  },
  {
    "TeamID": 1420,
    "Round": "R1",
    "AdvProb": 0.04234,
    "TeamName": "UMBC"
  },
  {
    "TeamID": 1420,
    "Round": "R2",
    "AdvProb": 0.01396,
    "TeamName": "UMBC"
  },
  {
    "TeamID": 1420,
    "Round": "R3",
    "AdvProb": 0.0011,
    "TeamName": "UMBC"
  },
  {
    "TeamID": 1420,
    "Round": "R4",
    "AdvProb": 4e-05,
    "TeamName": "UMBC"
  },
  {
    "TeamID": 1420,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "UMBC"
  },
  {
    "TeamID": 1420,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "UMBC"
  },
  {
    "TeamID": 1112,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Arizona"
  },
  {
    "TeamID": 1112,
    "Round": "R1",
    "AdvProb": 0.92645,
    "TeamName": "Arizona"
  },
  {
    "TeamID": 1112,
    "Round": "R2",
    "AdvProb": 0.79867,
    "TeamName": "Arizona"
  },
  {
    "TeamID": 1112,
    "Round": "R3",
    "AdvProb": 0.69063,
    "TeamName": "Arizona"
  },
  {
    "TeamID": 1112,
    "Round": "R4",
    "AdvProb": 0.3289,
    "TeamName": "Arizona"
  },
  {
    "TeamID": 1112,
    "Round": "R5",
    "AdvProb": 0.09953,
    "TeamName": "Arizona"
  },
  {
    "TeamID": 1112,
    "Round": "R6",
    "AdvProb": 0.02356,
    "TeamName": "Arizona"
  },
  {
    "TeamID": 1345,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Purdue"
  },
  {
    "TeamID": 1345,
    "Round": "R1",
    "AdvProb": 0.93823,
    "TeamName": "Purdue"
  },
  {
    "TeamID": 1345,
    "Round": "R2",
    "AdvProb": 0.8802,
    "TeamName": "Purdue"
  },
  {
    "TeamID": 1345,
    "Round": "R3",
    "AdvProb": 0.66751,
    "TeamName": "Purdue"
  },
  {
    "TeamID": 1345,
    "Round": "R4",
    "AdvProb": 0.46791,
    "TeamName": "Purdue"
  },
  {
    "TeamID": 1345,
    "Round": "R5",
    "AdvProb": 0.17531,
    "TeamName": "Purdue"
  },
  {
    "TeamID": 1345,
    "Round": "R6",
    "AdvProb": 0.05434,
    "TeamName": "Purdue"
  },
  {
    "TeamID": 1211,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 1211,
    "Round": "R1",
    "AdvProb": 0.92819,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 1211,
    "Round": "R2",
    "AdvProb": 0.83717,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 1211,
    "Round": "R3",
    "AdvProb": 0.29592,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 1211,
    "Round": "R4",
    "AdvProb": 0.1503,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 1211,
    "Round": "R5",
    "AdvProb": 0.03345,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 1211,
    "Round": "R6",
    "AdvProb": 0.00542,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 1116,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Arkansas"
  },
  {
    "TeamID": 1116,
    "Round": "R1",
    "AdvProb": 0.95103,
    "TeamName": "Arkansas"
  },
  {
    "TeamID": 1116,
    "Round": "R2",
    "AdvProb": 0.55761,
    "TeamName": "Arkansas"
  },
  {
    "TeamID": 1116,
    "Round": "R3",
    "AdvProb": 0.12174,
    "TeamName": "Arkansas"
  },
  {
    "TeamID": 1116,
    "Round": "R4",
    "AdvProb": 0.01997,
    "TeamName": "Arkansas"
  },
  {
    "TeamID": 1116,
    "Round": "R5",
    "AdvProb": 0.00215,
    "TeamName": "Arkansas"
  },
  {
    "TeamID": 1116,
    "Round": "R6",
    "AdvProb": 0.00023,
    "TeamName": "Arkansas"
  },
  {
    "TeamID": 1458,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Wisconsin"
  },
  {
    "TeamID": 1458,
    "Round": "R1",
    "AdvProb": 0.94175,
    "TeamName": "Wisconsin"
  },
  {
    "TeamID": 1458,
    "Round": "R2",
    "AdvProb": 0.43418,
    "TeamName": "Wisconsin"
  },
  {
    "TeamID": 1458,
    "Round": "R3",
    "AdvProb": 0.08417,
    "TeamName": "Wisconsin"
  },
  {
    "TeamID": 1458,
    "Round": "R4",
    "AdvProb": 0.01209,
    "TeamName": "Wisconsin"
  },
  {
    "TeamID": 1458,
    "Round": "R5",
    "AdvProb": 0.00132,
    "TeamName": "Wisconsin"
  },
  {
    "TeamID": 1458,
    "Round": "R6",
    "AdvProb": 0.00011,
    "TeamName": "Wisconsin"
  },
  {
    "TeamID": 1140,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "BYU"
  },
  {
    "TeamID": 1140,
    "Round": "R1",
    "AdvProb": 0.72556,
    "TeamName": "BYU"
  },
  {
    "TeamID": 1140,
    "Round": "R2",
    "AdvProb": 0.1166,
    "TeamName": "BYU"
  },
  {
    "TeamID": 1140,
    "Round": "R3",
    "AdvProb": 0.01875,
    "TeamName": "BYU"
  },
  {
    "TeamID": 1140,
    "Round": "R4",
    "AdvProb": 0.00243,
    "TeamName": "BYU"
  },
  {
    "TeamID": 1140,
    "Round": "R5",
    "AdvProb": 0.00017,
    "TeamName": "BYU"
  },
  {
    "TeamID": 1140,
    "Round": "R6",
    "AdvProb": 1e-05,
    "TeamName": "BYU"
  },
  {
    "TeamID": 1274,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Miami FL"
  },
  {
    "TeamID": 1274,
    "Round": "R1",
    "AdvProb": 0.20005,
    "TeamName": "Miami FL"
  },
  {
    "TeamID": 1274,
    "Round": "R2",
    "AdvProb": 0.01381,
    "TeamName": "Miami FL"
  },
  {
    "TeamID": 1274,
    "Round": "R3",
    "AdvProb": 0.00096,
    "TeamName": "Miami FL"
  },
  {
    "TeamID": 1274,
    "Round": "R4",
    "AdvProb": 5e-05,
    "TeamName": "Miami FL"
  },
  {
    "TeamID": 1274,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Miami FL"
  },
  {
    "TeamID": 1274,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Miami FL"
  },
  {
    "TeamID": 1437,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 1437,
    "Round": "R1",
    "AdvProb": 0.50164,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 1437,
    "Round": "R2",
    "AdvProb": 0.09873,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 1437,
    "Round": "R3",
    "AdvProb": 0.0517,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 1437,
    "Round": "R4",
    "AdvProb": 0.0084,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 1437,
    "Round": "R5",
    "AdvProb": 0.00093,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 1437,
    "Round": "R6",
    "AdvProb": 2e-05,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 1429,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Utah St"
  },
  {
    "TeamID": 1429,
    "Round": "R1",
    "AdvProb": 0.49836,
    "TeamName": "Utah St"
  },
  {
    "TeamID": 1429,
    "Round": "R2",
    "AdvProb": 0.09631,
    "TeamName": "Utah St"
  },
  {
    "TeamID": 1429,
    "Round": "R3",
    "AdvProb": 0.051,
    "TeamName": "Utah St"
  },
  {
    "TeamID": 1429,
    "Round": "R4",
    "AdvProb": 0.00845,
    "TeamName": "Utah St"
  },
  {
    "TeamID": 1429,
    "Round": "R5",
    "AdvProb": 0.00085,
    "TeamName": "Utah St"
  },
  {
    "TeamID": 1429,
    "Round": "R6",
    "AdvProb": 7e-05,
    "TeamName": "Utah St"
  },
  {
    "TeamID": 1281,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Missouri"
  },
  {
    "TeamID": 1281,
    "Round": "R1",
    "AdvProb": 0.79995,
    "TeamName": "Missouri"
  },
  {
    "TeamID": 1281,
    "Round": "R2",
    "AdvProb": 0.07497,
    "TeamName": "Missouri"
  },
  {
    "TeamID": 1281,
    "Round": "R3",
    "AdvProb": 0.00697,
    "TeamName": "Missouri"
  },
  {
    "TeamID": 1281,
    "Round": "R4",
    "AdvProb": 0.00047,
    "TeamName": "Missouri"
  },
  {
    "TeamID": 1281,
    "Round": "R5",
    "AdvProb": 4e-05,
    "TeamName": "Missouri"
  },
  {
    "TeamID": 1281,
    "Round": "R6",
    "AdvProb": 1e-05,
    "TeamName": "Missouri"
  },
  {
    "TeamID": 1301,
    "Round": "PlayIn",
    "AdvProb": 0.86327,
    "TeamName": "NC State"
  },
  {
    "TeamID": 1301,
    "Round": "R1",
    "AdvProb": 0.26247,
    "TeamName": "NC State"
  },
  {
    "TeamID": 1301,
    "Round": "R2",
    "AdvProb": 0.03955,
    "TeamName": "NC State"
  },
  {
    "TeamID": 1301,
    "Round": "R3",
    "AdvProb": 0.00629,
    "TeamName": "NC State"
  },
  {
    "TeamID": 1301,
    "Round": "R4",
    "AdvProb": 0.00073,
    "TeamName": "NC State"
  },
  {
    "TeamID": 1301,
    "Round": "R5",
    "AdvProb": 3e-05,
    "TeamName": "NC State"
  },
  {
    "TeamID": 1301,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "NC State"
  },
  {
    "TeamID": 1400,
    "Round": "PlayIn",
    "AdvProb": 0.13673,
    "TeamName": "Texas"
  },
  {
    "TeamID": 1400,
    "Round": "R1",
    "AdvProb": 0.01197,
    "TeamName": "Texas"
  },
  {
    "TeamID": 1400,
    "Round": "R2",
    "AdvProb": 0.00145,
    "TeamName": "Texas"
  },
  {
    "TeamID": 1400,
    "Round": "R3",
    "AdvProb": 0.00014,
    "TeamName": "Texas"
  },
  {
    "TeamID": 1400,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Texas"
  },
  {
    "TeamID": 1400,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Texas"
  },
  {
    "TeamID": 1400,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Texas"
  },
  {
    "TeamID": 1219,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "High Point"
  },
  {
    "TeamID": 1219,
    "Round": "R1",
    "AdvProb": 0.05825,
    "TeamName": "High Point"
  },
  {
    "TeamID": 1219,
    "Round": "R2",
    "AdvProb": 0.00575,
    "TeamName": "High Point"
  },
  {
    "TeamID": 1219,
    "Round": "R3",
    "AdvProb": 0.00021,
    "TeamName": "High Point"
  },
  {
    "TeamID": 1219,
    "Round": "R4",
    "AdvProb": 2e-05,
    "TeamName": "High Point"
  },
  {
    "TeamID": 1219,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "High Point"
  },
  {
    "TeamID": 1219,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "High Point"
  },
  {
    "TeamID": 1218,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Hawaii"
  },
  {
    "TeamID": 1218,
    "Round": "R1",
    "AdvProb": 0.04897,
    "TeamName": "Hawaii"
  },
  {
    "TeamID": 1218,
    "Round": "R2",
    "AdvProb": 0.00246,
    "TeamName": "Hawaii"
  },
  {
    "TeamID": 1218,
    "Round": "R3",
    "AdvProb": 7e-05,
    "TeamName": "Hawaii"
  },
  {
    "TeamID": 1218,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Hawaii"
  },
  {
    "TeamID": 1218,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Hawaii"
  },
  {
    "TeamID": 1218,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Hawaii"
  },
  {
    "TeamID": 1244,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Kennesaw"
  },
  {
    "TeamID": 1244,
    "Round": "R1",
    "AdvProb": 0.07181,
    "TeamName": "Kennesaw"
  },
  {
    "TeamID": 1244,
    "Round": "R2",
    "AdvProb": 0.00523,
    "TeamName": "Kennesaw"
  },
  {
    "TeamID": 1244,
    "Round": "R3",
    "AdvProb": 0.00038,
    "TeamName": "Kennesaw"
  },
  {
    "TeamID": 1244,
    "Round": "R4",
    "AdvProb": 2e-05,
    "TeamName": "Kennesaw"
  },
  {
    "TeamID": 1244,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Kennesaw"
  },
  {
    "TeamID": 1244,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Kennesaw"
  },
  {
    "TeamID": 1474,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Queens NC"
  },
  {
    "TeamID": 1474,
    "Round": "R1",
    "AdvProb": 0.06177,
    "TeamName": "Queens NC"
  },
  {
    "TeamID": 1474,
    "Round": "R2",
    "AdvProb": 0.03102,
    "TeamName": "Queens NC"
  },
  {
    "TeamID": 1474,
    "Round": "R3",
    "AdvProb": 0.00308,
    "TeamName": "Queens NC"
  },
  {
    "TeamID": 1474,
    "Round": "R4",
    "AdvProb": 0.00021,
    "TeamName": "Queens NC"
  },
  {
    "TeamID": 1474,
    "Round": "R5",
    "AdvProb": 1e-05,
    "TeamName": "Queens NC"
  },
  {
    "TeamID": 1474,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Queens NC"
  },
  {
    "TeamID": 1254,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "LIU Brooklyn"
  },
  {
    "TeamID": 1254,
    "Round": "R1",
    "AdvProb": 0.07355,
    "TeamName": "LIU Brooklyn"
  },
  {
    "TeamID": 1254,
    "Round": "R2",
    "AdvProb": 0.00629,
    "TeamName": "LIU Brooklyn"
  },
  {
    "TeamID": 1254,
    "Round": "R3",
    "AdvProb": 0.00048,
    "TeamName": "LIU Brooklyn"
  },
  {
    "TeamID": 1254,
    "Round": "R4",
    "AdvProb": 5e-05,
    "TeamName": "LIU Brooklyn"
  },
  {
    "TeamID": 1254,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "LIU Brooklyn"
  },
  {
    "TeamID": 1254,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "LIU Brooklyn"
  }
];

export const ADVANCEMENT_WOMEN: AdvancementRow[] = [
  {
    "TeamID": 3163,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 3163,
    "Round": "R1",
    "AdvProb": 0.95466,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 3163,
    "Round": "R2",
    "AdvProb": 0.9157,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 3163,
    "Round": "R3",
    "AdvProb": 0.87138,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 3163,
    "Round": "R4",
    "AdvProb": 0.83044,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 3163,
    "Round": "R5",
    "AdvProb": 0.7499,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 3163,
    "Round": "R6",
    "AdvProb": 0.62961,
    "TeamName": "Connecticut"
  },
  {
    "TeamID": 3435,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 3435,
    "Round": "R1",
    "AdvProb": 0.95804,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 3435,
    "Round": "R2",
    "AdvProb": 0.70476,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 3435,
    "Round": "R3",
    "AdvProb": 0.1983,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 3435,
    "Round": "R4",
    "AdvProb": 0.01717,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 3435,
    "Round": "R5",
    "AdvProb": 0.00229,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 3435,
    "Round": "R6",
    "AdvProb": 0.0002,
    "TeamName": "Vanderbilt"
  },
  {
    "TeamID": 3326,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 3326,
    "Round": "R1",
    "AdvProb": 0.95783,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 3326,
    "Round": "R2",
    "AdvProb": 0.52003,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 3326,
    "Round": "R3",
    "AdvProb": 0.39754,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 3326,
    "Round": "R4",
    "AdvProb": 0.04541,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 3326,
    "Round": "R5",
    "AdvProb": 0.01017,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 3326,
    "Round": "R6",
    "AdvProb": 0.00125,
    "TeamName": "Ohio St"
  },
  {
    "TeamID": 3314,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 3314,
    "Round": "R1",
    "AdvProb": 0.95931,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 3314,
    "Round": "R2",
    "AdvProb": 0.85782,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 3314,
    "Round": "R3",
    "AdvProb": 0.10652,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 3314,
    "Round": "R4",
    "AdvProb": 0.06183,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 3314,
    "Round": "R5",
    "AdvProb": 0.01472,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 3314,
    "Round": "R6",
    "AdvProb": 0.00155,
    "TeamName": "North Carolina"
  },
  {
    "TeamID": 3268,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Maryland"
  },
  {
    "TeamID": 3268,
    "Round": "R1",
    "AdvProb": 0.8478,
    "TeamName": "Maryland"
  },
  {
    "TeamID": 3268,
    "Round": "R2",
    "AdvProb": 0.12675,
    "TeamName": "Maryland"
  },
  {
    "TeamID": 3268,
    "Round": "R3",
    "AdvProb": 0.01226,
    "TeamName": "Maryland"
  },
  {
    "TeamID": 3268,
    "Round": "R4",
    "AdvProb": 0.00186,
    "TeamName": "Maryland"
  },
  {
    "TeamID": 3268,
    "Round": "R5",
    "AdvProb": 0.00016,
    "TeamName": "Maryland"
  },
  {
    "TeamID": 3268,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Maryland"
  },
  {
    "TeamID": 3323,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Notre Dame"
  },
  {
    "TeamID": 3323,
    "Round": "R1",
    "AdvProb": 0.95528,
    "TeamName": "Notre Dame"
  },
  {
    "TeamID": 3323,
    "Round": "R2",
    "AdvProb": 0.47424,
    "TeamName": "Notre Dame"
  },
  {
    "TeamID": 3323,
    "Round": "R3",
    "AdvProb": 0.35522,
    "TeamName": "Notre Dame"
  },
  {
    "TeamID": 3323,
    "Round": "R4",
    "AdvProb": 0.03887,
    "TeamName": "Notre Dame"
  },
  {
    "TeamID": 3323,
    "Round": "R5",
    "AdvProb": 0.00818,
    "TeamName": "Notre Dame"
  },
  {
    "TeamID": 3323,
    "Round": "R6",
    "AdvProb": 0.0008,
    "TeamName": "Notre Dame"
  },
  {
    "TeamID": 3228,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 3228,
    "Round": "R1",
    "AdvProb": 0.82114,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 3228,
    "Round": "R2",
    "AdvProb": 0.26557,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 3228,
    "Round": "R3",
    "AdvProb": 0.04629,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 3228,
    "Round": "R4",
    "AdvProb": 0.00333,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 3228,
    "Round": "R5",
    "AdvProb": 0.00042,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 3228,
    "Round": "R6",
    "AdvProb": 3e-05,
    "TeamName": "Illinois"
  },
  {
    "TeamID": 3235,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 3235,
    "Round": "R1",
    "AdvProb": 0.5629,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 3235,
    "Round": "R2",
    "AdvProb": 0.04452,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 3235,
    "Round": "R3",
    "AdvProb": 0.00512,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 3235,
    "Round": "R4",
    "AdvProb": 0.00049,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 3235,
    "Round": "R5",
    "AdvProb": 2e-05,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 3235,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Iowa St"
  },
  {
    "TeamID": 3393,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Syracuse"
  },
  {
    "TeamID": 3393,
    "Round": "R1",
    "AdvProb": 0.4371,
    "TeamName": "Syracuse"
  },
  {
    "TeamID": 3393,
    "Round": "R2",
    "AdvProb": 0.03454,
    "TeamName": "Syracuse"
  },
  {
    "TeamID": 3393,
    "Round": "R3",
    "AdvProb": 0.00344,
    "TeamName": "Syracuse"
  },
  {
    "TeamID": 3393,
    "Round": "R4",
    "AdvProb": 0.00035,
    "TeamName": "Syracuse"
  },
  {
    "TeamID": 3393,
    "Round": "R5",
    "AdvProb": 1e-05,
    "TeamName": "Syracuse"
  },
  {
    "TeamID": 3393,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Syracuse"
  },
  {
    "TeamID": 3160,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Colorado"
  },
  {
    "TeamID": 3160,
    "Round": "R1",
    "AdvProb": 0.17886,
    "TeamName": "Colorado"
  },
  {
    "TeamID": 3160,
    "Round": "R2",
    "AdvProb": 0.02813,
    "TeamName": "Colorado"
  },
  {
    "TeamID": 3160,
    "Round": "R3",
    "AdvProb": 0.00237,
    "TeamName": "Colorado"
  },
  {
    "TeamID": 3160,
    "Round": "R4",
    "AdvProb": 0.00012,
    "TeamName": "Colorado"
  },
  {
    "TeamID": 3160,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Colorado"
  },
  {
    "TeamID": 3160,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Colorado"
  },
  {
    "TeamID": 3193,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Fairfield"
  },
  {
    "TeamID": 3193,
    "Round": "R1",
    "AdvProb": 0.04472,
    "TeamName": "Fairfield"
  },
  {
    "TeamID": 3193,
    "Round": "R2",
    "AdvProb": 0.00392,
    "TeamName": "Fairfield"
  },
  {
    "TeamID": 3193,
    "Round": "R3",
    "AdvProb": 0.00016,
    "TeamName": "Fairfield"
  },
  {
    "TeamID": 3193,
    "Round": "R4",
    "AdvProb": 2e-05,
    "TeamName": "Fairfield"
  },
  {
    "TeamID": 3193,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Fairfield"
  },
  {
    "TeamID": 3193,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Fairfield"
  },
  {
    "TeamID": 3293,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Murray St"
  },
  {
    "TeamID": 3293,
    "Round": "R1",
    "AdvProb": 0.1522,
    "TeamName": "Murray St"
  },
  {
    "TeamID": 3293,
    "Round": "R2",
    "AdvProb": 0.01366,
    "TeamName": "Murray St"
  },
  {
    "TeamID": 3293,
    "Round": "R3",
    "AdvProb": 0.00098,
    "TeamName": "Murray St"
  },
  {
    "TeamID": 3293,
    "Round": "R4",
    "AdvProb": 8e-05,
    "TeamName": "Murray St"
  },
  {
    "TeamID": 3293,
    "Round": "R5",
    "AdvProb": 1e-05,
    "TeamName": "Murray St"
  },
  {
    "TeamID": 3293,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Murray St"
  },
  {
    "TeamID": 3442,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "W Illinois"
  },
  {
    "TeamID": 3442,
    "Round": "R1",
    "AdvProb": 0.04069,
    "TeamName": "W Illinois"
  },
  {
    "TeamID": 3442,
    "Round": "R2",
    "AdvProb": 0.00177,
    "TeamName": "W Illinois"
  },
  {
    "TeamID": 3442,
    "Round": "R3",
    "AdvProb": 6e-05,
    "TeamName": "W Illinois"
  },
  {
    "TeamID": 3442,
    "Round": "R4",
    "AdvProb": 2e-05,
    "TeamName": "W Illinois"
  },
  {
    "TeamID": 3442,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "W Illinois"
  },
  {
    "TeamID": 3442,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "W Illinois"
  },
  {
    "TeamID": 3224,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Howard"
  },
  {
    "TeamID": 3224,
    "Round": "R1",
    "AdvProb": 0.04217,
    "TeamName": "Howard"
  },
  {
    "TeamID": 3224,
    "Round": "R2",
    "AdvProb": 0.00181,
    "TeamName": "Howard"
  },
  {
    "TeamID": 3224,
    "Round": "R3",
    "AdvProb": 9e-05,
    "TeamName": "Howard"
  },
  {
    "TeamID": 3224,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Howard"
  },
  {
    "TeamID": 3224,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Howard"
  },
  {
    "TeamID": 3224,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Howard"
  },
  {
    "TeamID": 3219,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "High Point"
  },
  {
    "TeamID": 3219,
    "Round": "R1",
    "AdvProb": 0.04196,
    "TeamName": "High Point"
  },
  {
    "TeamID": 3219,
    "Round": "R2",
    "AdvProb": 0.00154,
    "TeamName": "High Point"
  },
  {
    "TeamID": 3219,
    "Round": "R3",
    "AdvProb": 3e-05,
    "TeamName": "High Point"
  },
  {
    "TeamID": 3219,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "High Point"
  },
  {
    "TeamID": 3219,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "High Point"
  },
  {
    "TeamID": 3219,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "High Point"
  },
  {
    "TeamID": 3427,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "UT San Antonio"
  },
  {
    "TeamID": 3427,
    "Round": "R1",
    "AdvProb": 0.04534,
    "TeamName": "UT San Antonio"
  },
  {
    "TeamID": 3427,
    "Round": "R2",
    "AdvProb": 0.00524,
    "TeamName": "UT San Antonio"
  },
  {
    "TeamID": 3427,
    "Round": "R3",
    "AdvProb": 0.00024,
    "TeamName": "UT San Antonio"
  },
  {
    "TeamID": 3427,
    "Round": "R4",
    "AdvProb": 1e-05,
    "TeamName": "UT San Antonio"
  },
  {
    "TeamID": 3427,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "UT San Antonio"
  },
  {
    "TeamID": 3427,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "UT San Antonio"
  },
  {
    "TeamID": 3376,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "South Carolina"
  },
  {
    "TeamID": 3376,
    "Round": "R1",
    "AdvProb": 0.95552,
    "TeamName": "South Carolina"
  },
  {
    "TeamID": 3376,
    "Round": "R2",
    "AdvProb": 0.90116,
    "TeamName": "South Carolina"
  },
  {
    "TeamID": 3376,
    "Round": "R3",
    "AdvProb": 0.84236,
    "TeamName": "South Carolina"
  },
  {
    "TeamID": 3376,
    "Round": "R4",
    "AdvProb": 0.7649,
    "TeamName": "South Carolina"
  },
  {
    "TeamID": 3376,
    "Round": "R5",
    "AdvProb": 0.18677,
    "TeamName": "South Carolina"
  },
  {
    "TeamID": 3376,
    "Round": "R6",
    "AdvProb": 0.08102,
    "TeamName": "South Carolina"
  },
  {
    "TeamID": 3234,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 3234,
    "Round": "R1",
    "AdvProb": 0.95854,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 3234,
    "Round": "R2",
    "AdvProb": 0.88192,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 3234,
    "Round": "R3",
    "AdvProb": 0.45293,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 3234,
    "Round": "R4",
    "AdvProb": 0.08783,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 3234,
    "Round": "R5",
    "AdvProb": 0.01041,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 3234,
    "Round": "R6",
    "AdvProb": 0.0009,
    "TeamName": "Iowa"
  },
  {
    "TeamID": 3395,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "TCU"
  },
  {
    "TeamID": 3395,
    "Round": "R1",
    "AdvProb": 0.96054,
    "TeamName": "TCU"
  },
  {
    "TeamID": 3395,
    "Round": "R2",
    "AdvProb": 0.84477,
    "TeamName": "TCU"
  },
  {
    "TeamID": 3395,
    "Round": "R3",
    "AdvProb": 0.5036,
    "TeamName": "TCU"
  },
  {
    "TeamID": 3395,
    "Round": "R4",
    "AdvProb": 0.10493,
    "TeamName": "TCU"
  },
  {
    "TeamID": 3395,
    "Round": "R5",
    "AdvProb": 0.0138,
    "TeamName": "TCU"
  },
  {
    "TeamID": 3395,
    "Round": "R6",
    "AdvProb": 0.00165,
    "TeamName": "TCU"
  },
  {
    "TeamID": 3328,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Oklahoma"
  },
  {
    "TeamID": 3328,
    "Round": "R1",
    "AdvProb": 0.95306,
    "TeamName": "Oklahoma"
  },
  {
    "TeamID": 3328,
    "Round": "R2",
    "AdvProb": 0.55954,
    "TeamName": "Oklahoma"
  },
  {
    "TeamID": 3328,
    "Round": "R3",
    "AdvProb": 0.07102,
    "TeamName": "Oklahoma"
  },
  {
    "TeamID": 3328,
    "Round": "R4",
    "AdvProb": 0.01974,
    "TeamName": "Oklahoma"
  },
  {
    "TeamID": 3328,
    "Round": "R5",
    "AdvProb": 0.0016,
    "TeamName": "Oklahoma"
  },
  {
    "TeamID": 3328,
    "Round": "R6",
    "AdvProb": 0.00013,
    "TeamName": "Oklahoma"
  },
  {
    "TeamID": 3277,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 3277,
    "Round": "R1",
    "AdvProb": 0.94654,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 3277,
    "Round": "R2",
    "AdvProb": 0.43364,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 3277,
    "Round": "R3",
    "AdvProb": 0.05136,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 3277,
    "Round": "R4",
    "AdvProb": 0.01214,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 3277,
    "Round": "R5",
    "AdvProb": 0.00089,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 3277,
    "Round": "R6",
    "AdvProb": 6e-05,
    "TeamName": "Michigan St"
  },
  {
    "TeamID": 3449,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Washington"
  },
  {
    "TeamID": 3449,
    "Round": "R1",
    "AdvProb": 0.81008,
    "TeamName": "Washington"
  },
  {
    "TeamID": 3449,
    "Round": "R2",
    "AdvProb": 0.13575,
    "TeamName": "Washington"
  },
  {
    "TeamID": 3449,
    "Round": "R3",
    "AdvProb": 0.03042,
    "TeamName": "Washington"
  },
  {
    "TeamID": 3449,
    "Round": "R4",
    "AdvProb": 0.00286,
    "TeamName": "Washington"
  },
  {
    "TeamID": 3449,
    "Round": "R5",
    "AdvProb": 0.0002,
    "TeamName": "Washington"
  },
  {
    "TeamID": 3449,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Washington"
  },
  {
    "TeamID": 3208,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 3208,
    "Round": "R1",
    "AdvProb": 0.70435,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 3208,
    "Round": "R2",
    "AdvProb": 0.08575,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 3208,
    "Round": "R3",
    "AdvProb": 0.00873,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 3208,
    "Round": "R4",
    "AdvProb": 0.0007,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 3208,
    "Round": "R5",
    "AdvProb": 4e-05,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 3208,
    "Round": "R6",
    "AdvProb": 1e-05,
    "TeamName": "Georgia"
  },
  {
    "TeamID": 3155,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 3155,
    "Round": "R1",
    "AdvProb": 0.21487,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 3155,
    "Round": "R2",
    "AdvProb": 0.02026,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 3155,
    "Round": "R3",
    "AdvProb": 0.00337,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 3155,
    "Round": "R4",
    "AdvProb": 0.00029,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 3155,
    "Round": "R5",
    "AdvProb": 1e-05,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 3155,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Clemson"
  },
  {
    "TeamID": 3425,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "USC"
  },
  {
    "TeamID": 3425,
    "Round": "R1",
    "AdvProb": 0.78513,
    "TeamName": "USC"
  },
  {
    "TeamID": 3425,
    "Round": "R2",
    "AdvProb": 0.07664,
    "TeamName": "USC"
  },
  {
    "TeamID": 3425,
    "Round": "R3",
    "AdvProb": 0.03156,
    "TeamName": "USC"
  },
  {
    "TeamID": 3425,
    "Round": "R4",
    "AdvProb": 0.00631,
    "TeamName": "USC"
  },
  {
    "TeamID": 3425,
    "Round": "R5",
    "AdvProb": 0.0004,
    "TeamName": "USC"
  },
  {
    "TeamID": 3425,
    "Round": "R6",
    "AdvProb": 2e-05,
    "TeamName": "USC"
  },
  {
    "TeamID": 3113,
    "Round": "PlayIn",
    "AdvProb": 0.27322,
    "TeamName": "Arizona St"
  },
  {
    "TeamID": 3113,
    "Round": "R1",
    "AdvProb": 0.04649,
    "TeamName": "Arizona St"
  },
  {
    "TeamID": 3113,
    "Round": "R2",
    "AdvProb": 0.00472,
    "TeamName": "Arizona St"
  },
  {
    "TeamID": 3113,
    "Round": "R3",
    "AdvProb": 0.00023,
    "TeamName": "Arizona St"
  },
  {
    "TeamID": 3113,
    "Round": "R4",
    "AdvProb": 2e-05,
    "TeamName": "Arizona St"
  },
  {
    "TeamID": 3113,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Arizona St"
  },
  {
    "TeamID": 3113,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Arizona St"
  },
  {
    "TeamID": 3438,
    "Round": "PlayIn",
    "AdvProb": 0.72678,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 3438,
    "Round": "R1",
    "AdvProb": 0.24916,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 3438,
    "Round": "R2",
    "AdvProb": 0.02588,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 3438,
    "Round": "R3",
    "AdvProb": 0.00214,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 3438,
    "Round": "R4",
    "AdvProb": 0.00016,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 3438,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 3438,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Virginia"
  },
  {
    "TeamID": 3355,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "S Dakota St"
  },
  {
    "TeamID": 3355,
    "Round": "R1",
    "AdvProb": 0.18992,
    "TeamName": "S Dakota St"
  },
  {
    "TeamID": 3355,
    "Round": "R2",
    "AdvProb": 0.01759,
    "TeamName": "S Dakota St"
  },
  {
    "TeamID": 3355,
    "Round": "R3",
    "AdvProb": 0.00183,
    "TeamName": "S Dakota St"
  },
  {
    "TeamID": 3355,
    "Round": "R4",
    "AdvProb": 9e-05,
    "TeamName": "S Dakota St"
  },
  {
    "TeamID": 3355,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "S Dakota St"
  },
  {
    "TeamID": 3355,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "S Dakota St"
  },
  {
    "TeamID": 3161,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Colorado St"
  },
  {
    "TeamID": 3161,
    "Round": "R1",
    "AdvProb": 0.05346,
    "TeamName": "Colorado St"
  },
  {
    "TeamID": 3161,
    "Round": "R2",
    "AdvProb": 0.00413,
    "TeamName": "Colorado St"
  },
  {
    "TeamID": 3161,
    "Round": "R3",
    "AdvProb": 0.00011,
    "TeamName": "Colorado St"
  },
  {
    "TeamID": 3161,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Colorado St"
  },
  {
    "TeamID": 3161,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Colorado St"
  },
  {
    "TeamID": 3161,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Colorado St"
  },
  {
    "TeamID": 3225,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 3225,
    "Round": "R1",
    "AdvProb": 0.04694,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 3225,
    "Round": "R2",
    "AdvProb": 0.00269,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 3225,
    "Round": "R3",
    "AdvProb": 0.00012,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 3225,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 3225,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 3225,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Idaho"
  },
  {
    "TeamID": 3471,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "UC San Diego"
  },
  {
    "TeamID": 3471,
    "Round": "R1",
    "AdvProb": 0.03946,
    "TeamName": "UC San Diego"
  },
  {
    "TeamID": 3471,
    "Round": "R2",
    "AdvProb": 0.00189,
    "TeamName": "UC San Diego"
  },
  {
    "TeamID": 3471,
    "Round": "R3",
    "AdvProb": 8e-05,
    "TeamName": "UC San Diego"
  },
  {
    "TeamID": 3471,
    "Round": "R4",
    "AdvProb": 1e-05,
    "TeamName": "UC San Diego"
  },
  {
    "TeamID": 3471,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "UC San Diego"
  },
  {
    "TeamID": 3471,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "UC San Diego"
  },
  {
    "TeamID": 3192,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "F Dickinson"
  },
  {
    "TeamID": 3192,
    "Round": "R1",
    "AdvProb": 0.04146,
    "TeamName": "F Dickinson"
  },
  {
    "TeamID": 3192,
    "Round": "R2",
    "AdvProb": 0.00173,
    "TeamName": "F Dickinson"
  },
  {
    "TeamID": 3192,
    "Round": "R3",
    "AdvProb": 4e-05,
    "TeamName": "F Dickinson"
  },
  {
    "TeamID": 3192,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "F Dickinson"
  },
  {
    "TeamID": 3192,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "F Dickinson"
  },
  {
    "TeamID": 3192,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "F Dickinson"
  },
  {
    "TeamID": 3359,
    "Round": "PlayIn",
    "AdvProb": 0.14597,
    "TeamName": "Samford"
  },
  {
    "TeamID": 3359,
    "Round": "R1",
    "AdvProb": 0.00746,
    "TeamName": "Samford"
  },
  {
    "TeamID": 3359,
    "Round": "R2",
    "AdvProb": 0.00029,
    "TeamName": "Samford"
  },
  {
    "TeamID": 3359,
    "Round": "R3",
    "AdvProb": 1e-05,
    "TeamName": "Samford"
  },
  {
    "TeamID": 3359,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Samford"
  },
  {
    "TeamID": 3359,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Samford"
  },
  {
    "TeamID": 3359,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Samford"
  },
  {
    "TeamID": 3380,
    "Round": "PlayIn",
    "AdvProb": 0.85403,
    "TeamName": "Southern Univ"
  },
  {
    "TeamID": 3380,
    "Round": "R1",
    "AdvProb": 0.03702,
    "TeamName": "Southern Univ"
  },
  {
    "TeamID": 3380,
    "Round": "R2",
    "AdvProb": 0.00165,
    "TeamName": "Southern Univ"
  },
  {
    "TeamID": 3380,
    "Round": "R3",
    "AdvProb": 9e-05,
    "TeamName": "Southern Univ"
  },
  {
    "TeamID": 3380,
    "Round": "R4",
    "AdvProb": 2e-05,
    "TeamName": "Southern Univ"
  },
  {
    "TeamID": 3380,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Southern Univ"
  },
  {
    "TeamID": 3380,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Southern Univ"
  },
  {
    "TeamID": 3400,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Texas"
  },
  {
    "TeamID": 3400,
    "Round": "R1",
    "AdvProb": 0.95809,
    "TeamName": "Texas"
  },
  {
    "TeamID": 3400,
    "Round": "R2",
    "AdvProb": 0.90322,
    "TeamName": "Texas"
  },
  {
    "TeamID": 3400,
    "Round": "R3",
    "AdvProb": 0.82065,
    "TeamName": "Texas"
  },
  {
    "TeamID": 3400,
    "Round": "R4",
    "AdvProb": 0.64144,
    "TeamName": "Texas"
  },
  {
    "TeamID": 3400,
    "Round": "R5",
    "AdvProb": 0.19731,
    "TeamName": "Texas"
  },
  {
    "TeamID": 3400,
    "Round": "R6",
    "AdvProb": 0.03798,
    "TeamName": "Texas"
  },
  {
    "TeamID": 3276,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 3276,
    "Round": "R1",
    "AdvProb": 0.95843,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 3276,
    "Round": "R2",
    "AdvProb": 0.62007,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 3276,
    "Round": "R3",
    "AdvProb": 0.22689,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 3276,
    "Round": "R4",
    "AdvProb": 0.05936,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 3276,
    "Round": "R5",
    "AdvProb": 0.00718,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 3276,
    "Round": "R6",
    "AdvProb": 0.00064,
    "TeamName": "Michigan"
  },
  {
    "TeamID": 3257,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 3257,
    "Round": "R1",
    "AdvProb": 0.95991,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 3257,
    "Round": "R2",
    "AdvProb": 0.89109,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 3257,
    "Round": "R3",
    "AdvProb": 0.64677,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 3257,
    "Round": "R4",
    "AdvProb": 0.23711,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 3257,
    "Round": "R5",
    "AdvProb": 0.04218,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 3257,
    "Round": "R6",
    "AdvProb": 0.00515,
    "TeamName": "Louisville"
  },
  {
    "TeamID": 3452,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "West Virginia"
  },
  {
    "TeamID": 3452,
    "Round": "R1",
    "AdvProb": 0.92836,
    "TeamName": "West Virginia"
  },
  {
    "TeamID": 3452,
    "Round": "R2",
    "AdvProb": 0.45849,
    "TeamName": "West Virginia"
  },
  {
    "TeamID": 3452,
    "Round": "R3",
    "AdvProb": 0.06751,
    "TeamName": "West Virginia"
  },
  {
    "TeamID": 3452,
    "Round": "R4",
    "AdvProb": 0.01346,
    "TeamName": "West Virginia"
  },
  {
    "TeamID": 3452,
    "Round": "R5",
    "AdvProb": 0.00091,
    "TeamName": "West Virginia"
  },
  {
    "TeamID": 3452,
    "Round": "R6",
    "AdvProb": 5e-05,
    "TeamName": "West Virginia"
  },
  {
    "TeamID": 3246,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 3246,
    "Round": "R1",
    "AdvProb": 0.93827,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 3246,
    "Round": "R2",
    "AdvProb": 0.52845,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 3246,
    "Round": "R3",
    "AdvProb": 0.08884,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 3246,
    "Round": "R4",
    "AdvProb": 0.02113,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 3246,
    "Round": "R5",
    "AdvProb": 0.00187,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 3246,
    "Round": "R6",
    "AdvProb": 9e-05,
    "TeamName": "Kentucky"
  },
  {
    "TeamID": 3104,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 3104,
    "Round": "R1",
    "AdvProb": 0.91372,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 3104,
    "Round": "R2",
    "AdvProb": 0.1003,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 3104,
    "Round": "R3",
    "AdvProb": 0.01401,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 3104,
    "Round": "R4",
    "AdvProb": 0.0015,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 3104,
    "Round": "R5",
    "AdvProb": 7e-05,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 3104,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Alabama"
  },
  {
    "TeamID": 3301,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "NC State"
  },
  {
    "TeamID": 3301,
    "Round": "R1",
    "AdvProb": 0.77162,
    "TeamName": "NC State"
  },
  {
    "TeamID": 3301,
    "Round": "R2",
    "AdvProb": 0.33161,
    "TeamName": "NC State"
  },
  {
    "TeamID": 3301,
    "Round": "R3",
    "AdvProb": 0.10368,
    "TeamName": "NC State"
  },
  {
    "TeamID": 3301,
    "Round": "R4",
    "AdvProb": 0.02272,
    "TeamName": "NC State"
  },
  {
    "TeamID": 3301,
    "Round": "R5",
    "AdvProb": 0.00207,
    "TeamName": "NC State"
  },
  {
    "TeamID": 3301,
    "Round": "R6",
    "AdvProb": 0.00012,
    "TeamName": "NC State"
  },
  {
    "TeamID": 3332,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Oregon"
  },
  {
    "TeamID": 3332,
    "Round": "R1",
    "AdvProb": 0.18334,
    "TeamName": "Oregon"
  },
  {
    "TeamID": 3332,
    "Round": "R2",
    "AdvProb": 0.01646,
    "TeamName": "Oregon"
  },
  {
    "TeamID": 3332,
    "Round": "R3",
    "AdvProb": 0.00175,
    "TeamName": "Oregon"
  },
  {
    "TeamID": 3332,
    "Round": "R4",
    "AdvProb": 8e-05,
    "TeamName": "Oregon"
  },
  {
    "TeamID": 3332,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Oregon"
  },
  {
    "TeamID": 3332,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Oregon"
  },
  {
    "TeamID": 3439,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Virginia Tech"
  },
  {
    "TeamID": 3439,
    "Round": "R1",
    "AdvProb": 0.81666,
    "TeamName": "Virginia Tech"
  },
  {
    "TeamID": 3439,
    "Round": "R2",
    "AdvProb": 0.07814,
    "TeamName": "Virginia Tech"
  },
  {
    "TeamID": 3439,
    "Round": "R3",
    "AdvProb": 0.0205,
    "TeamName": "Virginia Tech"
  },
  {
    "TeamID": 3439,
    "Round": "R4",
    "AdvProb": 0.00222,
    "TeamName": "Virginia Tech"
  },
  {
    "TeamID": 3439,
    "Round": "R5",
    "AdvProb": 8e-05,
    "TeamName": "Virginia Tech"
  },
  {
    "TeamID": 3439,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Virginia Tech"
  },
  {
    "TeamID": 3397,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 3397,
    "Round": "R1",
    "AdvProb": 0.22838,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 3397,
    "Round": "R2",
    "AdvProb": 0.04676,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 3397,
    "Round": "R3",
    "AdvProb": 0.00814,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 3397,
    "Round": "R4",
    "AdvProb": 0.00091,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 3397,
    "Round": "R5",
    "AdvProb": 6e-05,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 3397,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Tennessee"
  },
  {
    "TeamID": 3348,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Rhode Island"
  },
  {
    "TeamID": 3348,
    "Round": "R1",
    "AdvProb": 0.08628,
    "TeamName": "Rhode Island"
  },
  {
    "TeamID": 3348,
    "Round": "R2",
    "AdvProb": 0.00639,
    "TeamName": "Rhode Island"
  },
  {
    "TeamID": 3348,
    "Round": "R3",
    "AdvProb": 0.00038,
    "TeamName": "Rhode Island"
  },
  {
    "TeamID": 3348,
    "Round": "R4",
    "AdvProb": 2e-05,
    "TeamName": "Rhode Island"
  },
  {
    "TeamID": 3348,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Rhode Island"
  },
  {
    "TeamID": 3348,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Rhode Island"
  },
  {
    "TeamID": 3241,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "James Madison"
  },
  {
    "TeamID": 3241,
    "Round": "R1",
    "AdvProb": 0.06173,
    "TeamName": "James Madison"
  },
  {
    "TeamID": 3241,
    "Round": "R2",
    "AdvProb": 0.0066,
    "TeamName": "James Madison"
  },
  {
    "TeamID": 3241,
    "Round": "R3",
    "AdvProb": 0.00027,
    "TeamName": "James Madison"
  },
  {
    "TeamID": 3241,
    "Round": "R4",
    "AdvProb": 1e-05,
    "TeamName": "James Madison"
  },
  {
    "TeamID": 3241,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "James Madison"
  },
  {
    "TeamID": 3241,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "James Madison"
  },
  {
    "TeamID": 3275,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 3275,
    "Round": "R1",
    "AdvProb": 0.07164,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 3275,
    "Round": "R2",
    "AdvProb": 0.00646,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 3275,
    "Round": "R3",
    "AdvProb": 0.00041,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 3275,
    "Round": "R4",
    "AdvProb": 2e-05,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 3275,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 3275,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Miami OH"
  },
  {
    "TeamID": 3436,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Vermont"
  },
  {
    "TeamID": 3436,
    "Round": "R1",
    "AdvProb": 0.04009,
    "TeamName": "Vermont"
  },
  {
    "TeamID": 3436,
    "Round": "R2",
    "AdvProb": 0.00222,
    "TeamName": "Vermont"
  },
  {
    "TeamID": 3436,
    "Round": "R3",
    "AdvProb": 6e-05,
    "TeamName": "Vermont"
  },
  {
    "TeamID": 3436,
    "Round": "R4",
    "AdvProb": 1e-05,
    "TeamName": "Vermont"
  },
  {
    "TeamID": 3436,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Vermont"
  },
  {
    "TeamID": 3436,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Vermont"
  },
  {
    "TeamID": 3221,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Holy Cross"
  },
  {
    "TeamID": 3221,
    "Round": "R1",
    "AdvProb": 0.04157,
    "TeamName": "Holy Cross"
  },
  {
    "TeamID": 3221,
    "Round": "R2",
    "AdvProb": 0.00156,
    "TeamName": "Holy Cross"
  },
  {
    "TeamID": 3221,
    "Round": "R3",
    "AdvProb": 7e-05,
    "TeamName": "Holy Cross"
  },
  {
    "TeamID": 3221,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Holy Cross"
  },
  {
    "TeamID": 3221,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Holy Cross"
  },
  {
    "TeamID": 3221,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Holy Cross"
  },
  {
    "TeamID": 3283,
    "Round": "PlayIn",
    "AdvProb": 0.90631,
    "TeamName": "Missouri St"
  },
  {
    "TeamID": 3283,
    "Round": "R1",
    "AdvProb": 0.03809,
    "TeamName": "Missouri St"
  },
  {
    "TeamID": 3283,
    "Round": "R2",
    "AdvProb": 0.00205,
    "TeamName": "Missouri St"
  },
  {
    "TeamID": 3283,
    "Round": "R3",
    "AdvProb": 6e-05,
    "TeamName": "Missouri St"
  },
  {
    "TeamID": 3283,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Missouri St"
  },
  {
    "TeamID": 3283,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Missouri St"
  },
  {
    "TeamID": 3283,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Missouri St"
  },
  {
    "TeamID": 3372,
    "Round": "PlayIn",
    "AdvProb": 0.09369,
    "TeamName": "SF Austin"
  },
  {
    "TeamID": 3372,
    "Round": "R1",
    "AdvProb": 0.00382,
    "TeamName": "SF Austin"
  },
  {
    "TeamID": 3372,
    "Round": "R2",
    "AdvProb": 0.00013,
    "TeamName": "SF Austin"
  },
  {
    "TeamID": 3372,
    "Round": "R3",
    "AdvProb": 1e-05,
    "TeamName": "SF Austin"
  },
  {
    "TeamID": 3372,
    "Round": "R4",
    "AdvProb": 1e-05,
    "TeamName": "SF Austin"
  },
  {
    "TeamID": 3372,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "SF Austin"
  },
  {
    "TeamID": 3372,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "SF Austin"
  },
  {
    "TeamID": 3417,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 3417,
    "Round": "R1",
    "AdvProb": 0.96032,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 3417,
    "Round": "R2",
    "AdvProb": 0.91812,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 3417,
    "Round": "R3",
    "AdvProb": 0.87187,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 3417,
    "Round": "R4",
    "AdvProb": 0.75483,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 3417,
    "Round": "R5",
    "AdvProb": 0.63486,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 3417,
    "Round": "R6",
    "AdvProb": 0.22147,
    "TeamName": "UCLA"
  },
  {
    "TeamID": 3261,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "LSU"
  },
  {
    "TeamID": 3261,
    "Round": "R1",
    "AdvProb": 0.95551,
    "TeamName": "LSU"
  },
  {
    "TeamID": 3261,
    "Round": "R2",
    "AdvProb": 0.88222,
    "TeamName": "LSU"
  },
  {
    "TeamID": 3261,
    "Round": "R3",
    "AdvProb": 0.57826,
    "TeamName": "LSU"
  },
  {
    "TeamID": 3261,
    "Round": "R4",
    "AdvProb": 0.14476,
    "TeamName": "LSU"
  },
  {
    "TeamID": 3261,
    "Round": "R5",
    "AdvProb": 0.07657,
    "TeamName": "LSU"
  },
  {
    "TeamID": 3261,
    "Round": "R6",
    "AdvProb": 0.01246,
    "TeamName": "LSU"
  },
  {
    "TeamID": 3181,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Duke"
  },
  {
    "TeamID": 3181,
    "Round": "R1",
    "AdvProb": 0.95801,
    "TeamName": "Duke"
  },
  {
    "TeamID": 3181,
    "Round": "R2",
    "AdvProb": 0.90173,
    "TeamName": "Duke"
  },
  {
    "TeamID": 3181,
    "Round": "R3",
    "AdvProb": 0.39646,
    "TeamName": "Duke"
  },
  {
    "TeamID": 3181,
    "Round": "R4",
    "AdvProb": 0.08617,
    "TeamName": "Duke"
  },
  {
    "TeamID": 3181,
    "Round": "R5",
    "AdvProb": 0.03532,
    "TeamName": "Duke"
  },
  {
    "TeamID": 3181,
    "Round": "R6",
    "AdvProb": 0.00473,
    "TeamName": "Duke"
  },
  {
    "TeamID": 3278,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Minnesota"
  },
  {
    "TeamID": 3278,
    "Round": "R1",
    "AdvProb": 0.932,
    "TeamName": "Minnesota"
  },
  {
    "TeamID": 3278,
    "Round": "R2",
    "AdvProb": 0.31477,
    "TeamName": "Minnesota"
  },
  {
    "TeamID": 3278,
    "Round": "R3",
    "AdvProb": 0.03077,
    "TeamName": "Minnesota"
  },
  {
    "TeamID": 3278,
    "Round": "R4",
    "AdvProb": 0.0023,
    "TeamName": "Minnesota"
  },
  {
    "TeamID": 3278,
    "Round": "R5",
    "AdvProb": 0.00015,
    "TeamName": "Minnesota"
  },
  {
    "TeamID": 3278,
    "Round": "R6",
    "AdvProb": 1e-05,
    "TeamName": "Minnesota"
  },
  {
    "TeamID": 3279,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Mississippi"
  },
  {
    "TeamID": 3279,
    "Round": "R1",
    "AdvProb": 0.90803,
    "TeamName": "Mississippi"
  },
  {
    "TeamID": 3279,
    "Round": "R2",
    "AdvProb": 0.66187,
    "TeamName": "Mississippi"
  },
  {
    "TeamID": 3279,
    "Round": "R3",
    "AdvProb": 0.07468,
    "TeamName": "Mississippi"
  },
  {
    "TeamID": 3279,
    "Round": "R4",
    "AdvProb": 0.00818,
    "TeamName": "Mississippi"
  },
  {
    "TeamID": 3279,
    "Round": "R5",
    "AdvProb": 0.00104,
    "TeamName": "Mississippi"
  },
  {
    "TeamID": 3279,
    "Round": "R6",
    "AdvProb": 7e-05,
    "TeamName": "Mississippi"
  },
  {
    "TeamID": 3124,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Baylor"
  },
  {
    "TeamID": 3124,
    "Round": "R1",
    "AdvProb": 0.66128,
    "TeamName": "Baylor"
  },
  {
    "TeamID": 3124,
    "Round": "R2",
    "AdvProb": 0.06457,
    "TeamName": "Baylor"
  },
  {
    "TeamID": 3124,
    "Round": "R3",
    "AdvProb": 0.00606,
    "TeamName": "Baylor"
  },
  {
    "TeamID": 3124,
    "Round": "R4",
    "AdvProb": 0.00049,
    "TeamName": "Baylor"
  },
  {
    "TeamID": 3124,
    "Round": "R5",
    "AdvProb": 3e-05,
    "TeamName": "Baylor"
  },
  {
    "TeamID": 3124,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Baylor"
  },
  {
    "TeamID": 3403,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 3403,
    "Round": "R1",
    "AdvProb": 0.21462,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 3403,
    "Round": "R2",
    "AdvProb": 0.02114,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 3403,
    "Round": "R3",
    "AdvProb": 0.00192,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 3403,
    "Round": "R4",
    "AdvProb": 0.00018,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 3403,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 3403,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Texas Tech"
  },
  {
    "TeamID": 3329,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Oklahoma St"
  },
  {
    "TeamID": 3329,
    "Round": "R1",
    "AdvProb": 0.70661,
    "TeamName": "Oklahoma St"
  },
  {
    "TeamID": 3329,
    "Round": "R2",
    "AdvProb": 0.05718,
    "TeamName": "Oklahoma St"
  },
  {
    "TeamID": 3329,
    "Round": "R3",
    "AdvProb": 0.01788,
    "TeamName": "Oklahoma St"
  },
  {
    "TeamID": 3329,
    "Round": "R4",
    "AdvProb": 0.00107,
    "TeamName": "Oklahoma St"
  },
  {
    "TeamID": 3329,
    "Round": "R5",
    "AdvProb": 8e-05,
    "TeamName": "Oklahoma St"
  },
  {
    "TeamID": 3329,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Oklahoma St"
  },
  {
    "TeamID": 3343,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Princeton"
  },
  {
    "TeamID": 3343,
    "Round": "R1",
    "AdvProb": 0.29339,
    "TeamName": "Princeton"
  },
  {
    "TeamID": 3343,
    "Round": "R2",
    "AdvProb": 0.02324,
    "TeamName": "Princeton"
  },
  {
    "TeamID": 3343,
    "Round": "R3",
    "AdvProb": 0.00359,
    "TeamName": "Princeton"
  },
  {
    "TeamID": 3343,
    "Round": "R4",
    "AdvProb": 0.00022,
    "TeamName": "Princeton"
  },
  {
    "TeamID": 3343,
    "Round": "R5",
    "AdvProb": 1e-05,
    "TeamName": "Princeton"
  },
  {
    "TeamID": 3343,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Princeton"
  },
  {
    "TeamID": 3437,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 3437,
    "Round": "R1",
    "AdvProb": 0.78538,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 3437,
    "Round": "R2",
    "AdvProb": 0.09472,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 3437,
    "Round": "R3",
    "AdvProb": 0.01494,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 3437,
    "Round": "R4",
    "AdvProb": 0.00162,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 3437,
    "Round": "R5",
    "AdvProb": 0.00018,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 3437,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Villanova"
  },
  {
    "TeamID": 3304,
    "Round": "PlayIn",
    "AdvProb": 0.19215,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 3304,
    "Round": "R1",
    "AdvProb": 0.02647,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 3304,
    "Round": "R2",
    "AdvProb": 0.00192,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 3304,
    "Round": "R3",
    "AdvProb": 7e-05,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 3304,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 3304,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 3304,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Nebraska"
  },
  {
    "TeamID": 3350,
    "Round": "PlayIn",
    "AdvProb": 0.80785,
    "TeamName": "Richmond"
  },
  {
    "TeamID": 3350,
    "Round": "R1",
    "AdvProb": 0.31225,
    "TeamName": "Richmond"
  },
  {
    "TeamID": 3350,
    "Round": "R2",
    "AdvProb": 0.02907,
    "TeamName": "Richmond"
  },
  {
    "TeamID": 3350,
    "Round": "R3",
    "AdvProb": 0.00211,
    "TeamName": "Richmond"
  },
  {
    "TeamID": 3350,
    "Round": "R4",
    "AdvProb": 0.00014,
    "TeamName": "Richmond"
  },
  {
    "TeamID": 3350,
    "Round": "R5",
    "AdvProb": 2e-05,
    "TeamName": "Richmond"
  },
  {
    "TeamID": 3350,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Richmond"
  },
  {
    "TeamID": 3211,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 3211,
    "Round": "R1",
    "AdvProb": 0.09197,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 3211,
    "Round": "R2",
    "AdvProb": 0.01906,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 3211,
    "Round": "R3",
    "AdvProb": 0.00105,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 3211,
    "Round": "R4",
    "AdvProb": 4e-05,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 3211,
    "Round": "R5",
    "AdvProb": 1e-05,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 3211,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Gonzaga"
  },
  {
    "TeamID": 3453,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "WI Green Bay"
  },
  {
    "TeamID": 3453,
    "Round": "R1",
    "AdvProb": 0.068,
    "TeamName": "WI Green Bay"
  },
  {
    "TeamID": 3453,
    "Round": "R2",
    "AdvProb": 0.0043,
    "TeamName": "WI Green Bay"
  },
  {
    "TeamID": 3453,
    "Round": "R3",
    "AdvProb": 0.00011,
    "TeamName": "WI Green Bay"
  },
  {
    "TeamID": 3453,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "WI Green Bay"
  },
  {
    "TeamID": 3453,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "WI Green Bay"
  },
  {
    "TeamID": 3453,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "WI Green Bay"
  },
  {
    "TeamID": 3158,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Col Charleston"
  },
  {
    "TeamID": 3158,
    "Round": "R1",
    "AdvProb": 0.04199,
    "TeamName": "Col Charleston"
  },
  {
    "TeamID": 3158,
    "Round": "R2",
    "AdvProb": 0.00271,
    "TeamName": "Col Charleston"
  },
  {
    "TeamID": 3158,
    "Round": "R3",
    "AdvProb": 0.00012,
    "TeamName": "Col Charleston"
  },
  {
    "TeamID": 3158,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Col Charleston"
  },
  {
    "TeamID": 3158,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Col Charleston"
  },
  {
    "TeamID": 3158,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Col Charleston"
  },
  {
    "TeamID": 3239,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Jacksonville"
  },
  {
    "TeamID": 3239,
    "Round": "R1",
    "AdvProb": 0.04449,
    "TeamName": "Jacksonville"
  },
  {
    "TeamID": 3239,
    "Round": "R2",
    "AdvProb": 0.00192,
    "TeamName": "Jacksonville"
  },
  {
    "TeamID": 3239,
    "Round": "R3",
    "AdvProb": 6e-05,
    "TeamName": "Jacksonville"
  },
  {
    "TeamID": 3239,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Jacksonville"
  },
  {
    "TeamID": 3239,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Jacksonville"
  },
  {
    "TeamID": 3239,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Jacksonville"
  },
  {
    "TeamID": 3465,
    "Round": "PlayIn",
    "AdvProb": 0.0,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 3465,
    "Round": "R1",
    "AdvProb": 0.03968,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 3465,
    "Round": "R2",
    "AdvProb": 0.00146,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 3465,
    "Round": "R3",
    "AdvProb": 5e-05,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 3465,
    "Round": "R4",
    "AdvProb": 0.0,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 3465,
    "Round": "R5",
    "AdvProb": 0.0,
    "TeamName": "Cal Baptist"
  },
  {
    "TeamID": 3465,
    "Round": "R6",
    "AdvProb": 0.0,
    "TeamName": "Cal Baptist"
  }
];

export const MODEL_COMPARISON: ModelComparisonRow[] = [
  {
    "Model": "Seed baseline",
    "brier": 0.2083764665286404,
    "logloss": 0.6078367694999303,
    "auc": 0.7126043055820156,
    "accuracy": 0.6991028295376122,
    "ece": 0.0367494824016563,
    "n_games": 1449
  },
  {
    "Model": "Logistic",
    "brier": 0.1315259493360567,
    "logloss": 0.4157922563593839,
    "auc": 0.8934997142312822,
    "accuracy": 0.8219461697722568,
    "ece": 0.0344573171101318,
    "n_games": 1449
  },
  {
    "Model": "XGBoost",
    "brier": 0.1566755324589418,
    "logloss": 0.4955777062116363,
    "auc": 0.8578395884930463,
    "accuracy": 0.7846790890269151,
    "ece": 0.0811466798850729,
    "n_games": 1449
  }
];

export const ROUND_BREAKDOWN: RoundBreakdownRow[] = [
  {
    "Round": "PlayIn",
    "n": 60,
    "brier": 0.1359671148625747,
    "accuracy": 0.8166666666666667,
    "auc": 0.915158371040724
  },
  {
    "Round": "R64",
    "n": 692,
    "brier": 0.1255587572102026,
    "accuracy": 0.8265895953757225,
    "auc": 0.9023731252143508
  },
  {
    "Round": "R32",
    "n": 359,
    "brier": 0.1342109861685863,
    "accuracy": 0.8384401114206128,
    "auc": 0.8844124402507914
  },
  {
    "Round": "S16",
    "n": 176,
    "brier": 0.1380196788899457,
    "accuracy": 0.7897727272727273,
    "auc": 0.8850160256410257
  },
  {
    "Round": "E8",
    "n": 92,
    "brier": 0.1489411270549367,
    "accuracy": 0.8043478260869565,
    "auc": 0.8847619047619047
  },
  {
    "Round": "F4",
    "n": 44,
    "brier": 0.1267480912866619,
    "accuracy": 0.8181818181818182,
    "auc": 0.9174107142857144
  },
  {
    "Round": "Final",
    "n": 22,
    "brier": 0.141546342662863,
    "accuracy": 0.7727272727272727,
    "auc": 0.875
  }
];

export const BRACKET_SLOTS_MEN: BracketSlotRow[] = [
  {
    "Season": 2026,
    "Slot": "R1W1",
    "StrongSeed": "W01",
    "WeakSeed": "W16"
  },
  {
    "Season": 2026,
    "Slot": "R1W2",
    "StrongSeed": "W02",
    "WeakSeed": "W15"
  },
  {
    "Season": 2026,
    "Slot": "R1W3",
    "StrongSeed": "W03",
    "WeakSeed": "W14"
  },
  {
    "Season": 2026,
    "Slot": "R1W4",
    "StrongSeed": "W04",
    "WeakSeed": "W13"
  },
  {
    "Season": 2026,
    "Slot": "R1W5",
    "StrongSeed": "W05",
    "WeakSeed": "W12"
  },
  {
    "Season": 2026,
    "Slot": "R1W6",
    "StrongSeed": "W06",
    "WeakSeed": "W11"
  },
  {
    "Season": 2026,
    "Slot": "R1W7",
    "StrongSeed": "W07",
    "WeakSeed": "W10"
  },
  {
    "Season": 2026,
    "Slot": "R1W8",
    "StrongSeed": "W08",
    "WeakSeed": "W09"
  },
  {
    "Season": 2026,
    "Slot": "R1X1",
    "StrongSeed": "X01",
    "WeakSeed": "X16"
  },
  {
    "Season": 2026,
    "Slot": "R1X2",
    "StrongSeed": "X02",
    "WeakSeed": "X15"
  },
  {
    "Season": 2026,
    "Slot": "R1X3",
    "StrongSeed": "X03",
    "WeakSeed": "X14"
  },
  {
    "Season": 2026,
    "Slot": "R1X4",
    "StrongSeed": "X04",
    "WeakSeed": "X13"
  },
  {
    "Season": 2026,
    "Slot": "R1X5",
    "StrongSeed": "X05",
    "WeakSeed": "X12"
  },
  {
    "Season": 2026,
    "Slot": "R1X6",
    "StrongSeed": "X06",
    "WeakSeed": "X11"
  },
  {
    "Season": 2026,
    "Slot": "R1X7",
    "StrongSeed": "X07",
    "WeakSeed": "X10"
  },
  {
    "Season": 2026,
    "Slot": "R1X8",
    "StrongSeed": "X08",
    "WeakSeed": "X09"
  },
  {
    "Season": 2026,
    "Slot": "R1Y1",
    "StrongSeed": "Y01",
    "WeakSeed": "Y16"
  },
  {
    "Season": 2026,
    "Slot": "R1Y2",
    "StrongSeed": "Y02",
    "WeakSeed": "Y15"
  },
  {
    "Season": 2026,
    "Slot": "R1Y3",
    "StrongSeed": "Y03",
    "WeakSeed": "Y14"
  },
  {
    "Season": 2026,
    "Slot": "R1Y4",
    "StrongSeed": "Y04",
    "WeakSeed": "Y13"
  },
  {
    "Season": 2026,
    "Slot": "R1Y5",
    "StrongSeed": "Y05",
    "WeakSeed": "Y12"
  },
  {
    "Season": 2026,
    "Slot": "R1Y6",
    "StrongSeed": "Y06",
    "WeakSeed": "Y11"
  },
  {
    "Season": 2026,
    "Slot": "R1Y7",
    "StrongSeed": "Y07",
    "WeakSeed": "Y10"
  },
  {
    "Season": 2026,
    "Slot": "R1Y8",
    "StrongSeed": "Y08",
    "WeakSeed": "Y09"
  },
  {
    "Season": 2026,
    "Slot": "R1Z1",
    "StrongSeed": "Z01",
    "WeakSeed": "Z16"
  },
  {
    "Season": 2026,
    "Slot": "R1Z2",
    "StrongSeed": "Z02",
    "WeakSeed": "Z15"
  },
  {
    "Season": 2026,
    "Slot": "R1Z3",
    "StrongSeed": "Z03",
    "WeakSeed": "Z14"
  },
  {
    "Season": 2026,
    "Slot": "R1Z4",
    "StrongSeed": "Z04",
    "WeakSeed": "Z13"
  },
  {
    "Season": 2026,
    "Slot": "R1Z5",
    "StrongSeed": "Z05",
    "WeakSeed": "Z12"
  },
  {
    "Season": 2026,
    "Slot": "R1Z6",
    "StrongSeed": "Z06",
    "WeakSeed": "Z11"
  },
  {
    "Season": 2026,
    "Slot": "R1Z7",
    "StrongSeed": "Z07",
    "WeakSeed": "Z10"
  },
  {
    "Season": 2026,
    "Slot": "R1Z8",
    "StrongSeed": "Z08",
    "WeakSeed": "Z09"
  },
  {
    "Season": 2026,
    "Slot": "R2W1",
    "StrongSeed": "R1W1",
    "WeakSeed": "R1W8"
  },
  {
    "Season": 2026,
    "Slot": "R2W2",
    "StrongSeed": "R1W2",
    "WeakSeed": "R1W7"
  },
  {
    "Season": 2026,
    "Slot": "R2W3",
    "StrongSeed": "R1W3",
    "WeakSeed": "R1W6"
  },
  {
    "Season": 2026,
    "Slot": "R2W4",
    "StrongSeed": "R1W4",
    "WeakSeed": "R1W5"
  },
  {
    "Season": 2026,
    "Slot": "R2X1",
    "StrongSeed": "R1X1",
    "WeakSeed": "R1X8"
  },
  {
    "Season": 2026,
    "Slot": "R2X2",
    "StrongSeed": "R1X2",
    "WeakSeed": "R1X7"
  },
  {
    "Season": 2026,
    "Slot": "R2X3",
    "StrongSeed": "R1X3",
    "WeakSeed": "R1X6"
  },
  {
    "Season": 2026,
    "Slot": "R2X4",
    "StrongSeed": "R1X4",
    "WeakSeed": "R1X5"
  },
  {
    "Season": 2026,
    "Slot": "R2Y1",
    "StrongSeed": "R1Y1",
    "WeakSeed": "R1Y8"
  },
  {
    "Season": 2026,
    "Slot": "R2Y2",
    "StrongSeed": "R1Y2",
    "WeakSeed": "R1Y7"
  },
  {
    "Season": 2026,
    "Slot": "R2Y3",
    "StrongSeed": "R1Y3",
    "WeakSeed": "R1Y6"
  },
  {
    "Season": 2026,
    "Slot": "R2Y4",
    "StrongSeed": "R1Y4",
    "WeakSeed": "R1Y5"
  },
  {
    "Season": 2026,
    "Slot": "R2Z1",
    "StrongSeed": "R1Z1",
    "WeakSeed": "R1Z8"
  },
  {
    "Season": 2026,
    "Slot": "R2Z2",
    "StrongSeed": "R1Z2",
    "WeakSeed": "R1Z7"
  },
  {
    "Season": 2026,
    "Slot": "R2Z3",
    "StrongSeed": "R1Z3",
    "WeakSeed": "R1Z6"
  },
  {
    "Season": 2026,
    "Slot": "R2Z4",
    "StrongSeed": "R1Z4",
    "WeakSeed": "R1Z5"
  },
  {
    "Season": 2026,
    "Slot": "R3W1",
    "StrongSeed": "R2W1",
    "WeakSeed": "R2W4"
  },
  {
    "Season": 2026,
    "Slot": "R3W2",
    "StrongSeed": "R2W2",
    "WeakSeed": "R2W3"
  },
  {
    "Season": 2026,
    "Slot": "R3X1",
    "StrongSeed": "R2X1",
    "WeakSeed": "R2X4"
  },
  {
    "Season": 2026,
    "Slot": "R3X2",
    "StrongSeed": "R2X2",
    "WeakSeed": "R2X3"
  },
  {
    "Season": 2026,
    "Slot": "R3Y1",
    "StrongSeed": "R2Y1",
    "WeakSeed": "R2Y4"
  },
  {
    "Season": 2026,
    "Slot": "R3Y2",
    "StrongSeed": "R2Y2",
    "WeakSeed": "R2Y3"
  },
  {
    "Season": 2026,
    "Slot": "R3Z1",
    "StrongSeed": "R2Z1",
    "WeakSeed": "R2Z4"
  },
  {
    "Season": 2026,
    "Slot": "R3Z2",
    "StrongSeed": "R2Z2",
    "WeakSeed": "R2Z3"
  },
  {
    "Season": 2026,
    "Slot": "R4W1",
    "StrongSeed": "R3W1",
    "WeakSeed": "R3W2"
  },
  {
    "Season": 2026,
    "Slot": "R4X1",
    "StrongSeed": "R3X1",
    "WeakSeed": "R3X2"
  },
  {
    "Season": 2026,
    "Slot": "R4Y1",
    "StrongSeed": "R3Y1",
    "WeakSeed": "R3Y2"
  },
  {
    "Season": 2026,
    "Slot": "R4Z1",
    "StrongSeed": "R3Z1",
    "WeakSeed": "R3Z2"
  },
  {
    "Season": 2026,
    "Slot": "R5WX",
    "StrongSeed": "R4W1",
    "WeakSeed": "R4X1"
  },
  {
    "Season": 2026,
    "Slot": "R5YZ",
    "StrongSeed": "R4Y1",
    "WeakSeed": "R4Z1"
  },
  {
    "Season": 2026,
    "Slot": "R6CH",
    "StrongSeed": "R5WX",
    "WeakSeed": "R5YZ"
  },
  {
    "Season": 2026,
    "Slot": "X16",
    "StrongSeed": "X16a",
    "WeakSeed": "X16b"
  },
  {
    "Season": 2026,
    "Slot": "Y11",
    "StrongSeed": "Y11a",
    "WeakSeed": "Y11b"
  },
  {
    "Season": 2026,
    "Slot": "Y16",
    "StrongSeed": "Y16a",
    "WeakSeed": "Y16b"
  },
  {
    "Season": 2026,
    "Slot": "Z11",
    "StrongSeed": "Z11a",
    "WeakSeed": "Z11b"
  }
];

export const BRACKET_SLOTS_WOMEN: BracketSlotRow[] = [
  {
    "Season": 2026,
    "Slot": "R1W1",
    "StrongSeed": "W01",
    "WeakSeed": "W16"
  },
  {
    "Season": 2026,
    "Slot": "R1W2",
    "StrongSeed": "W02",
    "WeakSeed": "W15"
  },
  {
    "Season": 2026,
    "Slot": "R1W3",
    "StrongSeed": "W03",
    "WeakSeed": "W14"
  },
  {
    "Season": 2026,
    "Slot": "R1W4",
    "StrongSeed": "W04",
    "WeakSeed": "W13"
  },
  {
    "Season": 2026,
    "Slot": "R1W5",
    "StrongSeed": "W05",
    "WeakSeed": "W12"
  },
  {
    "Season": 2026,
    "Slot": "R1W6",
    "StrongSeed": "W06",
    "WeakSeed": "W11"
  },
  {
    "Season": 2026,
    "Slot": "R1W7",
    "StrongSeed": "W07",
    "WeakSeed": "W10"
  },
  {
    "Season": 2026,
    "Slot": "R1W8",
    "StrongSeed": "W08",
    "WeakSeed": "W09"
  },
  {
    "Season": 2026,
    "Slot": "R1X1",
    "StrongSeed": "X01",
    "WeakSeed": "X16"
  },
  {
    "Season": 2026,
    "Slot": "R1X2",
    "StrongSeed": "X02",
    "WeakSeed": "X15"
  },
  {
    "Season": 2026,
    "Slot": "R1X3",
    "StrongSeed": "X03",
    "WeakSeed": "X14"
  },
  {
    "Season": 2026,
    "Slot": "R1X4",
    "StrongSeed": "X04",
    "WeakSeed": "X13"
  },
  {
    "Season": 2026,
    "Slot": "R1X5",
    "StrongSeed": "X05",
    "WeakSeed": "X12"
  },
  {
    "Season": 2026,
    "Slot": "R1X6",
    "StrongSeed": "X06",
    "WeakSeed": "X11"
  },
  {
    "Season": 2026,
    "Slot": "R1X7",
    "StrongSeed": "X07",
    "WeakSeed": "X10"
  },
  {
    "Season": 2026,
    "Slot": "R1X8",
    "StrongSeed": "X08",
    "WeakSeed": "X09"
  },
  {
    "Season": 2026,
    "Slot": "R1Y1",
    "StrongSeed": "Y01",
    "WeakSeed": "Y16"
  },
  {
    "Season": 2026,
    "Slot": "R1Y2",
    "StrongSeed": "Y02",
    "WeakSeed": "Y15"
  },
  {
    "Season": 2026,
    "Slot": "R1Y3",
    "StrongSeed": "Y03",
    "WeakSeed": "Y14"
  },
  {
    "Season": 2026,
    "Slot": "R1Y4",
    "StrongSeed": "Y04",
    "WeakSeed": "Y13"
  },
  {
    "Season": 2026,
    "Slot": "R1Y5",
    "StrongSeed": "Y05",
    "WeakSeed": "Y12"
  },
  {
    "Season": 2026,
    "Slot": "R1Y6",
    "StrongSeed": "Y06",
    "WeakSeed": "Y11"
  },
  {
    "Season": 2026,
    "Slot": "R1Y7",
    "StrongSeed": "Y07",
    "WeakSeed": "Y10"
  },
  {
    "Season": 2026,
    "Slot": "R1Y8",
    "StrongSeed": "Y08",
    "WeakSeed": "Y09"
  },
  {
    "Season": 2026,
    "Slot": "R1Z1",
    "StrongSeed": "Z01",
    "WeakSeed": "Z16"
  },
  {
    "Season": 2026,
    "Slot": "R1Z2",
    "StrongSeed": "Z02",
    "WeakSeed": "Z15"
  },
  {
    "Season": 2026,
    "Slot": "R1Z3",
    "StrongSeed": "Z03",
    "WeakSeed": "Z14"
  },
  {
    "Season": 2026,
    "Slot": "R1Z4",
    "StrongSeed": "Z04",
    "WeakSeed": "Z13"
  },
  {
    "Season": 2026,
    "Slot": "R1Z5",
    "StrongSeed": "Z05",
    "WeakSeed": "Z12"
  },
  {
    "Season": 2026,
    "Slot": "R1Z6",
    "StrongSeed": "Z06",
    "WeakSeed": "Z11"
  },
  {
    "Season": 2026,
    "Slot": "R1Z7",
    "StrongSeed": "Z07",
    "WeakSeed": "Z10"
  },
  {
    "Season": 2026,
    "Slot": "R1Z8",
    "StrongSeed": "Z08",
    "WeakSeed": "Z09"
  },
  {
    "Season": 2026,
    "Slot": "R2W1",
    "StrongSeed": "R1W1",
    "WeakSeed": "R1W8"
  },
  {
    "Season": 2026,
    "Slot": "R2W2",
    "StrongSeed": "R1W2",
    "WeakSeed": "R1W7"
  },
  {
    "Season": 2026,
    "Slot": "R2W3",
    "StrongSeed": "R1W3",
    "WeakSeed": "R1W6"
  },
  {
    "Season": 2026,
    "Slot": "R2W4",
    "StrongSeed": "R1W4",
    "WeakSeed": "R1W5"
  },
  {
    "Season": 2026,
    "Slot": "R2X1",
    "StrongSeed": "R1X1",
    "WeakSeed": "R1X8"
  },
  {
    "Season": 2026,
    "Slot": "R2X2",
    "StrongSeed": "R1X2",
    "WeakSeed": "R1X7"
  },
  {
    "Season": 2026,
    "Slot": "R2X3",
    "StrongSeed": "R1X3",
    "WeakSeed": "R1X6"
  },
  {
    "Season": 2026,
    "Slot": "R2X4",
    "StrongSeed": "R1X4",
    "WeakSeed": "R1X5"
  },
  {
    "Season": 2026,
    "Slot": "R2Y1",
    "StrongSeed": "R1Y1",
    "WeakSeed": "R1Y8"
  },
  {
    "Season": 2026,
    "Slot": "R2Y2",
    "StrongSeed": "R1Y2",
    "WeakSeed": "R1Y7"
  },
  {
    "Season": 2026,
    "Slot": "R2Y3",
    "StrongSeed": "R1Y3",
    "WeakSeed": "R1Y6"
  },
  {
    "Season": 2026,
    "Slot": "R2Y4",
    "StrongSeed": "R1Y4",
    "WeakSeed": "R1Y5"
  },
  {
    "Season": 2026,
    "Slot": "R2Z1",
    "StrongSeed": "R1Z1",
    "WeakSeed": "R1Z8"
  },
  {
    "Season": 2026,
    "Slot": "R2Z2",
    "StrongSeed": "R1Z2",
    "WeakSeed": "R1Z7"
  },
  {
    "Season": 2026,
    "Slot": "R2Z3",
    "StrongSeed": "R1Z3",
    "WeakSeed": "R1Z6"
  },
  {
    "Season": 2026,
    "Slot": "R2Z4",
    "StrongSeed": "R1Z4",
    "WeakSeed": "R1Z5"
  },
  {
    "Season": 2026,
    "Slot": "R3W1",
    "StrongSeed": "R2W1",
    "WeakSeed": "R2W4"
  },
  {
    "Season": 2026,
    "Slot": "R3W2",
    "StrongSeed": "R2W2",
    "WeakSeed": "R2W3"
  },
  {
    "Season": 2026,
    "Slot": "R3X1",
    "StrongSeed": "R2X1",
    "WeakSeed": "R2X4"
  },
  {
    "Season": 2026,
    "Slot": "R3X2",
    "StrongSeed": "R2X2",
    "WeakSeed": "R2X3"
  },
  {
    "Season": 2026,
    "Slot": "R3Y1",
    "StrongSeed": "R2Y1",
    "WeakSeed": "R2Y4"
  },
  {
    "Season": 2026,
    "Slot": "R3Y2",
    "StrongSeed": "R2Y2",
    "WeakSeed": "R2Y3"
  },
  {
    "Season": 2026,
    "Slot": "R3Z1",
    "StrongSeed": "R2Z1",
    "WeakSeed": "R2Z4"
  },
  {
    "Season": 2026,
    "Slot": "R3Z2",
    "StrongSeed": "R2Z2",
    "WeakSeed": "R2Z3"
  },
  {
    "Season": 2026,
    "Slot": "R4W1",
    "StrongSeed": "R3W1",
    "WeakSeed": "R3W2"
  },
  {
    "Season": 2026,
    "Slot": "R4X1",
    "StrongSeed": "R3X1",
    "WeakSeed": "R3X2"
  },
  {
    "Season": 2026,
    "Slot": "R4Y1",
    "StrongSeed": "R3Y1",
    "WeakSeed": "R3Y2"
  },
  {
    "Season": 2026,
    "Slot": "R4Z1",
    "StrongSeed": "R3Z1",
    "WeakSeed": "R3Z2"
  },
  {
    "Season": 2026,
    "Slot": "R5WX",
    "StrongSeed": "R4W1",
    "WeakSeed": "R4X1"
  },
  {
    "Season": 2026,
    "Slot": "R5YZ",
    "StrongSeed": "R4Y1",
    "WeakSeed": "R4Z1"
  },
  {
    "Season": 2026,
    "Slot": "R6CH",
    "StrongSeed": "R5WX",
    "WeakSeed": "R5YZ"
  },
  {
    "Season": 2026,
    "Slot": "X10",
    "StrongSeed": "X10a",
    "WeakSeed": "X10b"
  },
  {
    "Season": 2026,
    "Slot": "X16",
    "StrongSeed": "X16a",
    "WeakSeed": "X16b"
  },
  {
    "Season": 2026,
    "Slot": "Y16",
    "StrongSeed": "Y16a",
    "WeakSeed": "Y16b"
  },
  {
    "Season": 2026,
    "Slot": "Z11",
    "StrongSeed": "Z11a",
    "WeakSeed": "Z11b"
  }
];

export const ROUND_LABELS: Record<string,string> = {
  PlayIn: "Play-In",
  R1: "Round of 64",
  R2: "Round of 32",
  R3: "Sweet 16",
  R4: "Elite 8",
  R5: "Final Four",
  R6: "Championship",
};

export const REGION_LABELS: Record<string,string> = {
  W: "Region W",
  X: "Region X",
  Y: "Region Y",
  Z: "Region Z",
};
