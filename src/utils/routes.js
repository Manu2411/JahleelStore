const contextFront = import.meta.env.VITE_BASE_FRONTEND

// Frontend routes
const routesFrontend = Object.freeze({
  home: contextFront,
  plataformas: contextFront + '/plataformas',
  sandalias: contextFront + '/sandalias',
  tacones: contextFront + '/tacones',
  zapatillas: contextFront + '/zapatillas',
  zapatos: contextFront + '/zapatos',
  contacto: contextFront + '/contacto',
})

export const routes = Object.freeze({
  frontend: routesFrontend,
})
