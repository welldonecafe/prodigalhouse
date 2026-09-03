# 🕮 Prodigal House Publishing

> Independent literary imprint & audiobook repository. Minimalist, open-web audio distribution by Jason Deramo.

[![Live Site](https://img.shields.io/badge/Live-prodigalhouse.net-black?style=flat-square)](https://prodigalhouse.net)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20with-GitHub%20Pages-181717?style=flat-square&logo=github)](https://pages.github.com/)
[![License: All Rights Reserved](https://img.shields.io/badge/License-All%20Rights%20Reserved-lightgrey?style=flat-square)](LICENSE)

---

## Overview

**Prodigal House Publishing** is an independent imprint dedicated to literary fiction, faith-informed non-fiction, philosophy, and allegorical storytelling. 

This repository houses the production source code, chaptered audio files, digital manuscripts, and cover art for our catalog. The web portal is built as a lightweight, single-page directory application with an integrated multi-track audio player and dark/light system toggle.

Live deployment: [**prodigalhouse.net**](https://prodigalhouse.net)

---

## Catalog

| Title | Format | Chapters | Details |
| :--- | :--- | :--- | :--- |
| **All You Got** | Audiobook / MP3 | 20 Tracks | Fencing, mentorship, and overcoming life's trials. |
| **My Son Rising** | Audiobook / MP3 | 19 Tracks | Letters of spiritual sonship, purpose, and redemption. |
| **Prone** | Audiobook + PDF | 7 Tracks | Cultural treatise on young men, leadership, and accountability. |
| **Shells of Infinity** | Audiobook / MP3 | 22 Tracks | Hard sci-fi novella exploring theoretical physics and ethics. |

---

## Repository Structure

```text
.
├── index.html              # Core single-page audio player & directory listing
├── CNAME                   # Custom domain configuration (prodigalhouse.net)
├── README.md               # Imprint documentation & repo overview
└── audio/                  # Master media assets
    ├── All You Got/
    │   ├── art/            # Cover art (ayg_album.png, front, back)
    │   └── audio/          # MP3 chapter tracks (01–20)
    ├── My Son Rising/
    │   ├── art/            # Cover art (msr_album.jpg, front, back)
    │   └── audio/          # MP3 chapter tracks (01–19)
    ├── Prone/
    │   ├── art/            # Cover art (pront_album.png, front, back)
    │   ├── audio/          # MP3 chapter tracks (01–07)
    │   └── prone.pdf       # Full text manuscript download
    └── Shells of Infinity/
        ├── shells_album.png# Cover art
        └── audio/          # MP3 chapter tracks (01–22)