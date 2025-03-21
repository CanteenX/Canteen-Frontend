
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  Utensils,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Admin</p>
        </div>
        <Button className="bg-primary hover:bg-primary/80">
          <ShoppingBag className="mr-2 h-4 w-4" />
          New Order
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { 
            title: "Total Orders", 
            value: "1,234", 
            icon: ShoppingBag, 
            change: "+12%", 
            trend: "up" 
          },
          { 
            title: "Total Revenue", 
            value: "₹45,231", 
            icon: DollarSign, 
            change: "+8%", 
            trend: "up" 
          },
          { 
            title: "Total Customers", 
            value: "573", 
            icon: Users, 
            change: "+23%", 
            trend: "up" 
          },
          { 
            title: "Menu Items", 
            value: "86", 
            icon: Utensils, 
            change: "-2%", 
            trend: "down" 
          },
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs flex items-center ${
                stat.trend === "up" ? "text-green-500" : "text-red-500"
              }`}>
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                )}
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
              <p className="text-muted-foreground">Order chart visualization will appear here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
