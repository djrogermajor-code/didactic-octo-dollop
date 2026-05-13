const channels = [
  {
    id: 'one-drop',
    title: 'Channel 1: One Drop Live',
    type: 'Reggae DJ Sets',
    location: 'Kingston, Jamaica',
    host: 'DJ Maroon Signal',
    status: 'Live now',
    viewers: '18.4K',
    accent: '#ffcf33',
    youtube: 'https://www.youtube.com/results?search_query=reggae+dj+live+kingston',
  },
  {
    id: 'soca-sunrise',
    title: 'Channel 2: Soca Sunrise',
    type: 'Carnival Energy',
    location: 'Port of Spain, Trinidad',
    host: 'Selecta Kai',
    status: 'Live now',
    viewers: '12.9K',
    accent: '#ff7a3d',
    youtube: 'https://www.youtube.com/results?search_query=soca+dj+live+trinidad',
  },
  {
    id: 'dancehall-yard',
    title: 'Channel 3: Dancehall Yard',
    type: 'Dancehall Sessions',
    location: 'Montego Bay, Jamaica',
    host: 'Queen Tempo',
    status: 'Next: 8:00 PM',
    viewers: '9.7K',
    accent: '#32d583',
    youtube: 'https://www.youtube.com/results?search_query=dancehall+live+dj+set',
  },
  {
    id: 'island-interviews',
    title: 'Channel 4: Island Interviews',
    type: 'Artists & Culture',
    location: 'Bridgetown, Barbados',
    host: 'Nia Roots',
    status: 'Live now',
    viewers: '7.8K',
    accent: '#5eead4',
    youtube: 'https://www.youtube.com/results?search_query=caribbean+artist+interviews',
  },
  {
    id: 'podcast-cove',
    title: 'Channel 5: Podcast Cove',
    type: 'Talk, News & Stories',
    location: 'Castries, Saint Lucia',
    host: 'The Lime Table',
    status: 'Replay premiere',
    viewers: '4.2K',
    accent: '#60a5fa',
    youtube: 'https://www.youtube.com/results?search_query=caribbean+podcast',
  },
  {
    id: 'remote-roots',
    title: 'Channel 6: Remote Roots',
    type: 'Beach & Street Pop-Ups',
    location: 'Nassau, Bahamas',
    host: 'SoundVan Crew',
    status: 'Live now',
    viewers: '15.1K',
    accent: '#a78bfa',
    youtube: 'https://www.youtube.com/results?search_query=caribbean+beach+live+music',
  },
  {
    id: 'diaspora-link',
    title: 'Channel 7: Diaspora Link',
    type: 'Global Caribbean Feed',
    location: 'Brooklyn, New York',
    host: 'I&I Global DJs',
    status: 'Next: 10:00 PM',
    viewers: '6.6K',
    accent: '#f472b6',
    youtube: 'https://www.youtube.com/results?search_query=caribbean+diaspora+music+live',
  },
];

const archiveItems = [
  ['Sunset Session at Hellshire Beach', 'One Drop Live', '1h 42m', 'DJ Set'],
  ['Carnival Road Mix: Steelpan to Soca', 'Soca Sunrise', '58m', 'Remote'],
  ['Reasoning with New Roots Artists', 'Island Interviews', '46m', 'Interview'],
  ['The Lime Table: Food, Music, and Memory', 'Podcast Cove', '1h 15m', 'Podcast'],
];

const schedule = [
  ['6:00 PM', 'Warm Up Selectors', 'Rotating island DJs open every channel.'],
  ['8:00 PM', 'Headline Remote', 'Featured DJ stream from a live Caribbean location.'],
  ['9:30 PM', 'Back Channel Q&A', 'Hosts answer viewer notes, requests, and shout-outs.'],
  ['11:00 PM', 'YouTube Archive Drop', 'Replay is indexed, tagged, and linked for viewers.'],
];

const icons = {
  archive: '▣',
  calendar: '◷',
  chevron: '›',
  clock: '◴',
  disc: '◉',
  globe: '◎',
  headphones: '◖',
  message: '✦',
  mic: '♬',
  play: '▶',
  radio: '◌',
  satellite: '⌁',
  search: '⌕',
  share: '↗',
  shield: '✓',
  sparkles: '✧',
  users: '◍',
  video: '▻',
  youtube: '▶',
};

const app = document.getElementById('root');

app.innerHTML = `
  <main>
    <header class="hero">
      <nav class="nav" aria-label="Primary navigation">
        <a class="brand" href="#top" aria-label="I&I Live home">
          <span class="brand-mark">I&I</span><span>Live</span>
        </a>
        <div class="nav-links">
          <a href="#channels">Channels</a><a href="#back-channel">Back Channel</a><a href="#archive">Archive</a><a href="#schedule">Schedule</a>
        </div>
        <a class="nav-cta" href="#channels">Watch live <span>${icons.play}</span></a>
      </nav>

      <section class="hero-grid" id="top">
        <div class="hero-copy">
          <p class="eyebrow"><span>${icons.satellite}</span> Caribbean streams from wherever the vibes are</p>
          <h1>I&I Live brings seven always-on Caribbean channels to one stage.</h1>
          <p class="hero-text">A live streaming platform for popular DJs, remote broadcasts, interviews, podcasts, and cultural moments—stored in a searchable back channel and linked to YouTube so viewers can watch live or catch every replay.</p>
          <div class="hero-actions">
            <a class="primary-btn" href="#channels">Explore 7 channels <span>${icons.chevron}</span></a>
            <a class="secondary-btn" href="#back-channel">See back channel <span>${icons.archive}</span></a>
          </div>
          <div class="stats" aria-label="Platform stats">
            <span><strong>7</strong> streamable channels</span><span><strong>74K+</strong> live viewers</span><span><strong>24/7</strong> archive access</span>
          </div>
        </div>
        <div class="player-card" aria-label="Featured live stream preview">
          <div class="player-topline"><span class="live-pill"><span></span> Live</span><span>Channel 1 · Kingston</span></div>
          <div class="player-screen">
            <div class="sun"></div><div class="equalizer" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
            <button class="play-button" aria-label="Play featured stream">${icons.play}</button>
          </div>
          <div class="now-playing"><div><strong>One Drop Live</strong><span>DJ Maroon Signal broadcasting from Kingston</span></div><button aria-label="Share stream">${icons.share}</button></div>
        </div>
      </section>
    </header>

    <section class="section intro-band" aria-label="Platform features">
      ${feature(icons.radio, 'Remote ready', 'DJs can go live from beaches, studios, festivals, and pop-up locations.')}
      ${feature(icons.youtube, 'YouTube linked', 'Every channel and replay includes a viewer path to YouTube access.')}
      ${feature(icons.message, 'Back channel', 'Requests, guest notes, internal cues, and replay metadata stay organized.')}
    </section>

    <section class="section" id="channels">
      <div class="section-heading"><p class="eyebrow"><span>${icons.disc}</span> Seven streamable channels</p><h2>Pick a channel, join the room, and follow the replay.</h2></div>
      <div class="channel-grid">${channels.map(channelCard).join('')}</div>
    </section>

    <section class="section back-channel" id="back-channel">
      <div class="section-heading narrow">
        <p class="eyebrow"><span>${icons.shield}</span> Production back channel</p>
        <h2>Store every stream, note, guest, request, and YouTube link in one command center.</h2>
        <p>I&I Live is designed with a private operations layer for producers and hosts, while viewers get simple access to live channels and replay links.</p>
      </div>
      <div class="ops-panel">
        <div class="ops-toolbar"><div class="search"><span>${icons.search}</span> Search stream, DJ, island, tag...</div><button><span>${icons.sparkles}</span> Auto-tag replay</button></div>
        <div class="ops-grid">
          <div class="ops-card tall"><h3>Live routing</h3><p>Assign incoming RTMP feeds to one of seven public channels, add lower thirds, and push replay details to the archive.</p><div class="route-list">${channels.slice(0, 4).map((channel) => `<span>${channel.title.replace('Channel ', 'Ch. ')}</span>`).join('')}</div></div>
          <div class="ops-card"><h3>Viewer requests</h3><p>Moderated shout-outs, song requests, interview questions, and sponsor reads.</p></div>
          <div class="ops-card"><h3>YouTube sync</h3><p>Attach live URLs, replay URLs, playlist IDs, thumbnails, and descriptions.</p></div>
          <div class="ops-card wide"><h3>Stored metadata</h3><p>Every stream record keeps channel, host, location, runtime, guests, tags, rights notes, and replay status.</p></div>
        </div>
      </div>
    </section>

    <section class="section archive" id="archive">
      <div class="section-heading"><p class="eyebrow"><span>${icons.archive}</span> Stored and searchable</p><h2>Replay library built for viewers who missed the live moment.</h2></div>
      <div class="archive-list">${archiveItems.map(archiveCard).join('')}</div>
    </section>

    <section class="section schedule" id="schedule">
      <div class="section-heading narrow"><p class="eyebrow"><span>${icons.calendar}</span> Tonight on I&I Live</p><h2>Programming flow from warm-up to archived replay.</h2></div>
      <div class="timeline">${schedule.map(scheduleRow).join('')}</div>
    </section>

    <footer class="footer">
      <div><a class="brand" href="#top"><span class="brand-mark">I&I</span><span>Live</span></a><p>Caribbean live streams, interviews, podcasts, DJ sets, back-channel storage, and YouTube replay access.</p></div>
      <a class="primary-btn" href="mailto:bookings@iandilive.example">Book a stream <span>${icons.mic}</span></a>
    </footer>
  </main>
`;

function feature(icon, title, text) {
  return `<article class="feature-card"><div class="feature-icon">${icon}</div><h2>${title}</h2><p>${text}</p></article>`;
}

function channelCard(channel) {
  return `
    <article class="channel-card" style="--accent: ${channel.accent}">
      <div class="channel-art"><span class="status">${channel.status}</span><span class="channel-icon">${icons.video}</span></div>
      <div class="channel-body">
        <p>${channel.type}</p><h3>${channel.title}</h3>
        <div class="meta"><span>${icons.globe}</span> ${channel.location}</div>
        <div class="meta"><span>${icons.headphones}</span> Hosted by ${channel.host}</div>
        <div class="channel-footer"><span><span>${icons.users}</span> ${channel.viewers}</span><a href="${channel.youtube}" target="_blank" rel="noreferrer">YouTube <span>${icons.youtube}</span></a></div>
      </div>
    </article>`;
}

function archiveCard([title, channel, duration, tag]) {
  return `
    <article class="archive-item">
      <div><span class="tag">${tag}</span><h3>${title}</h3><p>${channel}</p></div>
      <div class="archive-actions"><span><span>${icons.clock}</span> ${duration}</span><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Open replay <span>${icons.youtube}</span></a></div>
    </article>`;
}

function scheduleRow([time, title, text]) {
  return `<div class="timeline-row"><time>${time}</time><div><h3>${title}</h3><p>${text}</p></div></div>`;
}
