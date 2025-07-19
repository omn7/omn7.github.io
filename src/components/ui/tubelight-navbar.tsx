// Requires: framer-motion, lucide-react
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Set active tab based on current route
    const found = items.find(item => location.pathname === item.url)
    if (found) setActiveTab(found.name)
  }, [location.pathname, items])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <nav
        className="flex items-center gap-3 bg-white/20 dark:bg-zinc-900/40 border border-white/30 dark:border-zinc-800/60 backdrop-blur-2xl py-2 px-2 rounded-2xl shadow-2xl transition-all duration-300"
        role="navigation"
        aria-label="Main navigation"
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative flex flex-col items-center justify-center cursor-pointer text-xs font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-primary/10 text-primary shadow-lg",
                !isMobile && "min-w-[64px]"
              )}
              aria-current={isActive ? "page" : undefined}
              tabIndex={0}
            >
              <span className="flex flex-col items-center">
                <Icon
                  size={22}
                  strokeWidth={2.2}
                  className={cn(
                    "mb-1 transition-transform duration-200",
                    isActive ? "scale-110 text-primary" : "group-hover:scale-105"
                  )}
                />
                <span className="hidden sm:block text-xs font-medium tracking-wide">
                  {item.name}
                </span>
              </span>
              {/* Tooltip for icon on desktop */}
              <span className="sm:hidden absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                {item.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl -z-10 shadow-[0_4px_32px_0_rgba(80,80,255,0.15)]"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                >
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-2 bg-primary/70 rounded-t-full blur-md opacity-70"
                    layoutId="lamp-glow"
                  />
                </motion.div>
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
} 