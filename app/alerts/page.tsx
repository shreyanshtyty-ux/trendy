"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Plus, Settings, AlertTriangle, TrendingUp, Users, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"

const mockAlerts = [
  {
    id: 1,
    name: "AI Content Creation",
    keyword: "AI content",
    platform: "TikTok",
    threshold: 1000,
    currentValue: 2500,
    status: "active",
    type: "viral",
    lastTriggered: "2 hours ago",
  },
  {
    id: 2,
    name: "Sustainable Fashion",
    keyword: "sustainable fashion",
    platform: "Instagram",
    threshold: 500,
    currentValue: 1200,
    status: "active",
    type: "engagement",
    lastTriggered: "1 day ago",
  },
  {
    id: 3,
    name: "Remote Work Tips",
    keyword: "remote work",
    platform: "LinkedIn",
    threshold: 200,
    currentValue: 150,
    status: "inactive",
    type: "growth",
    lastTriggered: "3 days ago",
  },
  {
    id: 4,
    name: "Plant-Based Recipes",
    keyword: "vegan recipes",
    platform: "YouTube",
    threshold: 800,
    currentValue: 950,
    status: "active",
    type: "viral",
    lastTriggered: "5 hours ago",
  },
]

export default function AlertsPage() {
  const [alerts, setAlerts] = useState(mockAlerts)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newAlert, setNewAlert] = useState({
    name: "",
    keyword: "",
    platform: "TikTok",
    threshold: "",
    type: "viral",
  })

  const toggleAlert = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id 
        ? { ...alert, status: alert.status === "active" ? "inactive" : "active" }
        : alert
    ))
  }

  const createAlert = () => {
    if (newAlert.name && newAlert.keyword && newAlert.threshold) {
      const alert = {
        id: Date.now(),
        ...newAlert,
        threshold: parseInt(newAlert.threshold),
        currentValue: 0,
        status: "active" as const,
        lastTriggered: "Never",
      }
      setAlerts([...alerts, alert])
      setNewAlert({ name: "", keyword: "", platform: "TikTok", threshold: "", type: "viral" })
      setShowCreateForm(false)
    }
  }

  const deleteAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id))
  }

  const getStatusColor = (status: string) => {
    return status === "active" ? "text-green-600" : "text-muted-foreground"
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "viral": return <TrendingUp className="h-4 w-4" />
      case "engagement": return <Users className="h-4 w-4" />
      case "growth": return <Zap className="h-4 w-4" />
      default: return <Bell className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Alerts</h1>
            <p className="text-muted-foreground">Set up notifications for trending topics</p>
          </div>
        </div>
        <Button onClick={() => setShowCreateForm(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Alert
        </Button>
      </div>

      {/* Create Alert Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Alert</CardTitle>
            <CardDescription>Set up a new trend alert</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Alert Name</Label>
                <Input
                  id="name"
                  value={newAlert.name}
                  onChange={(e) => setNewAlert({ ...newAlert, name: e.target.value })}
                  placeholder="Enter alert name"
                />
              </div>
              <div>
                <Label htmlFor="keyword">Keyword</Label>
                <Input
                  id="keyword"
                  value={newAlert.keyword}
                  onChange={(e) => setNewAlert({ ...newAlert, keyword: e.target.value })}
                  placeholder="Enter keyword to track"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="platform">Platform</Label>
                <select
                  id="platform"
                  value={newAlert.platform}
                  onChange={(e) => setNewAlert({ ...newAlert, platform: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md bg-background"
                >
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Twitter">Twitter</option>
                </select>
              </div>
              <div>
                <Label htmlFor="threshold">Threshold</Label>
                <Input
                  id="threshold"
                  type="number"
                  value={newAlert.threshold}
                  onChange={(e) => setNewAlert({ ...newAlert, threshold: e.target.value })}
                  placeholder="1000"
                />
              </div>
              <div>
                <Label htmlFor="type">Alert Type</Label>
                <select
                  id="type"
                  value={newAlert.type}
                  onChange={(e) => setNewAlert({ ...newAlert, type: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md bg-background"
                >
                  <option value="viral">Viral Score</option>
                  <option value="engagement">Engagement</option>
                  <option value="growth">Growth</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={createAlert}>Create Alert</Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Alerts List */}
      <div className="grid gap-4">
        {alerts.map((alert) => (
          <Card key={alert.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(alert.type)}
                    <div>
                      <h3 className="font-semibold">{alert.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Keyword: "{alert.keyword}" • {alert.platform}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Current Value</div>
                    <div className="font-semibold">{alert.currentValue}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Threshold</div>
                    <div className="font-semibold">{alert.threshold}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Last Triggered</div>
                    <div className="text-sm">{alert.lastTriggered}</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={alert.status === "active"}
                      onCheckedChange={() => toggleAlert(alert.id)}
                    />
                    <Badge variant={alert.status === "active" ? "default" : "secondary"}>
                      {alert.status}
                    </Badge>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteAlert(alert.id)}
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {alerts.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No alerts set up</h3>
            <p className="text-muted-foreground">Create your first alert to start tracking trends</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
