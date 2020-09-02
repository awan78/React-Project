import fireDb from '../components/firebase'

const fetchItems=()=>{
  const items=[];
  fireDb.child('Items').on('value', snapshot => {
    snapshot.forEach(snap => {
      items.push(snap.val());
    });
  })
 return items;  


{/*  const obj={
    title:"Maecenas Consequat mauris",
    categoryId:104,
    discountedprice:"$14,95",
    actualprice:"$21,00",
    itemcode:1015,
    availability:true,
    condition:"New"


   }
     
    fireDb.child('Items').push(obj,err=>{
      if(err)
        console.log(err)
    })
*/}

}
 export default fetchItems