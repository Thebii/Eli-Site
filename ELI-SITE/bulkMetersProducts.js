const products = [
  {
    id: "A1700",
    name: "Elster A1700 Bulk Meter",
    img: "images/Elster_A1700_Bulk_Meter.png",
    description: `The A1700 from Elster is a high-quality, robust smart meter designed for commercial and industrial applications. It supports direct connect and CT metering options, making it ideal for large-scale energy monitoring. Available ex-stock and supported with expert technical advice.

    - Available in 100A Direct or 5A/1A CT & CT/VT variants.
    - Measures kWh, kvarh, kVA in four quadrants.
    - Supports 32 Time-of-Use and 8 Maximum Demand tariffs.
    - High-accuracy metering: Class 0.2 or 0.5s (CT), Class 1.0 (Direct).
    - Dual kVA registers with 5 co-incident demand values.
    - 450 days of load profiling and 370 days instrumentation profiling.
    - Backup battery for real-time clock during power loss.
    - Multi-function dot matrix display with OBIS codes.
    - Supports up to 5 input summations and voltage imbalance detection.
    - Two module slots for extended features (e.g., communication).
    - RS485 bus for up to 32 meters (multi-drop).
    - 4 pulse outputs and rapid data transfer mode.
    - Compatible with SMARTset software and AMI/AMR solutions.
    - Designed for a long 15-year service life.`,
  },
  {
    id: "A1140",
    name: "Elster A1140 Bulk Meter",
    img: "images/Elster_A1140_Bulk_Meter.png",
    description: `The A1140 is a versatile smart meter for industrial and commercial use, offering both CT-operated (5A) and direct connect (100A) options. It supports advanced tariff and load profiling features, making it ideal for standalone use or part of an AMI/AMR system.

    - Measures kWh, kvarh, and kVA in four quadrants
    - 8 Time-of-Use and 4 Maximum Demand tariffs
    - Accuracy Class: 0.5 (CT) and 1.0 (Direct)
    - 300 days of load profile data
    - Battery backup for clock/calendar lasts the meter's full lifespan
    - Secure, compact design with tamper detection on main and terminal covers
    - LCD display with instrumentation readouts
    - RJ11 port for RS232; RS485 multi-drop (up to 32 meters)
    - Dual kVA registers + relay pulse output
    - Fast data access with Data Stream Mode
    - Works with Power Master Unit software
    - 15-year design life`,
  },
  {
    id: "AM540",
    name: "Elster AM540 Bulk Meter",
    img: "images/Elster_AM540_Bulk_Meter.jpg",
    description: `
    The AM540 from Honeywell Smart Energy is a direct-connected smart meter designed for today’s smart grid and AMR systems. It offers flexible communication options, advanced metering features, and built-in tamper protection.

    - 4-quadrant energy measurement (import/export active & reactive)
    - 8 energy and 4 demand tariffs with independent control
    - Integrated tariff clock and advanced load measurement
    - Optical port and OBIS-compliant interface for local reading
    - Real-time clock backed by supercapacitor, internal, and optional external battery
    - Optional disconnect relay (up to 100A) for remote control and load limiting
    - Local readout available even during power outage
    - Designed for easy integration with smart grid infrastructure
    - MID and PTB certified (Germany)`,
  },
];

const container = document.querySelector(".gallery-grid");
const backLink = document.referrer.includes("bulkMeters.html")
  ? "bulkMeters.html"
  : "bulkMeters.html";

localStorage.setItem("products", JSON.stringify(products));

products.forEach((product) => {
  const card = document.createElement("a");
  card.href = `product.html?id=${product.id}`;
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
  `;
  container.appendChild(card);
});

const menu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelector('.navbar_menu');

  function scrollGallery(direction) {

    const gallery = document.getElementById('productGallery');
    const scrollAmount = 300;
    gallery.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
  
menu.addEventListener('click', () => {
      const open = menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
      menu.setAttribute('aria-expanded', open);
    });

  document.addEventListener('click', function (event) {
    const isMenuOpen = menu.classList.contains('is-active');
    if (isMenuOpen && !menu.contains(event.target) && !menuLinks.contains(event.target)) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    }
  });
  menuLinks.addEventListener('click', function (event) {
    event.stopPropagation();
  });

// close on link click
menuLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    menu.classList.remove('is-active');   
    menuLinks.classList.remove('active');
  })
);

menuLinks.addEventListener('click', function (event) {
    event.stopPropagation();
    });
