export default function A2_child(
    {name,phone,address}
){
     const {temp,permant} = address

     return(
        <>
        <p>username : {name}</p>
        <p>userphone : {phone}</p>
        <p>usertemp address: {temp.address}</p>
        </>
     )
}