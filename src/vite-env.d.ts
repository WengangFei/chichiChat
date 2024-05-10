//.d.ts file(call declaration file) is a type script file that
//declares the types that defines in projects. the types that 
//created in this file are global types that can be 
//accessed by other files.

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // more env variables...
  }
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}
