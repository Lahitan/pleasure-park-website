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
    price: "₦5,000 for 10 minutes",
    image: "./assets/images/kart-ride.webp",
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

document
  .querySelectorAll("#activity-grid > div")
  .forEach((card) => observer.observe(card));

// -----Prising Section Intersection Observer-----

const cards = document.querySelectorAll(".pricing-card");

const observe = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "scale-100");
        entry.target.classList.remove("opacity-0", "scale-95");
        observe.unobserve(entry.target); // Animate only once
      }
    });
  },
  {
    threshold: 0.2,
  }
);

cards.forEach((card) => {
  observe.observe(card);
});

// Data for Hotels nearby

const hotelGrid = [
  {
    name: "Trulli Hotels",
    address:
      "No. 12, faith avenue behind yakubu gowon stadium rumuomasi, Port Harcourt",
    distance: "6 mins",
    priceRange: "₦20,000 - ₦50,000 / night",
    rating: 4.5,
    phone: "+234 908 843 1910",
    website: "https://hotels.ng/hotel/1392337-trulli-hotel",
    image: "./assets/images/hotel-1.webp",
  },
  {
    name: "Emerald Hotels",
    address: "193 Port Harcourt-Aba, Express Road, Rumuola, Port Harcourt",
    distance: "5 mins",
    priceRange: "₦20,000 - ₦40,000 / night",
    rating: 4.7,
    phone: "+234 803 099 1610",
    website:
      "https://www.tripadvisor.com/Hotel_Review-g298363-d7336819-Reviews-Emerald_Hotel-Port_Harcourt_Rivers_State.html",
    image: "./assets/images/hotel-2.webp",
  },
  {
    name: "Hotel Presidential",
    address: "I Birabi Street, Port Harcourt - Aba Expy, Port Harcourt",
    distance: "8 mins",
    priceRange: "₦80,000 - ₦150,000 / night",
    rating: 4.2,
    phone: "+234 345 678 9012",
    website:
      "https://www.booking.com/hotel/ng/presidential-port-harcourt1.html?aid=356980&label=gog235jc-1DCAsopwFCG3ByZXNpZGVudGlhbC1wb3J0LWhhcmNvdXJ0MUgzWANopwGIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4Apu4v8EGwAIB0gIkM2ZiYTE0ZTktMGVjMC00ZjEzLThhOGUtNDFlOWZkMTRiODI22AIE4AIB&sid=abc7ddc05f2192bc5872e272c769915c&all_sr_blocks=1151071801_387900872_2_1_0&checkin=2025-05-24&checkout=2025-05-25&dest_id=393272&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1151071801_387900872_2_1_0&hpos=1&matching_block_id=1151071801_387900872_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1151071801_387900872_2_1_0__10600&srepoch=1747967031&srpvid=14f810cefa17027e&type=total&ucfs=1&",
    image: "./assets/images/hotel-3.webp",
  },
  {
    name: "CZ Hotel",
    address: "Mummy B Road, 1A Ezimgbu Road, New GRA, Port Harcourt",
    distance: "4 mins",
    priceRange: "₦30,000 - ₦50,000 / night",
    rating: 4.7,
    phone: "+234 907 751 5101",
    website:
      "https://www.google.com/travel/search?q=hotels%20around%20pleasure%20park%20port%20harcourt&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72832976%2C72882230%2C72885032%2C72946003%2C72948010%2C72958594%2C72958624%2C72959982%2C72969407&hl=en-NG&gl=ng&ssta=1&ts=CAESCgoCCAMKAggDEAAaRgooEiYyJDB4MTA2OWNkZTBhOGM0YTg5NzoweGM3ZmIyMTk1NjNhOTcyNhIaEhQKBwjpDxAFGBgSBwjpDxAFGBkYATICEAAqBwoFOgNOR04&qs=CAEyKENob0k3WXVKMmJHa21fcWJBUm9OTDJjdk1URnJjbWcyYkdneGR4QUI4BkIJEb4Np-xDCs2qQgkRTObyZJrFdi5CCRETn6vyXmZQBlp0CAEycKoBbQoNL2cvMTFienl3N2gwMBABKgoiBmhvdGVscygAMh8QASIbUv5QZ4sqG7iGbIIYPRiaCr7dvz9ySuoMTfjvMi0QAiIpaG90ZWxzIGFyb3VuZCBwbGVhc3VyZSBwYXJrIHBvcnQgaGFyY291cnQ&ap=KigKEgk6s-g3W0UTQBHTHIbQTAUcQBISCUIg-nckVRNAEdMchnAcDhxAMABoAQ&ictx=111&ved=0CAAQ5JsGahgKEwjIp7norrmNAxUAAAAAHQAAAAAQiwE",
    image: "./assets/images/hotel-6.webp",
  },
  {
    name: "D’Dov Guest House",
    address:
      "Estate, 5A Chief, Worlu Eguma Street, Ibologi Road, Rumuigbo, Port Harcourt",
    distance: "12 mins",
    priceRange: "₦20,000 - ₦40,000 / night",
    rating: 4.6,
    phone: "+234 802 461 84631",
    website:
      "https://www.google.com/travel/search?q=hotels%20around%20pleasure%20park%20port%20harcourt&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72832976%2C72882230%2C72885032%2C72946003%2C72948010%2C72958594%2C72958624%2C72959982%2C72969407&hl=en-NG&gl=ng&ssta=1&ts=CAESCgoCCAMKAggDEAAaSAooEiYyJDB4MTA2OWNkZTBhOGM0YTg5NzoweGM3ZmIyMTk1NjNhOTcyNhIcEhQKBwjpDxAFGBgSBwjpDxAFGBkYATIECAAQACoHCgU6A05HTg&qs=CAEyJ0Noa0lzOUxqcDYzSzRQTXNHZzB2Wnk4eE1YWnJjak5yWXpNd0VBRTgGQgkRvg2n7EMKzapCCRFM5vJkmsV2LkIJEROfq_JeZlAGSABadAgBMnCqAW0KDS9nLzExYnp5dzdoMDAQASoKIgZob3RlbHMoADIfEAEiG1L-UGeLKhu4hmyCGD0Ymgq-3b8_ckrqDE347zItEAIiKWhvdGVscyBhcm91bmQgcGxlYXN1cmUgcGFyayBwb3J0IGhhcmNvdXJ0&ap=KigKEgkeEaYSp2MTQBFVWZ1xgPEbQBISCSkCeyVwcxNAEVVZnRFQ-htAMABoAboBBnByaWNlcw&ictx=111",
    image: "./assets/images/hotel-5.webp",
  },
  {
    name: "Valentino Swiss Hotel",
    address:
      "Along Airforce Eliozu Road, Plot 220 GRA Phase 8 off GU, Aker Road, opposite NAF Harmony Estate, Port Harcourt",
    distance: "2 mins",
    priceRange: "₦45,000 - ₦100,000 / night",
    rating: 4.7,
    phone: "+234 903 504 1749",
    website: "https://valentinoswiss.com/",
    image: "./assets/images/hotel-4.webp",
  },
];

const hotels = document.getElementById("hotels");

hotelGrid.forEach((hotel, index) => {
  const hotelCard = document.createElement("div");
  hotelCard.className =
    "opacity-0 translate-y-10 transition duration-700 ease-out bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:border-card border-2";

  hotelCard.innerHTML = `
    <div class="h-48 w-full overflow-hidden">
      <img src="${hotel.image}" loading="lazy" alt="${hotel.name}" class="w-full h-full object-cover">
    </div>
    <div class="flex flex-col justify-between flex-grow p-6 text-justify">
      <div>
        <h3 class="text-xl font-semibold mb-2 text-green-700">${hotel.name}</h3>
        <p class="text-gray-600 mb-2">${hotel.address}</p>
        <p class="text-gray-600 mb-2 ">Distance: <img src="./assets/icons/car.svg" width="20px" height="17px" class="inline-block opacity-10"> ${hotel.distance}</p>
        <p class="text-yellow-500 font-medium mb-1">⭐ ${hotel.rating}</p>
        <p class="text-gray-600 mb-2">${hotel.phone}</p>
        <a href="${hotel.website}" target="_blank" class="text-gray-400 font-bold hover:underline">Check Hotel</a>
      </div>
      <p class="text-sm font-bold text-gray-500 mt-4">${hotel.priceRange}</p>
    </div>
  `;

  hotelCard.dataset.index = index;
  hotels.appendChild(hotelCard);
});

const viewObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const index = parseInt(target.dataset.index);
        setTimeout(() => {
          target.classList.remove("opacity-0", "translate-y-10");
          target.classList.add("opacity-100", "translate-y-0");
        }, index * 150);
        viewObserver.unobserve(target); // fix: add (target)
      }
    });
  },
  { threshold: 0.1 }
);

// Observe all cards after they're added
document
  .querySelectorAll("#hotels > div")
  .forEach((hotelCard) => viewObserver.observe(hotelCard));

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
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");
    });
  });
});

//Testimonial functionality

const slider = document.getElementById("slider-wrapper");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-sky", i === index); // Highlight active
    dot.classList.toggle("bg-gray-300", i !== index);
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    index = parseInt(dot.dataset.index);
    showSlide(index);
  });
});

// Optional: auto-slide every 6 seconds
// setInterval(() => {
//   index = (index + 1) % dots.length;
//   showSlide(index);
// }, 6000);

showSlide(0); // Initialize

// Form functionaity
const form = document.querySelector("form");
const responseMsg = document.getElementById("form-response");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      responseMsg.classList.remove("hidden");
      form.reset();
    } else {
      responseMsg.textContent = "Oops! Something went wrong.";
      responseMsg.classList.remove("hidden");
      responseMsg.classList.replace("text-green-600", "text-red-600");
    }
  });
});

//Booking Modal Overlay
function openModal(plan, price) {
  document.getElementById("booking-modal").classList.remove("hidden");
  document.getElementById("plan-name").textContent = plan + " Plan";
  document.getElementById("plan-price").textContent = price;
  document.getElementById("plan-amount").value = price
    .replace(/[₦,]/g, "")
    .trim();
}

function closeModal() {
  document.getElementById("booking-modal").classList.add("hidden");
}

function payWithPaystack() {
  const email = document.getElementById("user-email").value;
  const amount = parseInt(document.getElementById("plan-amount").value) * 100; // convert to kobo
  const name = document.getElementById("user-name").value;

  if (!email || !amount || !name) {
    alert("Please fill all fields");
    return;
  }

  const handler = PaystackPop.setup({
    key: "pk_test_be52a45a74922d0abfddcb59d862d9bacf21f686", // Replace with your Paystack public key
    email: email,
    amount: amount,
    currency: "NGN",
    ref: "PP_" + Math.floor(Math.random() * 1000000000), // Unique transaction reference
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: name,
        },
      ],
    },
    callback: function (response) {
      alert("Payment successful! Reference: " + response.reference);
      closeModal();
    },
    onClose: function () {
      alert("Payment cancelled");
    },
  });

  handler.openIframe();
}
