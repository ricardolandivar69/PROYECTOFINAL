class CalculadoraCientifica{
  limpiar(){
    let resul = document.getElementById("resultado")
    resul.value=""
  }
  divisores(){
    let resul = document.getElementById("resultado")
    let num1;resultado=""
    let resto=0
    num1 = parseFloat(resul.value)
    if (Number.isInteger(num1)&& num1>0){
      for (let  i=1;i<=num1-1;i++){
        resto=num1%i
        if(resto==0){
          resultado=resultado+" , "+i.toString();
          // console.log(resultado)
        }
      }
      resul.value=resultado
    }else{
      resul.value="Ingrese valor numerico entero"
    }
  }
  invnumero(){
    let resul = document.getElementById("resultado")
    let digito;resultado=""
    let num1 = parseInt(resul.value)
    while (num1 > 0){
      digito= num1%10
      num1=Math.floor(num1/10)
      resultado=resultado+digito.toString()
     console.log(resultado)
    }
    resul.value=resultado
  }
  nprimo(){
    let resul = document.getElementById("resultado")
    let num1
    let resto=0
    let c=0
    num1 = parseInt(resul.value)
    for (let  i=1;i<=num1;i++){ 
      resto=num1%i
      if(resto==0){
        c=c+1
      }
    }
    if(c==2){
      resul.value=`${num1.toString()} ES UN NUMERO PRIMO`
    }else{
      resul.value=`${num1.toString()} NO ES UN NUMERO PRIMO`
    }
  }
  perfecto(){
    let resul = document.getElementById("resultado")
    let num1;resultado=""
    let resto=0
    let acu=0
    num1 = parseInt(resul.value)
    for (let  i=1;i<=num1-1;i++){
      resto=num1%i
    if(resto==0){
      acu=acu+i
    }
    }
    if(acu==num1){
      resul.value=`${num1.toString()} ES UN NUMERO PERFECTO`
      console.log(resul)
    }else{
      resul.value=`${num1.toString()} NO ES PERFECTO`
    }
 }
 fibonacci(){
  let resul = document.getElementById("resultado")
  let num1
  let sf=[0,1]
  num1 = parseFloat(resul.value)
  if (Number.isInteger(num1)&& num1>0){//determina si el valor pasado es un número entero funciona con el persefloat
    if(num1==1){
      resul.value="0"
    }else{
      if(num1==2){
        resul.value=sf.toString()
    }
    }
    for(let i=2; i<=num1-1;i++){
      sf[i]=sf[i-1]+sf[i-2]
      resul.value=sf.toString()
      console.log(sf.toString())
    }
  }else{
    resul.value="Ingrese un valor numerico mayor a 1"
  }
 }
 base10a2(){
  let resul = document.getElementById("resultado")
  let digito,numeros=[],c=0,base10=""
  let num1 = parseInt(resul.value)
  while (num1 > 0){
    digito= num1%2
    num1=Math.floor(num1/2)
    numeros[c]=digito
    c=c+1
  }
  c=c-1
  for(let pos=c; pos>=0;pos--){
  base10=base10+numeros[pos]   
  } 
  resul.value=base10
 }
 base10a16(){
  let resul = document.getElementById("resultado")//contenido
  let residuo,numeros=[],c=0,base10="",resp=""
  let num1 = parseInt(resul.value)
  if(num1>=0){//validar que los caracteres sean numericos 
    while (num1 > 0){
      residuo= num1%16 //saca la parte residual - resto
      num1=Math.floor(num1/16) //saca el cociente trunc ASIGNA NUEVO NUMERO
      numeros[c]=residuo//{6,10,2} - 5-8-7
      c=c+1
    }
    c=c-1
    for(let pos=0;pos<=c;pos++){
      base10=numeros[pos]
      switch (base10%16){
      case 10:
        resp="A"+resp
        break
      case 11:
        resp="B"+resp
        break
      case 12:
        resp="C"+resp
        break
      case 13:
        resp="D"+resp
        break
      case 14:
        resp="E"+resp
          break
      case 15:
        resp="F"+resp
            break
      default:
        resp=base10+resp//presenta en el html
    }
      resul.value=resp
    }
  }else{
    resul.value="Ingrese valores numericos en base 10"
  }
  }
  base10a8(){
    let resul = document.getElementById("resultado")
    let residuo,numeros=[],c=0,base10="",resp=""
    let num1 = parseInt(resul.value)
    while (num1 > 0){
      residuo= num1%8 //saca la parte residual - resto
      num1=Math.floor(num1/8) //saca el cociente trunc ASIGNA NUEVO NUMERO
      numeros[c]=residuo//{6,10,2}
      c=c+1
      console.log(numeros)
    }
    c=c-1
    for(let pos=c; pos>=0;pos--){
    base10=base10+numeros[pos]
    } 
    resul.value=base10
  }
  base2a10(){
    let resul = document.getElementById("resultado")
    let residuo,numeros=[],c=0,p=0,m=0,sum=0,base=2,base10="",resp="",pos="",av=""
    let num1 = parseInt(resul.value)
    let valid= String(resul.value)
    for(let i=0; i<valid.length;i++){
      av=valid[i]
      console.log(av)
      if(av!=0 && av!=1){
        resul.value="Numero ingresado incorrecto"
      }else{
        while (num1 > 0){
          residuo= num1%10 //saca la parte residual - resto
          num1=Math.floor(num1/10) //saca el cociente trunc ASIGNA NUEVO NUMERO
          m=(Math.pow(base,c))
          p=residuo*m
          sum=sum+p
          c=c+1
        }
        resul.value=sum
      }
    }
  }    
  base2a16(){
      let resul= document.getElementById("resultado")
      let dec=0,c=0,ca=1,ex=0,s=0,r="",p=0,x=0,hex=" ",cn=" "
      let num=parseInt(resul.value)
      while(c<num){ 
          dec=num%10
          num=Math.floor(num/10)
          p=2**x
          ex=dec*p
          s=s+ex
          x=x+1
      }
      r=r+s
      console.log(r)
      while(ca>0){
          ca=Math.floor(r/16)
          switch (r%16) {
          case 10:
            hex="A"+hex
          break;
            case 11:
                hex="B"+hex
            break;
            case 12:
                hex="C"+hex
            break;
            case 13:
                hex="D"+hex
            break;
              case 14:
                hex="E"+hex
            break;
              case 15:
                hex="F"+hex
            break;
            default:
                hex=(r%16)+hex
            break;
          }
          r=ca
      } 
      cn=cn+hex.toString()
      resul.value=cn
      console.log(cn)
    }
  contpalabras(){
      let resul = document.getElementById("resultado")
      let palabra=[],cont=1
      palabra=String(resul.value)
      console.log(palabra)
      for(let pos=0;pos<palabra.length-1;pos++){
        // console.log(palabra[pos])
        // console.log(base[i])
        if(palabra[pos]==" " && palabra[pos+1]!==" "){
          cont=cont+1
        }
      }
      resul.value=`LA FRASE ${palabra} TIENE ${cont} PALABRAS`
  }
  palindroma(){
      let palabra1,palabra2="",comp=""
      let resul=document.getElementById("resultado")
      palabra1=String(resul.value)
      console.log(palabra1)
      for(let pos=palabra1.length-1;  pos>=0; pos--){
        if(palabra1[pos]!=" "){
          comp=palabra1[pos].toLowerCase()+comp
          palabra2=palabra2+palabra1[pos].toLowerCase()
        }
      }
      if(comp==palabra2){
        resul.value=`La frase'${ palabra1 } 'es Palindroma`;
      }
      else{
        resul.value=`La frase'${ palabra1 } 'no es Palindroma`;
      }
  }
  invfrases(){
      let palabra1,palabra2=""
      let resul=document.getElementById("resultado")
      palabra1=String(resul.value)
      console.log(palabra1)
      for(let pos=palabra1.length-1;  pos>=0; pos--){
        palabra2=palabra2+palabra1[pos]//""+o+l+b
          console.log(palabra2)
      }
      resul.value=palabra2
  }
  contcaract(){
      let resul = document.getElementById("resultado")
      let palabra="",cont=0,cv=0,cc=0,cn=0,ce=0,co=0
      palabra=String(resul.value)
      console.log(palabra)
      for(let pos=0;pos<palabra.length;pos++){
        // console.log(palabra[pos])
        if(palabra[pos]=="/"  || palabra[pos]=="%"  ||  palabra[pos]=="!"  || palabra[pos]=="@"  || palabra[pos]=="#"  || palabra[pos]=="$"  || palabra[pos]=="^"  
          ||  palabra[pos]=="&"  || palabra[pos]=="*" ||  palabra[pos]=="(" ||  palabra[pos]==")" ||  palabra[pos]=="-" ||  palabra[pos]=="_" ||  palabra[pos]=="+" 
          ||  palabra[pos]=="=" ||  palabra[pos]=="{" ||  palabra[pos]=="}" ||  palabra[pos]=="[" ||  palabra[pos]=="]" ||  palabra[pos]==":" ||  palabra[pos]==";" 
          ||  palabra[pos]=="'" ||  palabra[pos]=="," ||  palabra[pos]=="." ||  palabra[pos]=="?" ||  palabra[pos]=="`" ||  palabra[pos]=="<" ||  palabra[pos]==">"){
            cc=cc+1
            console.log("caracter"+cc)
          }else{  
            if(palabra[pos]=="1"  || palabra[pos]=="2"  ||  palabra[pos]=="3"  || palabra[pos]=="4"  || palabra[pos]=="5"  || palabra[pos]=="6"  || palabra[pos]=="7"  
            ||  palabra[pos]=="8"  || palabra[pos]=="9" ||  palabra[pos]=="0"){
            cn=cn+1
            console.log("numeros"+cn)
          }else{
            if(palabra[pos].toLowerCase()==" "){
              ce=ce+1
              console.log("espacios"+ce)
            }else{
              if(palabra[pos].toLowerCase()=="a"|| palabra[pos].toLowerCase()=="e"||  palabra[pos].toLowerCase()=="i" 
              || palabra[pos].toLowerCase()=="o"  ||  palabra[pos].toLowerCase()=="u"){ // CONVIERTE A MINUSCULA EL TXT
            cv=cv+1
            console.log("vocales"+cv)
            }else{
              co=co+1
              console.log("consonantes"+co)
            }
          }
          }
        } 
        resul.value=`La frase  ${palabra} tiene "${co} ", consonantes "${cv}", vocales "${ce}", espacios  "${cn}", numeros "${cc}", caracteres"`
      }
  }
  buscadena(){
      let resul = document.getElementById("resultado")
      let palabra="",cc=0,cp="",arr=[]
      palabra=resul.value
      let valorb= prompt("Ingrese el valor buscado")
      console.log(palabra)
      for(let pos=0;pos<palabra.length;pos++){
        console.log(palabra[pos])
        if(palabra[pos].toLocaleLowerCase()== valorb.toLocaleLowerCase()){
            cc=cc+1
            cp=cp+pos.toString()+","
            // console.log("arreglo"+cp)
        }
      }
       resul.value=`Dentro del arreglo [${palabra}] el objeto ingresado ${valorb} se encuentra en la posicion "${cp}"`
      console.log("arreglo"+cp)
  }   
  mayarreglo(){
    let resul=document.getElementById("resultado")
    let nmayor=0,nmenor=0,c=0,cn=0, comp=0,vr=0
    let num=resul.value
    let arr=num.split(";")
    for(c=0;c<arr.length;c++){
      if(arr[c]<0){
        cn=cn+1
      }
    }
    for(let i=0;i<arr.length;i++){
      comp=Math.abs(arr[i])
      if (nmayor<comp) {
          nmayor=comp
          // console.log("mayor"+nmayor)
      }else{
        nmenor=comp
          // console.log("menor "+(nmenor*-1))
      }
      if(cn==arr.length){
          resul.value="El numero mayor en el arreglo ["+arr+"]:"+" es "+(nmenor*-1)
      }else{
          resul.value="El numero mayor en el arreglo ["+arr+"]:"+" es "+nmayor
      }
    }
  } 
  proarreglo(){
    let resul=document.getElementById("resultado")
    let datos=resul.value
    let arr=datos.split(";")
    let sum=0,prom=0,comp=0
    for(let i=0;i<arr.length;i++){
      sum+=parseFloat(arr[i])
      prom=sum/arr.length
    }
    comp=sum/arr.length
    if(comp != parseFloat(comp)){
      resul.value= "ERROR, INGRESE VALORES NUMERICOS"
     }
     else{resul.value=`LA SUMA DEL ARREGLO [${arr.toString()}] ES ${sum} y EL PROMEDIO ES ${prom.toFixed(2)}`
    } 
  }
  buscarreglo(){
    let resul=document.getElementById("resultado")
    let arreglo=resul.value
    let c=0,acu="",verf=false
    let arr=arreglo.split(";")
    let buscare=prompt("Ingrese el elemento que desea buscar")
    while (c<arr.length ) {
       if (arr[c].toLocaleLowerCase()==buscare.toLocaleLowerCase()) {
          acu+=c+","
          verf=true
          c=c+1
       }else{
          c=c+1
       }
    }
    if (verf==true) {
       resul.value="En el arreglo ["+arr+"]"+" el elemento "+ buscare+" se encontro en la posicion ["+acu+"]"
    }else{
       resul.value="En el arreglo ["+arr+"]"+" no se encuentra el elemento ["+ buscare+"]"
    }
  }
  eliminelemearreglo(){
    let resul=document.getElementById("resultado")
    let arr2=""
    let arreglo=resul.value
    let arr=arreglo.split(";")
    let neliminar=prompt("Ingrese el valor a eliminar")
    for(let i=0;i<arr.length;i++){
       if (arr[i] != neliminar) {
          arr2+=arr[i]+","
       }
       console.log(arr2)
    }
    resul.value="EN EL ARREGLO ["+arr+"]"+" SE ELIMINO EL ELEMENTO ["+ neliminar+"]"+" EL NUEVO ARREGLO ES ["+arr2+"]" 
  }
  insertelemenarreglo(){
    let resul=document.getElementById("resultado")
    let arr2=""
    let arreglo=resul.value//CONTIENE MI INPUT{20;80}
    let arr=arreglo.split(";")//{20","80}
    let ninsertar=prompt("Ingrese el valor a eleiminar")
    let npos=prompt("Ingrese la posicion")
    for(let i=0;i<arr.length;i++){// recorre el arreglo
       if (i!=npos) {//comparar las posiciones 1 diferente 1
          arr2+=arr[i]+","// darle el valor del arreglo1 a mi arreglo2
          console.log(arr2)
       }else{//caso contrario osea son iguales
        arr2+=ninsertar+","+arr[i]+","// areglo nuevo = numero para insertar+ arreglo original en la posicion
        //que recorre el arreglo
        console.log(arr2)
       }
    }
      console.log(arr.length)
    if(npos>arr.length-1){
      resul.value="LA POSICION QUE INGRESO NO FORMA PARTE DEL ARREGLO"   
    }else{
      resul.value="EN EL ARREGLO ["+arr+"]"+" SE INSERTO ["+ ninsertar+"]"+" EL NUEVO ARREGLO ES ["+arr2+"]" 
    }
  }
}
let Calculadora=new CalculadoraCientifica();