
export const WILDLIFE_QUERY = `
query{

  wildlifePhotoGalleries(pagination: {  limit: 30 }){
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