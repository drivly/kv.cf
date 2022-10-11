const api = {
  icon: '⚡️☁️',
  name: 'KV.cf',
  description: 'Simple Key Value API',
  url: 'https://kv.cf/api',
  type: 'https://apis.do/database',
  endpoints: {
    resources: 'https://namespace.kv.cf/:resource',
    resources: 'https://namespace.kv.cf/:resource',
    details: 'https://namespace.kv.cf/:resource/:id',
  },
  site: 'https://kv.cf',
  login: 'https://kv.cf/login',
  signup: 'https://kv.cf/signup',
  repo: 'https://github.com/drivly/kv.cf',
}

export default {
  fetch: async (req, env) => {
    const { user, body, origin, hostname, pathname, url, ts, time, headers, cf } = await env.CTX.fetch(req).then(res => res.json())
    if (!user.authenticated) return Response.redirect(origin + '/login')
    
    return json({api, user})

  }
}


const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
