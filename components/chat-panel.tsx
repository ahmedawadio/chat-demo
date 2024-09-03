import * as React from 'react'

import { shareChat } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { PromptForm } from '@/components/prompt-form'
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { IconShare } from '@/components/ui/icons'
import { FooterText } from '@/components/footer'
import { ChatShareDialog } from '@/components/chat-share-dialog'
import { useAIState, useActions, useUIState } from 'ai/rsc'
import type { AI } from '@/lib/chat/actions'
import { nanoid } from 'nanoid'
import { UserMessage } from './stocks/message'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { SiConfluence } from 'react-icons/si'
import { RiCalendarScheduleLine } from 'react-icons/ri'
import { FaHistory } from 'react-icons/fa'
import { GoTasklist } from 'react-icons/go'
import { CgPill } from 'react-icons/cg'
import { FaRegCircle } from 'react-icons/fa'
import { MdPayment } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

export interface ChatPanelProps {
  id?: string
  title?: string
  input: string
  setInput: (value: string) => void
  isAtBottom: boolean
  scrollToBottom: () => void
}

export function ChatPanel({
  id,
  title,
  input,
  setInput,
  isAtBottom,
  scrollToBottom
}: ChatPanelProps) {
  const [aiState] = useAIState()
  const [messages, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false)

  const exampleMessages = [
    {
      heading: 'Schedule Appointment',
      subheading: 'Find a time to meet the doctor',
      icon: <RiCalendarScheduleLine />,
      message: `I have not scheduled my knee surgery yet, but was given the told by Dr. Williamson I should schedule it as soon as possible. Can you help me find a time?`
    },
    {
      heading: 'Payments',
      subheading: 'Bill and insurance questions',
      icon: <MdPayment />,
      message: `I just finished my surgery, I wanted to confirm everything properly went through with my inruance and what the final copay with be.`
    },
    {
      heading: 'Post Surgery Care',
      subheading: 'What should I do next?',
      icon: <GoTasklist />,
      message: `I just had my knee surgery. What are things to be mindful of for recovery? I forgot what the Dr Williamson mentioned in the office.`// meet with doctor, pick uo medicine, schedule follow up, stretchign exercises, schedule pt appointment, reduce sodium, show graph ph blood pressure going in the wrong direction
    },
    {
      heading: 'Medications',
      subheading: 'What should I be taking?',
      icon: <CgPill />,
      message: `After my knee surgery I was told to take fakeacilin, but I forgot the recommended frequency and if I needed to consume food with the medication?`
    },
    // {
    //   heading: 'What are the',
    //   subheading: 'trending memecoins today?',
    //   icon: <FaRegCircle />,
    //   message: `What are the trending memecoins today?`
    // },
    // {
    //   heading: 'What is the price of',
    //   subheading: '$DOGE right now?',
    //   icon: <FaRegCircle />,
    //   message: 'What is the price of $DOGE right now?'
    // },
    // {
    //   heading: 'I would like to buy',
    //   subheading: '42 $DOGE',
    //   icon: <FaRegCircle />,
    //   message: `I would like to buy 42 $DOGE`
    // },
    // {
    //   heading: 'What are some',
    //   subheading: `recent events about $DOGE?`,
    //   icon: <FaRegCircle />,
    //   message: `What are some recent events about $DOGE?`
    // }
  ]

  const communicationOptions = [
    { key: "message", title: "Message" },
    { key: "voice", title: "Voice" },
    { key: "sms", title: "SMS" },
    { key: "call", title: "Call"},
  ];


  const [selectedCommunicationOption, setSelectedCommunicationOption] = React.useState("message");
  // const [phoneNumber, setPhoneNumber] = React.useState("");
 

  
  return (
    // <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-90% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">

      
   
   <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-t from-black/1000 to-black/0 duration-300 ease-in-out animate-in dark:from-black/80 dark:to-black/0 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">

          <ButtonScrollToBottom
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />

{/* // className="mx-auto sm:max-w-2xl sm:px-4 h-20 mb-2 grid grid-cols-2 gap-2 px-2 bg-black rounded-2xl border" */}

      <div className="mx-auto sm:max-w-2xl sm:px-4">
     
     
      {/* {messages.length === 0 && 
      
      <>
       <div className="block sm:hidden mx-2 my-4">
       <div className="relative">
        <select
          id="myred"
          className="w-full rounded-2xl border bg-white p-4 dark:bg-zinc-950 pr-20 px-8 text-black dark:text-white appearance-none"
          value={selectedCommunicationOption}
          onChange={(e) => setSelectedCommunicationOption(e.target.value)}
        >
          {communicationOptions.map((option) => (
            <option key={option.key} value={option.key}>
              {option.title}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-3">
          <FaAngleDown className="text-white" />
        </div>
      </div>
      </div>

     <div 
     id="myred"
     className={`w-full rounded-2xl border bg-white p-4 dark:bg-zinc-950 
     hidden sm:flex justify-between items-center py-3 overflow-x-auto  
     my-4 `}
   >
    <div className="block sm:hidden w-full mx-4 my-4">
        <select
          id="myred"
          className="w-full rounded-2xl border bg-white p-4 dark:bg-zinc-950"
          value={selectedCommunicationOption}
          onChange={(e) => setSelectedCommunicationOption(e.target.value)}
        >
          {communicationOptions.map((option) => (
            <option key={option.key} value={option.key}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
     {communicationOptions.map((option) => (
       <div 
       key={option.key} 
       className={`text-center cursor-pointer transition-all text-sm rounded-lg px-9 py-3 ${
        selectedCommunicationOption === option.key 
          ? 'bg-gray-200 dark:bg-zinc-800 font-semibold text-black dark:text-white'  // Selected styling
          : 'bg-transparent text-[#A1A1AA] dark:text-[#A1A1AA]'  // Unselected styling with transparent background
      } hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900`}
       onClick={() => setSelectedCommunicationOption(option.key)}  
     >
       {option.title}
     </div>
     ))}
   </div>
      </>
      } */}
        <div className="mb-5 grid grid-cols-2 gap-2 px-2 sm:px-0"
        id= "mychoices">
          {messages.length === 0 && 
             exampleMessages.map((example, index) => (
              <div
                key={example.heading}
                className={`cursor-pointer rounded-2xl border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 `}
                onClick={async () => {
                  setMessages(currentMessages => [
                    ...currentMessages,
                    {
                      id: nanoid(),
                      display: <UserMessage>{example.message}</UserMessage>
                    }
                  ])

                  const responseMessage = await submitUserMessage(
                    example.message,
                    selectedCommunicationOption,
                  )

                  setMessages(currentMessages => [
                    ...currentMessages,
                    responseMessage
                  ])
                }}
              >
                <div className="flex items-center space-x-2 text-sm font-bold">
                  {example.icon}
                  <span>{example.heading}</span>
                </div>
                <div className=" mt-2 text-sm text-zinc-600 ">
                  {example.subheading}
                </div>
              </div>
            ))}




        </div>

        {messages?.length >= 2 ? (
          <div className="flex h-12 items-center justify-center">
            <div className="flex space-x-2">
              {id && title ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setShareDialogOpen(true)}
                  >
                    <IconShare className="mr-2" />
                    Share
                  </Button>
                  <ChatShareDialog
                    open={shareDialogOpen}
                    onOpenChange={setShareDialogOpen}
                    onCopy={() => setShareDialogOpen(false)}
                    shareChat={shareChat}
                    chat={{
                      id,
                      title,
                      messages: aiState.messages
                    }}
                  />
                </>
              ) : null}
            </div>
          </div>
        ) : null}

{

// selectedCommunicationOption === "message" && messages.length > 0 &&

        <div className="space-y-4  px-0  sm:rounded-t-xl md:py-4">
          <PromptForm input={input} setInput={setInput} />
          <FooterText className="hidden sm:block" />
        </div>

}
      </div>
    </div>

  )
}
