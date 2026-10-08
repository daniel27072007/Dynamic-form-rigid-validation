import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers"
import { formStepsSchemas } from "./schemas/formSchema.js"

function App() {
  const [ step, setStep ] = useState(1)
  const currentSchema = formStepsSchemas[step - 1]

  const { register, handleSubmit, formState: { errors }, trigger } = useForm({ resolver: zodResolver(currentSchema), mode: "onChange" }) 

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 text-white font-sans">
      <div className="w-full max-w-5xl min-h-max border-4 border-[#FF5A00] rounded-lg bg-[#111111] p-10 shadow-2xl">
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
                {/* Grid: Street e Number */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="text-sm font-medium text-gray-300">Street</label>
                    <input
                      type="text"
                      placeholder="Rua, Avenida..."
                      className="w-full rounded-lg bg-gray-700/50 border border-gray-600 px-4 py-2.5 text-gray-100 placeholder-gray-500 outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-300">Number</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full rounded-lg bg-gray-700/50 border border-gray-600 px-4 py-2.5 text-gray-100 placeholder-gray-500 outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all"
                    />
                  </div>
                </div>

                {/* Campo: Neighborhood */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-300">Neighborhood</label>
                  <input
                    type="text"
                    placeholder="Bairro"
                    className="w-full rounded-lg bg-gray-700/50 border border-gray-600 px-4 py-2.5 text-gray-100 placeholder-gray-500 outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all"
                  />
                </div>

                {/* Grid: City e State */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-300">City</label>
                    <input
                      type="text"
                      placeholder="Cidade"
                      className="w-full rounded-lg bg-gray-700/50 border border-gray-600 px-4 py-2.5 text-gray-100 placeholder-gray-500 outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-300">State</label>
                    <input
                      type="text"
                      placeholder="SP"
                      maxLength={2}
                      className="w-full rounded-lg bg-gray-700/50 border border-gray-600 px-4 py-2.5 text-gray-100 placeholder-gray-500 outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] text-center uppercase transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-medium text-neutral-200">Archives</h2>
                  <p className="text-xs text-neutral-400 mb-4">Do the upload of your documents or profile picture.</p>                  
                </div>
                {/* Área de Upload Customizada */}
                <div className="flex flex-col items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-40 border border-dashed border-neutral-700 rounded-lg cursor-pointer bg-neutral-900/40 hover:bg-neutral-900/70 hover:border-[#FF5A00] transition-all group">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {/* Ícone Simples de Upload */}
                      <svg 
                        className="w-8 h-8 mb-3 text-neutral-500 group-hover:text-[#FF5A00] transition-colors" 
                        aria-hidden="true" 
                        xmlns="http://w3.org" 
                        fill="none" 
                        viewBox="0 0 20 16"
                      >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-neutral-400">
                        <span className="font-semibold text-neutral-300 group-hover:text-[#FF5A00] transition-colors">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-neutral-500">PNG, JPG or PDF (MAX. 5MB)</p>
                    </div>
                    
                    {/* Input escondido para usarmos a estilização customizada acima */}
                    <input type="file" accept="image/*,application/pdf" className="hidden" />
                  </label>
                </div>

                {/* Container para o Preview do Arquivo (Ficará invisível por enquanto) */}
                <div className="hidden rounded-lg bg-neutral-900/20 border border-neutral-800 p-3 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 truncate max-w-[80%]">[Preview do arquivo selecionado]</span>
                  <button type="button" className="text-xs text-red-500 hover:text-red-400 transition-colors">Remove</button>
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