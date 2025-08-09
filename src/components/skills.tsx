import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skills } from "@/utils/translations";
import { Code } from "lucide-react";
import { useTranslations } from "next-intl";

export function Skills() {
  const t = useTranslations();

  return (
    <>
      <h2 className="flex items-center mb-4 text-lg font-semibold gap-2">
        <Code className="w-5 h-5" />
        {t("skills.title")}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((cat) => (
          <Card
            key={cat.titleKey}
            className="p-4 hover:border-accent-foreground/25"
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <cat.icon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">{t(cat.titleKey)}</h3>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-1 grid grid-cols-1 2xs:grid-cols-2">
                {cat.skills.map((skill, idx) => (
                  <li key={idx} className="text-sm">
                    •<span className="ml-2 text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
