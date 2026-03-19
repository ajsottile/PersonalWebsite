"use client";

import { useState } from "react";
import MarchMadnessHero from "./Hero";
import ChampionshipOdds from "./ChampionshipOdds";
import BracketSimulator from "./BracketSimulator";
import GameExplorer from "./GameExplorer";
import TeamDrillDown from "./TeamDrillDown";
import ModelPerformance from "./ModelPerformance";

export default function MarchMadnessDashboard() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const handleTeamSelect = (teamName: string) => {
    setSelectedTeam(teamName);
    const el = document.getElementById("team-drilldown");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main>
      <MarchMadnessHero />
      <ChampionshipOdds selectedTeam={selectedTeam} onSelectTeam={handleTeamSelect} />
      <BracketSimulator />
      <GameExplorer />
      <TeamDrillDown selectedTeam={selectedTeam} />
      <ModelPerformance />
    </main>
  );
}
