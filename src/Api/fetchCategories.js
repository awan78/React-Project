import fireDb from '../components/firebase'

const fetchCategories=()=>{
  const categories=[];
  fireDb.child('Categories').on('value', snapshot => {
    snapshot.forEach(snap => {
      categories.push(snap.val());
    });
  })    
return categories;

{/*
  const obj={
    title:"Best selling",
     id:107
     }
     
    fireDb.child('Categories').push(obj,err=>{
      if(err)
        console.log(err)
    })
}
*/}

} 
export default fetchCategories