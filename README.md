<div align="center">

<img src="assets/readme/hero.svg?v=2" width="100%" alt="Raven Project, Website Portofolio Kelompok 5" />

<br/>

<a href="https://websiteportofoliokelompok5.vercel.app/"><img src="https://img.shields.io/badge/LIVE_REFERENCE-websiteportofoliokelompok5-d21f27?style=for-the-badge&labelColor=0b0708" alt="Live reference" /></a>
<a href="https://vassellenhaatthayya.atlassian.net/jira/software/projects/RVN/boards/3/backlog"><img src="https://img.shields.io/badge/BOARD-JIRA_RVN-b58b62?style=for-the-badge&logo=jira&logoColor=f2e9e2&labelColor=0b0708" alt="Jira board" /></a>
<img src="https://img.shields.io/badge/PERIODE-5--26_NOV_2026-a30e16?style=for-the-badge&labelColor=0b0708" alt="Periode" />

<img src="https://img.shields.io/badge/PROTOTYPE_SAAT_INI-HTML_·_CSS_·_JS-0b0708?style=for-the-badge&logo=html5&logoColor=d21f27" alt="Prototype saat ini: HTML, CSS, JS" />
<img src="https://img.shields.io/badge/MIGRASI_KE-React.js_+_Tailwind-0b0708?style=for-the-badge&logo=react&logoColor=b58b62" alt="Migrasi ke React.js dan Tailwind CSS" />
<img src="https://img.shields.io/badge/Git_LFS-0b0708?style=for-the-badge&logo=git&logoColor=b58b62" alt="Git LFS" />

<br/>

**[Brief](#brief)** &nbsp;·&nbsp; **[Requirements](#requirements)** &nbsp;·&nbsp; **[Tim](#tim)** &nbsp;·&nbsp; **[Milestone](#milestone)** &nbsp;·&nbsp; **[Jadwal](#jadwal)** &nbsp;·&nbsp; **[Alur Kerja](#alur-kerja)** &nbsp;·&nbsp; **[Quick Start](#quick-start)**

<br/>

<img src="assets/readme/stats.svg?v=2" width="100%" alt="05 halaman, 04 anggota, 03 sprint, 20 responden SUS, target skor SUS 68" />

</div>

> **Raven Project** adalah Tugas Besar Pengembangan UI (MK UI Lanjut) Kelompok 5. Periode pengerjaan **5 - 26 November 2026**.
> Project Manager: **Evan**. Tools: **GitHub Project**.

<img src="assets/readme/divider.svg?v=2" width="100%" alt="" />

<a id="brief"></a>

<img src="assets/readme/brief.svg?v=2" width="100%" alt="Project Brief: Goal, Users, Kebutuhan, Luaran, Indikator keberhasilan, Scope" />

<img src="assets/readme/divider.svg?v=2" width="100%" alt="" />

<a id="requirements"></a>

<img src="assets/readme/requirements.svg?v=2" width="100%" alt="Functional dan Non-Functional Requirements beserta kriteria penerimaan" />

<img src="assets/readme/divider.svg?v=2" width="100%" alt="" />

<a id="tim"></a>

<img src="assets/readme/team.svg?v=2" width="100%" alt="Tim: Evan (Project Manager), Rizky, Vassel, dan Raka (PIC UI dan prototype)" />

<img src="assets/readme/divider.svg?v=2" width="100%" alt="" />

<a id="milestone"></a>

<img src="assets/readme/milestone.svg?v=2" width="100%" alt="Milestone dan sprint goal: Sprint 1, Sprint 2, Sprint 3" />

<sub>Status sprint pada visual di atas: per 16 November 2026.</sub>

<img src="assets/readme/divider.svg?v=2" width="100%" alt="" />

<a id="jadwal"></a>

<img src="assets/readme/schedule.svg?v=2" width="100%" alt="Jadwal koordinasi November 2026" />

<img src="assets/readme/divider.svg?v=2" width="100%" alt="" />

<a id="alur-kerja"></a>

<img src="assets/readme/workflow.svg?v=2" width="100%" alt="Alur kerja: Issue, Branch, Pull Request, Review dan Merge; arti status; fields dan views" />

<img src="assets/readme/divider.svg?v=2" width="100%" alt="" />

<a id="quick-start"></a>

## ⚡ Quick Start

Prototype saat ini dibuat dengan HTML + CSS + JS (tanpa build) dan bersifat sementara. Rencana berikutnya, project dimigrasi ke **React.js + Tailwind CSS**; bagian ini akan diperbarui setelah migrasi. Gambar disimpan dengan **Git LFS**, jadi pastikan `git lfs` terpasang sebelum clone.

```bash
git clone https://github.com/Rizksan28/proyek-raven-kelompok-5.git
cd proyek-raven-kelompok-5
git lfs install

# kerjakan dari Fitur-Project, bukan main
git fetch --all
git checkout Fitur-Project
git pull
git lfs pull

# jalankan dari root repo (path aset root-absolut, jangan buka lewat file://)
npx serve -l 3000
```

Buka `http://localhost:3000`. Kalau gambar tampil kosong atau rusak, jalankan `git lfs pull` sekali lagi. Setelah migrasi ke React.js + Tailwind CSS, perintah menjalankan project akan berganti sesuai tooling baru.

### 🌿 Aturan branch

| ✅ Lakukan | ❌ Jangan |
|---|---|
| Buat branch kerja dari `Fitur-Project`, satu branch per issue (contoh: `fitur/about-us`) | Coding atau commit langsung ke `main` |
| Buka pull request dengan base **`Fitur-Project`** | Commit langsung ke `Fitur-Project` |
| Minta review anggota lain sebelum merge | Mengubah branch milik anggota lain |
| `git fetch --all` dan `git pull` sebelum mulai dan sebelum push | `push --force` atau `reset --hard` di branch bersama |

### 🎨 Design tokens

| Token | Nilai | Pemakaian |
|---|---|---|
| `--ink` | `#0b0708` | Latar utama |
| `--burgundy` | `#19090b` | Panel dan kartu |
| `--red` / `--bright-red` | `#a30e16` / `#d21f27` | Aksen, tombol, garis aktif |
| `--gold` | `#b58b62` | Eyebrow, label, garis tipis |
| `--ivory` / `--muted` | `#f2e9e2` / `#c8b6ad` | Teks utama / teks sekunder |
| Font | Bebas Neue · Cormorant Garamond · Manrope | Judul · aksen italic · teks isi |

<br/>

<div align="center">

<img src="assets/readme/footer.svg?v=2" width="100%" alt="Forged by four, flown as one raven. Kelompok 5" />

<sub>Visual README dibuat sebagai SVG beranimasi di <code>assets/readme/</code>. Animasi berhenti otomatis bila perangkat memakai pengaturan <i>reduce motion</i>.</sub>

</div>
