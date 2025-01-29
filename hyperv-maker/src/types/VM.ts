// src/types/VM.ts
export interface VM {
	id: string;
	name: string;
	ram: number; // en Mo
	ramUsed: number; // en Mo
	storage: number; // en Go
	storageUsed: number; // en Go
}
