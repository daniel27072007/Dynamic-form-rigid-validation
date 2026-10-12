# Dynamic-form-rigid-validation
**Advanced multi-step registration & checkout form.**

A modern, reactive multi-step registration workflow built with React 19, Vite, and Tailwind CSS v4, featuring schema validation (Zod), input masking, dynamic data pre-filling via the ViaCEP API, and internal browser file preview streams.

---

## The Problem
Implementing advanced data entry flows in web interfaces introduces major operational and client-side data management problems:
* **Premature Multi-Step Errors:** Standard form components typically evaluate the validation conditions of hidden sub-steps upfront, blocking simple transitions or confusing the user with error flags on unreached forms.
* **Sluggish Data States (Re-renders):** Traditional React forms rely on controlled values linked to a global useState hook, forcing complete view updates on every single keystroke, which leads to visible interface jank and lagging input responses.
* **Incomplete Geocoding Autocompletion:** Users find typing complete addresses manually tedious, increasing human typo rates and data corruption within database endpoints.
* **Memory Leaks on Local File Previews:** Generating locally cached browser object references for image or PDF attachments frequently leads to lingering garbage data allocations within the computer's memory layers.

---

## The Solution
This application delivers a lightweight, lightning-fast multi-step setup powered by a single-page React form layout. It splits business data conditions, input formatting rules, API responses, and dynamic error objects into dedicated modular step scopes, preventing unneeded interface paint signals.

### What this tool automatically handles for you:
* **Decoupled Step Validation Hooks (React Hook Form):** Registers form values via raw underlying DOM pointers (refs), decoupling value changes from active screen refreshes to preserve immediate UI thread speed.
* **Rigid Isolation Schema Switching (ZodResolver):** Dynamically mounts separate conditional schemas mapped exclusively to the active step index, ignoring subsequent form boundaries until the user advances.
* **Asynchronous Address Pre-filling (ViaCEP API):** Watches for clean, 8-digit data entries on the postal code field to dispatch a server-side fetch, automatically writing the parsed address data directly back into the form fields.
* **In-Memory Media Stream Previews:** Pulls user-selected attachments to instantiate an ephemeral local reference pointer (URL.createObjectURL), automatically distinguishing file headers to launch inline image tags or native nested PDF readers (iframe).
* **Proactive Memory Deallocation Engine:** Tracks file management operations to invoke garbage disposal commands (URL.revokeObjectURL) on command, protecting the system browser context against structural RAM memory leaks.
* **Multi-Column Keyboard Input Masking:** Intercepts low-level typing event objects, cleansing string patterns on the fly to auto-format fields for CPF, Phone Numbers, and Postal Codes without resetting cursor offsets.

---

## Interface Specifications & Technical Walkthrough
This section outlines how user input is processed, formatted, and verified through individual workflow sections.

### 1. Multi-Step Architecture Data Schema
The validation lifecycle uses an index-mapped array structure passed directly to the central form initialization parameters.

#### Schema Composition Framework (formSchema.js)
* **Step 1 Scope (Personal Data):** Requires a name field (minimum 3 characters), a valid structural email match, a verified cpf size constraint, and an initialized phone string map.
* **Step 2 Scope (Address Details):** Evaluates a clean cep template alongside mandatory street, number, neighborhood, city, and state strings (max 2 characters).
* **Step 3 Scope (Archives):** Captures custom data payloads, running specialized evaluation boundaries to reject empty payloads and enforce a maximum object capacity threshold of 5MB.

```json
{
  "name": "Alex Silva",
  "email": "alex@example.com",
  "cpf": "123.456.789-00",
  "phone": "(11) 99999-9999",
  "cep": "01001-000",
  "street": "Praça da Sé",
  "number": "100",
  "neighborhood": "Sé",
  "city": "São Paulo",
  "state": "SP",
  "file": "[Binary File Payload]"
}
```

### 2. Form Pipeline Configuration
Core form engine instance controlling dynamic transitions, input interceptors, and background calculations.

```javascript
const { register, handleSubmit, formState: { errors }, trigger, setValue, watch } = useForm({ 
  resolver: zodResolver(currentSchema), 
  mode: "onChange" 
});
```

---

## Project Architecture
```text
dynamic-form/
├── public/                  # Public static document symbols and brand assets
│   ├── favicon.svg          # Application shortcut vector emblem
│   └── icons.svg            # Central iconography assets file
├── src/                     # Core system design workspace
│   ├── assets/              # Static layout elements and preview visual graphs
│   ├── schemas/             # Functional database constraint blueprints
│   │   └── formSchema.js    # Multi-step Zod object boundary models
│   ├── App.css              # Custom presentation element layers
│   ├── App.jsx              # Central UI controller, masking arrays & views
│   ├── index.css            # Tailwind CSS v4 setup framework definitions
│   └── main.jsx             # React Virtual DOM application mount entrypoint
├── eslint.config.js         # Structural code style validation parameters
├── index.html               # Public fallback application document template
├── package.json             # System node dependency collections and versions
└── vite.config.js           # Vite server optimization properties and plugins
```

---

## Installation & Local Deployment Guide
To run this application locally, ensure you have Node.js installed on your computer, then download the files and run the setup commands in your terminal emulator.

### 1. Install Node Dependencies
Open your command terminal inside the inner directory where package.json is located and execute:
```bash
npm install
```

### 2. Launch Local Development Server
Boot up the fast local compilation environment to view the responsive template layout:
```bash
npm run dev
```

### 3. Compile Production Distribution Bundles
```bash
npm run build
```

---

## Ecosystem Breakdown

| System Element | Core Tool | Architectural Edge |
| :--- | :--- | :--- |
| **Compilation Architecture** | Vite v8 Engine | Hot Module Replacement (HMR) speeds under 50ms. |
| **Styling Module** | Tailwind CSS v4 | Native processing speeds with zero bloated config footprints. |
| **Validation Architecture** | Zod v4 Engine | Strong runtime checking using safe custom error messaging. |
| **State Coordinator** | React Hook Form v7 | Minimal rendering lifecycle overhead through structural pointers. |

---

## Final Comparison Matrix: Architecture vs Tradition

| Feature Attribute | Traditional React Approach | Dynamic Rigid Form Layout |
| :--- | :--- | :--- |
| **Component Refresh Cost** | Re-renders form on every single letter typed. | Zero input paint cycles; calculations happen out of view. |
| **Geocoding Flow** | Manual typing; long lookup cycles. | Auto-fetches and auto-fills instantly at exactly 8 digits. |
| **Validation Context** | Evaluates hidden multi-step data matrices immediately. | Isolates evaluations strictly to the active phase. |
| **Preview Footprint** | Bloated data variables; high memory leaks. | Employs temporary blob addresses with auto-cleanup. |