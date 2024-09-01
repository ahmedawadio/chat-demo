'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Analytics } from '@vercel/analytics/react';




export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <Theme>
        <Analytics/>
      <SidebarProvider>
        <TooltipProvider>{children}</TooltipProvider>
        <SpeedInsights/>
      </SidebarProvider>
      </Theme>
    </NextThemesProvider>
  )
}
