import { Education } from '@src/components/Education.tsx'
import { Experiences } from '@src/components/Experiences.tsx'
import { Profile } from '@src/components/Profile.tsx'
import { Projects } from '@src/components/Projects.tsx'
import { Shell } from '@src/components/Shell.tsx'
import { Skills } from '@src/components/Skills.tsx'
import { resolveLocale } from '@src/i18n/locale.ts'

export default async function Page({ params }: PageProps<'/[locale]'>) {
  await resolveLocale(params)

  return (
    <Shell className="space-y-8">
      <Profile />
      <Projects />
      <Experiences />
      <Skills />
      <Education />
    </Shell>
  )
}
