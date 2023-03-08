
export const AIR_QUERY = `
query{
  airGalleryPhotos(pagination: {  limit: 100 }){
    data{
      attributes{
        title,
         slug,
        image{
          data{
            attributes{
              formats
            }
          }
        }
       
      }
    }
  }
}
`
