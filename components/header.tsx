import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from './chat-history'
import { Session } from '@/lib/types'
import { LuSunDim } from "react-icons/lu";
import { TbHexagonLetterA } from "react-icons/tb";

async function UserOrLogin() {
  const session = (await auth()) as Session
  return (
    <>
      {session?.user ? (
        <>
          <SidebarMobile>
            <ChatHistory userId={session.user.id} />
          </SidebarMobile>
          <SidebarToggle />
        </>
      ) : (
        <Link href="/new" rel="nofollow">
          <IconNextChat className="size-6 mr-2 dark:hidden" inverted />
          <IconNextChat className="hidden size-6 mr-2 dark:block" />
        </Link>
      )}
      <div className="flex items-center">
        <IconSeparator className="size-6 text-muted-foreground/50" />
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <Button variant="link" asChild className="-ml-2">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
  
  
    <a href="/" className="flex items-center cursor-pointer">
      <div style={{ margin: '0 10px' }}>
        <TbHexagonLetterA size={30} color="#A1A1AA" />
      </div>
      <span className="text-2xl font-bold">Apollo Clinic</span>
    </a>


    <div className="hidden sm:flex items-center justify-end space-x-2">
      <a
        target="_blank"
        href="https://en.wikipedia.org/wiki/Apollo"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: 'outline' }))}
      >
        <span className="hidden sm:flex">Why this name?</span>
      </a>
      <a
        href="https://www.linkedin.com/in/ahmedhawad/"
        target="_blank"
        className={cn(buttonVariants({variant: 'secondary'}))}
      >
        <span className="hidden sm:flex bg-">👋 Say Hello</span>
      </a>
    </div>
  </header>
  )
}
