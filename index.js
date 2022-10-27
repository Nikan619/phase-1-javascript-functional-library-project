
const help= (collection)=>{if(collection instanceof Array){
    return collection
}else{
    return Object.values(collection)
}}

function myEach(collection,callback){
let newCollection = help(collection)
    for(let i=0;i<newCollection.length;i++){
       callback(newCollection[i])

    }
    return collection

}

function myMap (collection,callback){
let newCollection=help(collection)
let newNumber = newCollection.map(callback)
return newNumber
}

function myReduce(collection,callback,acc)
{
    let newCollection = help(collection)
    

 if(acc===undefined){
   acc =newCollection[0];
   newCollection=newCollection.slice(1)
 }
   for(let i =0 ; i<newCollection.length; i++)
   {

    acc=callback(acc,newCollection[i])

    
   }
   return acc
}


  function myFind(collection,predicate){
    for(let i =0; i<collection.length; i++)
    {
        if(predicate(collection[i])===true){
            
            return collection[i]
           
        }
        
    }}


  function myFilter(collection,predicate){
    const filterArr=[];
    for(let i=0;i<collection.length;i++){
        if(predicate(collection[i])===true){
            filterArr.push(collection[i])
        }
    }
    return filterArr;
  }


  function mySize(collection){
    let newCollection=help(collection)
    return newCollection.length
  }

  function myFirst(array,[n]){
    if(n===0){
      return array[0]
    }else 
    {
      return array[n]
    }

  }