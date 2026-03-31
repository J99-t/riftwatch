export default defineEventHandler((event) => {
  console.log(process.env.NUXT_RIOT_API_KEY)
    return {
    hello: 'world',
  }
})