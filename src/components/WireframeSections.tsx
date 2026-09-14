import React from 'react';

export const WireframeSections: React.FC = () => {
  return (
    <>
      {/* =========================================================================
          2. OUR STORY — Where Values Meet Vision
          ========================================================================= */}
      <section className="wireframe-section" id="story">
        <div className="wireframe-container">
          <div className="wf-label text-center sm:text-left">Our Story</div>
          <h2
            className="wf-heading !text-[34px] font-fraunces text-[#111] leading-tight font-bold text-center sm:text-left break-words"
            style={{ fontFamily: "'Fraunces', serif", fontSize: '34px' }}
          >
            where values meet vision.....
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-base text-[#666] leading-relaxed mb-6">
                Rooted in the educational philosophy of Dev Samaj, we believe true schooling shapes both intellect and conscience. For decades, our classrooms have been incubators of curiosity, resilience, and compassion.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 border border-[#ccc] rounded">
                  <h4 className="font-semibold text-sm mb-1 text-[#222]">Moral Grounding</h4>
                  <p className="text-xs text-[#666]">Ethical foundations before academic ambition.</p>
                </div>
                <div className="p-4 border border-[#ccc] rounded">
                  <h4 className="font-semibold text-sm mb-1 text-[#222]">Intellectual Depth</h4>
                  <p className="text-xs text-[#666]">Curiosity over rote learning, mastery over memorization.</p>
                </div>
                <div className="p-4 border border-[#ccc] rounded">
                  <h4 className="font-semibold text-sm mb-1 text-[#222]">Self-Reliance</h4>
                  <p className="text-xs text-[#666]">Equipping students to navigate a changing world independently.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-[#222]">2,400+</div>
                  <div className="text-xs text-[#666]">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#222]">180+</div>
                  <div className="text-xs text-[#666]">Faculty Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#222]">98%</div>
                  <div className="text-xs text-[#666]">Board Distinction</div>
                </div>
              </div>
            </div>
            <div>
              <div className="wf-img-placeholder min-h-[400px]">
                CAMPUS / HERITAGE PHOTO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. THE LEARNING JOURNEY — Academics
          ========================================================================= */}
      <section className="wireframe-section" id="journey">
        <div className="wireframe-container">
          <div className="wf-label text-center sm:text-left">Academics</div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center sm:text-left break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            The Learning Journey
          </h2>
          <p className="max-w-2xl text-base text-[#666] mb-8 text-center sm:text-left">
            A continuous continuum of growth from the earliest steps of wonder to the confident leap into adulthood.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#888] mb-1">01 &mdash; Foundation</div>
                <h3 className="font-bold text-lg text-[#222] mb-1">Pre-Primary</h3>
                <div className="text-xs text-[#666] mb-3">Nursery &ndash; KG</div>
                <p className="text-sm text-[#666] leading-relaxed">Play-based discovery, sensorial development, foundational literacy, and social warmth.</p>
              </div>
              <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Curiosity &amp; Expression</div>
            </div>

            <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#888] mb-1">02 &mdash; Exploration</div>
                <h3 className="font-bold text-lg text-[#222] mb-1">Primary</h3>
                <div className="text-xs text-[#666] mb-3">Classes I &ndash; V</div>
                <p className="text-sm text-[#666] leading-relaxed">Core academic fluency, environmental awareness, artistic exploration, and collaborative projects.</p>
              </div>
              <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Breadth &amp; Confidence</div>
            </div>

            <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#888] mb-1">03 &mdash; Deepening</div>
                <h3 className="font-bold text-lg text-[#222] mb-1">Middle School</h3>
                <div className="text-xs text-[#666] mb-3">Classes VI &ndash; VIII</div>
                <p className="text-sm text-[#666] leading-relaxed">Subject specialization, laboratory sciences, critical reading, debates, and competitive athletics.</p>
              </div>
              <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Critical Thinking &amp; Discipline</div>
            </div>

            <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#888] mb-1">04 &mdash; Mastery</div>
                <h3 className="font-bold text-lg text-[#222] mb-1">Senior Secondary</h3>
                <div className="text-xs text-[#666] mb-3">Classes IX &ndash; XII</div>
                <p className="text-sm text-[#666] leading-relaxed">CBSE excellence, stream specialization (Science, Commerce, Humanities), career mentoring, and leadership.</p>
              </div>
              <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Excellence &amp; Pathways</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHERE LEARNING HAPPENS — Campus Facilities
          ========================================================================= */}
      <section className="wireframe-section" id="campus">
        <div className="wireframe-container">
          <div className="wf-label text-center sm:text-left">Campus</div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center sm:text-left break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Where Learning Happens
          </h2>
          <p className="max-w-2xl text-base text-[#666] text-center sm:text-left">
            Purpose-built spaces that invite curiosity, discipline, and creative pursuit across every acre.
          </p>
          <div className="wf-img-placeholder my-8 h-[380px]">
            MAIN CAMPUS AERIAL / PANORAMA PHOTO
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#ccc] rounded overflow-hidden">
              <div className="wf-img-placeholder h-44">LIBRARY PHOTO</div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-[#222] mb-1">Library &amp; Resource Centre</h4>
                <p className="text-xs text-[#666]">Over 25,000 volumes, digital research pods, quiet study carrels, and periodical archives.</p>
              </div>
            </div>
            <div className="border border-[#ccc] rounded overflow-hidden">
              <div className="wf-img-placeholder h-44">LABORATORIES PHOTO</div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-[#222] mb-1">Science &amp; Computer Labs</h4>
                <p className="text-xs text-[#666]">Dedicated Physics, Chemistry, Biology, and AI-enabled computer stations built to CBSE specifications.</p>
              </div>
            </div>
            <div className="border border-[#ccc] rounded overflow-hidden">
              <div className="wf-img-placeholder h-44">SPORTS COMPLEX PHOTO</div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-[#222] mb-1">Sports &amp; Play Arena</h4>
                <p className="text-xs text-[#666]">Multi-sport turf, athletics track, basketball court, indoor badminton hall, and yoga pavilion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. BEYOND THE CLASSROOM — Student Life
          ========================================================================= */}
      <section className="wireframe-section" id="beyond">
        <div className="wireframe-container">
          <div className="wf-label text-center sm:text-left">Student Life</div>
          <h2
            className="wf-heading font-crayon text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-center sm:text-left break-words"
            style={{ fontFamily: "'DK Crayon Crumble', 'Cabin Sketch', cursive, sans-serif" }}
          >
            Beyond the Classroom
          </h2>
          <p className="max-w-2xl text-base text-[#666]">
            Character is forged as much on the pitch, stage, and easel as it is in the lecture hall.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
            <div className="p-4 border border-[#ccc] rounded text-center">
              <div className="w-12 h-12 rounded-full wf-placeholder mx-auto mb-3">ICON</div>
              <h4 className="font-semibold text-sm text-[#222] mb-1">Sports</h4>
              <p className="text-xs text-[#666]">Football, basketball, cricket, badminton, athletics, yoga.</p>
            </div>
            <div className="p-4 border border-[#ccc] rounded text-center">
              <div className="w-12 h-12 rounded-full wf-placeholder mx-auto mb-3">ICON</div>
              <h4 className="font-semibold text-sm text-[#222] mb-1">Arts &amp; Culture</h4>
              <p className="text-xs text-[#666]">Painting, sculpture, theatre, debate, creative writing.</p>
            </div>
            <div className="p-4 border border-[#ccc] rounded text-center">
              <div className="w-12 h-12 rounded-full wf-placeholder mx-auto mb-3">ICON</div>
              <h4 className="font-semibold text-sm text-[#222] mb-1">Music &amp; Dance</h4>
              <p className="text-xs text-[#666]">Classical, contemporary, choir, instrumental orchestra.</p>
            </div>
            <div className="p-4 border border-[#ccc] rounded text-center">
              <div className="w-12 h-12 rounded-full wf-placeholder mx-auto mb-3">ICON</div>
              <h4 className="font-semibold text-sm text-[#222] mb-1">Clubs &amp; Societies</h4>
              <p className="text-xs text-[#666]">Robotics, eco club, editorial board, quiz bowl, MUN.</p>
            </div>
            <div className="p-4 border border-[#ccc] rounded text-center col-span-2 sm:col-span-1">
              <div className="w-12 h-12 rounded-full wf-placeholder mx-auto mb-3">ICON</div>
              <h4 className="font-semibold text-sm text-[#222] mb-1">Competitions</h4>
              <p className="text-xs text-[#666]">Inter-school tournaments, Olympiads, state leagues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. GULDAASTA — Signature Annual Event
          ========================================================================= */}
      <section className="wireframe-section" id="guldaasta">
        <div className="wireframe-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="wf-label text-center sm:text-left">Signature Annual Event</div>
              <h2
                className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center sm:text-left break-words"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
              >
                Guldaasta &mdash; A Celebration of Togetherness
              </h2>
              <p className="text-base text-[#666] leading-relaxed mb-6 text-center sm:text-left">
                Our landmark annual showcase where every child&apos;s voice, talent, and culture come together in an unforgettable evening of performance, exhibition, and shared pride.
              </p>
              <div className="flex gap-8 my-6 justify-center sm:justify-start">
                <div>
                  <strong className="block text-2xl font-bold text-[#222]">1,200+</strong>
                  <span className="text-xs text-[#666]">Student Performers</span>
                </div>
                <div>
                  <strong className="block text-2xl font-bold text-[#222]">3,500+</strong>
                  <span className="text-xs text-[#666]">Audience &amp; Alumni</span>
                </div>
                <div>
                  <strong className="block text-2xl font-bold text-[#222]">1</strong>
                  <span className="text-xs text-[#666]">Unforgettable Night</span>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <a href="#guldaasta-details" className="wf-cta">
                  LEARN ABOUT GULDAASTA
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 wf-img-placeholder h-64">
                GULDAASTA STAGE PHOTO (HERO MOMENT)
              </div>
              <div className="wf-img-placeholder h-36">DANCE PERFORMANCE</div>
              <div className="wf-img-placeholder h-36">MUSIC ENSEMBLE</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. MAKING US PROUD — Achievements
          ========================================================================= */}
      <section className="wireframe-section" id="achievements">
        <div className="wireframe-container">
          <div className="wf-label text-center sm:text-left">Achievements</div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center sm:text-left break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Making Us Proud
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Academics</h3>
              <div className="flex flex-col gap-3">
                <div className="p-3 border border-[#ccc] rounded">
                  <div className="text-xs text-[#888]">2024 &bull; CBSE Class XII</div>
                  <h4 className="font-semibold text-sm text-[#222]">99.2% School Topper</h4>
                  <p className="text-xs text-[#666]">Science stream city rank holder; 42 students scored 90%+ aggregate.</p>
                </div>
                <div className="p-3 border border-[#ccc] rounded">
                  <div className="text-xs text-[#888]">2024 &bull; CBSE Class X</div>
                  <h4 className="font-semibold text-sm text-[#222]">100% Pass Percentage</h4>
                  <p className="text-xs text-[#666]">68 students scored distinction in all subjects.</p>
                </div>
                <div className="p-3 border border-[#ccc] rounded">
                  <div className="text-xs text-[#888]">2023 &bull; National Olympiad</div>
                  <h4 className="font-semibold text-sm text-[#222]">3 Gold Medals &mdash; Science &amp; Math</h4>
                  <p className="text-xs text-[#666]">Qualified for national scholarship round.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Sports</h3>
              <div className="flex flex-col gap-3">
                <div className="p-3 border border-[#ccc] rounded">
                  <div className="text-xs text-[#888]">2024 &bull; State Championship</div>
                  <h4 className="font-semibold text-sm text-[#222]">Inter-School Basketball Champions</h4>
                  <p className="text-xs text-[#666]">U-17 boys team clinched trophy without dropping a match.</p>
                </div>
                <div className="p-3 border border-[#ccc] rounded">
                  <div className="text-xs text-[#888]">2023 &bull; District Athletics</div>
                  <h4 className="font-semibold text-sm text-[#222]">Overall Athletics Trophy</h4>
                  <p className="text-xs text-[#666]">14 gold, 8 silver, 6 bronze across track and field events.</p>
                </div>
                <div className="p-3 border border-[#ccc] rounded">
                  <div className="text-xs text-[#888]">2023 &bull; Badminton</div>
                  <h4 className="font-semibold text-sm text-[#222]">State Level Representation</h4>
                  <p className="text-xs text-[#666]">Two singles players selected for national trials.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Cultural &amp; Co-Curricular</h3>
              <div className="flex flex-col gap-3">
                <div className="p-3 border border-[#ccc] rounded">
                  <div className="text-xs text-[#888]">2024 &bull; Youth Festival</div>
                  <h4 className="font-semibold text-sm text-[#222]">Best Delegation Award</h4>
                  <p className="text-xs text-[#666]">Swept music, drama, and fine arts categories across 18 schools.</p>
                </div>
                <div className="p-3 border border-[#ccc] rounded">
                  <div className="text-xs text-[#888]">2024 &bull; National Debate</div>
                  <h4 className="font-semibold text-sm text-[#222]">Runners-Up &mdash; Parliamentary Debate</h4>
                  <p className="text-xs text-[#666]">Senior team placed 2nd among 60 participating institutions.</p>
                </div>
                <div className="p-3 border border-[#ccc] rounded">
                  <div className="text-xs text-[#888]">2023 &bull; Robotics Challenge</div>
                  <h4 className="font-semibold text-sm text-[#222]">Innovation First Prize</h4>
                  <p className="text-xs text-[#666]">Autonomous navigation project recognized at regional STEM expo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. WHAT'S HAPPENING — School Updates & Circulars
          ========================================================================= */}
      <section className="wireframe-section" id="updates">
        <div className="wireframe-container">
          <div className="wf-label text-center sm:text-left">News &amp; Updates</div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center sm:text-left break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            What&apos;s Happening
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex gap-4 p-4 border border-[#ccc] rounded items-center">
                <div className="wf-img-placeholder w-28 h-20 flex-shrink-0">THUMB</div>
                <div>
                  <div className="text-xs text-[#888]">12 Feb 2025 &bull; Event</div>
                  <h4 className="font-semibold text-sm text-[#222]">Annual Sports Meet 2025 Announced</h4>
                  <p className="text-xs text-[#666]">Three days of athletic competition, parade, and awards ceremony commencing March 1.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border border-[#ccc] rounded items-center">
                <div className="wf-img-placeholder w-28 h-20 flex-shrink-0">THUMB</div>
                <div>
                  <div className="text-xs text-[#888]">28 Jan 2025 &bull; Academic</div>
                  <h4 className="font-semibold text-sm text-[#222]">CBSE Board Exam Preparation Workshops Underway</h4>
                  <p className="text-xs text-[#666]">Special doubt-clearing sessions and mock test series scheduled for Classes X and XII.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border border-[#ccc] rounded items-center">
                <div className="wf-img-placeholder w-28 h-20 flex-shrink-0">THUMB</div>
                <div>
                  <div className="text-xs text-[#888]">15 Jan 2025 &bull; Celebration</div>
                  <h4 className="font-semibold text-sm text-[#222]">Dev Samaj Foundation Day Celebrations</h4>
                  <p className="text-xs text-[#666]">Reflecting on our heritage with community service drives and special morning assembly.</p>
                </div>
              </div>
            </div>

            <div className="p-4 border border-[#ccc] rounded">
              <h3 className="font-bold text-sm text-[#222] mb-4 pb-2 border-b border-[#ccc]">Circulars &amp; Notices</h3>
              <div className="flex flex-col gap-3">
                <div className="pb-2 border-b border-[#eee]">
                  <div className="text-xs text-[#888]">08 Feb 2025</div>
                  <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer">Date sheet for Annual Examinations (Classes VI&ndash;IX, XI)</div>
                </div>
                <div className="pb-2 border-b border-[#eee]">
                  <div className="text-xs text-[#888]">02 Feb 2025</div>
                  <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer">Advisory on winter uniform &amp; school timings</div>
                </div>
                <div className="pb-2 border-b border-[#eee]">
                  <div className="text-xs text-[#888]">20 Jan 2025</div>
                  <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer">Parent-Teacher Meeting schedule &amp; slot booking</div>
                </div>
                <div className="pb-2 border-b border-[#eee]">
                  <div className="text-xs text-[#888]">10 Jan 2025</div>
                  <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer">Fee deposit deadline for Quarter IV &mdash; Reminder</div>
                </div>
                <div>
                  <div className="text-xs text-[#888]">05 Jan 2025</div>
                  <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer">Transport route adjustment notice &mdash; Route 7 &amp; 12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. THROUGH OUR LENS — Gallery Mosaic
          ========================================================================= */}
      <section className="wireframe-section" id="gallery">
        <div className="wireframe-container">
          <div className="wf-label text-center sm:text-left">Gallery</div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center sm:text-left break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Through Our Lens
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            <div className="wf-img-placeholder h-40">CLASSROOM IN ACTION</div>
            <div className="wf-img-placeholder md:col-span-2 h-40">SCIENCE LAB EXPERIMENT</div>
            <div className="wf-img-placeholder h-40">ART STUDIO</div>
            <div className="wf-img-placeholder md:col-span-2 md:row-span-2 h-84">ANNUAL SPORTS DAY CELEBRATIONS</div>
            <div className="wf-img-placeholder h-40">MORNING ASSEMBLY</div>
            <div className="wf-img-placeholder h-40">LIBRARY STUDY HOUR</div>
            <div className="wf-img-placeholder h-40">MUSIC PERFORMANCE</div>
            <div className="wf-img-placeholder h-40">CAMPUS CORRIDORS</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. THE PEOPLE BEHIND THE LEARNING — Educators
          ========================================================================= */}
      <section className="wireframe-section" id="educators">
        <div className="wireframe-container">
          <div className="wf-label text-center sm:text-left">Faculty</div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center sm:text-left break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            The People Behind the Learning
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="border border-[#ccc] rounded overflow-hidden text-center">
              <div className="wf-img-placeholder h-56">FACULTY PHOTO</div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-[#222]">Dr. S. Sharma</h4>
                <div className="text-xs text-[#888] mb-2">Principal &bull; Ph.D., M.Ed.</div>
                <p className="text-xs text-[#666]">25+ years in educational leadership, pedagogy reform, and character-centred schooling.</p>
              </div>
            </div>

            <div className="border border-[#ccc] rounded overflow-hidden text-center">
              <div className="wf-img-placeholder h-56">FACULTY PHOTO</div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-[#222]">Mrs. R. Kaur</h4>
                <div className="text-xs text-[#888] mb-2">Vice Principal &bull; M.Sc., B.Ed.</div>
                <p className="text-xs text-[#666]">Spearheading academic rigor, student welfare, and CBSE compliance for over two decades.</p>
              </div>
            </div>

            <div className="border border-[#ccc] rounded overflow-hidden text-center">
              <div className="wf-img-placeholder h-56">FACULTY PHOTO</div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-[#222]">Mr. A. Verma</h4>
                <div className="text-xs text-[#888] mb-2">Head of Sciences &bull; M.Sc. Physics</div>
                <p className="text-xs text-[#666]">Inspiring future engineers and researchers with inquiry-led laboratory instruction.</p>
              </div>
            </div>

            <div className="border border-[#ccc] rounded overflow-hidden text-center">
              <div className="wf-img-placeholder h-56">FACULTY PHOTO</div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-[#222]">Mrs. P. Gupta</h4>
                <div className="text-xs text-[#888] mb-2">Head of Humanities &bull; M.A., M.Phil.</div>
                <p className="text-xs text-[#666]">Fostering critical thought, historical consciousness, and articulate prose in every student.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. BEYOND DEV SAMAJ — Community & Alumni
          ========================================================================= */}
      <section className="wireframe-section" id="community">
        <div className="wireframe-container">
          <div className="wf-label text-center sm:text-left">Community</div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center sm:text-left break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Beyond Dev Samaj
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 border border-[#ccc] rounded overflow-hidden">
              <div className="wf-img-placeholder h-64">ALUMNI SPOTLIGHT PHOTO</div>
              <div className="p-6">
                <blockquote className="italic text-base text-[#444] mb-3 leading-relaxed">
                  &ldquo;Dev Samaj did not just prepare me for board exams; it taught me how to think with integrity. That moral compass has guided me through medical school and every patient I have ever treated.&rdquo;
                </blockquote>
                <div className="text-xs text-[#666]">
                  &mdash; <strong>Dr. Ananya Sen</strong>, Class of 2012 &bull; Chief Resident, All India Institute of Medical Sciences
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 border border-[#ccc] rounded">
                <h4 className="font-bold text-sm text-[#222] mb-1">Parent Council</h4>
                <p className="text-xs text-[#666]">Active collaboration through regular dialogue, volunteer initiatives, and school policy feedback.</p>
              </div>
              <div className="p-4 border border-[#ccc] rounded">
                <h4 className="font-bold text-sm text-[#222] mb-1">Alumni Network</h4>
                <p className="text-xs text-[#666]">A global fraternity of 15,000+ graduates across medicine, civil services, tech, entrepreneurship, and the arts.</p>
              </div>
              <div className="p-4 border border-[#ccc] rounded">
                <h4 className="font-bold text-sm text-[#222] mb-1">Community Outreach</h4>
                <p className="text-xs text-[#666]">Students actively participate in literacy drives, environmental clean-ups, and elder care visits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. ADMISSIONS — Take the First Step
          ========================================================================= */}
      <section className="wireframe-section" id="admissions">
        <div className="wireframe-container">
          <div className="wf-label text-center sm:text-left">Join Us</div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center sm:text-left break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Take the First Step
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full border border-[#ccc] flex items-center justify-center font-bold text-xs flex-shrink-0 text-[#222]">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#222] mb-1">Inquire</h4>
                  <p className="text-xs text-[#666]">Submit an online inquiry or visit our admissions office in person to receive the prospectus and fee structure.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full border border-[#ccc] flex items-center justify-center font-bold text-xs flex-shrink-0 text-[#222]">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#222] mb-1">Visit &amp; Observe</h4>
                  <p className="text-xs text-[#666]">Join a scheduled campus tour to experience classrooms, meet faculty, and see student life in action.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full border border-[#ccc] flex items-center justify-center font-bold text-xs flex-shrink-0 text-[#222]">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#222] mb-1">Assessment &amp; Dialogue</h4>
                  <p className="text-xs text-[#666]">An age-appropriate interaction designed to understand your child&apos;s learning profile, not just test scores.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full border border-[#ccc] flex items-center justify-center font-bold text-xs flex-shrink-0 text-[#222]">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#222] mb-1">Welcome</h4>
                  <p className="text-xs text-[#666]">Upon offer acceptance and documentation completion, your child joins the Dev Samaj family.</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-[#ccc] rounded">
              <h3 className="font-bold text-base text-[#222] mb-3">Key Information</h3>
              <ul className="text-xs text-[#666] divide-y divide-[#eee] mb-6">
                <li className="py-2"><strong>Academic Year:</strong> April &ndash; March</li>
                <li className="py-2"><strong>Admissions Open:</strong> Pre-Primary to Class IX &amp; Class XI</li>
                <li className="py-2"><strong>Affiliation:</strong> Central Board of Secondary Education (CBSE)</li>
                <li className="py-2"><strong>Campus Visits:</strong> Monday &ndash; Friday, 9:00 AM &ndash; 1:00 PM</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a href="#inquire" className="wf-cta !mt-0">
                  APPLY ONLINE
                </a>
                <a href="#prospectus" className="wf-cta wf-cta-secondary !mt-0">
                  DOWNLOAD PROSPECTUS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          13. CONTACT — Reach Out
          ========================================================================= */}
      <section className="wireframe-section" id="contact">
        <div className="wireframe-container">
          <div className="wf-label text-center sm:text-left">Reach Out</div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center sm:text-left break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-start">
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#888] mb-1">Campus Address</h4>
                <p className="text-sm text-[#222]">IS Dev Samaj Senior Secondary School<br />Sector 21-C, Chandigarh &mdash; 160022</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#888] mb-1">Phone</h4>
                <p className="text-sm text-[#222]">+91 (0172) 270-XXXX &bull; +91 (0172) 271-XXXX</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#888] mb-1">Email</h4>
                <p className="text-sm text-[#222]">info@isdevsamaj21.ac.in &bull; admissions@isdevsamaj21.ac.in</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#888] mb-1">Office Hours</h4>
                <p className="text-sm text-[#222]">Monday &ndash; Saturday: 8:00 AM &ndash; 3:00 PM<br />Closed on 2nd Saturdays and Public Holidays</p>
              </div>
              <div>
                <a href="mailto:info@isdevsamaj21.ac.in" className="wf-cta">
                  SEND AN INQUIRY
                </a>
              </div>
            </div>
            <div>
              <div className="wf-img-placeholder h-[320px]">
                CAMPUS LOCATION / INTERACTIVE MAP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          14. FOOTER — Comprehensive Wireframe Footer
          ========================================================================= */}
      <footer className="border-t border-[#ccc] py-12 text-[#666] bg-white">
        <div className="wireframe-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">IS Dev Samaj Senior Secondary School</h4>
              <p className="text-xs leading-relaxed text-[#666]">
                Affiliated to CBSE, New Delhi.<br />
                Affiliation No. 2630018<br />
                Sector 21-C, Chandigarh &mdash; 160022
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Academics</h4>
              <ul className="text-xs flex flex-col gap-1.5">
                <li><a href="#journey" className="hover:text-[#222]">Pre-Primary School</a></li>
                <li><a href="#journey" className="hover:text-[#222]">Primary Wing</a></li>
                <li><a href="#journey" className="hover:text-[#222]">Middle School</a></li>
                <li><a href="#journey" className="hover:text-[#222]">Senior Secondary</a></li>
                <li><a href="#updates" className="hover:text-[#222]">CBSE Mandatory Disclosure</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Campus &amp; Life</h4>
              <ul className="text-xs flex flex-col gap-1.5">
                <li><a href="#campus" className="hover:text-[#222]">Infrastructure &amp; Labs</a></li>
                <li><a href="#beyond" className="hover:text-[#222]">Sports &amp; Athletics</a></li>
                <li><a href="#guldaasta" className="hover:text-[#222]">Guldaasta Festival</a></li>
                <li><a href="#achievements" className="hover:text-[#222]">Student Achievements</a></li>
                <li><a href="#gallery" className="hover:text-[#222]">Campus Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Connect</h4>
              <ul className="text-xs flex flex-col gap-1.5">
                <li><a href="#admissions" className="hover:text-[#222]">Admissions 2025&ndash;26</a></li>
                <li><a href="#contact" className="hover:text-[#222]">Contact &amp; Directions</a></li>
                <li><a href="#updates" className="hover:text-[#222]">Circulars &amp; Notices</a></li>
                <li><a href="#community" className="hover:text-[#222]">Alumni Portal</a></li>
                <li><a href="#contact" className="hover:text-[#222]">Careers at Dev Samaj</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-[#ccc] flex flex-col sm:flex-row justify-between items-center text-xs text-[#888] gap-4">
            <div>&copy; {new Date().getFullYear()} IS Dev Samaj Senior Secondary School. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-[#222]">Privacy Policy</a>
              <a href="#terms" className="hover:text-[#222]">Terms of Use</a>
              <a href="#sitemap" className="hover:text-[#222]">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
