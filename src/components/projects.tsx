import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projects } from "@/utils/translations";
import { Circle, ExternalLink, Laptop2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function Projects() {
  const t = useTranslations();

  return (
    <>
      <h2 className="flex items-center gap-2 mb-4 text-lg font-semibold">
        <Laptop2 className="w-5 h-5" />
        {t("projects.title")}
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((repo, idx) => (
          <Card key={idx} className="hover:border-foreground/25">
            <CardHeader className="flex items-start justify-between font-semibold">
              {repo.demo ? (
                <a
                  href={repo.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  {repo.name}
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
              ) : (
                <span className="text-primary">{repo.name}</span>
              )}

              <span className="px-2 py-1 text-xs rounded bg-accent text-muted-foreground">
                {t(repo.accessKey)}
              </span>
            </CardHeader>
            <CardContent className="flex flex-col justify-between h-full">
              <p className="mb-3 text-sm text-muted-foreground line-clamp-5">
                {t(repo.descriptionKey)}
              </p>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                {repo.languages.map((lang) => (
                  <div key={lang.text} className="flex items-center gap-1">
                    <Circle
                      fill="currentColor"
                      className="w-2 h-2"
                      style={{ color: lang.color }}
                    />
                    {lang.text}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
