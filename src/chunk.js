export function chunk( array, size = 1){
  if( !array || size <= 0) return [];
  const result =[]
  
  for (let i=0; i < array.length; i+= size){
    result.push(array.slice(i, i + size));
  }
  
  return result;
}
