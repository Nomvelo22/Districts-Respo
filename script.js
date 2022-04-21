var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
    fetch("https://sfrs-j75dy.ondigitalocean.app/api/listDistricts", requestOptions)
      .then(function (response){
          return response.json();
      })
      .then(function (json){
           console.log(DisplayData(json))
      })
      .catch(error => console.log('error', error));

      function DisplayData(json){
        var OBJ = json;
        var Output = "District Name    Province Name\n";
        var display= document.getElementById("data");
        display.innerHTML='<tr><th>Districts</th><th>Provinces</th></tr>'
        for(var i=0; i< OBJ.data.length; i++){
      
          Output += OBJ.data[i].name+"     "+ OBJ.data[i].province.name+"\n";
          display.innerHTML+='<tr><td>'+OBJ.data[i].name+'</td><td>'+OBJ.data[i].province.name+'</td></tr>';
        }
        return Output;
      
        
      }