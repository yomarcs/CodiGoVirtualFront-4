function validateDataType(value) {
   if (typeof value === "string") {
       return value.toUpperCase();
   }

   return value;
}

function getDataByIndex(value, index, arr) {
   let parseValue = validateDataType(value)
   console.log(parseValue)
   let dataFilter = arr.filter((arrValue) => {
       return validateDataType(arrValue[index]) === parseValue;
   })
   console.log(dataFilter)
}

getDataByIndex("Cerdán", "lastName", users)

