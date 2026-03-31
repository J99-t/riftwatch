export default defineEventHandler(async (event) => {
    const result = await fetch(process.env.NUXT_RIFTCODEX_URL)
    return result
})