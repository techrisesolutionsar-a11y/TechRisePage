    // Mobile menu (simple reveal)
    const toggle = document.querySelector('.mobile-toggle');
    toggle?.addEventListener('click', () => {
      const nav = document.querySelector('nav ul');
      const open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '.4rem';
      toggle.setAttribute('aria-expanded', String(!open));
    });

    // Smooth hash scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
      });
    });

    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Fake form handler (replace with your backend or Formspree)
    const form = document.getElementById('contactForm');
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      // Basic validation
      const data = Object.fromEntries(new FormData(form).entries());
      if(!data.name || !data.email || !data.message){
        alert('Please complete name, email, and project details.');
        return;
      }
      // Example: open mailto as fallback
      const subject = encodeURIComponent(`[Quote] ${data.service || 'Service'} — ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || ''}`);
      window.location.href = `mailto:hello@novabyte.dev?subject=${subject}&body=${body}`;
      document.getElementById('successMsg').style.display = 'block';
      form.reset();
    });