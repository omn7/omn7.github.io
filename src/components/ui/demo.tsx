import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Hackathons', url: '/hackathons', icon: Briefcase },
    { name: 'Blogs', url: '/blogs', icon: User },
    { name: 'Resume', url: '/resume', icon: FileText }
  ]

  return <NavBar items={navItems} />
} 