import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  Globe,
  Mail,
  NotebookPen,
} from "lucide-react";

const linkItems = [
  {
    name: "GitHub",
    description: "Code, experiments and prototypes",
    href: "https://github.com/nahianchayon",
    icon: GitBranch,
  },
  {
    name: "LinkedIn",
    description: "Professional updates and projects",
    href: "https://www.linkedin.com/in/nahian-rahman-chayon/",
    icon: BriefcaseBusiness,
  },
  {
    name: "Email",
    description: "Reach out to collaborate",
    href: "mailto:nahiansavage9@gmail.com",
    icon: Mail,
  },
  {
    name: "Portfolio / Resume",
    description: "A snapshot of my work",
    href: "#top",
    icon: NotebookPen,
  },
  {
    name: "LeetCode",
    description: "Problem solving practice",
    href: "https://leetcode.com/",
    icon: Code2,
  },
  {
    name: "Kaggle",
    description: "AI and ML experiments",
    href: "https://www.kaggle.com/",
    icon: Globe,
  },
];

export default function Links() {
  return (
    <section className="pt-12">
      <div className="space-y-3 border-b border-[#ececec] pb-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">Links</p>

        {linkItems.map(({ name, description, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex items-center justify-between gap-3 rounded-[14px] border border-[#efefef] bg-white px-3 py-3 transition-colors hover:bg-[#fafafa]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ececec] bg-[#fafafa] text-[#111111]">
                <Icon size={14} />
              </span>
              <div>
                <p className="text-[12px] font-medium text-[#111111]">{name}</p>
                <p className="text-[11px] text-[#666666]">{description}</p>
              </div>
            </div>
            <ArrowUpRight size={14} className="text-[#818181] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </section>
  );
}
