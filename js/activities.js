// Activity section 

// Activty Data
const activities = [
  {
    title: "Boat Ride",
    description:
      "Glide through serene waters and enjoy scenic views on our family-friendly boat rides.",
    image: "./assets/images/boat-ride.webp",
    price: "₦3,000 per person",
  },
  {
    title: "Train Ride",
    description:
      "Enjoy a smooth fun and exciting ride on a colourful train, perfect for children.",
    image: "./assets/images/train-ride.webp",
    price: "₦900 per person",
  },
  {
    title: "Swimming",
    description:
      "Have fun swimming in a conducive, neat, and cool swimming pool perfect for all ages.",
    image: "./assets/images/swimming.webp",
    price: "₦1,000 per person",
  },
  {
    title: "Obstacle Course",
    description:
      "Challenge yourself with exciting obstacles—perfect for teens, adults, and team bonding!",
    image: "./assets/images/man-climbing.webp",
    price: "₦2,500 per entry",
  },
  {
    title: "Kids Playground",
    description:
      "Safe, fun, and exciting play zones designed especially for kids aged 2–10.",
    image: "./assets/images/kids-play.webp",
    price: "₦1,000 per child",
  },
  {
    title: "Go-Kart Racing",
    description:
      "Feel the adrenaline rush with our safe and exciting go-kart track. Fun for thrill-seekers of all ages!",
    price: "₦900 for 10 minutes",
    image: "./assets/images/kart-ride.webp",
  },
  {
    title: " Ferris Wheel Ride",
    description:
      "Soar above the park! Enjoy panoramic views of the city and park from our stunning Ferris wheel — a perfect experience for families, couples, and first-time visitors.",
    price: "₦1,000 for 10 minutes",
    image: "./assets/images/ferris.webp",
  },
  {
    title: "Face Painting ",
    description:
      "Magic for little visitors. From colorful face painting to mini games and craft tables, our Kids Corner keeps young ones smiling and entertained.",
    price: "₦1,000 for 10 minutes",
    image: "./assets/images/paint.webp",
  },
  {
    title: " Fitness Walk",
    description:
      "Breathe, walk, refresh. Our lush, paved walkways are perfect for your morning jog or evening stroll. Recharge your body and mind surrounded by nature.",
    price: "₦8,000 for 10 minutes",
    image: "./assets/images/fitness-walk.webp",
  },
  {
    title: "Outdoor Cinema Experience",
    description:
      "Movies under the stars. Catch the latest family-friendly films in our open-air cinema. Grab a seat, a snack, and enjoy entertainment in the heart of nature.",
    price: "₦5,000 for 10 minutes",
    image: "./assets/images/cinema.webp",
  },
  {
    title: "Bouncing",
    description:
      "Feel the adrenaline rush with our safe and exciting bouncing castle. Fun for kids, and teens!",
    price: "₦900 for 10 minutes",
    image: "./assets/images/bouncing.webp",
  },
  {
    title: "Paint-Ball",
    description:
      "Form colorful  painting on walls while shooting colorful balls , entertaining for teens and adults.",
    price: "₦1,000",
    image: "./assets/images/paintball.webp",
  },
  {
    title: "Picnic",
    description:
      "Unwind with a view. Bring a blanket and enjoy a calm evening under the golden sunset. Our picnic spots are perfect for romantic dates or family bonding.",
    price: "₦2,000",
    image: "./assets/images/picnic.webp",
  },
  {
    title: "Bicycle Rentals",
    description:
      "Explore on wheels. Cruise the scenic paths of Pleasure Park with our affordable bike rentals. Choose from solo or tandem bikes for a fun and active day out.",
    price: "₦1,000 for 30 minutes",
    image: "./assets/images/bicycle.webp",
  },
  {
    title: "Kids Playground",
    description:
      "Safe, fun, and exciting play zones designed especially for kids aged 2–10.",
    image: "./assets/images/kids-play.webp",
    price: "₦1,000 per child",
  },
];

const grid = document.getElementById("activity-grid");

  activities.forEach((activity, index) => {
    const card = document.createElement("div");
    card.className =
      "opacity-0 translate-y-10 transition duration-700 ease-out bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:border-card border-2";

    card.innerHTML = `
      <div class="h-48 w-full overflow-hidden">
        <img src="${activity.image}" loading="lazy" alt="${activity.title}" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-col justify-between flex-grow p-6 text-justify">
        <div>
          <h3 class="text-xl font-semibold mb-2 text-green-700">${activity.title}</h3>
          <p class="text-gray-600 mb-4">${activity.description}</p>
        </div>
        <p class="text-sm font-bold text-gray-500">${activity.price}</p>
      </div>
    `;

    card.dataset.index = index;
    grid.appendChild(card);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const index = parseInt(el.dataset.index);
          setTimeout(() => {
            el.classList.remove("opacity-0", "translate-y-10");
            el.classList.add("opacity-100", "translate-y-0");
          }, index * 150);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("#activity-grid > div").forEach((card) =>
    observer.observe(card)
  );



// Menu button 

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Open mobile menu
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
  });

  // Close mobile menu with close button
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");
    });
  }

  // Close mobile menu when any nav link is clicked
  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");
    });
  });
});




