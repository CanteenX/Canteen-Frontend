
import { Sidebar } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Home, 
  Menu, 
  ShoppingCart, 
  Users, 
  BarChart2, 
  Settings, 
  HelpCircle, 
  LogOut 
} from "lucide-react";

export const metadata = {
  title: "Dashboard - CanteenX",
  description: "Manage your canteen operations",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar className="h-screen hidden md:flex fixed">
        <div className="flex flex-col h-full px-3 py-4">
          <div className="flex items-center mb-10 pl-2">
            <span className="font-bold text-xl">CanteenX</span>
          </div>
          
          <div className="space-y-2 flex-1">
            {[
              { icon: Home, label: "Dashboard", href: "/dashboard" },
              { icon: Menu, label: "Menu Management", href: "/dashboard/menu" },
              { icon: ShoppingCart, label: "Orders", href: "/dashboard/orders" },
              { icon: Users, label: "Customers", href: "/dashboard/customers" },
              { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
              { icon: Settings, label: "Settings", href: "/dashboard/settings" },
              { icon: HelpCircle, label: "Help", href: "/dashboard/help" },
            ].map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
          
          <div className="pt-4 border-t border-border/30 mt-6 space-y-4">
            <ThemeToggle />
            <Button variant="ghost" className="w-full justify-start text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </Sidebar>
      
      <div className="flex-1 md:ml-64">
        <main>{children}</main>
      </div>
    </div>
  );
}
