
export const AIR_QUERY = `
query{
  airGalleryPhotos{
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
