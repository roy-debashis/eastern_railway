import { useAgentStore } from '../store/agentStore'
import { useSelectedCardContext } from '../hooks/useSelectedCardContext'
import { useAgentQuery } from '../hooks/useAgentQuery'
import { AgentChatWindow } from './AgentChatWindow'
import { AgentInput } from './AgentInput'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Bot, Sparkles, RefreshCw, X, Layers } from 'lucide-react'
import { useDashboardStore } from '@/features/dashboard/store/dashboardStore'

export function AgentPanel() {
  const isPanelOpen = useAgentStore((state) => state.isPanelOpen)
  const closePanel = useAgentStore((state) => state.closePanel)
  const messages = useAgentStore((state) => state.messages)
  const resetAgent = useAgentStore((state) => state.reset)
  
  const selectedCardContext = useSelectedCardContext()
  const clearSelection = useDashboardStore((state) => state.clearSelection)
  const { askAgent, isAsking } = useAgentQuery()

  const handleSend = (query: string) => {
    if (!selectedCardContext) return
    askAgent({
      ...selectedCardContext,
      userQuery: query,
    })
  }

  return (
    <Sheet
      open={isPanelOpen}
      onOpenChange={(open) => {
        if (!open) closePanel()
      }}
      side="right"
      className="w-full sm:max-w-md md:max-w-xl bg-slate-950 border-l border-slate-800 text-slate-100 flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <SheetHeader className="border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white shadow-lg shadow-sky-900/50">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <SheetTitle className="text-base font-bold text-white flex items-center gap-1.5">
                  <span>MCDO AI Intelligence Agent</span>
                  <Sparkles className="h-4 w-4 text-sky-400" />
                </SheetTitle>
                <div className="text-[11px] text-slate-400">
                  Eastern Railway Financial Analytics Engine
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="iconSm"
                onClick={resetAgent}
                title="Reset conversation"
                className="text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          {/* Active Context Chip */}
          <div className="mt-3 flex items-center justify-between rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1.5 text-xs">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Context:
              </span>
              {selectedCardContext && selectedCardContext.cardId !== 'all' ? (
                <div className="flex items-center gap-1.5">
                  <Badge variant="railway" className="text-[11px] py-0 px-2 flex items-center gap-1 bg-sky-950 border-sky-600/40 text-sky-300">
                    <Layers className="h-3 w-3" />
                    <span className="truncate max-w-[200px]">{selectedCardContext.cardTitle}</span>
                  </Badge>
                  <button
                    type="button"
                    onClick={clearSelection}
                    className="text-slate-400 hover:text-rose-400 p-0.5 rounded"
                    title="Clear selected card filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ) : (
                <span className="text-sky-300 font-medium text-[11px]">
                  All Indicators (Click any card to focus)
                </span>
              )}
            </div>
            <Badge variant="outline" className="text-[10px] text-emerald-400 border-emerald-800/60 bg-emerald-950/40 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live MCDO Stream
            </Badge>
          </div>
        </SheetHeader>

        {/* Message Stream */}
        <div className="py-3">
          <AgentChatWindow messages={messages} />
        </div>
      </div>

      {/* Input Bottom Bar */}
      <div className="pb-1">
        <AgentInput
          onSend={handleSend}
          disabled={isAsking}
          selectedContext={selectedCardContext}
        />
      </div>
    </Sheet>
  )
}
