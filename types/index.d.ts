// TypeScript Version: 2.9

export function buildGiveStringOrNumber(wantNumber: false): () => number;
export function buildGiveStringOrNumber(wantString: true): () => string;

export function buildWantsStringOrNumber(wantsNumber:false): (input:number)=>void;
export function buildWantsStringOrNumber(wantsString:true): (input:string)=>void;
