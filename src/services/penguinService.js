const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/api/penguins`

export async function index(){
  try {
    const res=await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
export async function create(formData){
  try {
    const res = await fetch(BASE_URL,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)

    })
    return res.json()
  
  } catch (error) {
    console.log(error)
  }
}