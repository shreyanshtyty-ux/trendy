"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  BarChart3, 
  Settings, 
  AlertTriangle, 
  Bell,
  Zap,
  Users,
  Activity,
  ArrowLeft
} from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()
  const isOnDashboard = pathname === "/dashboard"

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: TrendingUp },
    { href: "/trends", label: "Trends", icon: TrendingUp },
    { href: "/alerts", label: "Alerts", icon: AlertTriangle },
    { href: "/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/settings", label: "Settings", icon: Settings },
  ]

  const quickStats = [
    { label: "Today's Trends", value: "127", icon: TrendingUp, color: "text-emerald-500 dark:text-emerald-400" },
    { label: "Active Alerts", value: "23", icon: Bell, color: "text-cyan-500 dark:text-cyan-400" },
    { label: "Viral Content", value: "8", icon: Zap, color: "text-blue-500 dark:text-blue-400" },
  ]

  return (
    <div className="w-64 bg-gradient-to-b from-background to-background/95 border-r border-border/40 h-screen flex flex-col">
      {/* User Profile */}
      <div className="p-6 border-b border-border/40">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 ring-2 ring-cyan-500/20">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-semibold">
              S
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Shrey</p>
            <p className="text-xs text-muted-foreground truncate">shreyanshguptaba...</p>
          </div>
        </div>
      </div>

      {/* Back Button (only show when not on dashboard) */}
      {!isOnDashboard && (
        <div className="p-4 border-b border-border/40">
          <Button asChild variant="outline" className="w-full justify-start gap-2">
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 h-11 ${
                    isActive 
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:from-cyan-600 hover:to-blue-600" 
                      : "hover:bg-cyan-500/10 hover:text-cyan-500 text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-foreground mb-3">Quick Stats</h3>
          <div className="space-y-3">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/30 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-background/80 ${stat.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                  <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-600 border-cyan-500/20 dark:bg-cyan-400/20 dark:text-cyan-300 dark:border-cyan-400/30">
                    {stat.value}
                  </Badge>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-border/40">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">N</span>
          </div>
        </div>
      </div>
    </div>
  )
}
