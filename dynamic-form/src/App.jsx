import { useState } from "react"

function App() {
  const [ step, setStep ] = useState(1)
  
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-gray-100">
      <div className="w-full max-w-lg rounded-2xl bg-gray-800 p-8 shadow-2xl border border-gray-700">
        
        {/* Indicador Visual de Progresso */}
        <div className="mb-8 flex items-center justify-between border-b border-gray-700 pb-4">
          <h1 className="text-2xl font-bold text-blue-500">Register</h1>
          <span className="text-sm font-medium bg-gray-700 px-3 py-1 rounded-full text-blue-400">
            Step {step} of 3
          </span>
        </div>

        <div>
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-200">Personal Data</h2>
              <p className="text-sm text-gray-400 mb-4">Please, insert your personal information bellow.</p>
              
              {/* O esqueleto dos inputs do Passo 1 vai entrar aqui */}
              <div className="h-32 border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center text-gray-500">
                [Inputs de Nome, Email, CPF e Celular vão aqui]
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-200">Address</h2>
              <p className="text-sm text-gray-400 mb-4">Insert you CEP to autocomplete the form or type them manualy.</p>
              <div className="h-32 border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center text-gray-500">
                [Inputs de Endereço vão aqui]
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-200">Archives</h2>
              <p className="text-sm text-gray-400 mb-4">Do the upload of your documents or profile picture.</p>
              <div className="h-32 border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center text-gray-500">
                [Área de Upload vai aqui]
              </div>
            </div>
          )}
        </div>

        {/* Botões de Navegação Visual (Temporários para teste) */}
        <div className="mt-8 flex justify-between gap-4 border-t border-gray-700 pt-4">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Back
          </button>
          
          <button
            onClick={nextStep}
            disabled={step === 3}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
