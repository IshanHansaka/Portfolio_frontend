export default defineNuxtRouteMiddleware((to, from) => {
    const config = useRuntimeConfig();
  
    if (process.client) return;
  
    const authHeader = useRequestHeaders()['authorization'];
    const basicAuth = `Basic ${config.basicAuth}`;
  
    if (authHeader !== basicAuth) {
      return navigateTo('/');
    }
  });