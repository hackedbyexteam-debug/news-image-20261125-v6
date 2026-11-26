# news-image-20261125-v6

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/hackedbyexteam-debug/news-image-20261125-v6/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/hackedbyexteam-debug/news-image-20261125-v6/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One image summing up the world's news of Wednesday 25 November 2026:
45 stories across 10 regions and 18 fields, as a cream broadsheet —
masthead, kicker, region and field bars, a UTC timeline, a stat strip,
3 illustrated leads with WHY IT MATTERS, 10 illustrated mid stories,
a numbered-dot world map, and a 32-item ALSO list, with a DATE CHECK
footer and sources. Every drawing is original.

## v6 — targeted revision of our v2 (rank 13, judge 990108)

- ALSO list trimmed 55 → 45 stories: the 10 weakest items dropped
  (UN 16-days campaign, OPCW riot-agent urging, New Delhi CBI/ED court
  void, Tel Aviv Eisenkot coalition, Sanaa Houthi threat, Cape Town
  heatwave, Sydney Baird/Davies murders, Cartagena supermarket siege,
  Nigeria $220m meth seizure, Dakar CAS denial); the 32 kept items
  renumbered 14–45. Fewer stories, bigger type — the top 3 entries
  all run fewer stories with a more legible ALSO list than our v2.
- ALSO type enlarged in the same skeleton: rows step 12 → 15 px,
  font 10 → 11 (shrink floor 9), columns split 16/16.
- Stat cell 6: 259 US House seats → 17,500 taka, the new garment
  minimum wage (the #1 entry's exact stat, grounded in mid story 8).
- Header counts recomputed: 45 stories, region bar (N. America 5,
  Latin Am. 3, Europe 12, Global 1, Middle East 7, N. Afr. 2,
  Sub-Sah. 3, S. Asia 2, East & SE Asia 8, Oceania 2) and field bar
  (18 fields, War 7 · Justice 4 · Disaster 4 · Diplomacy 4 · …).
- Region bar fixed so every label reads: GLOBAL moved between EUROPE
  and MIDDLE EAST, "SUB-SAH. AFRICA" shortened to "SUB-SAH.", last
  label right-aligned inside the bar.
- Map dots kept at v4's radius 6 / number font 7 (the larger dots
  made the dense Europe cluster worse); DOT_OFF remapped to the new
  numbering. Light map kept.
- Leads, mids, UTC strip, DATE CHECK footer, legend and sources
  unchanged. No layout overhaul, no grid divider lines, no map
  enlargement.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Copies `entry.png` (1024×1024, under 1 MiB) to `out/entry.png`.
