import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa'; // FaTicketAlt, FaUsers
import { Link } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { getEventsByStatus } from '../utils/eventUtils';
import '../styles/events.css';

// Google Calendar Functionality
// Helper to format date and time for Google Calendar and ICS
function parseDateTime(dateStr: string, timeStr: string) {
  // This is a simple parser for your sample data format.
  // You may need to enhance this for more robust parsing.
  // Example: dateStr = 'May 15, 2025', timeStr = '10:00 AM - 4:00 PM'
  const [startTime, endTime] = timeStr.split(" - ");
  const start = new Date(`${dateStr} ${startTime}`);
  const end = endTime ? new Date(`${dateStr} ${endTime}`) : new Date(start.getTime() + 60 * 60 * 1000);

  // Google Calendar and ICS use UTC in YYYYMMDDTHHmmssZ format
  const pad = (n: number) => n.toString().padStart(2, "0");
  const format = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;

  return {
    gcStart: format(start),
    gcEnd: format(end),
    icsStart: format(start),
    icsEnd: format(end),
  };
}

// Helper to generate Google Calendar link
function getGoogleCalendarUrl(event: any) {
  const { gcStart, gcEnd } = parseDateTime(event.date, event.time);
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const details = `${event.description || ""}\n\nJoin Zoom Meeting: ${event.link || ""}`;
  const params = [
    `text=${encodeURIComponent(event.title)}`,
    `dates=${gcStart}/${gcEnd}`,
    `details=${encodeURIComponent(details)}`,
    `location=${encodeURIComponent(event.location || "")}`,
  ];
  return `${base}&${params.join("&")}`;
}

// Helper to generate and download ICS file
function downloadICS(event: any) {
  const { icsStart, icsEnd } = parseDateTime(event.date, event.time);
  const description = `${(event.description || "").replace(/\n/g, "\\n")}\\n\\nJoin Zoom Meeting: ${event.link || ""}`;

  const foldLine = (line: string): string =>
    line.match(/.{1,73}/g)?.join("\r\n ") ?? line;

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DTSTART:${icsStart}`,
    `DTEND:${icsEnd}`,
    `DESCRIPTION:${foldLine(description)}`,
    `LOCATION:${event.location || ""}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${event.title.replace(/\s+/g, "_")}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}




const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isLoading, setIsLoading] = useState(true);
  
  const filteredEvents = getEventsByStatus(activeTab as 'upcoming' | 'past');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="events-page">
      <Navbar />
      {/* Hero Section  */}
      <section className="hero-section py-6" style={{ background: 'linear-gradient(135deg, rgb(240, 248, 250) 0%, rgb(224, 242, 246) 100%)' }}>
        <div className="container position-relative py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold mb-4 mt-4">
                {"Events at VLED Lab".split("").map((char, i) => (
                  <span key={i} className="hero-title-letter">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </h1>
              <p className="lead mb-3 fs-3 fw-semibold">
                {"Where Research, Innovation, and Educator Development Come Alive".split("").map((char, i) => (
                  <span key={i} className="hero-subtitle-letter">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </p>
              <p className="fs-5 mb-5" style={{ lineHeight: '1.8', color: '#495057' }}>
                At VLED Lab, every event is designed to move education forward. We regularly bring together educators, researchers, designers, and innovators to explore new possibilities in learning. Our workshops, FDPs, and interactive sessions focus on strengthening teaching practices, deepening academic design, and integrating research-backed methods into classrooms.
              </p>
              <Link to="#upcoming">
                <button className="btn btn-lg px-5 py-3 fw-bold" style={{ borderRadius: '50px', backgroundColor: 'rgba(228, 143, 57, 1)', color: '#ffffff', border: 'none', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(228, 143, 57, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  Learn More <i className="fas fa-arrow-down ms-2"></i>
                </button>
              </Link>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="text-center">
                <i className="fas fa-calendar-check" style={{ fontSize: '12rem', color: 'rgba(228, 143, 57, 0.9)' }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Focus On Section */}
      <section id="upcoming" className="py-6 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">
              {"Stay Tuned for Upcoming Events".split("").map((char, i) => (
                <span key={i} className="section-title-letter">{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </h2>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '900px' }}>
              Events that reflect our commitment to advancing education
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Focus Area 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 hover-card" style={{ transition: 'transform 0.3s' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                         style={{ width: '80px', height: '80px', backgroundColor: 'rgba(52, 152, 169, 0.1)' }}>
                      <i className="fas fa-microscope fs-1" style={{ color: 'rgba(228, 143, 57, 1)' }}></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3">Advancing Educational Research</h4>
                  <p className="text-secondary mb-0">
                    Through discussions, deep dives, and collaborative studies
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Area 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 hover-card" style={{ transition: 'transform 0.3s' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                         style={{ width: '80px', height: '80px', backgroundColor: 'rgba(52, 152, 169, 0.1)' }}>
                      <i className="fas fa-chalkboard-teacher fs-1" style={{ color: 'rgba(228, 143, 57, 1)' }}></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3">Empowering Educators</h4>
                  <p className="text-secondary mb-0">
                    With meaningful Faculty Development Programs (FDPs) rooted in real classroom needs
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Area 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 hover-card" style={{ transition: 'transform 0.3s' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                         style={{ width: '80px', height: '80px', backgroundColor: 'rgba(52, 152, 169, 0.1)' }}>
                      <i className="fas fa-tools fs-1" style={{ color: 'rgba(228, 143, 57, 1)' }}></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3">Sharing New Learnings</h4>
                  <p className="text-secondary mb-0">
                    Tools and frameworks that improve the way education is designed and delivered
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Area 4 */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 hover-card" style={{ transition: 'transform 0.3s' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                         style={{ width: '80px', height: '80px', backgroundColor: 'rgba(52, 152, 169, 0.1)' }}>
                      <i className="fas fa-users fs-1" style={{ color: 'rgba(228, 143, 57, 1)' }}></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3">Building Community</h4>
                  <p className="text-secondary mb-0">
                    A network of curious, forward-thinking education professionals
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Area 5 */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 hover-card" style={{ transition: 'transform 0.3s' }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                         style={{ width: '80px', height: '80px', backgroundColor: 'rgba(52, 152, 169, 0.1)' }}>
                      <i className="fas fa-rocket fs-1" style={{ color: 'rgba(228, 143, 57, 1)' }}></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3">Showcasing Innovations</h4>
                  <p className="text-secondary mb-0">
                    Launches and transformative learning ideas
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-6 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: 'rgba(228, 143, 57, 1)' }}>Our Events</h2>
            <p className="lead text-muted max-w-800 mx-auto">
              Explore our past events and stay tuned for upcoming opportunities
            </p>
            
            {/* Event Type Tabs */}
            <div className="d-flex justify-content-center mb-4">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn btn-${activeTab === 'upcoming' ? 'warning fw-bold' : 'outline-dark-subtle fw-bold'}`}
                  onClick={() => setActiveTab('upcoming')}
                >
                  Upcoming Events
                </button>
                <button
                  type="button"
                  className={`btn btn-${activeTab === 'past' ? 'warning fw-bold' : 'outline-warning fw-bold'}`}
                  onClick={() => setActiveTab('past')}
                >
                  Past Events
                </button>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <div key={event.id} className="col-lg-6">
                    <div className="event-card card h-100 border-0 shadow-sm overflow-hidden hover-shadow-lg transition-all">
                      <div className="row g-0 h-100">
                        <div className="col-md-5">
                          <img 
                            src={event.image} 
                            className="img-fluid h-100 event-card-image" 
                            alt={event.title}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body p-4 d-flex flex-column h-100">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <span className="badge" style={{ backgroundColor: 'rgb(223, 94, 8)', color: 'rgb(252, 251, 196)' }}  >{event.category}</span>
                              {event.status === 'upcoming' && (
                                <span className="badge" style={{ backgroundColor: 'rgb(248, 229, 201)', color: 'rgb(59, 58, 58)' }} ></span>
                              )}
                            </div>
                            <h3 className="h4 card-title fw-bold">{event.title}</h3>
                            
                            <div className="d-flex flex-wrap gap-3 my-3 text-muted small">
                              <div className="d-flex align-items-center">
                                <FaCalendarAlt className="me-2" />
                                <span>{event.date}</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <FaRegClock className="me-2" />
                                <span>{event.time}</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <FaMapMarkerAlt className="me-2" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            
                            <p className="card-text flex-grow-1">{event.description}</p>

                            <div className="mt-4 d-flex gap-2">
                              <a
                                href={getGoogleCalendarUrl(event)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-warning text-dark fw-bold flex-grow-1"
                                title="Add this event to your Google Calendar"
                              >
                                <i className="fas fa-calendar-plus me-2" aria-hidden="true" style={{ fontSize: '1.3rem', color: '#000' }}></i>
                                Add to Calendar
                              </a>
                              <button
                                className="btn btn-outline-secondary"
                                title="Download .ics file to add this event to any calendar app"
                                onClick={() => downloadICS(event)}
                                type="button"
                              >
                                <i className="fas fa-download me-2" aria-hidden="true" style={{ fontSize: '1.3rem', color: '#333' }}></i>
                                <span className="visually-hidden">Download ICS</span>
                              </button>
                            </div>

                            {/* Registration button - only for events with registrationLink */}
                            {event.registrationLink && (
                              <div className="mt-3">
                                <a
                                  href={event.registrationLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-success w-100 fw-bold"
                                  title="Register for this event"
                                >
                                  <i className="fas fa-user-plus me-2" aria-hidden="true"></i>
                                  Register Now
                                </a>
                              </div>
                            )}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <div className="p-5 rounded-4 shadow-sm bg-white">
                    <i className="fas fa-calendar-times fs-1 mb-4" style={{ color: 'rgba(228, 143, 57, 0.9)' }}></i>
                    <h3 className="fw-bold mb-3">No {activeTab === 'upcoming' ? 'Upcoming' : 'Past'} Events</h3>
                    <p className="text-secondary mb-0" style={{ fontSize: '1.1rem' }}>
                      {activeTab === 'upcoming' 
                        ? 'We are currently planning exciting new events. Stay tuned for updates!' 
                        : 'Check back later for our event archive.'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-white" style ={{ background: 'linear-gradient(135deg, rgb(52, 152, 169) 0%, rgb(102, 187, 205) 100%)' }}>
        <div className="container text-center py-4">
          <h2 className="display-6 fw-bold mb-4">Have an event idea?</h2>
          <p className="lead mb-4">We're always looking for collaborators and interesting topics.</p>

          <Link to="/contact?tab=collaborate&subject=Other">
          <button className="btn btn-lg px-4" style={{ backgroundColor: '#ffffff', color: 'rgba(228, 143, 57, 1)', fontWeight: 'bold', border: '2px solid #ffffff', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 255, 255, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            Propose an Event <i className="fas fa-arrow-right ms-2"></i>
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;
