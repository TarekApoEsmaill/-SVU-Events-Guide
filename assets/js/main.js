/* بيانات الفعاليات  */
const eventsData = [
  {
    id: 1,
    title: "معرض الكتاب الجامعي",
    category: "culture",
    categoryName: "ثقافة",
    date: "2026-11-15",
    location: "قاعة المكتبة الرئيسية",
    image: "Books-1.jpg",
    description: "معرض سنوي للكتب الأكاديمية والأدبية مع توقيع مؤلفين وجلسات نقاش.",
    featured: true
  },
  {
    id: 2,
    title: "أمسية مسرحية",
    category: "culture",
    categoryName: "ثقافة",
    date: "2026-11-18",
    location: "المسرح الجامعي",
    image: "Books-2.jpg",
    description: "أمسية مسرحية يقدمها طلاب كلية الآداب بمشاركة فرق فنية.",
    featured: false
  },
  {
    id: 3,
    title: "بطولة كرة القدم",
    category: "sports",
    categoryName: "رياضة",
    date: "2026-11-22",
    location: "الملعب الجامعي",
    image: "Sport-2.jpg",
    description: "بطولة سنوية بين كليات الجامعة بمشاركة واسعة.",
    featured: true
  },
  {
    id: 4,
    title: "بطولة الكرة الطائرة",
    category: "sports",
    categoryName: "رياضة",
    date: "2026-11-25",
    location: "الصالة الرياضية",
    image: "Sport-1.jpg",
    description: "منافسات رياضية بين فرق الجامعة في الكرة الطائرة.",
    featured: false
  },
  {
    id: 5,
    title: "حفل موسيقي",
    category: "music",
    categoryName: "موسيقى",
    date: "2026-12-01",
    location: "المسرح الكبير",
    image: "music-1.jpg",
    description: "حفل موسيقي يقدمه طلاب قسم الموسيقى بمقطوعات متنوعة.",
    featured: true
  },
  {
    id: 6,
    title: "حفل الأوركسترا",
    category: "music",
    categoryName: "موسيقى",
    date: "2026-12-10",
    location: "المسرح الكبير",
    image: "music-2.jpg",
    description: "أداء أوركسترا الجامعة لمقطوعات عالمية وشرقية.",
    featured: false
  },
  {
    id: 7,
    title: "مؤتمر التقنية والابتكار",
    category: "tech",
    categoryName: "تقنية",
    date: "2026-12-05",
    location: "قاعة المؤتمرات",
    image: "code-1.jpg",
    description: "متحدثون من شركات تقنية كبرى وجلسات نقاش حول الابتكار.",
    featured: true
  },
  {
    id: 8,
    title: "ورشة البرمجة",
    category: "tech",
    categoryName: "تقنية",
    date: "2026-12-15",
    location: "مختبر الحاسوب",
    image: "code-2.jpg",
    description: "ورشة عملية لبناء أول تطبيق ويب باستخدام HTML و CSS و JS.",
    featured: false
  },
  {
    id: 9,
    title: "يوم العائلة الجامعي",
    category: "family",
    categoryName: "عائلي",
    date: "2026-12-20",
    location: "الحديقة الرئيسية",
    image: "family.jpg",
    description: "أنشطة ترفيهية للأطفال والعائلات مع مسابقات وجوائز.",
    featured: false
  },
  {
    id: 10,
    title: "أنشطة الأطفال",
    category: "family",
    categoryName: "عائلي",
    date: "2026-12-22",
    location: "قاعة الأنشطة",
    image: "kids.jpg",
    description: "برنامج ترفيهي وتعليمي للأطفال في أجواء آمنة وممتعة.",
    featured: false
  },
  {
    id: 11,
    title: "معرض الفنون التشكيلية",
    category: "art",
    categoryName: "فنون",
    date: "2027-01-05",
    location: "قاعة الفنون",
    image: "art-1.jpg",
    description: "عرض لوحات ومنحوتات من إبداع طلاب كلية الفنون.",
    featured: false
  },
  {
    id: 12,
    title: "معرض اللوحات الفنية",
    category: "art",
    categoryName: "فنون",
    date: "2027-01-10",
    location: "قاعة الفنون",
    image: "art-2.jpg",
    description: "معرض فني يضم مجموعة متنوعة من اللوحات الكلاسيكية والحديثة.",
    featured: false
  }
];

document.addEventListener("DOMContentLoaded", function () {

  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }

  /* السلايدر في الرئيسية */
  if (typeof Swiper !== "undefined" && document.querySelector(".featuredSwiper")) {
    new Swiper(".featuredSwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
      }
    });
  }

  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) scrollTopBtn.classList.add("show");
      else scrollTopBtn.classList.remove("show");
    });
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* الوضع الليلي */
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    updateThemeIcon(true);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateThemeIcon(isDark);
    });
  }

  function updateThemeIcon(isDark) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector("i");
    if (icon) icon.className = isDark ? "bi bi-sun" : "bi bi-moon-stars";
  }

  /* ---------- صفحة الفعاليات (events.html) ---------- */
  const eventsContainer = document.getElementById("eventsContainer");
  if (eventsContainer) {
    let currentCategory = "all";
    let currentSearch   = "";
    let currentSort     = "default";

    const params = new URLSearchParams(window.location.search);
    const urlCategory = params.get("category");
    if (urlCategory) {
      currentCategory = urlCategory;
      document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === urlCategory);
      });
    }

    function applyFilters() {
      let filtered = [...eventsData];

      if (currentCategory !== "all") {
        filtered = filtered.filter(e => e.category === currentCategory);
      }

      if (currentSearch.trim() !== "") {
        const q = currentSearch.trim().toLowerCase();
        filtered = filtered.filter(e =>
          e.title.toLowerCase().includes(q) ||
          e.location.toLowerCase().includes(q)
        );
      }

      if (currentSort === "date-asc")  filtered.sort((a, b) => a.date.localeCompare(b.date));
      if (currentSort === "date-desc") filtered.sort((a, b) => b.date.localeCompare(a.date));
      if (currentSort === "title")     filtered.sort((a, b) => a.title.localeCompare(b.title, "ar"));

      renderEvents(filtered);

      const countEl = document.getElementById("resultsCount");
      if (countEl) countEl.textContent = `عدد النتائج: ${filtered.length} فعالية`;
    }

    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        currentCategory = this.dataset.category;
        applyFilters();
      });
    });

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        currentSearch = this.value;
        applyFilters();
      });
    }

    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        currentSort = this.value;
        applyFilters();
      });
    }

    applyFilters();
  }

  /* ---------- صفحة تفاصيل الفعالية (event.html) ---------- */
  const eventDetails = document.getElementById("eventDetails");
  if (eventDetails) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const event = eventsData.find(e => e.id === id);

    if (event) {
      document.title = `${event.title} | دليل فعاليات الجامعة الافتراضية`;

      const breadcrumbTitle = document.getElementById("breadcrumbTitle");
      if (breadcrumbTitle) breadcrumbTitle.textContent = event.title;

      renderEventDetails(event);

      const relatedContainer = document.getElementById("relatedEvents");
      if (relatedContainer) {
        const related = eventsData
          .filter(e => e.category === event.category && e.id !== event.id)
          .slice(0, 3);

        if (related.length === 0) {
          relatedContainer.innerHTML = `
            <div class="col-12 text-center text-muted">
              <p>لا توجد فعاليات أخرى في هذا التصنيف.</p>
            </div>`;
        } else {
          relatedContainer.innerHTML = related.map(e => `
            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <div class="card event-card h-100 border-0 shadow-sm">
                <img src="assets/img/events/${e.image}" class="card-img-top" alt="${e.title}">
                <div class="card-body">
                  <span class="badge ${getBadgeClass(e.category)} mb-2">${e.categoryName}</span>
                  <h5 class="card-title">${e.title}</h5>
                  <p class="card-text text-muted small mb-2">
                    <i class="bi bi-calendar3 me-1"></i> ${e.date}
                  </p>
                  <a href="event.html?id=${e.id}" class="btn btn-sm btn-primary">التفاصيل</a>
                </div>
              </div>
            </div>
          `).join("");
          if (typeof AOS !== "undefined") AOS.refresh();
        }
      }
    } else {
      eventDetails.innerHTML = `
        <div class="alert alert-warning text-center">
          <i class="bi bi-exclamation-triangle me-2"></i>
          لم يتم العثور على الفعالية المطلوبة. تأكد من الرابط.
        </div>`;
      const relatedContainer = document.getElementById("relatedEvents");
      if (relatedContainer) relatedContainer.innerHTML = "";
    }
  }

  /* ---------- صفحة اتصل بنا (contact.html) ---------- */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      handleContactForm();
    });
  }
});


// رسم بطاقات الفعاليات
function renderEvents(events) {
  const container = document.getElementById("eventsContainer");
  if (!container) return;

  if (events.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted">لا توجد فعاليات مطابقة.</p>
      </div>`;
    return;
  }

  container.innerHTML = events.map(event => `
    <div class="col-md-6 col-lg-4" data-aos="fade-up">
      <div class="card event-card h-100 border-0 shadow-sm">
        <img src="assets/img/events/${event.image}" class="card-img-top" alt="${event.title}">
        <div class="card-body">
          <span class="badge ${getBadgeClass(event.category)} mb-2">${event.categoryName}</span>
          <h5 class="card-title">${event.title}</h5>
          <p class="card-text text-muted small mb-1">
            <i class="bi bi-calendar3 me-1"></i> ${event.date}
          </p>
          <p class="card-text text-muted small mb-3">
            <i class="bi bi-geo-alt me-1"></i> ${event.location}
          </p>
          <a href="event.html?id=${event.id}" class="btn btn-sm btn-primary">التفاصيل</a>
        </div>
      </div>
    </div>
  `).join("");

  if (typeof AOS !== "undefined") AOS.refresh();
}

// فلترة حسب التصنيف
function filterEvents(category) {
  const filtered = category === "all"
    ? eventsData
    : eventsData.filter(e => e.category === category);
  renderEvents(filtered);
}

function getBadgeClass(category) {
  const map = {
    culture: "bg-primary",
    sports:  "bg-success",
    music:   "bg-purple",
    tech:    "bg-info",
    family:  "bg-warning text-dark",
    art:     "bg-danger"
  };
  return map[category] || "bg-secondary";
}

function renderEventDetails(event) {
  const container = document.getElementById("eventDetails");
  if (!container) return;

  // جلب صورة واحدة من فعالية أخرى في نفس التصنيف
  const relatedImage = eventsData
    .filter(e => e.category === event.category && e.id !== event.id)
    .slice(0, 1)
    .map(e => e.image)[0];

  // بناء قائمة صور المعرض
  const galleryImages = [
    { path: `assets/img/events/${event.image}`, alt: event.title },
    { path: `assets/img/map.png`, alt: "خريطة الموقع" }
  ];
  if (relatedImage) {
    galleryImages.push({ path: `assets/img/events/${relatedImage}`, alt: "صورة ذات صلة" });
  }

  container.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-6" data-aos="fade-left">
        <img src="assets/img/events/${event.image}" class="img-fluid rounded shadow mb-3" alt="${event.title}">

        <!-- معرض صور صغير -->
        <div class="row g-2 event-gallery">
          ${galleryImages.map(img => `
            <div class="col-4">
              <img src="${img.path}" class="img-fluid rounded shadow-sm gallery-thumb" alt="${img.alt}">
            </div>
          `).join("")}
        </div>
      </div>

      <div class="col-lg-6" data-aos="fade-right">
        <span class="badge ${getBadgeClass(event.category)} mb-3">${event.categoryName}</span>
        <h1 class="mb-3">${event.title}</h1>
        <p class="text-muted mb-2"><i class="bi bi-calendar3 me-2"></i> ${event.date}</p>
        <p class="text-muted mb-4"><i class="bi bi-geo-alt me-2"></i> ${event.location}</p>

        <!-- وصف كامل -->
        <p class="lead">${event.description}</p>
        <p>تعتبر هذه الفعالية فرصة رائعة للطلاب والكادر التعليمي والمجتمع للالتقاء وتبادل الخبرات، وهي من الفعاليات المميزة التي تنظمها الجامعة الافتراضية بشكل دوري. نرحب بمشاركة الجميع، سواء بالحضور أو بالمساهمة في التنظيم.</p>

        <!-- خريطة ثابتة -->
        <div class="my-4">
          <h5 class="mb-2"><i class="bi bi-map me-2"></i> الموقع على الخريطة</h5>
          <img src="assets/img/map.png" class="img-fluid rounded shadow-sm" alt="خريطة الموقع" style="max-height: 220px; object-fit: cover; width: 100%;">
        </div>

        <div class="d-flex flex-wrap gap-2 mt-4">
          <button class="btn btn-primary" onclick="addToCalendar('${event.title}', '${event.date}', '${event.location}')">
            <i class="bi bi-calendar-plus me-1"></i> أضف للتقويم
          </button>
          <button class="btn btn-outline-primary" onclick="shareEvent('${event.title}')">
            <i class="bi bi-share me-1"></i> شارك
          </button>
        </div>
      </div>
    </div>
  `;

  if (typeof AOS !== "undefined") AOS.refresh();
}

// إضافة الفعالية للتقويم (تنزيل ملف .ics)
function addToCalendar(title, date, location) {
  const dt = date.replace(/-/g, "");
  const icsContent =
`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DTSTART:${dt}T090000
DTEND:${dt}T120000
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

// عند الضغط على مشاركة الفعالية لنسخ الرابط
function shareEvent(title) {
  const url = window.location.href;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(() => {
      alert("✅ تم نسخ رابط الفعالية:\n" + url);
    }).catch(() => {
      prompt("انسخ الرابط يدوياً:", url);
    });
  } else {
    prompt("انسخ الرابط يدوياً:", url);
  }
}

// التحقق من نموذج "اتصل بنا"
function handleContactForm() {
  const name    = document.getElementById("name").value.trim();
  const email   = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const alertBox = document.getElementById("formAlert");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let errorMsg = "";
  if (name.length < 3)             errorMsg = "الرجاء إدخال الاسم الكامل (3 أحرف على الأقل).";
  else if (!emailRegex.test(email)) errorMsg = "الرجاء إدخال بريد إلكتروني صحيح.";
  else if (message.length < 10)    errorMsg = "الرسالة قصيرة جداً (10 أحرف على الأقل).";

  if (errorMsg) {
    alertBox.innerHTML = `
      <div class="alert alert-danger">
        <i class="bi bi-x-circle me-2"></i> ${errorMsg}
      </div>`;
  } else {
    alertBox.innerHTML = `
      <div class="alert alert-success">
        <i class="bi bi-check-circle me-2"></i>
        تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
      </div>`;
    document.getElementById("contactForm").reset();
  }
}
