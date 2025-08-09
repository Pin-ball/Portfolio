import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/utils/translations";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function Education() {
  const t = useTranslations();

  return (
    <>
      <h2 className="flex items-center gap-2 mb-4 text-lg font-semibold">
        <GraduationCap className="w-5 h-5" />
        {t("education.title")}
      </h2>

      <div className="space-y-4">
        {education.map((edu, idx) => (
          <Card key={idx} className="hover:border-foreground/25">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold">
                    {t(edu.degreeKey)}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">
                      {edu.institution}
                    </span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <span className="px-2 py-1 text-xs border rounded">
                        {t("education.gpa", { gpa: edu.gpa })}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground line-clamp-5">
                {t(edu.descriptionKey)}
              </p>

              <h4 className="mb-2 font-medium">
                {t("education.keyAchievements")}:
              </h4>
              <ul className="mb-4 space-y-1">
                {t.raw(edu.achievementsKey).map((ach: string, idx: number) => (
                  <li key={idx} className="flex text-sm">
                    •<span className="ml-2 text-muted-foreground">{ach}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {t.raw(edu.coursesKey).map((course: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs border rounded text-primary max-xs:flex-grow"
                  >
                    {course}
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
