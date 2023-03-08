export const MOUNTAIN_QUERY = `
query{
  mountainGalleryPhotos(pagination: {  limit: 100 }){
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
