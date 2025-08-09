import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="flex items-center justify-between gap-4 px-4 py-1 border-t bg-background">
      <p className="text-xs text-muted-foreground max-xs:invisible line-clamp-1">
        {t("footer.description")}
      </p>
      <div className="flex items-center space-x-2">
        {/* <Button variant="ghost" size="icon">
            <Link
              href="https://github.com/Pin-ball"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button> */}
        <Button variant="ghost" size="icon">
          <Link
            href="https://www.linkedin.com/in/damien-herrero-b110111bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon">
          <Link href="mailto:herrero.damien.1@gmail.com">
            <Mail className="w-4 h-4" />
            <span className="sr-only">Email</span>
          </Link>
        </Button>
      </div>
    </footer>
  );
}
