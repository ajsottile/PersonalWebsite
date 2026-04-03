export interface PitchSpinData {
  id: string;
  name: string;
  shortName: string;
  color: string;
  spinRate: number;
  velocity: number;
  spinEfficiency: number;
  ivb: number;
  hb: number;
  spinAxis: number;
  gyroAngle: number;
}

export const PITCH_SPIN_DATA: PitchSpinData[] = [
  {
    id: "sinker",
    name: "Sinker",
    shortName: "Sinker",
    color: "#D4775B",
    spinRate: 2236.7,
    velocity: 98.1,
    spinEfficiency: 86.0,
    ivb: 11.8,
    hb: 2.9,
    spinAxis: 235.3,
    gyroAngle: 28.8,
  },
  {
    id: "slider",
    name: "Slider",
    shortName: "Slider",
    color: "#C9B600",
    spinRate: 1958.7,
    velocity: 85.5,
    spinEfficiency: 83.6,
    ivb: 1.6,
    hb: -0.6,
    spinAxis: 134.1,
    gyroAngle: 28.7,
  },
  {
    id: "changeup",
    name: "Changeup",
    shortName: "Change",
    color: "#2A8C91",
    spinRate: 1357.2,
    velocity: 86.5,
    spinEfficiency: 85.7,
    ivb: -7.6,
    hb: -12.2,
    spinAxis: 233.7,
    gyroAngle: 31.6,
  },
  {
    id: "four-seam",
    name: "Four-Seam Fastball",
    shortName: "4-Seam",
    color: "#A3482C",
    spinRate: 2166.5,
    velocity: 90.3,
    spinEfficiency: 89.9,
    ivb: 9.7,
    hb: -4.6,
    spinAxis: 203.1,
    gyroAngle: 42.8,
  },
  {
    id: "curveball",
    name: "Curveball",
    shortName: "Curve",
    color: "#7A4B5A",
    spinRate: 2042.3,
    velocity: 75.8,
    spinEfficiency: 74.5,
    ivb: -2.0,
    hb: -0.3,
    spinAxis: 14.4,
    gyroAngle: 8.4,
  },
];
