/**
 * ALEX VANCE | 3D ANIMATOR & GRAPHIC DESIGNER PORTFOLIO
 * Main Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. PROJECT DATA REGISTRY (Metadata for Modals, Videos & Case Studies)
  // =========================================================================
  const projectsData = {
    'project-1': {
      id: 'project-1',
      title: 'Cyber Mecha Rig & Combat Cycle',
      category: '3D Animation',
      badgeText: '🎬 3D Animation',
      client: 'Kurogane Studios / Sci-Fi Short Film',
      year: '2026',
      tools: 'Autodesk Maya, Blender 4.2, Substance 3D, Octane Render',
      role: 'Lead Character Rigger & Keyframe Animator',
      image: 'assets/images/project-1-mecha.svg',
      mediaType: 'video',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      overview: 'Full anatomical rigging and cinematic keyframe animation of a high-agility tactical mech unit designed for an upcoming sci-fi cinematic sequence.',
      details: [
        'Custom IK/FK switching controls with twist-joint bone hierarchy for organic mechanical movement.',
        'Hard-surface panel deformers and hydraulic piston simulation in Autodesk Maya.',
        'Rendered in Octane with multi-pass EXR compositing in After Effects at 60 FPS.'
      ]
    },
    'project-2': {
      id: 'project-2',
      title: 'Aetheria Luxury Visual System & 3D Packaging',
      category: 'Brand Identity',
      badgeText: '✨ Brand Identity',
      client: 'Aetheria Fragrances Paris',
      year: '2025',
      tools: 'Cinema 4D, Redshift, Illustrator, Photoshop, Figma',
      role: 'Creative Director & 3D Visualizer',
      image: 'assets/images/project-2-aetheria.svg',
      mediaType: 'image',
      overview: 'Comprehensive brand identity, prismatic bottle industrial form development, and 3D promotional rendering for a high-end sustainable perfumery.',
      details: [
        'Formulated realistic glass refraction index and caustics in Cinema 4D Redshift.',
        'Crafted minimalist geometric typography and hot-stamped gold foil packaging guidelines.',
        'Delivered 4K ultra-high-resolution marketing stills and digital billboard visual assets.'
      ]
    },
    'project-3': {
      id: 'project-3',
      title: 'Solaris Chrono Kinetic Title Sequence',
      category: 'Motion Graphics',
      badgeText: '▶ Motion & VFX',
      client: 'Apex Docuseries / StreamFlix',
      year: '2026',
      tools: 'After Effects, Cinema 4D, X-Particles, Trapcode Form',
      role: 'Motion Designer & Particle Artist',
      image: 'assets/images/project-3-kinetic.svg',
      mediaType: 'video',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      overview: 'Dynamic 3D kinetic typography and fluid particle vortex sequence capturing the cosmic tension of time and gravitational physics.',
      details: [
        'Custom 3D spline typography animated with procedural mograph effectors.',
        'Complex particle emitter simulations synchronized to a synthesized orchestral score.',
        'Seamless transition mechanics built natively in After Effects with 32-bit depth color grading.'
      ]
    },
    'project-4': {
      id: 'project-4',
      title: 'Hyperdrive XR Concept Hovercraft',
      category: '3D Animation',
      badgeText: '🎬 3D Animation',
      client: 'Future Propulsion Mobility Lab',
      year: '2025',
      tools: 'Unreal Engine 5.4, Blender, Substance Painter, Lumen Raytracing',
      role: '3D Hard-Surface Modeler & Unreal Engine Artist',
      image: 'assets/images/project-4-hyperdrive.svg',
      mediaType: 'video',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      overview: 'Real-time raytraced concept vehicle modeled from concept thumbnails to drivable simulation in Unreal Engine 5 with responsive hover physics.',
      details: [
        'Subdivision surface modeling with optimized quad topology for real-time nanite meshes.',
        'Interactive holographic cockpit HUD created with Unreal Engine UMG and Niagara systems.',
        'Full cinematic flythrough trailer lit with Lumen global illumination.'
      ]
    },
    'project-5': {
      id: 'project-5',
      title: 'Valkyrie Proto-Sculpt & Character Bust',
      category: 'Character & VFX',
      badgeText: '🗿 Character & VFX',
      client: 'Mythos Vanguard Games',
      year: '2025',
      tools: 'Pixologic ZBrush, Marmoset Toolbag 4, Substance 3D, Maya',
      role: 'Character Sculptor & Texture Artist',
      image: 'assets/images/project-5-valkyrie.svg',
      mediaType: 'image',
      overview: 'Intricate digital clay sculpt of an armored celestial champion featuring ornate filigree, micro-surface cloth weaves, and realistic obsidian metal.',
      details: [
        'High-density 32-million polygon sculpt detailed with custom ZBrush alphas and dam-standard brushes.',
        'Clean manual retopology down to 45k polygons for next-gen game engine deformation.',
        '8K UDIM multi-tile texturing workflow using ACEScg color space.'
      ]
    },
    'project-6': {
      id: 'project-6',
      title: 'Neon Oasis 2099 Cyberpunk Cityscape',
      category: '3D Environment',
      badgeText: '🌆 3D Environment',
      client: 'CyberZone Virtual World',
      year: '2026',
      tools: 'Blender 4.2, Unreal Engine 5, Octane, Photoshop',
      role: 'Environment Artist & Worldbuilder',
      image: 'assets/images/project-6-neonoasis.svg',
      mediaType: 'image',
      overview: 'Sprawling sci-fi megalopolis environment featuring atmospheric volumetric fog, neon advertisement arrays, and multithreaded sky-highway traffic.',
      details: [
        'Modular architectural kitbashing system with 120+ interchangeable skyscraper components.',
        'Procedural wet pavement shaders with realistic Fresnel reflections and rain puddles.',
        'Atmospheric depth compositing with bloom and anamorphic lens flare simulation.'
      ]
    },
    'project-7': {
      id: 'project-7',
      title: 'Pulse Energy Drink Dynamic 3D Commercial',
      category: '3D Animation',
      badgeText: '🎬 3D Animation',
      client: 'Pulse Beverage Corporation',
      year: '2026',
      tools: 'Houdini FX, Cinema 4D, Redshift, After Effects',
      role: 'Fluid Simulation & Lighting Specialist',
      image: 'assets/images/project-7-pulse.svg',
      mediaType: 'video',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      overview: 'High-octane broadcast commercial featuring zero-gravity liquid droplet explosions, macro can condensation, and energetic typography.',
      details: [
        'FLIP fluid dynamics solver in SideFX Houdini generating 18 million particles per frame.',
        'Macro surface tension modeling for dynamic water bead roll-down effects.',
        'Physically accurate aluminum metallic shaders with multi-layered micro-scratches.'
      ]
    },
    'project-8': {
      id: 'project-8',
      title: 'Prism Studio 3D Identity & Design System',
      category: 'Brand Identity',
      badgeText: '✨ Brand Identity',
      client: 'Prism Creative Technology',
      year: '2025',
      tools: 'Adobe Illustrator, Cinema 4D, Figma, InDesign',
      role: 'Lead Visual Identity Designer',
      image: 'assets/images/project-8-prism.svg',
      mediaType: 'image',
      overview: 'Modern corporate identity blending 3D chromatic optical geometry with typographic restraint across digital, print, and physical collateral.',
      details: [
        'Formulated a flexible mathematical grid system across logo mark, icon sets, and UI layouts.',
        'Produced 3D isometric stationery mockups with tactile embossing and spot UV varnish simulations.',
        'Published a 94-page comprehensive brand guideline manual for global consistency.'
      ]
    }
  };

  // =========================================================================
  // 2. NAVBAR SCROLL STATE & AUTO-CLOSE MOBILE MENU
  // =========================================================================
  const navbar = document.querySelector('.custom-navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const bsCollapse = navbarCollapse && window.bootstrap ? new window.bootstrap.Collapse(navbarCollapse, { toggle: false }) : null;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show') && bsCollapse) {
        bsCollapse.hide();
      }
    });
  });

  // Active link scrollspy via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // =========================================================================
  // 3. INTERACTIVE 3D HERO CANVAS (THREE.JS + PROCEDURAL FALLBACK)
  // =========================================================================
  const heroCanvas = document.getElementById('hero-3d-canvas');

  if (heroCanvas) {
    if (typeof THREE !== 'undefined') {
      try {
        initThreeHero(heroCanvas);
      } catch (err) {
        console.warn('Three.js initialization failed, falling back to procedural 2D canvas:', err);
        initProceduralCanvas(heroCanvas);
      }
    } else {
      initProceduralCanvas(heroCanvas);
    }
  }

  function initThreeHero(canvas) {
    const parent = canvas.parentElement;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, parent.clientWidth / parent.clientHeight, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(parent.clientWidth, parent.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 3D Geometric Torus Knot
    const geometry = new THREE.TorusKnotGeometry(1.05, 0.32, 128, 32);
    
    // Wireframe overlay
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.38
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMat);
    scene.add(wireframeMesh);

    // Inner Metallic Core
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x18102e,
      roughness: 0.25,
      metalness: 0.85,
      emissive: 0x3b0764,
      emissiveIntensity: 0.35
    });
    const coreMesh = new THREE.Mesh(geometry, coreMat);
    coreMesh.scale.set(0.98, 0.98, 0.98);
    scene.add(coreMesh);

    // Dynamic Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 4.5, 50);
    purpleLight.position.set(4, 4, 4);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 3.5, 50);
    cyanLight.position.set(-4, -3, 3);
    scene.add(cyanLight);

    // Floating Particle Dust
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 8;
      particlePos[i + 1] = (Math.random() - 0.5) * 8;
      particlePos[i + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc084fc,
      size: 0.04,
      transparent: true,
      opacity: 0.65
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Tracking Interactivity
    let targetX = 0;
    let targetY = 0;

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    });

    // Resize Handler
    window.addEventListener('resize', () => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      // Smooth rotation and mouse dampening
      wireframeMesh.rotation.x += 0.007;
      wireframeMesh.rotation.y += 0.009;
      coreMesh.rotation.x += 0.007;
      coreMesh.rotation.y += 0.009;

      wireframeMesh.rotation.x += (targetY - wireframeMesh.rotation.x) * 0.03;
      wireframeMesh.rotation.y += (targetX - wireframeMesh.rotation.y) * 0.03;
      coreMesh.rotation.x += (targetY - coreMesh.rotation.x) * 0.03;
      coreMesh.rotation.y += (targetX - coreMesh.rotation.y) * 0.03;

      particles.rotation.y -= 0.002;

      renderer.render(scene, camera);
    }

    animate();
  }

  function initProceduralCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    function resize() {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const nodes = [];
    const count = 35;
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 3 + 1.5
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.18)';
      ctx.lineWidth = 1;
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.fillStyle = '#c084fc';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }
    draw();
  }

  // =========================================================================
  // 4. ANIMATED STATS COUNTER ON SCROLL
  // =========================================================================
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNumbers.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          let current = 0;
          const increment = Math.ceil(target / 45);
          const stepTime = 25;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target + suffix;
              clearInterval(timer);
            } else {
              counter.textContent = current + suffix;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsContainer = document.querySelector('.hero-stats-bar');
  if (statsContainer) statsObserver.observe(statsContainer);

  // =========================================================================
  // 5. ANIMATED SKILL BARS ON SCROLL
  // =========================================================================
  const skillBars = document.querySelectorAll('.progress-bar-fill');
  let skillsAnimated = false;

  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !skillsAnimated) {
        skillsAnimated = true;
        skillBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = width + '%';
        });
      }
    });
  }, { threshold: 0.25 });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) skillsObserver.observe(skillsSection);

  // =========================================================================
  // 6. PROJECT GALLERY SEARCH & CATEGORY FILTER ENGINE
  // =========================================================================
  const searchInput = document.getElementById('projectSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-item-col');
  const emptyState = document.getElementById('projectsEmptyState');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const projectCountDisplay = document.getElementById('visibleProjectCount');

  let activeCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    let visibleCount = 0;

    projectCards.forEach(col => {
      const card = col.querySelector('.project-card');
      const category = card.getAttribute('data-category');
      const title = card.getAttribute('data-title').toLowerCase();
      const tags = card.getAttribute('data-tags').toLowerCase();
      const desc = card.querySelector('.project-desc').textContent.toLowerCase();

      const matchesCategory = (activeCategory === 'all' || category === activeCategory);
      const matchesSearch = (searchQuery === '' || 
        title.includes(searchQuery) || 
        tags.includes(searchQuery) || 
        desc.includes(searchQuery) || 
        category.toLowerCase().includes(searchQuery)
      );

      if (matchesCategory && matchesSearch) {
        col.style.display = 'block';
        visibleCount++;
      } else {
        col.style.display = 'none';
      }
    });

    if (projectCountDisplay) {
      projectCountDisplay.textContent = `Showing ${visibleCount} of ${projectCards.length} projects`;
    }

    if (emptyState) {
      emptyState.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
  }

  // Category Click Handler
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery.length > 0 ? 'inline-block' : 'none';
      }
      applyFilters();
    });
  }

  // Clear Search
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.style.display = 'none';
      searchInput.focus();
      applyFilters();
    });
  }

  // Reset Filters from Empty State
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
      activeCategory = 'all';
      filterButtons.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
      });
      applyFilters();
    });
  }

  // =========================================================================
  // 7. PROJECT DETAILS & MEDIA LIGHTBOX MODAL
  // =========================================================================
  const projectModalElement = document.getElementById('projectDetailsModal');
  const projectModal = projectModalElement && window.bootstrap ? new window.bootstrap.Modal(projectModalElement) : null;

  const modalTitle = document.getElementById('modalProjectTitle');
  const modalBadge = document.getElementById('modalProjectBadge');
  const modalClient = document.getElementById('modalProjectClient');
  const modalYear = document.getElementById('modalProjectYear');
  const modalRole = document.getElementById('modalProjectRole');
  const modalTools = document.getElementById('modalProjectTools');
  const modalOverview = document.getElementById('modalProjectOverview');
  const modalDetailsList = document.getElementById('modalProjectDetailsList');
  const modalMediaContainer = document.getElementById('modalMediaContainer');

  // Open Project Modal handler
  document.querySelectorAll('[data-bs-target="#projectDetailsModal"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectId = btn.getAttribute('data-project-id');
      const project = projectsData[projectId];

      if (!project) return;

      // Populate Texts
      if (modalTitle) modalTitle.textContent = project.title;
      if (modalBadge) modalBadge.textContent = project.badgeText;
      if (modalClient) modalClient.textContent = project.client;
      if (modalYear) modalYear.textContent = project.year;
      if (modalRole) modalRole.textContent = project.role;
      if (modalTools) modalTools.textContent = project.tools;
      if (modalOverview) modalOverview.textContent = project.overview;

      // Populate Bullets
      if (modalDetailsList) {
        modalDetailsList.innerHTML = '';
        project.details.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          modalDetailsList.appendChild(li);
        });
      }

      // Populate Media (Video or Image)
      if (modalMediaContainer) {
        modalMediaContainer.innerHTML = '';

        if (project.mediaType === 'video' && project.videoUrl) {
          const video = document.createElement('video');
          video.src = project.videoUrl;
          video.poster = project.image;
          video.controls = true;
          video.autoplay = true;
          video.loop = true;
          video.className = 'w-100 h-100 rounded';
          video.style.objectFit = 'contain';

          // Error handling fallback: if video stream fails or is offline, show fallback image with notification
          video.addEventListener('error', () => {
            console.warn('Video failed to stream, falling back to visual render frame.');
            modalMediaContainer.innerHTML = `
              <div class="position-relative w-100 h-100">
                <img src="${project.image}" alt="${project.title}" class="w-100 h-100" style="object-fit: cover;">
                <div class="position-absolute bottom-0 start-0 w-100 p-2 bg-dark bg-opacity-75 text-center text-white small">
                  <i class="bi bi-info-circle text-purple me-1"></i> Offline Mode: Displaying full-resolution 3D keyframe preview.
                </div>
              </div>
            `;
          });

          modalMediaContainer.appendChild(video);
        } else {
          const img = document.createElement('img');
          img.src = project.image;
          img.alt = project.title;
          img.className = 'w-100 h-100';
          img.style.objectFit = 'contain';
          modalMediaContainer.appendChild(img);
        }
      }
    });
  });

  // Pause video when project modal closes
  if (projectModalElement) {
    projectModalElement.addEventListener('hidden.bs.modal', () => {
      const video = projectModalElement.querySelector('video');
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  // =========================================================================
  // 8. SHOWREEL MODAL VIDEO CONTROLS
  // =========================================================================
  const showreelModalElement = document.getElementById('showreelModal');
  const showreelVideo = document.getElementById('showreelVideoPlayer');

  if (showreelModalElement && showreelVideo) {
    showreelModalElement.addEventListener('shown.bs.modal', () => {
      showreelVideo.play().catch(e => console.log('Autoplay prevented by browser:', e));
    });

    showreelModalElement.addEventListener('hidden.bs.modal', () => {
      showreelVideo.pause();
      showreelVideo.currentTime = 0;
    });
  }

  // =========================================================================
  // 9. RESUME DOWNLOAD FEEDBACK
  // =========================================================================
  const downloadResumeBtn = document.getElementById('downloadResumeBtn');
  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', () => {
      // Create quick visual feedback
      const originalHTML = downloadResumeBtn.innerHTML;
      downloadResumeBtn.innerHTML = '<i class="bi bi-check2-circle text-success"></i> Downloading CV...';
      downloadResumeBtn.classList.add('disabled');

      setTimeout(() => {
        downloadResumeBtn.innerHTML = originalHTML;
        downloadResumeBtn.classList.remove('disabled');
      }, 2500);
    });
  }

  // =========================================================================
  // 10. CONTACT FORM VALIDATION & SUBMISSION
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const formSuccessBanner = document.getElementById('formSuccessBanner');
  const formSubmitBtn = document.getElementById('formSubmitBtn');
  const resetFormStateBtn = document.getElementById('resetFormStateBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      let isValid = true;

      // Inputs to validate
      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const roleSelect = document.getElementById('contactRole');
      const subjectInput = document.getElementById('contactSubject');
      const messageInput = document.getElementById('contactMessage');

      // Helper validator
      function validateField(input, condition) {
        if (!condition) {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
        }
      }

      // Name validation
      validateField(nameInput, nameInput.value.trim().length >= 2);

      // Email validation (regex)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      validateField(emailInput, emailPattern.test(emailInput.value.trim()));

      // Role select validation
      validateField(roleSelect, roleSelect.value !== '');

      // Subject validation
      validateField(subjectInput, subjectInput.value.trim().length >= 3);

      // Message validation
      validateField(messageInput, messageInput.value.trim().length >= 10);

      // Live validation on typing
      [nameInput, emailInput, roleSelect, subjectInput, messageInput].forEach(field => {
        field.addEventListener('input', () => {
          if (field === emailInput) {
            validateField(emailInput, emailPattern.test(emailInput.value.trim()));
          } else if (field === messageInput) {
            validateField(messageInput, messageInput.value.trim().length >= 10);
          } else {
            validateField(field, field.value.trim().length > 0);
          }
        });
      });

      if (!isValid) return;

      // Simulate sending state
      const originalBtnContent = formSubmitBtn.innerHTML;
      formSubmitBtn.disabled = true;
      formSubmitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Sending Transmission...
      `;

      setTimeout(() => {
        // Success
        formSubmitBtn.disabled = false;
        formSubmitBtn.innerHTML = originalBtnContent;
        contactForm.reset();
        [nameInput, emailInput, roleSelect, subjectInput, messageInput].forEach(f => {
          f.classList.remove('is-valid', 'is-invalid');
        });

        contactForm.style.display = 'none';
        if (formSuccessBanner) {
          formSuccessBanner.style.display = 'block';
          formSuccessBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 1200);
    });
  }

  if (resetFormStateBtn) {
    resetFormStateBtn.addEventListener('click', () => {
      if (formSuccessBanner) formSuccessBanner.style.display = 'none';
      if (contactForm) {
        contactForm.style.display = 'block';
        contactForm.reset();
      }
    });
  }

  // =========================================================================
  // 11. BACK TO TOP BUTTON
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  console.log('⚡ Alex Vance 3D & Motion Portfolio Engine Initialized.');
});
