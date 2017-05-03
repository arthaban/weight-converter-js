const KiloEnLibra = 2.20462
const LibraEnKilo = 0.453592

function ConverTo (conversor){
  if (conversor.from == 'KG'){
    if (conversor.to == 'LB'){
      return conversor.quantity * KiloEnLibra
    } else {
      return conversor.quantity
    }
  }else if (conversor.from == 'LB'){
    if (conversor.to == 'KG'){
      return conversor.quantity * LibraEnKilo
    } else {
      return conversor.quantity
    }
  }else{
    return conversor
  }
}
export default ConverTo
