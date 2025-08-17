import { Button } from "@/components/ui/button"
import { TrendingUp, Bell, Zap, Users } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "viral",
    title: "Content Going Viral",
    message: "AI Photography Tools trending on Twitter",
    time: "2 min ago",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    id: 2,
    type: "alert",
    title: "Keyword Alert",
    message: "Sustainable fashion mentioned 2.4k times",
    time: "15 min ago",
    icon: Bell,
    color: "text-blue-500",
  },
  {
    id: 3,
    type: "trend",
    title: "New Trend Detected",
    message: "Minimalist home design gaining traction",
    time: "1 hour ago",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    id: 4,
    type: "engagement",
    title: "High Engagement",
    message: "Fashion week posts reaching 1M+ views",
    time: "2 hours ago",
    icon: Users,
    color: "text-purple-500",
  },
]

export function NotificationPanel() {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border">
          <div className={`${notification.color} mt-0.5`}>
            <notification.icon className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">{notification.title}</p>
            <p className="text-xs text-muted-foreground">{notification.message}</p>
            <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            View
          </Button>
        </div>
      ))}
      <Button variant="outline" className="w-full text-sm bg-transparent">
        View All Notifications
      </Button>
    </div>
  )
}
