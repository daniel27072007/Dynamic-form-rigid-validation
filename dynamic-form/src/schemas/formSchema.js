import { z } from 'zod'

export const formStepsSchemas = [
    z.object({
        name: z
            .string()
            .min(3, { message: "The name must require at least 3 charaters" })
            .nonempty({ message: "Full Name is required" }),

        email: z
            .email({ message: "Invalid email address" })
            .nonempty({ message: "E-mail is required" }),
        
        cpf: z
            .string()
            .nonempty({ message: "CPF is required" })
            // Vamos validar o tamanho da string bruta com a máscara depois (ex: 14 chars com pontos e traço)
            .min(14, { message: "Invalid CPF format" }),
        
        phone: z
            .string()
            .nonempty({ message: "Phone number is required" })
            .min(14, { message: "Invalid phone number format" }),
    }),
    z.object({
        cep: z
            .string()
            .nonempty({ message: "CEP is required" })
            .min(9, { message: "Invalid CEP format" }),
        
        street: z
            .string()
            .nonempty({ message: "Street is required" }),
        
        number: z
            .string()
            .nonempty({ message: "Number is required" }),
        
        neighborhood: z
            .string()
            .nonempty({ message: "Neighborhood is required" }),
            
        city: z
            .string()
            .nonempty({ message: "City is required" }),
        
        state: z
            .string()
            .nonempty({ message: "State is required" })
            .max(2, { message: "Use 2 letters (ex: SP)" }),
    }),
    z.object({
        // Validamos se o arquivo existe e impomos limites de tipo/tamanho
        file: z
            .any()
            .refine((files) => files && files.length > 0, "You must upload a file")
            .refine((files) => files[0]?.size <= 5 * 1024 * 1024, "Max file size is 5MB")
    })
]