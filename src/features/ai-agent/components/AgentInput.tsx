import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Sparkles, CornerDownLeft } from 'lucide-react'
import { AgentRequestContext } from '../types/agent.types'

interface AgentInputProps {
  onSend: (query: string) => void
  disabled?: boolean
  selectedContext: AgentRequestContext | null
}

const QUICK_PROMPTS = [
  'Explain reason for gross earnings deficit vs budget',
  'Why is the Operating Ratio at 1873.71%?',
  'Provide division performance breakdown and rankings',
  'What are the key savings in working expenses?',
  'Recommend action plan for Sealdah division recovery',
]

export function AgentInput({
  onSend,
  disabled,
  selectedContext,
}: AgentInputProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim() || disabled) return
    onSend(query.trim())
    setQuery('')
  }

  const handleQuickPrompt = (prompt: string) => {
    if (disabled) return
    onSend(prompt)
  }

  return (
    <div className="space-y-2.5 pt-2 border-t border-slate-800">
      {/* Quick Prompts */}
      <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1">
        {QUICK_PROMPTS.slice(0, 3).map((prompt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleQuickPrompt(prompt)}
            disabled={disabled}
            className="inline-flex items-center gap-1 rounded-full border border-sky-600/30 bg-sky-950/40 px-2.5 py-1 text-[10px] font-medium text-sky-300 hover:bg-sky-900/60 hover:text-white transition-all disabled:opacity-40"
          >
            <Sparkles className="h-2.5 w-2.5 text-sky-400" />
            <span className="truncate max-w-[200px]">{prompt}</span>
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={disabled}
          placeholder={
            selectedContext
              ? `Ask AI about ${selectedContext.cardTitle}...`
              : 'Select a card or ask any MCDO question...'
          }
          className="h-10 w-full rounded-lg border border-slate-700 bg-slate-900/90 pl-3 pr-20 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 disabled:opacity-50"
        />
        <Button
          type="submit"
          disabled={!query.trim() || disabled}
          size="sm"
          className="absolute right-1 h-8 rounded-md bg-sky-600 px-3 text-xs text-white hover:bg-sky-500 disabled:opacity-30"
        >
          <Send className="mr-1 h-3 w-3" />
          <span>Ask</span>
        </Button>
      </form>
      <div className="flex items-center justify-between text-[10px] text-slate-500">
        <span>Powered by Eastern Railway Financial Intelligence Agent</span>
        <span className="flex items-center gap-1">
          <CornerDownLeft className="h-2.5 w-2.5" /> Enter to send
        </span>
      </div>
    </div>
  )
}
