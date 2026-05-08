const categories = [
  "Boy's Name",
  "Girl's Name",
  'Animal',
  'Place',
  'Song',
  'Movie',
  'Something You Like',
  "Something You Don't Like",
  'Food',
];

const answersByLetter = {
  A: ['Alex', 'Ava', 'Alligator', 'Athens', 'Africa', 'Avatar', 'Art', 'Arguments', 'Avocado'],
  B: ['Ben', 'Bella', 'Bear', 'Boston', 'Bad Guy', 'Barbie', 'Books', 'Bills', 'Burritos'],
  C: ['Chris', 'Chloe', 'Cheetah', 'Chicago', 'Clocks', 'Cars', 'Coffee', 'Chaos', 'Cupcakes'],
  D: ['Daniel', 'Daisy', 'Dolphin', 'Denver', 'Dynamite', 'Dune', 'Dessert', 'Delays', 'Dumplings'],
  M: ['Miles', 'Mia', 'Moose', 'Madrid', 'Memories', 'Moana', 'Music', 'Mosquitos', 'Mango'],
  S: ['Sam', 'Sophia', 'Seal', 'Seattle', 'Sunflower', 'Shrek', 'Sunsets', 'Spam', 'Sushi'],
  T: ['Theo', 'Tessa', 'Tiger', 'Tokyo', 'Thunder', 'Titanic', 'Travel', 'Traffic', 'Tacos'],
  W: ['Wyatt', 'Willow', 'Wolf', 'Warsaw', 'Waterfalls', 'Wicked', 'Weekends', 'Waiting', 'Waffles'],
};

const botNames = ['Pixel', 'Nova', 'Lex', 'Quill', 'Jinx', 'Echo', 'Rune', 'Miso', 'Bolt', 'Comet'];
const humanNames = ['You', 'Jordan', 'Avery', 'Taylor', 'Morgan', 'Riley', 'Casey', 'Skyler', 'Parker', 'Harper', 'Emerson', 'Logan'];
const letters = Object.keys(answersByLetter);

const humanCountInput = document.getElementById('human-count');
const humanCountValue = document.getElementById('human-count-value');
const botCountElement = document.getElementById('bot-count');
const difficultySelect = document.getElementById('bot-difficulty');
const difficultyPill = document.getElementById('difficulty-pill');
const startRoundButton = document.getElementById('start-round');
const roundStatus = document.getElementById('round-status');
const roundLetter = document.getElementById('round-letter');
const categoryGrid = document.getElementById('category-grid');
const leaderboard = document.getElementById('leaderboard');

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getBotCount() {
  return 12 - Number(humanCountInput.value);
}

function updateSeatSummary() {
  const humans = Number(humanCountInput.value);
  humanCountValue.textContent = `${humans} player${humans === 1 ? '' : 's'}`;
  botCountElement.textContent = String(getBotCount());
}

function scorePlayer(base, difficulty, isBot) {
  const difficultyBonus = {
    casual: 10,
    competitive: 24,
    chaos: 36,
  }[difficulty];

  const speed = Math.floor(Math.random() * 30) + base;
  const accuracy = Math.floor(Math.random() * 18) + 12;
  const uniqueness = Math.floor(Math.random() * 16) + 8;
  const completeness = Math.random() > 0.35 ? 15 : 6;
  const botModifier = isBot ? difficultyBonus : 18;
  const total = speed + accuracy + uniqueness + completeness + botModifier;

  return {
    total,
    bonus: `${speed} speed • ${accuracy} accuracy • ${uniqueness} unique • ${completeness} complete`,
  };
}

function buildPlayers(difficulty) {
  const humanCount = Number(humanCountInput.value);
  const humans = humanNames.slice(0, humanCount).map((name, index) => ({
    name,
    type: index === 0 ? 'human' : 'human',
    ...scorePlayer(46 - index * 2, difficulty, false),
  }));

  const bots = botNames.slice(0, getBotCount()).map((name, index) => ({
    name: `${name} Bot`,
    type: 'bot',
    ...scorePlayer(32 - index, difficulty, true),
  }));

  return [...humans, ...bots].sort((a, b) => b.total - a.total);
}

function renderLeaderboard(players) {
  leaderboard.innerHTML = players
    .map(
      (player, index) => `
        <article class="player-card ${player.type}">
          <span class="meta">#${index + 1} • ${player.type === 'bot' ? 'AI Bot' : 'Human Player'}</span>
          <strong>${player.name}</strong>
          <div class="score">${player.total}</div>
          <div class="bonus">${player.bonus}</div>
        </article>
      `,
    )
    .join('');
}

function renderCategories(letter) {
  const answers = answersByLetter[letter];
  categoryGrid.innerHTML = categories
    .map(
      (category, index) => `
        <article class="category-card">
          <span class="hint">${category}</span>
          <strong>${letter}</strong>
          <div class="answer">${answers[index]}</div>
        </article>
      `,
    )
    .join('');
}

function simulateRound() {
  const difficulty = difficultySelect.value;
  const starter = randomItem(humanNames.slice(0, Number(humanCountInput.value)));
  const coinFlip = Math.random() > 0.5 ? 'Heads' : 'Tails';
  const wheelMode = Math.random() > 0.5 ? 'Fast' : 'Slow';
  const letter = randomItem(letters);

  difficultyPill.textContent = `${difficulty[0].toUpperCase()}${difficulty.slice(1)} Bots`;
  roundLetter.textContent = letter;
  roundStatus.innerHTML = `
    <strong>${coinFlip}!</strong> ${starter} starts the round, spins the <strong>${wheelMode}</strong>
    alphabet wheel, and lands on <strong>${letter}</strong>. Fill every category before the
    45-second timer ends to stack speed, spelling, uniqueness, and completion bonuses.
  `;

  renderCategories(letter);
  renderLeaderboard(buildPlayers(difficulty));
}

humanCountInput.addEventListener('input', updateSeatSummary);
difficultySelect.addEventListener('change', simulateRound);
startRoundButton.addEventListener('click', simulateRound);

updateSeatSummary();
simulateRound();
