const squads = {
  psg: {
    short: "PSG",
    name: "Paris Saint-Germain",
    color: "#315bdc",
    source: "https://www.uefa.com/uefachampionsleague/clubs/52747--paris-sg/squad/",
    players: [
      p(30, "Lucas Chevalier", "GK", 87), p(39, "Matvei Safonov", "GK", 82), p(89, "Renato Marin", "GK", 74),
      p(2, "Achraf Hakimi", "DF", 90), p(4, "Lucas Beraldo", "DF", 81), p(5, "Marquinhos", "DF", 88),
      p(6, "Illia Zabarnyi", "DF", 84), p(21, "Lucas Hernández", "DF", 84), p(25, "Nuno Mendes", "DF", 89),
      p(42, "David Boly", "DF", 70), p(51, "Willian Pacho", "DF", 86),
      p(8, "Fabián Ruiz", "MF", 86), p(17, "Vitinha", "MF", 90), p(19, "Lee Kang-in", "MF", 84),
      p(24, "Senny Mayulu", "MF", 78), p(27, "Dro Fernández", "MF", 72), p(33, "Warren Zaïre-Emery", "MF", 86), p(87, "João Neves", "MF", 88),
      p(7, "Khvicha Kvaratskhelia", "FW", 90), p(9, "Gonçalo Ramos", "FW", 84), p(10, "Ousmane Dembélé", "FW", 91),
      p(14, "Désiré Doué", "FW", 86), p(29, "Bradley Barcola", "FW", 87), p(47, "Quentin Ndjantou", "FW", 72), p(49, "Ibrahim Mbaye", "FW", 74)
    ]
  },
  arsenal: {
    short: "ARS",
    name: "Arsenal",
    color: "#dc2f3d",
    source: "https://www.uefa.com/uefachampionsleague/clubs/52280--arsenal/squad/",
    players: [
      p(1, "David Raya", "GK", 89), p(13, "Kepa Arrizabalaga", "GK", 81), p(35, "Tommy Setford", "GK", 72),
      p(2, "William Saliba", "DF", 91), p(3, "Cristhian Mosquera", "DF", 82), p(4, "Ben White", "DF", 84),
      p(5, "Piero Hincapié", "DF", 85), p(6, "Gabriel", "DF", 89), p(12, "Jurriën Timber", "DF", 86),
      p(33, "Riccardo Calafiori", "DF", 84), p(49, "Myles Lewis-Skelly", "DF", 80),
      p(8, "Martin Ødegaard", "MF", 90), p(10, "Eberechi Eze", "MF", 87), p(16, "Christian Nørgaard", "MF", 80),
      p(19, "Leandro Trossard", "MF", 84), p(20, "Noni Madueke", "MF", 84), p(23, "Mikel Merino", "MF", 86),
      p(29, "Kai Havertz", "MF", 87), p(36, "Martin Zubimendi", "MF", 87), p(41, "Declan Rice", "MF", 90),
      p(7, "Bukayo Saka", "FW", 91), p(9, "Gabriel Jesus", "FW", 84), p(11, "Gabriel Martinelli", "FW", 86),
      p(14, "Viktor Gyökeres", "FW", 89)
    ]
  }
};

const formationShapes = {
  "4-3-3": ["GK", "DF", "DF", "DF", "DF", "MF", "MF", "MF", "FW", "FW", "FW"],
  "4-2-3-1": ["GK", "DF", "DF", "DF", "DF", "MF", "MF", "MF", "MF", "FW", "FW"],
  "3-4-3": ["GK", "DF", "DF", "DF", "MF", "MF", "MF", "MF", "FW", "FW", "FW"],
  "4-4-2": ["GK", "DF", "DF", "DF", "DF", "MF", "MF", "MF", "MF", "FW", "FW"],
  "3-5-2": ["GK", "DF", "DF", "DF", "MF", "MF", "MF", "MF", "MF", "FW", "FW"]
};

const tacticMeta = {
  balanced: { label: "均衡控场", attack: 0.98, defense: 1.0, tempo: 0.95 },
  press: { label: "高位压迫", attack: 1.09, defense: 0.93, tempo: 1.18 },
  possession: { label: "耐心控球", attack: 0.96, defense: 1.08, tempo: 0.84 },
  counter: { label: "中低位反击", attack: 1.02, defense: 1.04, tempo: 0.92 },
  direct: { label: "快速纵深", attack: 1.12, defense: 0.9, tempo: 1.12 },
  protect: { label: "收缩保胜", attack: 0.78, defense: 1.2, tempo: 0.72 },
  allout: { label: "最后猛攻", attack: 1.24, defense: 0.75, tempo: 1.28 }
};

const state = {
  managed: "psg",
  selected: new Set(),
  formation: "4-3-3",
  tactic: "balanced",
  started: false,
  minute: 0,
  score: { psg: 0, arsenal: 0 },
  subsUsed: 0,
  finished: false,
  lineups: {},
  bench: {},
  currentTactics: {},
  eventCount: 0
};

const els = {
  rosterList: document.querySelector("#rosterList"),
  pitch: document.querySelector("#pitch"),
  managedTeamTitle: document.querySelector("#managedTeamTitle"),
  formationLabel: document.querySelector("#formationLabel"),
  lineupCount: document.querySelector("#lineupCount"),
  keeperStatus: document.querySelector("#keeperStatus"),
  startBtn: document.querySelector("#startBtn"),
  autoPickBtn: document.querySelector("#autoPickBtn"),
  clearPickBtn: document.querySelector("#clearPickBtn"),
  formationSelect: document.querySelector("#formationSelect"),
  tacticSelect: document.querySelector("#tacticSelect"),
  liveTacticSelect: document.querySelector("#liveTacticSelect"),
  simulateBtn: document.querySelector("#simulateBtn"),
  subOutSelect: document.querySelector("#subOutSelect"),
  subInSelect: document.querySelector("#subInSelect"),
  subBtn: document.querySelector("#subBtn"),
  eventLog: document.querySelector("#eventLog"),
  psgScore: document.querySelector("#psgScore"),
  arsScore: document.querySelector("#arsScore"),
  clockLabel: document.querySelector("#clockLabel"),
  subCount: document.querySelector("#subCount"),
  momentumBar: document.querySelector("#momentumBar"),
  momentumLabel: document.querySelector("#momentumLabel"),
  phaseLabel: document.querySelector("#phaseLabel"),
  stageLabel: document.querySelector("#stageLabel")
};

function p(number, name, pos, rating) {
  return { id: `${number}-${name}`, number, name, pos, rating, energy: 100 };
}

function byQuality(a, b) {
  const order = { GK: 0, DF: 1, MF: 2, FW: 3 };
  return order[a.pos] - order[b.pos] || b.rating - a.rating;
}

function getManagedSquad() {
  return squads[state.managed];
}

function getOpponentKey() {
  return state.managed === "psg" ? "arsenal" : "psg";
}

function renderRoster() {
  const squad = getManagedSquad();
  els.rosterList.innerHTML = "";
  ["GK", "DF", "MF", "FW"].forEach((pos) => {
    const heading = document.createElement("div");
    heading.className = "group-heading";
    heading.textContent = posLabel(pos);
    els.rosterList.appendChild(heading);
    squad.players.filter((player) => player.pos === pos).sort(byQuality).forEach((player) => {
      const row = document.createElement("label");
      row.className = "player-row";
      row.innerHTML = `
        <input type="checkbox" value="${player.id}" ${state.selected.has(player.id) ? "checked" : ""} ${state.started ? "disabled" : ""}>
        <span class="num">${player.number}</span>
        <span><strong>${player.name}</strong><small>${posLabel(player.pos)}</small></span>
        <span class="rating">${player.rating}</span>
      `;
      row.querySelector("input").addEventListener("change", (event) => togglePlayer(player.id, event.target.checked));
      els.rosterList.appendChild(row);
    });
  });
}

function renderPitch() {
  const squad = getManagedSquad();
  const selectedPlayers = state.started
    ? [...state.lineups[state.managed]]
    : squad.players.filter((player) => state.selected.has(player.id)).sort(byQuality);
  els.pitch.innerHTML = "";
  els.managedTeamTitle.textContent = `${squad.short} 首发`;
  els.formationLabel.textContent = state.formation;

  const slots = layoutSlots(state.formation);
  selectedPlayers.slice(0, 11).forEach((player, index) => {
    const slot = slots[index] || { x: 50, y: 50 };
    const shirt = document.createElement("div");
    shirt.className = "shirt";
    shirt.style.left = `${slot.x}%`;
    shirt.style.top = `${slot.y}%`;
    shirt.style.borderColor = squad.color;
    shirt.innerHTML = `<strong>${player.number}</strong><span>${player.name}</span>`;
    els.pitch.appendChild(shirt);
  });
}

function renderStatus() {
  const squad = getManagedSquad();
  const selectedPlayers = squad.players.filter((player) => state.selected.has(player.id));
  const keepers = selectedPlayers.filter((player) => player.pos === "GK").length;
  const valid = selectedPlayers.length === 11 && keepers === 1;
  els.lineupCount.textContent = `${selectedPlayers.length}/11 首发`;
  els.keeperStatus.textContent = keepers === 1 ? "门将 OK" : "需要 1 名门将";
  els.startBtn.disabled = !valid || state.started;
  els.stageLabel.textContent = state.started ? "比赛中" : valid ? "可以开球" : "选择首发";
}

function togglePlayer(id, checked) {
  if (checked) {
    if (state.selected.size >= 11) return renderAll();
    state.selected.add(id);
  } else {
    state.selected.delete(id);
  }
  renderAll();
}

function autoPick(teamKey = state.managed, formation = state.formation) {
  const squad = squads[teamKey];
  const needed = formationShapes[formation];
  const picked = [];
  needed.forEach((pos) => {
    const candidate = squad.players
      .filter((player) => player.pos === pos && !picked.includes(player))
      .sort((a, b) => b.rating - a.rating)[0];
    if (candidate) picked.push(candidate);
  });
  if (picked.length < 11) {
    squad.players
      .filter((player) => !picked.includes(player))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 11 - picked.length)
      .forEach((player) => picked.push(player));
  }
  return picked;
}

function startMatch() {
  const managedPlayers = getManagedSquad().players.filter((player) => state.selected.has(player.id));
  const opponentKey = getOpponentKey();
  state.lineups[state.managed] = clonePlayers(managedPlayers);
  state.lineups[opponentKey] = clonePlayers(autoPick(opponentKey, opponentKey === "psg" ? "4-3-3" : "4-2-3-1"));
  state.bench[state.managed] = clonePlayers(getManagedSquad().players.filter((player) => !state.selected.has(player.id)));
  state.bench[opponentKey] = clonePlayers(squads[opponentKey].players.filter((player) => !state.lineups[opponentKey].some((starter) => starter.id === player.id)));
  state.currentTactics[state.managed] = state.tactic;
  state.currentTactics[opponentKey] = opponentKey === "psg" ? "press" : "balanced";
  state.started = true;
  els.liveTacticSelect.value = state.tactic;
  els.liveTacticSelect.disabled = false;
  els.simulateBtn.disabled = false;
  els.subOutSelect.disabled = false;
  els.subInSelect.disabled = false;
  els.subBtn.disabled = false;
  addEvent("0'", `开球。你执教 ${getManagedSquad().name}，阵型 ${state.formation}，战术 ${tacticMeta[state.tactic].label}。`);
  renderAll();
  updateSubSelectors();
}

function simulateSegment() {
  if (!state.started) return;
  const nextMinute = nextClock();
  const from = state.minute;
  const to = nextMinute;
  state.minute = to;

  applyFatigue(to - from);
  maybeOpponentSub();
  const report = simulateChances(from, to);
  report.events.forEach((event) => addEvent(`${event.minute}'`, event.text));
  if (report.events.length === 0) addEvent(`${to}'`, "双方在中场反复拉扯，没有形成绝对机会。");

  updateScore();
  updateMomentum(report.momentum);
  const finished = handlePhaseEnd();
  if (finished) {
    state.finished = true;
    els.simulateBtn.disabled = true;
    els.subBtn.disabled = true;
    els.phaseLabel.textContent = "全场结束";
  }
  renderAll();
  updateSubSelectors();
}

function simulateChances(from, to) {
  const keys = ["psg", "arsenal"];
  const strength = Object.fromEntries(keys.map((key) => [key, teamStrength(key)]));
  const events = [];
  let momentum = 50 + (strength.psg.total - strength.arsenal.total) * 1.3;
  const pressure = Math.max(1, Math.round((to - from) / 5));

  for (let i = 0; i < pressure; i += 1) {
    keys.forEach((teamKey) => {
      const oppKey = teamKey === "psg" ? "arsenal" : "psg";
      const base = 0.11 + (strength[teamKey].attack - strength[oppKey].defense) / 650;
      const gameStateBoost = state.score[teamKey] < state.score[oppKey] ? 0.03 : 0;
      if (Math.random() < clamp(base + gameStateBoost, 0.04, 0.24)) {
        const minute = Math.min(to, from + 1 + Math.floor(Math.random() * Math.max(1, to - from)));
        const shooter = pickAttacker(teamKey);
        const goalChance = clamp(0.22 + (strength[teamKey].attack - strength[oppKey].defense) / 300, 0.12, 0.42);
        if (Math.random() < goalChance) {
          state.score[teamKey] += 1;
          events.push({ minute, text: `${squads[teamKey].short} 进球！${shooter.name} 在 ${tacticMeta[state.currentTactics[teamKey]].label}中抓住机会。` });
        } else {
          events.push({ minute, text: `${squads[teamKey].short} 威胁射门，${shooter.name} 差一点改写比分。` });
        }
      }
    });
  }
  momentum = clamp(momentum + (state.score.psg - state.score.arsenal) * 8 + Math.random() * 16 - 8, 5, 95);
  return { events: events.sort((a, b) => a.minute - b.minute), momentum };
}

function teamStrength(teamKey) {
  const lineup = state.lineups[teamKey];
  const tactic = tacticMeta[state.currentTactics[teamKey]];
  const attackPlayers = lineup.filter((player) => player.pos === "FW" || player.pos === "MF");
  const defensePlayers = lineup.filter((player) => player.pos === "DF" || player.pos === "GK" || player.pos === "MF");
  const energy = lineup.reduce((sum, player) => sum + player.energy, 0) / lineup.length / 100;
  const attack = avg(attackPlayers) * tactic.attack * energy;
  const defense = avg(defensePlayers) * tactic.defense * energy;
  const tempo = tactic.tempo;
  return { attack: attack * tempo, defense, total: (attack + defense) / 2 };
}

function makeSubstitution() {
  if (state.subsUsed >= 5) return;
  const outId = els.subOutSelect.value;
  const inId = els.subInSelect.value;
  const lineup = state.lineups[state.managed];
  const bench = state.bench[state.managed];
  const outIndex = lineup.findIndex((player) => player.id === outId);
  const inIndex = bench.findIndex((player) => player.id === inId);
  if (outIndex < 0 || inIndex < 0) return;
  const outgoing = lineup[outIndex];
  const incoming = { ...bench[inIndex], energy: 100 };
  lineup[outIndex] = incoming;
  bench.splice(inIndex, 1, outgoing);
  state.subsUsed += 1;
  addEvent(`${state.minute}'`, `换人：${incoming.name} 替下 ${outgoing.name}。剩余换人名额 ${5 - state.subsUsed}。`);
  renderAll();
  updateSubSelectors();
}

function updateSubSelectors() {
  const lineup = state.lineups[state.managed] || [];
  const bench = state.bench[state.managed] || [];
  els.subOutSelect.innerHTML = lineup.map((player) => `<option value="${player.id}">${player.number} ${player.name} (${player.energy}%)</option>`).join("");
  els.subInSelect.innerHTML = bench.map((player) => `<option value="${player.id}">${player.number} ${player.name} ${posLabel(player.pos)}</option>`).join("");
  const canSub = state.started && state.subsUsed < 5 && bench.length > 0;
  els.subOutSelect.disabled = !canSub;
  els.subInSelect.disabled = !canSub;
  els.subBtn.disabled = !canSub;
  els.subCount.textContent = `换人 ${state.subsUsed}/5`;
}

function maybeOpponentSub() {
  const opponent = getOpponentKey();
  if (!state.lineups[opponent] || state.minute < 45 || Math.random() > 0.35) return;
  const tired = [...state.lineups[opponent]].sort((a, b) => a.energy - b.energy)[0];
  const replacement = state.bench[opponent].filter((player) => player.pos === tired.pos).sort((a, b) => b.rating - a.rating)[0];
  if (!replacement) return;
  const outIndex = state.lineups[opponent].findIndex((player) => player.id === tired.id);
  const inIndex = state.bench[opponent].findIndex((player) => player.id === replacement.id);
  state.lineups[opponent][outIndex] = { ...replacement, energy: 100 };
  state.bench[opponent].splice(inIndex, 1, tired);
  addEvent(`${state.minute}'`, `${squads[opponent].short} 调整人员：${replacement.name} 登场。`);
}

function handlePhaseEnd() {
  if (state.minute === 90 && state.score.psg === state.score.arsenal) {
    addEvent("90'", "90 分钟战平，进入加时赛。");
    els.phaseLabel.textContent = "加时赛";
    return false;
  }
  if (state.minute === 90) {
    addEvent("FT", winnerText());
    return true;
  }
  if (state.minute === 120 && state.score.psg === state.score.arsenal) {
    runPenalties();
    return true;
  }
  if (state.minute === 120) {
    addEvent("AET", winnerText());
    return true;
  }
  return false;
}

function runPenalties() {
  const psg = penaltyScore("psg");
  const arsenal = penaltyScore("arsenal");
  let left = psg;
  let right = arsenal;
  while (left === right) {
    left += Math.random() < 0.75 ? 1 : 0;
    right += Math.random() < 0.75 ? 1 : 0;
  }
  const winner = left > right ? "PSG" : "Arsenal";
  addEvent("点球", `点球大战 ${left}-${right}，${winner} 捧杯。`);
}

function nextClock() {
  if (state.minute < 90) return Math.min(90, state.minute + 15);
  if (state.score.psg === state.score.arsenal && state.minute < 120) return Math.min(120, state.minute + 15);
  return state.minute;
}

function applyFatigue(minutes) {
  Object.values(state.lineups).flat().forEach((player) => {
    player.energy = Math.max(52, player.energy - Math.round(minutes * (0.55 + Math.random() * 0.4)));
  });
}

function pickAttacker(teamKey) {
  const pool = state.lineups[teamKey].filter((player) => player.pos === "FW" || player.pos === "MF");
  const weighted = pool.flatMap((player) => Array(Math.max(1, Math.round(player.rating / 10))).fill(player));
  return weighted[Math.floor(Math.random() * weighted.length)];
}

function penaltyScore(teamKey) {
  const calm = avg(state.lineups[teamKey].sort((a, b) => b.rating - a.rating).slice(0, 5));
  return Array.from({ length: 5 }).filter(() => Math.random() < clamp(0.67 + (calm - 82) / 100, 0.62, 0.84)).length;
}

function updateScore() {
  els.psgScore.textContent = state.score.psg;
  els.arsScore.textContent = state.score.arsenal;
  els.clockLabel.textContent = state.minute ? `${state.minute}'` : "赛前";
  if (state.finished) {
    els.phaseLabel.textContent = "全场结束";
  } else if (!state.started) {
    els.phaseLabel.textContent = "等待开球";
  } else {
    els.phaseLabel.textContent = state.minute >= 90 && state.score.psg === state.score.arsenal ? "加时赛" : "比赛中";
  }
}

function updateMomentum(value = 50) {
  els.momentumBar.style.width = `${value}%`;
  els.momentumLabel.textContent = value > 58 ? "PSG 占优" : value < 42 ? "Arsenal 占优" : "均势";
}

function addEvent(time, text) {
  state.eventCount += 1;
  const item = document.createElement("li");
  item.innerHTML = `<strong>${time}</strong> ${text}`;
  els.eventLog.prepend(item);
}

function winnerText() {
  const winner = state.score.psg > state.score.arsenal ? "Paris Saint-Germain" : "Arsenal";
  return `${winner} ${state.score.psg}-${state.score.arsenal} 赢下这场虚构的欧冠决赛。`;
}

function layoutSlots(formation) {
  const rows = {
    "4-3-3": [[50], [20, 40, 60, 80], [30, 50, 70], [25, 50, 75]],
    "4-2-3-1": [[50], [20, 40, 60, 80], [38, 62], [25, 50, 75], [50]],
    "3-4-3": [[50], [30, 50, 70], [20, 40, 60, 80], [25, 50, 75]],
    "4-4-2": [[50], [20, 40, 60, 80], [20, 40, 60, 80], [40, 60]],
    "3-5-2": [[50], [30, 50, 70], [15, 32, 50, 68, 85], [40, 60]]
  }[formation];
  const yRows = rows.length === 5 ? [88, 68, 50, 32, 14] : [88, 64, 42, 18];
  return rows.flatMap((row, rowIndex) => row.map((x) => ({ x, y: yRows[rowIndex] })));
}

function clonePlayers(players) {
  return players.map((player) => ({ ...player, energy: 100 }));
}

function avg(players) {
  return players.reduce((sum, player) => sum + player.rating * (player.energy || 100) / 100, 0) / Math.max(1, players.length);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function posLabel(pos) {
  return ({ GK: "门将", DF: "后卫", MF: "中场", FW: "前锋" })[pos];
}

function renderAll() {
  renderRoster();
  renderPitch();
  renderStatus();
  updateScore();
}

document.querySelectorAll(".team-card").forEach((button) => {
  button.addEventListener("click", () => {
    if (state.started) return;
    document.querySelectorAll(".team-card").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.managed = button.dataset.team;
    state.selected.clear();
    state.selected = new Set(autoPick().map((player) => player.id));
    renderAll();
  });
});

els.formationSelect.addEventListener("change", (event) => {
  state.formation = event.target.value;
  renderAll();
});
els.tacticSelect.addEventListener("change", (event) => {
  state.tactic = event.target.value;
});
els.liveTacticSelect.addEventListener("change", (event) => {
  state.currentTactics[state.managed] = event.target.value;
  addEvent(`${state.minute}'`, `战术调整为 ${tacticMeta[event.target.value].label}。`);
});
els.autoPickBtn.addEventListener("click", () => {
  if (state.started) return;
  state.selected = new Set(autoPick().map((player) => player.id));
  renderAll();
});
els.clearPickBtn.addEventListener("click", () => {
  if (state.started) return;
  state.selected.clear();
  renderAll();
});
els.startBtn.addEventListener("click", startMatch);
els.simulateBtn.addEventListener("click", simulateSegment);
els.subBtn.addEventListener("click", makeSubstitution);

state.selected = new Set(autoPick().map((player) => player.id));
renderAll();
