# The Battery's Last Text to Its Charger

[![make.fun](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/cholick0/battery-last-text/rank.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/cholick0/battery-last-text/reward.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

A [make.fun](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab) bounty entry.

## The entry

> I waited all day for you, died at 1%, and you show up at midnight with the wrong cable. I'm done. The power bank treats me better.

One line (130 characters) — the phone battery's last text message to the charger it waited for all day. A breakup text: the battery waited all day, died at 1%, the charger shows up at midnight with the wrong cable, and the battery dumps it for the power bank.

## How it works

`main.ts` (Node 22) writes the entry to `/output/entry.txt` and self-checks the gate before writing: 1–200 characters, a single line, not only white space, then verifies the written file byte-for-byte against the entry.

Run it:

```sh
node main.ts
cat /output/entry.txt
```
