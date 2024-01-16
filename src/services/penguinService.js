const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/api/penguins`

export async function index(){
  try {
    const res=await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
// export async function create(){
//   try {
//     const res = await fetch(BASE_URL)/new
//     // return res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }