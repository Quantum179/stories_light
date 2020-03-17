
export const addRouters = (main, routers) => {
  routers.map(r => {
    main.use(r.routes())
    main.use(r.allowedMethods())
  })
}