// ===================================
// Events Calendar Component
// ===================================

let eventsData = [];
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Load events data
async function loadEvents() {
    try {
        const response = await fetch('events-data.json');
        const data = await response.json();
        eventsData = data.events;
        renderCalendar();
    } catch (error) {
        console.error('Error loading events:', error);
        document.getElementById('calendarGrid').innerHTML = 
            '<div class="calendar-loading">Unable to load events. Please try again later.</div>';
    }
}

// Get events for a specific date
function getEventsForDate(date) {
    const dateString = formatDateToYYYYMMDD(date);
    return eventsData.filter(event => event.date === dateString);
}

// Format date to YYYY-MM-DD
function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Format date for display
function formatDateForDisplay(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Render calendar
function renderCalendar() {
    const monthYearEl = document.getElementById('calendarMonthYear');
    const daysEl = document.getElementById('calendarDays');
    
    // Update header
    monthYearEl.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Calculate calendar days
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    
    const firstDayIndex = firstDay.getDay();
    const lastDateOfMonth = lastDay.getDate();
    const prevLastDate = prevLastDay.getDate();
    const lastDayIndex = lastDay.getDay();
    const nextDays = 7 - lastDayIndex - 1;
    
    // Clear existing days
    daysEl.innerHTML = '';
    
    // Previous month's days
    for (let x = firstDayIndex; x > 0; x--) {
        const day = prevLastDate - x + 1;
        const date = new Date(currentYear, currentMonth - 1, day);
        daysEl.appendChild(createDayElement(day, date, true));
    }
    
    // Current month's days
    for (let day = 1; day <= lastDateOfMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        daysEl.appendChild(createDayElement(day, date, false));
    }
    
    // Next month's days
    for (let day = 1; day <= nextDays; day++) {
        const date = new Date(currentYear, currentMonth + 1, day);
        daysEl.appendChild(createDayElement(day, date, true));
    }
}

// Create day element
function createDayElement(day, date, isOtherMonth) {
    const dayEl = document.createElement('div');
    dayEl.className = 'calendar-day';
    
    if (isOtherMonth) {
        dayEl.classList.add('other-month');
    }
    
    // Check if it's today
    const today = new Date();
    if (date.toDateString() === today.toDateString()) {
        dayEl.classList.add('today');
    }
    
    // Check for events
    const events = getEventsForDate(date);
    
    if (events.length > 0) {
        dayEl.classList.add('has-event');
        
        // Add day number
        const numberEl = document.createElement('div');
        numberEl.className = 'calendar-day-number';
        numberEl.textContent = day;
        dayEl.appendChild(numberEl);
        
        // Add emoji for first event
        const emojiEl = document.createElement('div');
        emojiEl.className = 'calendar-day-emoji';
        emojiEl.textContent = events[0].image;
        dayEl.appendChild(emojiEl);
        
        // Add hover summary
        const summaryEl = document.createElement('div');
        summaryEl.className = 'calendar-day-summary';
        summaryEl.textContent = events[0].shortDescription;
        dayEl.appendChild(summaryEl);
        
        // Add click handler
        dayEl.addEventListener('click', () => openEventModal(events[0]));
    } else {
        // Just add day number
        const numberEl = document.createElement('div');
        numberEl.className = 'calendar-day-number';
        numberEl.textContent = day;
        dayEl.appendChild(numberEl);
    }
    
    return dayEl;
}

// Navigation functions
function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

function goToToday() {
    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    renderCalendar();
}

// Open event modal
function openEventModal(event) {
    const modal = document.getElementById('eventModal');
    const modalIcon = document.getElementById('eventModalIcon');
    const modalTitle = document.getElementById('eventModalTitle');
    const modalDate = document.getElementById('eventModalDate');
    const modalTime = document.getElementById('eventModalTime');
    const modalDescription = document.getElementById('eventModalDescription');
    const modalFooter = document.getElementById('eventModalFooter');
    
    // Populate modal
    modalIcon.textContent = event.image;
    modalTitle.textContent = event.title;
    modalDate.textContent = formatDateForDisplay(event.date);
    modalTime.textContent = event.time;
    modalDescription.textContent = event.fullDescription;
    
    // Add badges
    modalFooter.innerHTML = '';
    
    const categoryBadge = document.createElement('span');
    categoryBadge.className = `event-category-badge ${event.category}`;
    categoryBadge.textContent = event.category === 'live-music' ? 'Live Music' : 'Special Event';
    modalFooter.appendChild(categoryBadge);
    
    if (event.featured) {
        const featuredBadge = document.createElement('span');
        featuredBadge.className = 'event-featured-badge';
        featuredBadge.textContent = '⭐ Featured';
        modalFooter.appendChild(featuredBadge);
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close event modal
function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize calendar
function initCalendar() {
    // Set up navigation buttons
    document.getElementById('calendarPrev').addEventListener('click', previousMonth);
    document.getElementById('calendarNext').addEventListener('click', nextMonth);
    document.getElementById('calendarToday').addEventListener('click', goToToday);
    
    // Set up modal close
    document.getElementById('eventModalClose').addEventListener('click', closeEventModal);
    
    // Close modal on backdrop click
    document.getElementById('eventModal').addEventListener('click', (e) => {
        if (e.target.id === 'eventModal') {
            closeEventModal();
        }
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeEventModal();
        }
    });
    
    // Load events and render
    loadEvents();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalendar);
} else {
    initCalendar();
}
