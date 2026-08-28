import { useMutation } from '@tanstack/react-query'
import { queryAgentService } from '../services/agent.service'
import { useAgentStore } from '../store/agentStore'
import { AgentRequestContext, AgentMessage } from '../types/agent.types'

export function useAgentQuery() {
  const addMessage = useAgentStore((state) => state.addMessage)
  const updateMessage = useAgentStore((state) => state.updateMessage)
  const setIsStreaming = useAgentStore((state) => state.setIsStreaming)

  const mutation = useMutation({
    mutationFn: async (request: AgentRequestContext) => {
      // 1. Add user message
      const userMsgId = `msg-user-${Date.now()}`
      const userMessage: AgentMessage = {
        id: userMsgId,
        role: 'user',
        cardContext: {
          cardId: request.cardId,
          cardTitle: request.cardTitle,
        },
        content: request.userQuery,
        status: 'done',
        createdAt: Date.now(),
      }
      addMessage(userMessage)

      // 2. Add pending agent message
      const agentMsgId = `msg-agent-${Date.now() + 1}`
      const pendingAgentMessage: AgentMessage = {
        id: agentMsgId,
        role: 'agent',
        cardContext: {
          cardId: request.cardId,
          cardTitle: request.cardTitle,
        },
        content: 'Analyzing Eastern Railway operational telemetry & MCDO records...',
        status: 'pending',
        createdAt: Date.now(),
      }
      addMessage(pendingAgentMessage)
      setIsStreaming(true)

      try {
        // 3. Query LLM service
        const response = await queryAgentService(request)
        updateMessage(agentMsgId, {
          content: response,
          status: 'done',
        })
        return response
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown query failure'
        updateMessage(agentMsgId, {
          content: `Error generating AI report: ${errorMessage}`,
          status: 'error',
        })
        throw err
      } finally {
        setIsStreaming(false)
      }
    },
  })

  return {
    askAgent: mutation.mutate,
    isAsking: mutation.isPending,
    error: mutation.error,
  }
}
