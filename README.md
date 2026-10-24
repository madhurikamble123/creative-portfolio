# Alex Vance — Graphic Designer & 3D Animator Portfolio

A modern, high-performance, and responsive personal portfolio website engineered specifically for a **Graphic Designer & 3D Animator** actively seeking full-time roles or high-tier freelance contracts.

Built with **HTML5, CSS3, Bootstrap 5.3, and modern Vanilla JavaScript**, featuring a **cyberpunk-inspired premium dark theme with glowing neon purple accents**, 3D interactive graphics, and video preview capabilities.

---

## 🌟 Key Features

1. **Responsive Sticky Glassmorphism Navbar**
   - Brand logo with glowing 3D cube icon.
   - Smooth-scrolling navigation with active section scrollspy.
   - Quick "Hire Me" CTA and mobile hamburger collapse with auto-close.

2. **Hero / Home Section**
   - Live availability badge with glowing green pulse animation.
   - Compelling value proposition headline & creative specializations.
   - Dual Call-to-Actions: "Explore Projects" & "Watch 2026 Showreel".
   - **Interactive 3D Canvas** powered by Three.js (interactive 3D geometric Torus Knot with purple rim light & cursor tracking, plus procedural 2D particle fallback).
   - Animated metrics ticker (Years Experience, Projects, Awards, Satisfaction).

3. **About Section**
   - Stylized 3D designer portrait in a glassmorphic gradient frame.
   - Professional journey narrative and creative philosophy.
   - 4 Core Service Pillars:
     - 3D Modeling & Rigging
     - Cinematic Motion VFX
     - Brand Identity & CMF Packaging
     - Real-Time CGI & XR (Unreal Engine 5)
   - Primary software tags (Blender, Maya, Cinema 4D, ZBrush, UE5, After Effects).

4. **Skills & Software Mastery Section**
   - Categorized skills breakdown across:
     - **3D Art & Animation** (Rigging, Hard-Surface, Keyframing, Lighting, Dynamics)
     - **Graphic & Brand Design** (Identity Systems, Packaging CMF, Typography, Guidelines)
     - **Motion & VFX Pipeline** (Compositing, ACEScg, Real-time VFX, Sound Synch, Render Farms)
   - Visual progress bars that animate smoothly into view on scroll.
   - Software proficiency grid with skill level badges (Master, Expert, Advanced).

5. **Project Gallery with Live Search & Category Filtering**
   - **Live Search Input**: Instant filter by project title, software tool (e.g. *Maya*, *Octane*, *Unreal*), or tag.
   - **Category Pills**: *All Projects*, *3D Animation*, *Motion Graphics*, *Brand Identity*, *Character & VFX*, *3D Environment*.
   - Live project counter ("Showing X of Y projects") and empty search state with a "Reset Filters" button.
   - 8 Detailed Creative Projects with:
     - High-resolution SVG preview thumbnails.
     - Video animation preview badges with play button hover overlay.
     - Software tag pills and client metadata.
     - "Play Preview" and "Case Study" action buttons.

6. **Interactive Video & Lightbox Modal**
   - Dynamically populated modal displaying video previews with full playback controls or high-resolution render still.
   - Comprehensive case study breakdown: Client, Year, Role, Tools, Objective, and Pipeline Milestones.
   - Auto-pauses video playback when the modal is closed.

7. **2026 4K Showreel Modal**
   - Dedicated modal showcasing a streaming cinematic showreel sequence with timestamp chapter breakdown and audio mastering info.

8. **Career Resume & Timeline Section**
   - Prominent **Download Resume** card with direct download link to `Alex_Vance_Creative_Resume.pdf` and visual download confirmation.
   - Split timeline layout:
     - **Work Experience** (Senior 3D Motion Designer, 3D Generalist, Visual Designer).
     - **Education & Credentials** (CalArts B.F.A., Autodesk Certified Maya Professional, Unreal Engine Fellowship).

9. **Peer Testimonials & Endorsements**
   - Quotes from Creative Directors, Brand Leads, and Art Directors praising turnaround speed, communication, and visual fidelity.

10. **Validated Contact Section**
    - Direct communication channels (Email, Phone, Location: San Francisco / Remote Worldwide).
    - Social creative links: ArtStation, Behance, LinkedIn, Vimeo, GitHub.
    - **Interactive Client-Side Validated Contact Form**:
      - Name, Email, Project Type / Role, Timeline, Subject, and Message.
      - Real-time field validation feedback.
      - Submit button with simulated transmission spinner.
      - Success confirmation banner with "Send Another Message" reset button.

11. **Footer & Polish**
    - Obsidian dark footer with neon violet accent line.
    - Quick navigation links and creative portals.
    - Smooth back-to-top floating button.

---

## 📁 File Structure

```text
CreativePortfolio/
├── index.html                   # Semantic HTML5 markup
├── css/
│   └── style.css                # Custom CSS3 styles, variables & dark purple theme
├── js/
│   └── main.js                  # Vanilla JS for 3D canvas, filters, modals, form & scrollspy
├── assets/
│   ├── docs/
│   │   └── Alex_Vance_Creative_Resume.pdf  # Downloadable PDF resume
│   ├── images/
│   │   ├── avatar.svg           # Stylized 3D designer portrait
│   │   ├── project-1-mecha.svg  # Cyberpunk Mecha 3D Model
│   │   ├── project-2-aetheria.svg # Aetheria Luxury 3D Packaging
│   │   ├── project-3-kinetic.svg  # Solaris Kinetic Typography Sequence
│   │   ├── project-4-hyperdrive.svg # Hyperdrive XR Concept Hovercraft
│   │   ├── project-5-valkyrie.svg # Valkyrie High-Poly Sculpt
│   │   ├── project-6-neonoasis.svg # Neon Oasis Cyberpunk City
│   │   ├── project-7-pulse.svg  # Pulse Drink Fluid Commercial
│   │   └── project-8-prism.svg  # Prism Studio 3D Brand Identity
│   └── videos/                  # Directory for local media storage
└── README.md                    # Project documentation & run guide
```

---

## 🚀 How to Run Locally

You can run this portfolio on any computer without needing a database or complex build tools.

### Option 1: Direct Browser Launch (Simplest)
1. Navigate to the `CreativePortfolio` folder in File Explorer.
2. Double-click `index.html` (or right-click -> **Open with** -> **Google Chrome / Microsoft Edge / Firefox**).
3. The portfolio will open immediately with full styling, animations, and interactivity!

---

### Option 2: Using VS Code "Live Server" (Recommended for Developers)
1. Open the `CreativePortfolio` folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click on `index.html` in the file explorer and click **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500/`.

---

### Option 3: Using Node.js / npx
If you have Node.js installed, open PowerShell or Terminal in the `CreativePortfolio` directory:
```bash
npx serve .
```
Then visit `http://localhost:3000`.

---

### Option 4: Using Python
If you have Python installed, open PowerShell or Terminal in the `CreativePortfolio` directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

### Option 5: Using PowerShell Native HTTP Server
On Windows without Python or Node, you can also run a lightweight PowerShell listener:
```powershell
powershell -ExecutionPolicy Bypass -Command "Start-Process 'index.html'"
```

---

## 🎨 Design System & Customization

The project uses clean CSS custom properties located in `css/style.css` under the `:root` pseudo-class:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#0a0812` | Deep space obsidian background |
| `--bg-card` | `#151126` | Dark surface color for cards & containers |
| `--accent-purple` | `#a855f7` | Vibrant neon violet primary accent |
| `--accent-purple-light` | `#c084fc` | Soft lavender highlight |
| `--accent-cyan` | `#38bdf8` | Cyberpunk cyan accent |
| `--accent-pink` | `#ec4899` | Neon magenta secondary accent |
| `--font-heading` | `'Syne', sans-serif` | Display heading typography |
| `--font-body` | `'Plus Jakarta Sans', sans-serif` | Clean body copy typography |

To tailor the portfolio for yourself or another artist, simply edit the details in `index.html` and the project entries in `js/main.js` (within `projectsData`).

---

## 📱 Browser Compatibility

- **Google Chrome** (v90+)
- **Microsoft Edge** (v90+)
- **Mozilla Firefox** (v88+)
- **Apple Safari** (v14+)
- **Mobile Safari / Chrome Mobile** (iOS & Android)
