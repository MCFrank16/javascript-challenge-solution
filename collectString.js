function collectStrings(ob){
    let arr = [];
  function gatherStrings(obj){
    for(let key in obj){
        if(typeof obj[key] === "string"){
            arr.push(obj[key]);
        } else if(typeof obj[key] === "object"){
            return gatherStrings(obj[key]);
        }
    }
  }
  gatherStrings(ob);
  return arr;
}

let obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));