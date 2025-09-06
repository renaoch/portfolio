declare module 'prismjs/components/prism-core' {
  const highlight: (code: string, grammar: any, language: string) => string;
  const languages: any;
  export { highlight, languages };
}