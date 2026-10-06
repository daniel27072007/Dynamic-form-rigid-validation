import { useState } from "react"

function App() {
  const [ step, setStep ] = useState(1)

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 text-white font-sans">
      <div className="w-full max-w-5xl min-h-max rounded-lg bg-[#111111] p-10 shadow-2xl">
        {/* Indicador Visual de Progresso */}
        <div className="mb-8 flex items-center justify-between border-b border-neutral-800 pb-4">
          <h1 className="text-2xl font-normal tracking-wide text-neutral-100">Register</h1>
          <span className="text-xs font-semibold tracking-wider text-neutral-400 bg-neutral-800/60 px-3 py-1 rounded-full uppercase">
            Step {step} of 3
          </span>
        </div>
        <form>
          <div>
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-neutral-200">Personal Data</h2>
                <p className="text-xs text-neutral-400 mb-4">Please, insert your personal information bellow.</p>
                  <div id="inputBox" className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                    <input
                    type="text"
                    placeholder="Type your name"
                    className="w-full rounded-lg bg-gray-700/50 border border-gray-600 px-4 py-2.5 text-gray-100 placeholder-gray-500 outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all"
                    />
                  </div>
                  <div id="inputBox" className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-300">E-mail</label>
                    <input
                    type="email"
                    placeholder="exemple@email.com"
                    className="w-full rounded-lg bg-gray-700/50 border border-gray-600 px-4 py-2.5 text-gray-100 placeholder-gray-500 outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all"
                    />
                  </div>
                  <div id="inputBox" className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-300">CPF</label>
                    <input
                    type="text"
                    placeholder="000.000.000-00"
                    className="w-full rounded-lg bg-gray-700/50 border border-gray-600 px-4 py-2.5 text-gray-100 placeholder-gray-500 outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all"
                    />
                  </div>
                  <div id="inputBox" className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                    <input
                    type="text"
                    placeholder="(00) 00000-0000"
                    className="w-full rounded-lg bg-gray-700/50 border border-gray-600 px-4 py-2.5 text-gray-100 placeholder-gray-500 outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all"
                    />
                  </div>
                </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-neutral-200">Address</h2>
                <p className="text-xs text-neutral-400 mb-4">Insert you CEP to autocomplete the form or type them manualy.</p>
                <div className="h-32 border border-dashed border-neutral-700 rounded-lg bg-neutral-900/40 flex items-center justify-center text-neutral-500">
                  [Inputs de Endereço vão aqui]
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-neutral-200">Archives</h2>
                <p className="text-xs text-neutral-400 mb-4">Do the upload of your documents or profile picture.</p>
                <div className="h-32 border border-dashed border-neutral-700 rounded-lg bg-neutral-900/40 flex items-center justify-center text-neutral-500">
                  [Área de Upload vai aqui]
                </div>
              </div>
            )}
          </div>

          {/* Botões de Navegação Visual (Temporários para teste) */}
          <div className="mt-8 flex justify-between gap-4 border-t border-neutral-800 pt-5">
            <button
              type="button"
              onClick={prevStep} 
              disabled={step === 1} 
              className="px-5 py-2 text-sm font-medium text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              Back
            </button>
            {step !== 3 ? (
              <button
                key="next-btn"
                type="button"
                onClick={nextStep} 
                disabled={step === 3} 
                className="px-8 py-2.5 text-sm font-medium rounded-full bg-[#FF5A00] hover:bg-[#e04f00] text-white shadow-md disabled:opacity-40 disabled:pointer-events-none transition-colors "
              >
                Next
              </button>
            ) : (
              <button
                key="submit-btn"
                type="submit"
                className="px-8 py-2.5 text-sm font-medium rounded-full bg-[#FF5A00] hover:bg-[#e04f00] text-white shadow-md disabled:opacity-40 disabled:pointer-events-none transition-colors "
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App