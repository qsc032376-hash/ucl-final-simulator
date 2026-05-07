const clubProfiles = [
  club("Manchester City", "Premier League", 1290, 260, 1250, "https://www.transfermarkt.com/manchester-city/kader/verein/281", [
  player("Gianluigi Donnarumma", "GK", 27, "Manchester City", "Italy", 92, 70, 240, "Key Player"),
  player("James Trafford", "GK", 23, "Manchester City", "England", 80, 28, 85, "Rotation"),
  player("Ruben Dias", "CB", 29, "Manchester City", "Portugal", 89, 70, 220, "Key Player"),
  player("Josko Gvardiol", "CB", 24, "Manchester City", "Croatia", 88, 82, 210, "Key Player"),
  player("John Stones", "CB", 32, "Manchester City", "England", 84, 32, 180, "Important"),
  player("Nathan Ake", "CB", 31, "Manchester City", "Netherlands", 83, 30, 160, "Rotation"),
  player("Marc Guehi", "CB", 25, "Manchester City", "England", 86, 58, 165, "Important"),
  player("Rayan Ait-Nouri", "FB", 25, "Manchester City", "Algeria", 84, 46, 135, "Important"),
  player("Rico Lewis", "FB", 21, "Manchester City", "England", 82, 48, 90, "Rotation"),
  player("Abdukodir Khusanov", "CB", 22, "Manchester City", "Uzbekistan", 82, 42, 95, "Rotation"),
  player("Rodri", "DM", 30, "Manchester City", "Spain", 94, 100, 350, "Key Player"),
  player("Tijjani Reijnders", "CM", 27, "Manchester City", "Netherlands", 87, 66, 180, "Important"),
  player("Rayan Cherki", "AM", 22, "Manchester City", "France", 86, 72, 160, "Important"),
  player("Phil Foden", "AM", 26, "Manchester City", "England", 90, 105, 250, "Key Player"),
  player("Bernardo Silva", "CM", 31, "Manchester City", "Portugal", 87, 45, 230, "Important"),
  player("Nico Gonzalez", "DM", 24, "Manchester City", "Spain", 83, 38, 120, "Rotation"),
  player("Jeremy Doku", "WG", 24, "Manchester City", "Belgium", 86, 62, 170, "Important"),
  player("Savinho", "WG", 22, "Manchester City", "Brazil", 85, 60, 135, "Important"),
  player("Omar Marmoush", "ST", 27, "Manchester City", "Egypt", 85, 55, 170, "Important"),
  player("Erling Haaland", "ST", 25, "Manchester City", "Norway", 95, 180, 425, "Key Player"),
  player("Antoine Semenyo", "WG", 26, "Manchester City", "Ghana", 84, 48, 135, "Rotation")
  ]),
  club("Real Madrid", "La Liga", 1380, 235, 1180, "https://www.transfermarkt.com/real-madrid/kader/verein/418"),
  club("Arsenal", "Premier League", 1270, 210, 1050, "https://www.transfermarkt.com/arsenal-fc/kader/verein/11"),
  club("Bayern Munich", "Bundesliga", 960, 180, 980, "https://www.transfermarkt.com/bayern-munich/kader/verein/27"),
  club("Paris Saint-Germain", "Ligue 1", 1120, 220, 1040, "https://www.transfermarkt.com/paris-saint-germain/kader/verein/583"),
  club("Liverpool", "Premier League", 1210, 190, 1080, "https://www.transfermarkt.com/fc-liverpool/kader/verein/31"),
  club("Barcelona", "La Liga", 1040, 135, 920, "https://www.transfermarkt.com/fc-barcelona/kader/verein/131"),
  club("Chelsea", "Premier League", 1030, 170, 960, "https://www.transfermarkt.com/fc-chelsea/kader/verein/631"),
  club("Manchester United", "Premier League", 870, 155, 960, "https://www.transfermarkt.com/manchester-united/kader/verein/985"),
  club("Tottenham", "Premier League", 760, 135, 760, "https://www.transfermarkt.com/tottenham-hotspur/kader/verein/148"),
  club("Inter", "Serie A", 720, 115, 720, "https://www.transfermarkt.com/inter-mailand/kader/verein/46"),
  club("Juventus", "Serie A", 650, 105, 660, "https://www.transfermarkt.com/juventus-turin/kader/verein/506"),
  club("AC Milan", "Serie A", 610, 100, 620, "https://www.transfermarkt.com/ac-mailand/kader/verein/5"),
  club("Atletico Madrid", "La Liga", 590, 95, 620, "https://www.transfermarkt.com/atletico-madrid/kader/verein/13"),
  club("Borussia Dortmund", "Bundesliga", 540, 105, 520, "https://www.transfermarkt.com/borussia-dortmund/kader/verein/16"),
  club("Bayer Leverkusen", "Bundesliga", 570, 115, 520, "https://www.transfermarkt.com/bayer-04-leverkusen/kader/verein/15"),
  club("Napoli", "Serie A", 520, 90, 500, "https://www.transfermarkt.com/ssc-neapel/kader/verein/6195"),
  club("RB Leipzig", "Bundesliga", 500, 90, 470, "https://www.transfermarkt.com/rasenballsport-leipzig/kader/verein/23826"),
  club("Newcastle", "Premier League", 610, 120, 650, "https://www.transfermarkt.com/newcastle-united/kader/verein/762"),
  club("Aston Villa", "Premier League", 585, 105, 610, "https://www.transfermarkt.com/aston-villa/kader/verein/405"),
  club("Brighton", "Premier League", 515, 95, 420, "https://www.transfermarkt.com/brighton-amp-hove-albion/kader/verein/1237"),
  club("West Ham", "Premier League", 440, 80, 430, "https://www.transfermarkt.com/west-ham-united/kader/verein/379"),
  club("Crystal Palace", "Premier League", 430, 75, 390, "https://www.transfermarkt.com/crystal-palace/kader/verein/873"),
  club("Roma", "Serie A", 360, 65, 390, "https://www.transfermarkt.com/as-rom/kader/verein/12"),
  club("Atalanta", "Serie A", 390, 70, 360, "https://www.transfermarkt.com/atalanta-bergamo/kader/verein/800"),
  club("Lazio", "Serie A", 320, 60, 330, "https://www.transfermarkt.com/lazio-rom/kader/verein/398"),
  club("Fiorentina", "Serie A", 300, 55, 290, "https://www.transfermarkt.com/ac-florenz/kader/verein/430"),
  club("Real Sociedad", "La Liga", 420, 70, 310, "https://www.transfermarkt.com/real-sociedad-san-sebastian/kader/verein/681"),
  club("Athletic Club", "La Liga", 380, 65, 300, "https://www.transfermarkt.com/athletic-bilbao/kader/verein/621"),
  club("Villarreal", "La Liga", 300, 55, 280, "https://www.transfermarkt.com/fc-villarreal/kader/verein/1050"),
  club("Sevilla", "La Liga", 240, 45, 260, "https://www.transfermarkt.com/fc-sevilla/kader/verein/368"),
  club("Valencia", "La Liga", 220, 40, 220, "https://www.transfermarkt.com/fc-valencia/kader/verein/1049"),
  club("Benfica", "Liga Portugal", 390, 80, 300, "https://www.transfermarkt.com/benfica-lissabon/kader/verein/294"),
  club("Porto", "Liga Portugal", 300, 65, 260, "https://www.transfermarkt.com/fc-porto/kader/verein/720"),
  club("Sporting CP", "Liga Portugal", 430, 85, 300, "https://www.transfermarkt.com/sporting-lissabon/kader/verein/336"),
  club("Ajax", "Eredivisie", 260, 55, 230, "https://www.transfermarkt.com/ajax-amsterdam/kader/verein/610"),
  club("PSV", "Eredivisie", 310, 65, 240, "https://www.transfermarkt.com/psv-eindhoven/kader/verein/383"),
  club("Feyenoord", "Eredivisie", 240, 50, 210, "https://www.transfermarkt.com/feyenoord-rotterdam/kader/verein/234"),
  club("Monaco", "Ligue 1", 360, 75, 300, "https://www.transfermarkt.com/as-monaco/kader/verein/162"),
  club("Marseille", "Ligue 1", 300, 65, 330, "https://www.transfermarkt.com/olympique-marseille/kader/verein/244"),
  club("Lyon", "Ligue 1", 260, 55, 270, "https://www.transfermarkt.com/olympique-lyon/kader/verein/1041"),
  club("Lille", "Ligue 1", 240, 50, 220, "https://www.transfermarkt.com/losc-lille/kader/verein/1082"),
  club("Celtic", "Scottish Premiership", 150, 35, 150, "https://www.transfermarkt.com/celtic-glasgow/kader/verein/371"),
  club("Rangers", "Scottish Premiership", 120, 30, 140, "https://www.transfermarkt.com/glasgow-rangers/kader/verein/124"),
  club("Galatasaray", "Super Lig", 260, 60, 280, "https://www.transfermarkt.com/galatasaray-istanbul/kader/verein/141"),
  club("Fenerbahce", "Super Lig", 240, 55, 260, "https://www.transfermarkt.com/fenerbahce-istanbul/kader/verein/36")
];

let activeClub = clubProfiles[0];
let citySquad = buildSquad(activeClub);

const marqueeTargets = [
  target("Jamal Musiala", "AM", 23, "Bayern Munich", "Germany", "Bundesliga", 93, 170, 380, "superstar", "Hermann & Co", "patient", 84),
  target("Florian Wirtz", "AM", 23, "Liverpool", "Germany", "Premier League", 92, 160, 360, "superstar", "Team Wirtz", "firm", 76),
  target("Lamine Yamal", "WG", 18, "Barcelona", "Spain", "La Liga", 92, 210, 420, "superstar", "Gestifute", "demanding", 62),
  target("Warren Zaire-Emery", "CM", 20, "Paris Saint-Germain", "France", "Ligue 1", 88, 95, 210, "starter", "CAA Base", "patient", 72),
  target("Joao Neves", "DM", 21, "Paris Saint-Germain", "Portugal", "Ligue 1", 89, 105, 220, "starter", "Gestifute", "firm", 68),
  target("Eduardo Camavinga", "CM", 23, "Real Madrid", "France", "La Liga", 89, 110, 230, "starter", "Unique Sports", "demanding", 64),
  target("Jude Bellingham", "AM", 22, "Real Madrid", "England", "La Liga", 94, 190, 430, "superstar", "Elite Project", "demanding", 55),
  target("Pau Cubarsi", "CB", 19, "Barcelona", "Spain", "La Liga", 87, 95, 180, "wonderkid", "Footfeel", "firm", 66),
  target("Antonio Silva", "CB", 22, "Benfica", "Portugal", "Liga Portugal", 86, 66, 135, "starter", "Gestifute", "patient", 78),
  target("Jorrel Hato", "CB", 20, "Ajax", "Netherlands", "Eredivisie", 84, 48, 95, "wonderkid", "SEG", "patient", 82),
  target("Milos Kerkez", "FB", 22, "Liverpool", "Hungary", "Premier League", 84, 52, 120, "starter", "ROGON", "firm", 70),
  target("Destiny Udogie", "FB", 23, "Tottenham", "Italy", "Premier League", 85, 62, 130, "starter", "CAA Base", "firm", 67),
  target("Adam Wharton", "CM", 22, "Crystal Palace", "England", "Premier League", 84, 60, 125, "starter", "Wasserman", "patient", 80),
  target("Kobbie Mainoo", "CM", 21, "Manchester United", "England", "Premier League", 84, 75, 150, "starter", "CAA Base", "demanding", 45),
  target("Benjamin Sesko", "ST", 23, "Manchester United", "Slovenia", "Premier League", 86, 78, 190, "starter", "Pro Transfer", "firm", 50),
  target("Victor Osimhen", "ST", 27, "Galatasaray", "Nigeria", "Super Lig", 88, 85, 260, "starter", "Roberto Calenda", "demanding", 72),
  target("Alexander Isak", "ST", 26, "Liverpool", "Sweden", "Premier League", 90, 135, 320, "superstar", "CAA Base", "firm", 58),
  target("Rodrygo", "WG", 25, "Real Madrid", "Brazil", "La Liga", 89, 120, 260, "superstar", "Un1que Football", "patient", 64),
  target("Nico Williams", "WG", 23, "Athletic Club", "Spain", "La Liga", 87, 72, 190, "starter", "LEADERBROCK", "firm", 78),
  target("Michael Olise", "WG", 24, "Bayern Munich", "France", "Bundesliga", 88, 95, 210, "starter", "New Era", "patient", 69),
  target("Kenan Yildiz", "AM", 21, "Juventus", "Turkey", "Serie A", 85, 70, 125, "wonderkid", "Leader Sports", "patient", 82),
  target("Geovany Quenda", "WG", 19, "Sporting CP", "Portugal", "Liga Portugal", 82, 48, 70, "wonderkid", "Gestifute", "patient", 86),
  target("Evan Ferguson", "ST", 21, "Brighton", "Ireland", "Premier League", 82, 42, 105, "value", "CAA Stellar", "patient", 84),
  target("Archie Gray", "CM", 20, "Tottenham", "England", "Premier League", 83, 55, 105, "wonderkid", "Wasserman", "firm", 70),
  target("Lucas Chevalier", "GK", 24, "Paris Saint-Germain", "France", "Ligue 1", 86, 55, 120, "starter", "Sport Cover", "firm", 61),
  target("Diogo Costa", "GK", 26, "Porto", "Portugal", "Liga Portugal", 87, 60, 135, "starter", "Gestifute", "patient", 76),
  target("Giorgi Mamardashvili", "GK", 25, "Liverpool", "Georgia", "Premier League", 86, 58, 115, "starter", "Free Football", "firm", 58),
  target("Martin Zubimendi", "DM", 27, "Arsenal", "Spain", "Premier League", 87, 75, 170, "starter", "IDUB", "patient", 54),
  target("Eberechi Eze", "AM", 28, "Arsenal", "England", "Premier League", 86, 70, 160, "rotation", "CAA Base", "firm", 52),
  target("Moises Caicedo", "DM", 24, "Chelsea", "Ecuador", "Premier League", 88, 105, 210, "starter", "Futbol Division", "demanding", 48)
];

const generatedNames = {
  GK: ["Elias Varga", "Noah Hartmann", "Tomas Bellini", "Senne Verbruggen", "Mateo Rivas", "Daniel Okonkwo"],
  CB: ["Leon Faye", "Iker Beltran", "Mats Nordin", "Samuel Diarra", "Tobias Reed", "Bruno Carvalho"],
  FB: ["Rafael Monteiro", "Jayden Clarke", "Niko Salo", "Hugo Leclerc", "Isaac Mensah", "Luca Moretti"],
  DM: ["Santiago Duarte", "Milan Petrovic", "Oscar Byrne", "Yanis Haddad", "Theo Martel", "Aarav Kapoor"],
  CM: ["Emil Sorensen", "Luca Andrade", "Noel Fischer", "Kaito Nakamura", "Ethan Brooks", "Marco Velez"],
  AM: ["Ilyes Benali", "Gabriel Costa", "Rasmus Lind", "Leo Moreno", "Arda Sahin", "Julian Price"],
  WG: ["Malik Diop", "Tiago Rocha", "Jonas Meier", "Callum Hayes", "Nabil Rahmani", "Dario Conti"],
  ST: ["Matej Novak", "Andre Silva Jr", "Felix Bauer", "Tariq Owusu", "Nicolas Vega", "Harry Lawson"]
};
const clubs = ["RB Leipzig", "Atalanta", "Real Sociedad", "Lille", "PSV", "Sporting CP", "Monaco", "Brighton", "Bayer Leverkusen", "Borussia Dortmund", "Valencia", "Braga", "Feyenoord", "Celtic", "Santos", "River Plate"];
const agents = ["CAA Base", "Gestifute", "Wasserman", "ROGON", "Unique Sports", "SEG", "Elite Project", "Pro Eleven", "Relatives Group"];
const nationalities = ["England", "Spain", "France", "Portugal", "Brazil", "Argentina", "Germany", "Netherlands", "Belgium", "Croatia", "Nigeria", "Ghana", "Japan", "Denmark"];
const positions = ["GK", "CB", "FB", "DM", "CM", "AM", "WG", "ST"];
const strategies = ["wonderkid", "value", "rotation", "starter"];
const moods = ["patient", "firm", "demanding"];

const database = [...marqueeTargets, ...generateDatabase(128)];
const state = {
  selected: null,
  selectedSale: null,
  day: 1,
  budget: activeClub.budget,
  wageSpace: activeClub.wageSpace,
  board: 72,
  deals: new Map(),
  saleDeals: new Map(),
  signed: []
};

const els = {
  clubSelect: document.querySelector("#clubSelect"),
  targetList: document.querySelector("#targetList"),
  searchInput: document.querySelector("#searchInput"),
  positionFilter: document.querySelector("#positionFilter"),
  strategyFilter: document.querySelector("#strategyFilter"),
  maxFee: document.querySelector("#maxFee"),
  maxFeeLabel: document.querySelector("#maxFeeLabel"),
  resultCount: document.querySelector("#resultCount"),
  dbCount: document.querySelector("#dbCount"),
  budget: document.querySelector("#budget"),
  wageBudget: document.querySelector("#wageBudget"),
  activeDeals: document.querySelector("#activeDeals"),
  signedCount: document.querySelector("#signedCount"),
  boardScore: document.querySelector("#boardScore"),
  playerProfile: document.querySelector("#playerProfile"),
  dealStatus: document.querySelector("#dealStatus"),
  feeInput: document.querySelector("#feeInput"),
  addonsInput: document.querySelector("#addonsInput"),
  sellOnInput: document.querySelector("#sellOnInput"),
  wageInput: document.querySelector("#wageInput"),
  bonusInput: document.querySelector("#bonusInput"),
  yearsInput: document.querySelector("#yearsInput"),
  roleInput: document.querySelector("#roleInput"),
  clubOfferBtn: document.querySelector("#clubOfferBtn"),
  contractBtn: document.querySelector("#contractBtn"),
  clubReply: document.querySelector("#clubReply"),
  agentReply: document.querySelector("#agentReply"),
  citySquad: document.querySelector("#citySquad"),
  saleStatus: document.querySelector("#saleStatus"),
  saleProfile: document.querySelector("#saleProfile"),
  saleCounterInput: document.querySelector("#saleCounterInput"),
  generateOffersBtn: document.querySelector("#generateOffersBtn"),
  saleOffers: document.querySelector("#saleOffers"),
  logList: document.querySelector("#logList"),
  resetBtn: document.querySelector("#resetBtn"),
  advanceDayBtn: document.querySelector("#advanceDayBtn"),
  squadNeed: document.querySelector("#squadNeed")
};

function club(name, league, tmTotal, budget, wageSpace, source, squad = null) {
  return { id: slug(name), name, league, tmTotal, budget, wageSpace, source, squad };
}

function player(name, pos, age, club, nation, rating, value, wage, role) {
  return { id: slug(name), name, pos, age, club, nation, rating, value, wage, role };
}

function buildSquad(profile) {
  if (profile.squad) return profile.squad.map((item) => ({ ...item, club: profile.name }));
  const templates = [
    ["GK", 31, 80, 0.035, "Rotation"], ["GK", 24, 77, 0.018, "Rotation"],
    ["CB", 28, 84, 0.075, "Important"], ["CB", 25, 83, 0.065, "Important"], ["CB", 22, 79, 0.04, "Rotation"],
    ["FB", 26, 83, 0.055, "Important"], ["FB", 24, 81, 0.045, "Rotation"], ["FB", 29, 80, 0.035, "Rotation"],
    ["DM", 27, 85, 0.075, "Important"], ["CM", 25, 84, 0.065, "Important"], ["CM", 29, 82, 0.04, "Rotation"],
    ["AM", 24, 85, 0.08, "Important"], ["AM", 21, 80, 0.045, "Prospect"],
    ["WG", 24, 86, 0.09, "Important"], ["WG", 22, 83, 0.06, "Rotation"], ["WG", 28, 82, 0.04, "Rotation"],
    ["ST", 26, 87, 0.1, "Key Player"], ["ST", 23, 80, 0.04, "Rotation"]
  ];
  const names = generatedSquadNames(profile);
  return templates.map(([pos, age, rating, share, role], index) => {
    const value = Math.max(2, Math.round(profile.tmTotal * share * (0.86 + ((seed(profile.name) + index * 13) % 26) / 100)));
    const wage = Math.max(15, Math.round(value * 3.2 + rating * 1.4));
    return player(names[index], pos, age + ((seed(names[index]) % 5) - 2), profile.name, nationalities[(index + seed(profile.name)) % nationalities.length], rating + ((index % 5) - 2), value, wage, role);
  });
}

function generatedSquadNames(profile) {
  const prefix = profile.name.split(" ")[0].replace(/[^A-Za-z]/g, "") || "Club";
  return [
    `${prefix} Keeper`, `${prefix} No.2`, `${prefix} Stopper`, `${prefix} Anchor`, `${prefix} Prospect`,
    `${prefix} Runner`, `${prefix} Wingback`, `${prefix} Veteran`, `${prefix} Six`, `${prefix} Eight`,
    `${prefix} Controller`, `${prefix} Creator`, `${prefix} Starlet`, `${prefix} Left Wing`, `${prefix} Right Wing`,
    `${prefix} Utility`, `${prefix} Striker`, `${prefix} Forward`
  ];
}

function target(name, pos, age, club, nation, league, rating, value, wageDemand, strategy, agent, mood, interest) {
  const contractYears = 1 + Math.floor(seed(name) % 5);
  const asking = Math.round(value * (1.1 + (100 - interest) / 170 + contractYears / 18));
  return {
    id: slug(name),
    name, pos, age, club, nation, league, rating, value, wageDemand, strategy, agent, mood, interest,
    asking,
    contractYears,
    release: Math.random() < 0.22 ? Math.round(value * 1.55) : null,
    status: "scouted"
  };
}

function generateDatabase(count) {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    const pos = positions[i % positions.length];
    const names = generatedNames[pos];
    const name = `${names[i % names.length]} ${Math.floor(i / names.length) + 1}`;
    const age = 17 + ((i * 7) % 14);
    const rating = 70 + ((i * 11) % 18);
    const value = Math.max(12, Math.round((rating - 63) * (age < 22 ? 2.6 : 2.1) + ((i * 13) % 28)));
    const wage = Math.round(35 + (rating - 70) * 7 + ((i * 9) % 40));
    const strategy = age <= 21 ? "wonderkid" : strategies[i % strategies.length];
    list.push(target(
      name,
      pos,
      age,
      clubs[i % clubs.length],
      nationalities[i % nationalities.length],
      leagueFor(clubs[i % clubs.length]),
      rating,
      value,
      wage,
      strategy,
      agents[i % agents.length],
      moods[i % moods.length],
      48 + ((i * 17) % 44)
    ));
  }
  return list;
}

function render() {
  renderClubSelector();
  renderTargets();
  renderSquad();
  renderSaleOffice();
  renderKpis();
  renderProfile();
}

function renderClubSelector() {
  if (!els.clubSelect.options.length) {
    els.clubSelect.innerHTML = clubProfiles.map((profile) => (
      `<option value="${profile.id}">${profile.name} · ${profile.league} · TM €${profile.tmTotal}m</option>`
    )).join("");
  }
  els.clubSelect.value = activeClub.id;
}

function renderTargets() {
  const query = els.searchInput.value.trim().toLowerCase();
  const maxFee = Number(els.maxFee.value);
  els.maxFeeLabel.textContent = `€${maxFee}m`;
  const filtered = database.filter((item) => {
    const haystack = `${item.name} ${item.club} ${item.pos} ${item.league}`.toLowerCase();
    return (!query || haystack.includes(query))
      && (els.positionFilter.value === "all" || item.pos === els.positionFilter.value)
      && (els.strategyFilter.value === "all" || item.strategy === els.strategyFilter.value)
      && item.asking <= maxFee
      && item.club !== activeClub.name
      && !state.signed.some((signed) => signed.id === item.id);
  }).sort((a, b) => b.rating - a.rating || a.asking - b.asking);

  els.resultCount.textContent = `${filtered.length} 个目标`;
  els.targetList.innerHTML = filtered.map((item) => `
    <button class="target-card ${state.selected?.id === item.id ? "active" : ""}" data-id="${item.id}" type="button">
      <span>
        <h3>${item.name}</h3>
        <span class="meta">${item.age} 岁 · ${posLabel(item.pos)} · ${item.club}</span>
        <span class="tags">
          <span class="tag">${strategyLabel(item.strategy)}</span>
          <span class="tag">能力 ${item.rating}</span>
          <span class="tag">兴趣 ${item.interest}</span>
        </span>
      </span>
      <span class="fee">€${item.asking}m</span>
    </button>
  `).join("");

  els.targetList.querySelectorAll(".target-card").forEach((button) => {
    button.addEventListener("click", () => selectPlayer(button.dataset.id));
  });
}

function renderProfile() {
  const item = state.selected;
  if (!item) {
    els.playerProfile.className = "profile-empty";
    els.playerProfile.textContent = "从左侧数据库选择球员后开始谈判。";
    return;
  }
  const deal = getDeal(item);
  els.dealStatus.textContent = deal.clubAgreed ? "可谈合同" : "俱乐部谈判";
  els.playerProfile.className = "profile";
  els.playerProfile.innerHTML = `
    <h3>${item.name}</h3>
    <div class="meta">${item.club} · ${item.league} · ${item.nation} · 经纪人 ${item.agent}</div>
    <div class="profile-grid">
      <div><span>位置</span><strong>${posLabel(item.pos)}</strong></div>
      <div><span>能力</span><strong>${item.rating}</strong></div>
      <div><span>估值</span><strong>€${item.value}m</strong></div>
      <div><span>要价</span><strong>€${item.asking}m</strong></div>
      <div><span>预期周薪</span><strong>€${item.wageDemand}k</strong></div>
      <div><span>合同剩余</span><strong>${item.contractYears} 年</strong></div>
    </div>
    <p class="need">${scoutReport(item)}</p>
  `;
  els.feeInput.value = deal.offer?.fee ?? Math.round(item.asking * 0.86);
  els.addonsInput.value = deal.offer?.addons ?? Math.round(item.asking * 0.08);
  els.sellOnInput.value = deal.offer?.sellOn ?? 5;
  els.wageInput.value = deal.contract?.wage ?? item.wageDemand;
  els.bonusInput.value = deal.contract?.bonus ?? Math.max(3, Math.round(item.value * 0.06));
  els.yearsInput.value = deal.contract?.years ?? (item.age <= 23 ? 6 : 4);
  els.roleInput.value = deal.contract?.role ?? roleFor(item);
  els.clubOfferBtn.disabled = false;
  els.contractBtn.disabled = !deal.clubAgreed;
  els.clubReply.textContent = deal.clubReply || "等待俱乐部回应。";
  els.clubReply.className = `reply ${deal.clubTone || ""}`;
  els.agentReply.textContent = deal.agentReply || (deal.clubAgreed ? "可以开始合同谈判。" : "需要先与俱乐部达成转会费协议。");
  els.agentReply.className = `reply ${deal.agentTone || ""}`;
}

function renderSquad() {
  const byPos = citySquad.reduce((acc, item) => {
    acc[item.pos] = (acc[item.pos] || 0) + 1;
    return acc;
  }, {});
  const needs = [];
  if ((byPos.FB || 0) < 4) needs.push("边后卫深度");
  if ((byPos.DM || 0) < 2) needs.push("Rodri 替补");
  if ((byPos.ST || 0) < 3) needs.push("中锋轮换");
  if ((byPos.WG || 0) < 5) needs.push("边锋储备");
  document.querySelector("#squadTitle").textContent = `${activeClub.name} 当前阵容`;
  els.squadNeed.textContent = needs.length ? `优先：${needs.join("、")}` : `Transfermarkt 总身价约 €${activeClub.tmTotal}m`;
  els.citySquad.innerHTML = citySquad.map((item) => `
    <button class="squad-player ${state.selectedSale?.id === item.id ? "active" : ""}" data-id="${item.id}" type="button">
      <strong>${item.name}</strong>
      <span class="meta">${posLabel(item.pos)} · ${item.age} · ${item.role}</span>
      <span class="meta">估值 €${item.value}m · 周薪 €${item.wage}k</span>
    </button>
  `).join("");
  els.citySquad.querySelectorAll(".squad-player").forEach((button) => {
    button.addEventListener("click", () => selectSalePlayer(button.dataset.id));
  });
}

function renderSaleOffice() {
  const item = state.selectedSale;
  if (!item) {
    els.saleStatus.textContent = "选择队内球员";
    els.saleProfile.className = "profile-empty";
    els.saleProfile.textContent = "点击阵容里的球员，查看潜在买家并谈出售价格。";
    els.saleCounterInput.value = "";
    els.generateOffersBtn.disabled = true;
    els.saleOffers.innerHTML = "";
    return;
  }
  const deal = getSaleDeal(item);
  els.saleStatus.textContent = `${item.name} 出售谈判`;
  els.saleProfile.className = "profile";
  els.saleProfile.innerHTML = `
    <h3>${item.name}</h3>
    <div class="meta">${posLabel(item.pos)} · ${item.age} 岁 · ${item.nation} · 当前定位 ${roleText(item.role)}</div>
    <div class="profile-grid">
      <div><span>估值</span><strong>€${item.value}m</strong></div>
      <div><span>周薪</span><strong>€${item.wage}k</strong></div>
      <div><span>董事会态度</span><strong>${saleBoardView(item)}</strong></div>
    </div>
    <p class="need">${saleReport(item)}</p>
  `;
  els.saleCounterInput.value = deal.counter ?? Math.round(item.value * 1.12);
  els.generateOffersBtn.disabled = false;
  if (!deal.offers.length) generateSaleOffers(item, false);
  els.saleOffers.innerHTML = deal.offers.map((offer, index) => `
    <div class="sale-offer">
      <strong>${offer.club}</strong>
      <span class="meta">${offer.type} · 报价 €${offer.fee}m · 承担周薪 €${offer.wageShare}%</span>
      <span class="need">${offer.message}</span>
      <footer>
        <button data-sale-action="accept" data-index="${index}" type="button">接受</button>
        <button data-sale-action="counter" data-index="${index}" type="button">还价</button>
        <button data-sale-action="reject" data-index="${index}" type="button">拒绝</button>
      </footer>
    </div>
  `).join("");
  els.saleOffers.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => handleSaleAction(button.dataset.saleAction, Number(button.dataset.index)));
  });
}

function renderKpis() {
  els.dbCount.textContent = String(database.length);
  els.budget.textContent = `€${state.budget.toFixed(1)}m`;
  els.wageBudget.textContent = `工资空间 €${state.wageSpace.toFixed(0)}k/w`;
  const buying = [...state.deals.values()].filter((deal) => !deal.done).length;
  const selling = [...state.saleDeals.values()].filter((deal) => !deal.done && deal.offers.length).length;
  els.activeDeals.textContent = String(buying + selling);
  els.signedCount.textContent = String(state.signed.length);
  els.boardScore.textContent = String(Math.round(state.board));
}

function submitClubOffer() {
  const item = state.selected;
  if (!item) return;
  const deal = getDeal(item);
  const offer = {
    fee: Number(els.feeInput.value),
    addons: Number(els.addonsInput.value),
    sellOn: Number(els.sellOnInput.value)
  };
  const packageValue = offer.fee + offer.addons * 0.55 + offer.sellOn * item.value * 0.005;
  deal.offer = offer;
  if (packageValue >= item.asking * 0.98 || (item.release && offer.fee >= item.release)) {
    deal.clubAgreed = true;
    deal.clubReply = `${item.club} 接受了总价值约 €${packageValue.toFixed(1)}m 的报价。现在可以谈个人条款。`;
    deal.clubTone = "good";
    addLog(`Day ${state.day}: ${item.club} 接受 ${item.name} 报价。`);
  } else if (packageValue >= item.asking * 0.82) {
    const counter = Math.round(item.asking * (0.99 + Math.random() * 0.09));
    deal.clubReply = `${item.club} 拒绝首轮报价，但愿意以 €${counter}m + 浮动继续谈。`;
    deal.clubTone = "warn";
    els.feeInput.value = counter;
    addLog(`Day ${state.day}: ${item.club} 对 ${item.name} 还价 €${counter}m。`);
  } else {
    deal.clubReply = `${item.club} 认为报价过低，谈判气氛降温。`;
    deal.clubTone = "bad";
    item.interest = Math.max(20, item.interest - 4);
    addLog(`Day ${state.day}: ${item.name} 的俱乐部拒绝低报价。`);
  }
  renderProfile();
  renderKpis();
}

function negotiateContract() {
  const item = state.selected;
  if (!item) return;
  const deal = getDeal(item);
  const contract = {
    wage: Number(els.wageInput.value),
    bonus: Number(els.bonusInput.value),
    years: Number(els.yearsInput.value),
    role: els.roleInput.value
  };
  deal.contract = contract;
  const roleScore = roleRank(contract.role) - roleRank(roleFor(item));
  const wageScore = (contract.wage - item.wageDemand) / Math.max(1, item.wageDemand) * 38;
  const bonusScore = (contract.bonus - item.value * 0.05) * 1.6;
  const yearsScore = item.age <= 24 ? (contract.years - 4) * 3 : (contract.years <= 4 ? 4 : -4);
  const moodPenalty = { patient: 0, firm: 8, demanding: 16 }[item.mood];
  const acceptance = item.interest + wageScore + bonusScore + roleScore * 10 + yearsScore - moodPenalty + Math.random() * 18;

  if (acceptance >= 82 && state.budget >= deal.offer.fee + contract.bonus && state.wageSpace >= contract.wage) {
    completeSigning(item, deal, contract);
  } else if (state.budget < deal.offer.fee + contract.bonus || state.wageSpace < contract.wage) {
    deal.agentReply = "财务部门拦下了这份合同：预算或工资空间不足。";
    deal.agentTone = "bad";
  } else {
    const askWage = Math.round(item.wageDemand * (1.06 + Math.random() * 0.16));
    deal.agentReply = `${item.agent} 没有接受。球员希望周薪接近 €${askWage}k，并要求更清晰的 ${roleText(roleFor(item))} 定位。`;
    deal.agentTone = "warn";
    els.wageInput.value = askWage;
    item.interest = Math.max(25, item.interest - 2);
    addLog(`Day ${state.day}: ${item.name} 的经纪人要求更高周薪。`);
  }
  render();
}

function completeSigning(item, deal, contract) {
  deal.done = true;
  deal.agentReply = `${item.name} 接受合同，转会完成。`;
  deal.agentTone = "good";
  item.status = "signed";
  state.budget -= deal.offer.fee + contract.bonus;
  state.wageSpace -= contract.wage;
  state.board += boardDelta(item, deal.offer.fee, contract.wage);
  state.signed.push(item);
  citySquad.push(player(item.name, item.pos, item.age, activeClub.name, item.nation, item.rating, item.value, contract.wage, contract.role));
  addLog(`Day ${state.day}: ${activeClub.name} 签下 ${item.name}，转会费 €${deal.offer.fee}m，周薪 €${contract.wage}k。`);
  state.selected = null;
}

function selectPlayer(id) {
  state.selected = database.find((item) => item.id === id);
  render();
}

function selectSalePlayer(id) {
  state.selectedSale = citySquad.find((item) => item.id === id);
  render();
}

function getSaleDeal(item) {
  if (!state.saleDeals.has(item.id)) state.saleDeals.set(item.id, { offers: [], done: false, counter: Math.round(item.value * 1.12) });
  return state.saleDeals.get(item.id);
}

function generateSaleOffers(item, log = true) {
  const deal = getSaleDeal(item);
  const buyerPool = buyingClubsFor(item);
  deal.offers = buyerPool.slice(0, 3).map((club, index) => {
    const ambition = 0.82 + Math.random() * 0.34 + index * 0.03;
    const agePenalty = item.age >= 31 ? 0.84 : item.age <= 23 ? 1.12 : 1;
    const roleBoost = item.role === "Key Player" ? 1.12 : item.role === "Rotation" ? 0.95 : 1;
    const fee = Math.max(2, Math.round(item.value * ambition * agePenalty * roleBoost));
    const type = Math.random() < 0.18 && item.age <= 23 ? "租借附买断" : "永久转会";
    return {
      club,
      fee,
      wageShare: type === "永久转会" ? 100 : 55 + Math.round(Math.random() * 35),
      type,
      patience: 42 + Math.round(Math.random() * 44),
      message: `${club} 认为 ${item.name} 可以立刻提升阵容深度。`
    };
  });
  if (log) addLog(`Day ${state.day}: 已为 ${item.name} 刷新买家报价。`);
}

function handleSaleAction(action, index) {
  const item = state.selectedSale;
  if (!item) return;
  const deal = getSaleDeal(item);
  const offer = deal.offers[index];
  if (!offer) return;
  if (action === "accept") {
    completeSale(item, offer);
  } else if (action === "reject") {
    addLog(`Day ${state.day}: ${activeClub.name} 拒绝 ${offer.club} 对 ${item.name} 的 €${offer.fee}m 报价。`);
    deal.offers.splice(index, 1);
  } else if (action === "counter") {
    const counter = Number(els.saleCounterInput.value);
    const threshold = offer.fee + offer.patience * 0.18;
    deal.counter = counter;
    if (counter <= threshold) {
      offer.fee = Math.round(counter);
      offer.message = `${offer.club} 接受还价，等待你最终确认。`;
      addLog(`Day ${state.day}: ${offer.club} 接受 ${item.name} €${offer.fee}m 的还价。`);
    } else {
      offer.patience -= 18;
      offer.message = `${offer.club} 觉得 €${counter}m 太高，谈判耐心下降。`;
      if (offer.patience <= 20) {
        addLog(`Day ${state.day}: ${offer.club} 退出 ${item.name} 谈判。`);
        deal.offers.splice(index, 1);
      } else {
      addLog(`Day ${state.day}: ${activeClub.name} 向 ${offer.club} 对 ${item.name} 还价 €${counter}m。`);
      }
    }
  }
  render();
}

function completeSale(item, offer) {
  const index = citySquad.findIndex((player) => player.id === item.id);
  if (index < 0) return;
  citySquad.splice(index, 1);
  const deal = getSaleDeal(item);
  deal.done = true;
  state.budget += offer.fee;
  state.wageSpace += offer.type === "永久转会" ? item.wage : Math.round(item.wage * offer.wageShare / 100);
  state.board += saleBoardDelta(item, offer);
  addLog(`Day ${state.day}: ${item.name} ${offer.type}加盟 ${offer.club}，${activeClub.name} 收入 €${offer.fee}m，释放周薪 €${offer.type === "永久转会" ? item.wage : Math.round(item.wage * offer.wageShare / 100)}k。`);
  state.selectedSale = null;
}

function changeClub(id) {
  activeClub = clubProfiles.find((profile) => profile.id === id) || clubProfiles[0];
  citySquad = buildSquad(activeClub);
  state.selected = null;
  state.selectedSale = null;
  state.day = 1;
  state.budget = activeClub.budget;
  state.wageSpace = activeClub.wageSpace;
  state.board = 72;
  state.deals = new Map();
  state.saleDeals = new Map();
  state.signed = [];
  els.logList.innerHTML = "";
  addLog(`Day 1: ${activeClub.name} 开启 2026 夏窗。预算、工资空间和阵容按 Transfermarkt 身价口径初始化。`);
  render();
}

function advanceDay() {
  state.day += 1;
  database.forEach((item) => {
    if (Math.random() < 0.07 && item.status !== "signed") item.interest = Math.max(20, item.interest - 1);
  });
  if (Math.random() < 0.45) {
    const rival = database.filter((item) => item.status !== "signed").sort(() => Math.random() - 0.5)[0];
    if (rival) {
      rival.asking = Math.round(rival.asking * 1.03);
      addLog(`Day ${state.day}: 竞争对手接触 ${rival.name}，${rival.club} 要价上涨。`);
    }
  } else {
    addLog(`Day ${state.day}: 市场暂时平静，球探部门更新了部分报告。`);
  }
  if (Math.random() < 0.55 && citySquad.length) {
    const item = citySquad.filter((player) => player.role !== "Key Player").sort(() => Math.random() - 0.5)[0];
    if (item) {
      generateSaleOffers(item, false);
      addLog(`Day ${state.day}: 有俱乐部询问 ${item.name} 的出售条件。`);
    }
  }
  render();
}

function getDeal(item) {
  if (!state.deals.has(item.id)) state.deals.set(item.id, { clubAgreed: false, done: false });
  return state.deals.get(item.id);
}

function addLog(text) {
  const item = document.createElement("li");
  item.textContent = text;
  els.logList.prepend(item);
}

function scoutReport(item) {
  const fit = item.pos === "DM" ? "可以减轻 Rodri 负担" : item.pos === "WG" ? "能补充边路一对一爆点" : item.pos === "CB" ? "符合高位防线需求" : item.pos === "ST" ? "能让哈兰德获得轮休" : "技术结构适配瓜迪奥拉体系";
  return `${fit}。经纪人风格：${moodLabel(item.mood)}；球员加盟兴趣 ${item.interest}/100。`;
}

function roleFor(item) {
  if (item.rating >= 90) return "Key Player";
  if (item.rating >= 86) return "Important";
  if (item.age <= 21) return "Prospect";
  return "Rotation";
}

function boardDelta(item, fee, wage) {
  const valueScore = (item.value - fee) / Math.max(1, item.value) * 18;
  const ageScore = item.age <= 24 ? 5 : item.age >= 30 ? -5 : 1;
  const qualityScore = (item.rating - 84) * 1.4;
  const wageScore = wage > item.wageDemand * 1.25 ? -5 : 2;
  return valueScore + ageScore + qualityScore + wageScore;
}

function saleBoardDelta(item, offer) {
  const valueGain = (offer.fee - item.value) / Math.max(1, item.value) * 12;
  const squadRisk = item.role === "Key Player" ? -12 : item.role === "Important" ? -5 : 3;
  const ageLogic = item.age >= 30 ? 6 : item.age <= 23 ? -4 : 1;
  return valueGain + squadRisk + ageLogic;
}

function saleBoardView(item) {
  if (item.role === "Key Player") return "不愿出售";
  if (item.age >= 30 || item.role === "Rotation") return "可听报价";
  return "需要高价";
}

function saleReport(item) {
  if (item.role === "Key Player") return "出售核心会明显伤害竞技预期，除非收到超高报价。";
  if (item.age >= 30) return "出售可以回收资金并释放工资，但要注意更衣室经验流失。";
  if (item.role === "Rotation") return "适合清理工资空间，为新援注册腾位置。";
  return "董事会只会接受高于市场价的方案。";
}

function buyingClubsFor(item) {
  const elite = ["Real Madrid", "Bayern Munich", "Paris Saint-Germain", "Barcelona", "Juventus", "Inter", "Liverpool", "Arsenal"];
  const mid = ["Newcastle", "Aston Villa", "Tottenham", "Atletico Madrid", "Borussia Dortmund", "Napoli", "AC Milan", "Bayer Leverkusen"];
  const developing = ["Brighton", "RB Leipzig", "Monaco", "Benfica", "Porto", "Sporting CP", "Ajax", "Roma"];
  const pool = item.rating >= 88 ? elite.concat(mid) : item.age <= 23 ? developing.concat(mid) : mid.concat(developing);
  return pool.sort(() => Math.random() - 0.5);
}

function roleRank(role) {
  return { Prospect: 0, Rotation: 1, Important: 2, "Key Player": 3 }[role] ?? 1;
}

function roleText(role) {
  return { Prospect: "未来计划", Rotation: "轮换", Important: "重要轮换", "Key Player": "核心球员" }[role];
}

function posLabel(pos) {
  return { GK: "门将", CB: "中卫", FB: "边后卫", DM: "后腰", CM: "中场", AM: "前腰", WG: "边锋", ST: "中锋" }[pos];
}

function strategyLabel(strategy) {
  return { superstar: "超级巨星", starter: "即战力", rotation: "轮换", wonderkid: "妖人", value: "性价比" }[strategy];
}

function moodLabel(mood) {
  return { patient: "耐心务实", firm: "强硬", demanding: "高要求" }[mood];
}

function leagueFor(club) {
  if (["Brighton"].includes(club)) return "Premier League";
  if (["RB Leipzig", "Bayer Leverkusen", "Borussia Dortmund"].includes(club)) return "Bundesliga";
  if (["Atalanta"].includes(club)) return "Serie A";
  if (["Real Sociedad", "Valencia"].includes(club)) return "La Liga";
  if (["Sporting CP", "Braga"].includes(club)) return "Liga Portugal";
  if (["PSV", "Feyenoord"].includes(club)) return "Eredivisie";
  if (["Monaco", "Lille"].includes(club)) return "Ligue 1";
  return "Global";
}

function seed(text) {
  return [...text].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

["input", "change"].forEach((eventName) => {
  [els.searchInput, els.positionFilter, els.strategyFilter, els.maxFee].forEach((el) => el.addEventListener(eventName, renderTargets));
});
els.resetBtn.addEventListener("click", () => {
  els.searchInput.value = "";
  els.positionFilter.value = "all";
  els.strategyFilter.value = "all";
  els.maxFee.value = 220;
  renderTargets();
});
els.clubOfferBtn.addEventListener("click", submitClubOffer);
els.contractBtn.addEventListener("click", negotiateContract);
els.advanceDayBtn.addEventListener("click", advanceDay);
els.clubSelect.addEventListener("change", (event) => changeClub(event.target.value));
els.generateOffersBtn.addEventListener("click", () => {
  if (state.selectedSale) {
    generateSaleOffers(state.selectedSale);
    render();
  }
});

addLog(`Day 1: ${activeClub.name} 开启 2026 夏窗，董事会要求通过买卖和合同谈判优化阵容。`);
render();
