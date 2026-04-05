export function ResumeContent() {
  return (
    <div className="px-8 md:px-12 lg:pl-10 lg:pr-16 xl:pr-20 py-8 lg:col-span-8 bg-white lg:border-l border-stone-200">
      {/* Summary Section */}
      <section className="mb-10">
        <h2 className="section-title">Professional Summary</h2>
        <p className="text-sm leading-relaxed text-resume-dark text-pretty font-medium">
          Senior Full-Stack Engineer with <strong>8+ years</strong> of experience
          building production-grade web applications for industry leaders
          including <strong>Careem</strong>, <strong>Motive</strong>, and{" "}
          <strong>CareCloud</strong>. Specialized in React, Next.js, and
          Angular with a proven track record of delivering high-performance,
          scalable solutions. Known for owning frontend delivery end-to-end,
          establishing testing foundations, and driving architectural decisions
          in agile environments.
        </p>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="section-title">Professional Experience</h2>

        <div className="space-y-6">
          {/* VentureDive */}
          <ExperienceCard
            title="Senior Software Engineer"
            company="VentureDive"
            period="May 2022 - Oct 2025"
            location="Remote"
            highlights={[
              "Working on Saturn (Careem NOW) - a React-based merchant experience platform",
              "Leading feature developments that improve merchant's experience",
              "Developed automated testing foundation from scratch and practices for writing tests",
              "Driving daily scrum standup meetings and conducting code reviews",
              "Providing on-call support for production issues",
            ]}
          />

          {/* Careem */}
          <ExperienceCard
            title="Senior Software Engineer (Outsourced)"
            company="Careem"
            period="Mar 2023 - Oct 2024"
            location="Islamabad, Remote"
            highlights={[
              "Working in merchant experience team on Saturn (Careem NOW initiative) built on React",
              "Leading feature developments (frontend) that improve merchant's experience",
            ]}
          />

          {/* Motive */}
          <ExperienceCard
            title="Software Engineer - Frontend (Outsourced)"
            company="Motive (KeepTruckin)"
            period="May 2022 - Oct 2022"
            location="Islamabad"
            highlights={[
              "Member of Frontend Platform team on Motive's fleet management web application (Angular)",
              "Creating custom reusable independent components using Angular",
              "Managing Angular library hosting custom components",
              "Taking part in application (UI) architecture discussions and decisions",
            ]}
          />

          {/* Emumba */}
          <ExperienceCard
            title="Software Engineer"
            company="Emumba"
            period="Dec 2021 - May 2022"
            location="Islamabad"
          />

          {/* MTBC */}
          <ExperienceCard
            title="Software Engineer"
            company="CareCloud (MTBC)"
            companyNote="NASDAQ Listed"
            period="Dec 2020 - Dec 2021"
            location="Rawalpindi"
            highlights={[
              "Part of core platform team working on cloud-based EHR application (CareCloud-GO)",
              "Developed reusable components, generic solutions and core architecture (React, GraphQL)",
              "Worked closely with US (Miami) based team for features and technical decisions",
            ]}
          />

          {/* Reactive Space */}
          <ExperienceCard
            title="MEAN Stack Developer"
            company="Reactive Space"
            period="Aug 2020 - Nov 2020"
            location="Rawalpindi"
            highlights={[
              "Built blockchain exchange on MEAN Stack with three colored themes",
              "Mentored junior resources",
            ]}
          />

          {/* iPlex */}
          <ExperienceCard
            title="MERN Stack Developer"
            company="iPlex"
            period="Feb 2020 - Jul 2020"
            location="Rawalpindi"
            highlights={[
              "Full-stack developer on vegan certification web application to automate daily tasks",
              "Led application's architecture and features implementation (Node.js, React.js, MongoDB)",
            ]}
          />

          {/* QuellxCode */}
          <ExperienceCard
            title="Frontend Web Developer"
            company="QuellxCode"
            period="Dec 2017 - Nov 2019"
            location="Islamabad"
            highlights={[
              "Pixel perfect frontend development for SAAS applications using Angular",
              "Took part in all application phases from analysis to production",
              "Created MVPs for 3 large scale applications (Vease, EVV, Citizen)",
            ]}
          />
        </div>
      </section>
    </div>
  )
}

interface ExperienceCardProps {
  title: string
  company: string
  companyNote?: string
  period: string
  location?: string
  highlights?: string[]
}

function ExperienceCard({ title, company, companyNote, period, location, highlights }: ExperienceCardProps) {
  return (
    <article>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
        <div>
          <h3 className="font-bold text-resume-dark text-base tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {company}
            {companyNote && <span className="font-normal text-resume-accent text-sm ml-2">({companyNote})</span>}
          </h3>
          <p className="text-sm text-resume-accent mt-0.5 font-semibold">
            {title}
          </p>
        </div>
        <div className="text-left sm:text-right mt-1 sm:mt-0 flex-shrink-0">
          <span className="text-xs font-bold text-resume-dark whitespace-nowrap">{period}</span>
          {location && <p className="text-xs text-resume-accent font-medium">{location}</p>}
        </div>
      </div>
      {highlights && highlights.length > 0 && (
        <ul className="text-sm text-resume-dark space-y-1.5 mt-2 font-medium">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-orange-500 mt-0.5 font-bold">•</span>
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
