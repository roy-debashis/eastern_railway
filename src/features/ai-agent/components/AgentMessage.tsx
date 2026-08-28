import { AgentMessage as AgentMessageType } from '../types/agent.types'
import { StructuredResponseRenderer } from './StructuredResponseRenderer'
import { Bot, User, Loader2, AlertTriangle, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AgentMessageProps {
  message: AgentMessageType
}

export function AgentMessage({ message }: AgentMessageProps) {
  const isAgent = message.role === 'agent'
  const isPending = message.status === 'pending'
  const isError = message.status === 'error'

  return (
    <div
      className={cn(
        'flex w-full gap-3 p-3 transition-colors rounded-lg',
        isAgent
          ? 'bg-slate-900/70 border border-slate-800/80 shadow-xs'
          : 'bg-blue-950/40 border border-blue-900/30'
      )}
    >
      {/* Avatar Icon */}
      <div
        className={cn(
          'flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-xs font-bold',
          isAgent
            ? 'border-sky-500/40 bg-sky-950 text-sky-300'
            : 'border-blue-400/40 bg-blue-900 text-white'
        )}
      >
        {isAgent ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
      </div>

      {/* Message Body */}
      <div className="flex-1 space-y-2 overflow-hidden">
        {/* Context Chip & Timestamp */}
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5 font-medium">
            <span className={isAgent ? 'text-sky-300 font-semibold' : 'text-blue-200'}>
              {isAgent ? 'Railway AI Financial Agent' : 'Railway Officer'}
            </span>
            {message.cardContext && (
              <span className="inline-flex items-center gap-0.5 rounded bg-slate-800 px-1.5 py-0.5 text-[9px] text-sky-400 border border-slate-700">
                <Layers className="h-2.5 w-2.5" />
                {message.cardContext.cardTitle}
              </span>
            )}
          </div>
          <span>
            {new Date(message.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>

        {/* Content Render */}
        {isPending ? (
          <div className="flex items-center gap-2 py-2 text-xs text-sky-300">
            <Loader2 className="h-4 w-4 animate-spin text-sky-400" />
            <span>{typeof message.content === 'string' ? message.content : 'Analyzing records...'}</span>
          </div>
        ) : isError ? (
          <div className="flex items-center gap-2 rounded-md border border-rose-800/50 bg-rose-950/40 p-2 text-xs text-rose-300">
            <AlertTriangle className="h-4 w-4 text-rose-400 shrink-0" />
            <span>{typeof message.content === 'string' ? message.content : 'Error processing prompt.'}</span>
          </div>
        ) : typeof message.content === 'string' ? (
          <div className="text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
            {message.content}
          </div>
        ) : (
          <StructuredResponseRenderer response={message.content} />
        )}
      </div>
    </div>
  )
}
