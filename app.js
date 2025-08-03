const pages = {
  home: `
    <!-- ✅ ADDED: Carousel Section -->
    <section>
      <h2>Upcoming Events</h2>
      <div class="carousel">
        <div class="carousel-item" onclick="navigate('events')">
          <img src="SEM-images/MarathonMania.png" alt="Marathon Mania">
        </div>
        <div class="carousel-item" onclick="navigate('events')">
          <img src="SEM-images/polarPlunge2025.jpg" alt="Polar Plunge"> 
        </div>
        <div class="carousel-item" onclick="navigate('events')">
          <img src="SEM-images/rockStock.png" alt="Beach Yoga">
        </div>
        <div class="carousel-item" onclick="navigate('events')">
          <img src="SEM-images/coedSoccerTeam.jpg" alt="Coed Soccer Tournament">
        </div>
      </div>
    </section>

    <!-- ✅ ADDED: About Section -->
    <section>
      <h2>About Smile Every Mile</h2>
      <p>Get to Know Us: ​Our story is simple. Founded in October 2024, we are a group connected through our fitness journeys, who want to help our communities of Quincy and Dorchester...</p>
    </section>

    <!-- ✅ ADDED: Athlete Highlights -->
    <section>
      <h2>Smile Every Mile Athletes</h2>
      <div class="athletes-grid">
        <div class="athlete-card">
          <img src="SEM-images/TaraSoccer.jpg" alt="Tara McCleary" />
          <p>Tara McCleary</p>
        </div>
        <div class="athlete-card">
          <img src="SEM-images/headshot.jpeg" alt="Michelle Cannon" />
          <p>Michelle Cannon</p>
        </div>
        <div class="athlete-card">
          <img src="SEM-images/dereksPic.jpeg" alt="Derek McCleary" />
          <p>Derek McCleary</p>
        </div>
        <div class="athlete-card">
          <img src="SEM-images/meganC.jpeg" alt="Megan Cormican" />
          <p>Megan Cormican</p>
        </div>
      </div>
    </section>
  `,

  events: `
    <section>
      <h1>Upcoming Events</h1>
      <div class="event-grid">
        <div class="event-card">
          <img src="SEM-images/MarathonMania.png" alt="Marathon Mania" />
          <h3>Marathon Mania</h3>
          <p class="date">Date: 2025-08-01</p>
          <p class="description">Join us to support our group of Marathon runners this year!</p>
        </div>

        <div class="event-card">
          <img src="SEM-images/rockStock.png" alt="Beach Yoga" />
          <h3>Beach Yoga</h3>
          <p class="date">Date: 2025-09-10</p>
          <p class="description">Experience the thrill of free yoga on the beach</p>
        </div>

        <div class="event-card">
          <img src="SEM-images/coedSoccerTeam.jpg" alt="Coed Soccer Tournament" />
          <h3>Coed Soccer Tournament</h3>
          <p class="date">Date: 2025-10-05</p>
          <p class="description">Teams compete in a friendly community soccer event. Fun for all ages!</p>
        </div>
      </div>
    </section>

    <section>
      <h2>Past Events</h2>
      <div class="event-grid">
        <div class="event-card">
          <img src="SEM-images/MarathonPic.png" alt="Marathon Mania" />
          <h3>Marathon Mania</h3>
          <p class="date">Date: 2025-08-01</p>
          <p class="description">Join us to support our group of Marathon runners this year!</p>
        </div>

        <div class="event-card">
          <img src="SEM-images/rockStock.png" alt="Beach Yoga" />
          <h3>Beach Yoga</h3>
          <p class="date">Date: 2025-09-10</p>
          <p class="description">Experience the thrill of free yoga on the beach</p>
        </div>

        <div class="event-card">
          <img src="SEM-images/polarPlunge2025.jpg" alt="Polar Plunge" />
          <h3>Polar Plunge</h3>
          <p class="date">Date: 2025-10-05</p>
          <p class="description">Teams compete in a friendly community soccer event. Fun for all ages!</p>
        </div>
      </div>
    </section>
  `,

  about: `
    <!-- ✅ Our Mission -->
    <section>
      <h2>Our Mission</h2>
      <p>
        Our mission is twofold: we host community wellness events and sporting activities to fundraise for our Good Neighbor Fund.
        SEM promotes health and wellness through sporting events such as road races, bike rides, walks, sports camps, clinics, and tournaments. Our mission is to inspire active lifestyles while fostering community engagement.
        All net proceeds from our events directly support our Good Neighbor Fund...
      </p>
    </section>

    <!-- ✅ Meet the Team -->
    <section>
      <h2>Meet the Team</h2>
      <div class="team-grid">
        <div class="team-member">
          <img src="SEM-images/MichelleHeadshot.jpeg" alt="Michelle - Team Leader" />
          <h3>Michelle Cannon</h3>
          <p class="role">Board Member </p>
          <p class="description">Michelle is an education administrator with 20 years experience...</p>
        </div>

        <div class="team-member">
          <img src="SEM-images/dereksPic.jpeg" alt="Derek Headshot" />
          <h3>Derek McCleary</h3>
          <p class="role">Founder & President</p>
          <p class="description">Derek is an SVP for TD Bank and has been working in banking and finance for 36 years...</p>
        </div>

        <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3>Rita Bailey</h3>
          <p class="role">Board Member</p>
          <p class="description">Rita is a Registered Nurse whose past experiences include working as a staff nurse...</p>
        </div>

        <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3>Christine Bailey</h3>
          <p class="role">Board Member</p>
          <p class="description">Christine has worked in the healthcare industry for 25 years and is a life long volunteer...</p>
        </div>

        <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3>Jared McCleary</h3>
          <p class="role">Board Member</p>
          <p class="description">Jared ran his first Marathon at 19 and is a former division 1 soccer player...</p>
        </div>

        <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3>Shannon McCleary</h3>
          <p class="role">Chief People Officer</p>
          <p class="description">Shannon's passion knows no bounds... eager to find a way back into athletics she loves.</p>
        </div>

        <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3>Caitlin McCleary</h3>
          <p class="role">Social Media Coordinator</p>
          <p class="description">Caitlin is a former college soccer player, current travel team coach and avid runner.</p>
        </div>

        <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3>Tara McCleary</h3>
          <p class="role">Marketing Specialist</p>
          <p class="description">Tara has a lot of friends</p>
        </div>
      </div>
    </section>
  `,

  contact: `
    <section>
      <h1>Contact Us</h1>
      <p>If you'd like to get in touch, please send us an email at 
        <a href="mailto:damccleary@yahoo.com">damccleary@yahoo.com</a>.
      </p>
    </section>

    <section>
      <h2>Support Our Mission</h2>
      <p>Your donations help us continue encouraging athletes and organizing community events.</p>
      <div class="donate-options
          <div class="donate-card">
          <h3>Donate via PayPal</h3>
          <p><a href="#">paypal.me/yourcharity</a></p>
        </div>
        <div class="donate-card">
          <h3>Donate via Venmo</h3>
          <p><a href="#">@your-venmo-handle</a></p>
        </div>
      </div>
    </section>
  `,
};




function navigate(page) {
  const content = document.getElementById('content');
  content.innerHTML = pages[page] || pages['home'];
  setupCarouselAutoscroll();

  // Hide mobile menu on navigation
  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth <= 768 && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
  }

  // Update URL hash
  location.hash = page;
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

function setupCarouselAutoscroll() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const items = carousel.querySelectorAll('.carousel-item');
  const scrollStep = carousel.clientWidth;
  const scrollInterval = 3000;
  let scrollAmount = 0;

  // Avoid duplicate indicators
  const parent = carousel.parentElement;
  const oldIndicators = parent.querySelector('.carousel-indicators');
  if (oldIndicators) oldIndicators.remove();

  // Create new indicators
  const indicatorsContainer = document.createElement('div');
  indicatorsContainer.classList.add('carousel-indicators');

  items.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('indicator-dot');
    if (index === 0) dot.classList.add('active');
    dot.dataset.index = index;

    dot.addEventListener('click', () => {
      scrollAmount = index * scrollStep;
      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      updateActiveIndicator(index);
    });

    indicatorsContainer.appendChild(dot);
  });

  parent.appendChild(indicatorsContainer);

  function updateActiveIndicator(activeIndex) {
    indicatorsContainer.querySelectorAll('.indicator-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }

  // Auto scroll
  let intervalId = setInterval(() => {
    scrollAmount += scrollStep;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    }
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });

    const index = Math.round(scrollAmount / scrollStep);
    updateActiveIndicator(index);
  }, scrollInterval);

  // Clear previous intervals when navigating
  if (setupCarouselAutoscroll.intervalId) {
    clearInterval(setupCarouselAutoscroll.intervalId);
  }
  setupCarouselAutoscroll.intervalId = intervalId;
}

// Handle initial load and hash changes
window.onload = () => {
  const page = location.hash.replace('#', '') || 'home';
  navigate(page);
};

window.addEventListener('hashchange', () => {
  const page = location.hash.replace('#', '') || 'home';
  navigate(page);
});
