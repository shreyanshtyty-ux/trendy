import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import Link from "next/link"

interface CategoryCardProps {
  category: {
    name: string
    trends: number
    growth: string
    color: string
    icon: string
    href: string
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.href}>
      <Card className="border-border hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-2xl">{category.icon}</div>
            <Badge variant="secondary" className="text-xs">
              {category.growth}
            </Badge>
          </div>
          <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-foreground">{category.trends}</span>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1" />
              Trends
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
