
export const WILDLIFE_QUERY = `
query{
  reviews ( pagination: { limit: 100 })
  wildlifePhotoGalleries{
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