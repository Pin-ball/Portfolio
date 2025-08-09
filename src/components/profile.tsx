import { profile } from "@/utils/translations";
import dayjs from "dayjs";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Profile() {
  const t = useTranslations();

  const getExperience = (): number => {
    const startDate = dayjs("2022-01-01");
    return dayjs().diff(startDate, "year");
  };

  return (
    <Card className="hover:border-accent-foreground/25">
      <CardHeader className="flex flex-col xs:flex-row xs:items-start xs:justify-between">
        <div className="flex-1">
          <CardTitle className="text-lg font-semibold">
            {profile.name}
          </CardTitle>
          <div className="flex items-center gap-4 text-sm">
            <span className="font-semibold text-primary">
              {t(profile.positionKey)}
            </span>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-3 h-3" />
              {profile.location}
            </div>
          </div>
        </div>

        <span className="px-2 py-1 text-xs font-semibold rounded bg-accent text-muted-foreground max-xs:mr-auto">
          {t(profile.experienceKey, { count: getExperience() })}
        </span>
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground line-clamp-10">
        {t(profile.descriptionKey)}
      </CardContent>
    </Card>
  );
}
