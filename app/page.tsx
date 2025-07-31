import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Particles from "@/components/particles"
import { profileConfig, linksConfig } from "@/config/links"

export default function LinkInBio() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#141414ff" }}>
      {/* Particles Background */}
      <Particles />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-md">
        {/* Profile Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="relative mb-6">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-white/20 to-white/10 p-1 shadow-2xl backdrop-blur-sm">
              <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <Image
                  src={profileConfig.avatar || "/placeholder.svg"}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">{profileConfig.name}</h1>
          {profileConfig.isOnline && (
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Online</span>
            </div>
          )}
          <p className="text-white/80 mb-4 leading-relaxed">
            {profileConfig.title}
            <br />
            <span className="text-sm text-white/60">{profileConfig.description}</span>
          </p>

          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white/40 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-5">
          {linksConfig.map((link, index) => {
            const IconComponent = link.icon
            return (
              <Card
                key={link.id}
                className="group hover:scale-[1.03] transition-all duration-300 hover:shadow-2xl border-0 bg-white/5 backdrop-blur-md animate-slide-up rounded-3xl overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    <div className={`bg-gradient-to-r ${link.gradient} p-5 relative overflow-hidden rounded-3xl`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_70%)]"></div>
                      </div>

                      <div className="relative flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-lg mb-1 group-hover:translate-x-1 transition-transform duration-300">
                            {link.title}
                          </h3>
                          <p className="text-white/60 text-xs font-medium mb-2 group-hover:text-white/80 transition-colors duration-300">
                            {link.displayUrl}
                          </p>
                          <p className="text-white/80 text-sm leading-relaxed">{link.description}</p>
                        </div>

                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-lg">
                            <ExternalLink className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-white/50 text-sm mb-4">AvezoorLabs. All rights reserved.</p>
          <div className="flex justify-center space-x-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"></div>
            <div
              className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
