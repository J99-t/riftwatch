// get is for retrieve
// delete is for delete
// put is for edit
// post is for create

export default defineEventHandler(async (event) => {
  const newSet = await prisma.set.create({ data: {id : 'OGN', name: 'Origins'} });
  return newSet
});

