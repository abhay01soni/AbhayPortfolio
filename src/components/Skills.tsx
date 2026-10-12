import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section
      id="skills"
      aria-label="Skills & Technologies"
      className="py-24 w-full"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--accent)] tracking-tight">
          Skills
        </h2>
        <div className="h-[1px] bg-[var(--border)] flex-grow max-w-xs" />
      </div>

      {/* Skill Categories List */}
      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-5">
            {/* Category Title with Vertical Accent Bar Indicator */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="w-1.5 h-7 rounded-full bg-[var(--accent)] inline-block shadow-[0_0_10px_var(--accent-glow)]"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-heading)] tracking-tight">
                {category.title}
              </h3>
            </div>

            {/* Pill Badges Container */}
            <div className="flex flex-wrap gap-3 sm:gap-3.5 pt-1">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-sm sm:text-base font-medium text-[var(--text-heading)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_0_16px_var(--accent-glow-subtle)] transition-all duration-200 cursor-default select-none"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
