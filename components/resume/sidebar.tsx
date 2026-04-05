export function ResumeSidebar() {
  return (
    <aside className="bg-resume-sidebar px-8 md:px-12 lg:pl-16 xl:pl-20 lg:pr-8 py-8 lg:col-span-4">
      {/* Skills Section */}
      <section className="mb-10">
        <h2 className="section-title">Technical Skills</h2>

        <div className="space-y-5">
          <div>
            <h3 className="text-xs font-semibold uppercase text-resume-dark mb-2.5 tracking-wider">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Redux</span>
              <span className="skill-tag">RxJS</span>
              <span className="skill-tag">TailwindCSS</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-resume-dark mb-2.5 tracking-wider">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">GraphQL</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-resume-dark mb-2.5 tracking-wider">
              Testing & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">Jest</span>
              <span className="skill-tag">Vitest</span>
              <span className="skill-tag">RTL</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Github Actions</span>
              <span className="skill-tag">CI/CD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-10">
        <h2 className="section-title">Education</h2>
        <div>
          <h3 className="font-semibold text-resume-dark text-sm">
            BS Software Engineering
          </h3>
          <p className="text-sm text-resume-dark mt-1.5">
            International Islamic University Islamabad
          </p>
          <p className="text-sm text-resume-gray mt-2">2013 - 2017</p>
          <p className="text-sm text-resume-dark font-medium mt-1">
            CGPA: 3.6 / 4.0
          </p>
        </div>
      </section>

      {/* Core Strengths */}
      <section>
        <h2 className="section-title">Key Strengths</h2>
        <ul className="space-y-2.5 text-sm text-resume-dark">
          <li className="flex items-start gap-2.5">
            <span className="text-resume-gray mt-0.5">-</span>
            <span>End-to-end frontend ownership</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-resume-gray mt-0.5">-</span>
            <span>Scalable architecture design</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-resume-gray mt-0.5">-</span>
            <span>Cross-functional collaboration</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-resume-gray mt-0.5">-</span>
            <span>Code reviews & mentorship</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-resume-gray mt-0.5">-</span>
            <span>Testing & quality assurance</span>
          </li>
        </ul>
      </section>
    </aside>
  );
}
