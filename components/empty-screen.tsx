import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
// import {Tabs, Tab} from "@nextui-org/tabs";
import * as Select from '@radix-ui/react-select';

export function EmptyScreen() {

  return (
    
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl border bg-background p-8">

        <h1 className="text-lg font-semibold">
          Welcome to Apollo Clinic!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is a demo of how helpful a virtual agent can be in a clinical setting. You can chat in example scenerios below. Built by Ahmed Awad.
          
          {/* {' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, the{' '}
          <ExternalLink href="https://sdk.vercel.ai">
            Vercel AI SDK
          </ExternalLink>
          , and{' '}
          <ExternalLink href="https://vercel.com/storage/kv">
            Vercel KV
          </ExternalLink> */}
          
        </p>
        {/* <p className="leading-normal text-muted-foreground">
          It uses{' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
            React Server Components
          </ExternalLink>{' '}
          to combine text with generative UI as output of the LLM. The UI state
          is synced through the SDK so the model is aware of your interactions
          as they happen.
        </p> */}


      
      
      </div>

    </div>
  )
}
