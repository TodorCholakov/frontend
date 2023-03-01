
export const WILDLIFE_QUERY = `
query{
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