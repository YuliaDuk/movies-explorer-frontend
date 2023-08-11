export default function searchWithString(item, string){
    if (
        item.nameRU.toUpperCase().includes(string.toUpperCase()) ||
        item.nameEN.toUpperCase().includes(string.toUpperCase())
      )
      return item
}