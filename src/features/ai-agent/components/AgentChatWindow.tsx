import { useEffect, useRef } from 'react'
import { AgentMessage as AgentMessageType } from '../types/agent.types'
import { AgentMessage } from './AgentMessage'
import { ScrollArea } from '@/components/ui/scroll-area'

interface AgentChatWindowProps {
  messages: AgentMessageType[]
}

export function AgentChatWindow({ messages }: AgentChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <ScrollArea className="h-[calc(100vh-280px)] pr-2">
      <div className="space-y-3">
        {messages.map((message) => (
          <AgentMessage key={message.id} message={message} />
        ))}
        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  )
}
