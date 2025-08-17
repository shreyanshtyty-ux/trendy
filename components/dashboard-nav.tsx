"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { TrendingUp, Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function DashboardNav() {
  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-6">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center space-x-2 mr-8">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg p-2 shadow-lg">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <span className="font-serif text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400">
            Trendy
          </span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search trends, keywords, or hashtags..." 
              className="pl-10 bg-background/50 border-border/50 focus:border-cyan-500/50 focus:ring-cyan-500/20" 
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4 ml-8">
          <Button variant="ghost" size="sm" className="hover:bg-cyan-500/10 hover:text-cyan-500">
            <Bell className="h-4 w-4" />
          </Button>
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="border-border/50 hover:bg-cyan-500/10 hover:border-cyan-500/50">
            <Link href="/">Back to Site</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
