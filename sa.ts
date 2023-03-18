
// const {data:response} = usePlasmicQueryData<any[] | null>(cacheKey, async () => {
//     if (!groq) {
//       return null;
//     }
//     let query;

    
//     if (docType && filterField && filterValue && filterParameter) {
//       query = `${groq} && ${filterField} ${filterParameter} ${filterValue}]`;
//     } else if (limit) {
//       query = `${groq}][${limit!}]`;
//     } else {
//       query = `${groq}]`;
//     }

//     const resp = await sanity.fetch(query);
//     return resp;
//   });
