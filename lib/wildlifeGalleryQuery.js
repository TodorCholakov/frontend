
export const WILDLIFE_QUERY = `
query{

  wildlifePhotoGalleries(pagination: {  limit: 100 }){
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