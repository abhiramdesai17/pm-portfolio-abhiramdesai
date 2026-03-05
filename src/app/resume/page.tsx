
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    company: "Amazon",
    role: "Product Manager",
    period: "March 2025 – Present",
    points: [
      "Defined and owned end-to-end MVP roadmap for a $40M Amazon Fresh B2B AI-enabled workforce planning platform.",
      "Scaled AI-enabled platform across 2 regions and 8 business lines, reducing decision cycles by up to ~75%.",
      "Productionized AI-powered insights platform from 0 to 1 automating reporting across 18 operational metrics."
    ]
  },
  {
    company: "Abecedarian LLC / Northeastern",
    role: "Product Manager (Mental Health GenAI Chatbot)",
    period: "Sept 2024 – March 2025",
    points: [
      "Owned product roadmap from ideation to execution for a B2C GenAI-powered mental health chatbot.",
      "Led design and launch of 3+ AI-driven user workflows resulting in 15% increase in user engagement.",
      "Drove post-launch iteration through A/B testing and data-driven discovery analyzing user behavior."
    ]
  },
  {
    company: "Philips North America",
    role: "Product Manager co-op",
    period: "Jan 2023 – Aug 2023",
    points: [
      "Owned end-to-end product strategy for AI-driven feature launch on B2C clinical ultrasound product.",
      "Delivered clinician-facing insights through SQL-powered data driven reporting, saving ~$56k annually.",
      "Modernized Lumify's data platform on AWS, automating ETL for 100k+ patient records."
    ]
  }
];

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-20 bg-muted/10">
      <Navbar />
      
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-5xl mx-auto">
        <div className="bg-card shadow-2xl rounded-3xl overflow-hidden border">
          {/* Resume Header */}
          <div className="p-12 bg-primary text-primary-foreground">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h1 className="text-4xl font-headline font-bold mb-2">Abhiram Desai</h1>
                <p className="text-xl text-accent font-medium">Product Manager | AI Specialist</p>
              </div>
              <div className="space-y-2 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-accent" /> abhiramdesai.99@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-accent" /> +1(425)864-3723
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent" /> Seattle, WA
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-accent" /> portfolio.abhiram.com
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 grid md:grid-cols-3 gap-12">
            {/* Left Sidebar */}
            <div className="md:col-span-1 space-y-10">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Summary</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AI Product Manager experienced in identifying high-leverage AI opportunities, rapidly prototyping solutions, and owning end-to-end product delivery across B2B and B2C platforms.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["AI/ML", "GenAI", "SQL", "PowerBI", "Tableau", "AWS", "Azure", "Python", "A/B Testing", "Agile", "Scrum"].map(s => (
                    <Badge key={s} variant="secondary" className="text-[10px] font-bold uppercase">{s}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-primary text-sm">MS Data Analytics Engineering</p>
                    <p className="text-xs text-muted-foreground">Northeastern University</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">B.Tech Electrical & Electronics</p>
                    <p className="text-xs text-muted-foreground">PES University</p>
                  </div>
                </div>
              </div>

              <Button className="w-full rounded-full bg-accent hover:bg-accent/80 text-accent-foreground font-bold">
                <Download className="mr-2" size={16} /> Download Resume
              </Button>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6 flex items-center gap-2">
                  Experience <div className="h-px flex-1 bg-border" />
                </h3>
                <div className="space-y-10">
                  {experiences.map((exp, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-muted">
                      <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5" />
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-primary">{exp.company}</h4>
                        <span className="text-xs text-muted-foreground font-medium">{exp.period}</span>
                      </div>
                      <p className="text-sm font-semibold text-accent mb-3">{exp.role}</p>
                      <ul className="space-y-2">
                        {exp.points.map((p, j) => (
                          <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-accent">•</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6 flex items-center gap-2">
                  Projects <div className="h-px flex-1 bg-border" />
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-primary text-sm">Postmates Plus Parcel Delivery</h4>
                    <p className="text-xs text-muted-foreground">Roadmap for expansion and platform feature addition.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">Mental Health AI Chatbot</h4>
                    <p className="text-xs text-muted-foreground">AI-driven conversational mental health platform leveraging RAG.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
