import { Instagram, Youtube, Github, Mail, Globe, Linkedin, MessageCircle } from "lucide-react"

export const profileConfig = {
  name: "Izzar Suly Nashrudin",
  title: "Creative Designer & Developer",
  description: "Merancang visual. Menulis kode. Menyatukan imajinasi dan logika.",
  avatar: "/profile.jpg?height=80&width=80",
  isOnline: true,
}

export const linksConfig = [
  {
    id: 1,
    title: "My Portofolio",
    description: "Portofolio desain dan proyek digital terbaru saya",
    url: "https://avezoor.my.id",
    displayUrl: "avezoor.my.id",
    icon: Globe,
    gradient: "from-gray-800 to-gray-900",
  },
  {
    id: 2,
    title: "Meme Maker",
    description: "Buat meme teks sederhana, langsung dari browser",
    url: "https://meme.avezoor.my.id",
    displayUrl: "meme.avezoor.my.id",
    icon: Globe,
    gradient: "from-gray-800 to-gray-900",
  },
  {
    id: 3,
    title: "Minecraft",
    description: "Gabung di dunia Minecraft saya, server pribadi terbuka!",
    url: "#",
    displayUrl: "mc.avezoor.my.id",
    icon: Globe,
    gradient: "from-gray-800 to-gray-900",
  }
]
