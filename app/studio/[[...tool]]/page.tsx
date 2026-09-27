import { GuestCms } from '@/components/guest-cms'
import { SanityStudio } from '@/components/sanity-studio'

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return <GuestCms />

  return <SanityStudio />
}
