import 'reflect-metadata'

export async function register() {
  if (process.env['NEXT_RUNTIME'] === 'nodejts') {
    await import('./inversify.config')
  }
}
