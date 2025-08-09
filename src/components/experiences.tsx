import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/utils/translations";
import { Building, Calendar, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function WorkExperience() {
  const t = useTranslations();

  return (
    <>
      <h2 className="flex items-center gap-2 mb-4 text-lg font-semibold">
        <Building className="w-5 h-5" />
        {t("experience.title")}
      </h2>

      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <Card key={idx} className="hover:border-foreground/25">
            <CardHeader className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg font-semibold">
                  {t(exp.positionKey)}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-semibold text-primary">
                    {exp.company}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {t(exp.periodKey)}
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground line-clamp-5">
                {t(exp.descriptionKey)}
              </p>

              <h4 className="mb-2 font-medium">
                {t("experience.keyAchievements")}:
              </h4>
              <ul className="mb-4 space-y-1">
                {t.raw(exp.achievementsKey).map((ach: string, idx: number) => (
                  <li key={idx} className="flex text-sm">
                    •<span className="ml-2 text-muted-foreground">{ach}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs border rounded text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
