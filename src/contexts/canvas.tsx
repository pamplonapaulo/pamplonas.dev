import React, {
  Dispatch,
  useContext,
  createContext,
  SetStateAction,
  useState,
} from 'react'

export function createCtx<ContextType>() {
  const ctx = createContext<ContextType | undefined>(undefined)
  function useCtx() {
    const c = useContext(ctx)
    if (!c) throw new Error('useCtx must be inside a Provider with a value')
    return c
  }
  return [useCtx, ctx.Provider] as const
}

type CanvasContextType = {
  canvas: HTMLCanvasElement | null
  setCanvas: Dispatch<SetStateAction<HTMLCanvasElement | null>>
}

const [useCanvas, CtxProvider] = createCtx<CanvasContextType>()

type Props = {
  children: React.ReactNode
}

const CanvasProvider = ({ children }: Props) => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)

  React.useEffect(() => {
    const currentCanvas: HTMLCanvasElement | null = null
    setCanvas(currentCanvas)
  }, [])

  return <CtxProvider value={{ canvas, setCanvas }}>{children}</CtxProvider>
}

export { CanvasProvider, useCanvas }
