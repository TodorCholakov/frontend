
export const WILDLIFE_QUERY = `
query{
  (pagination: { start: 20, limit: 30 })
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