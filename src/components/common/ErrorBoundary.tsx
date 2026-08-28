import { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Eastern Railway App:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] w-full flex-col items-center justify-center rounded-xl border border-rose-900/50 bg-slate-950 p-8 text-center text-slate-200">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-950/80 text-rose-400 mb-4 border border-rose-800/60">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-bold text-white mb-2">
            Operational Telemetry Display Encountered an Issue
          </h2>
          <p className="max-w-md text-xs text-slate-400 mb-6">
            {this.state.error?.message ||
              'A component rendering error occurred while computing financial matrices.'}
          </p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Reload Railway Dashboard
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
