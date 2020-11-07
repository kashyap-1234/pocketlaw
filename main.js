add = document.querySelector('#add');
let info;
let infoar=[];
function getk() {
    console.log('getk');
    title=document.getElementById('title').value;
    desc=document.getElementById('desc').value;
   
 //   let tlrow=document.createElement('tr');
 //   tlrow.innerHTML=`
            
  

 if(localStorage.getItem('info')==null){
     infoar=[];
     infoar.push([title,desc]);
     localStorage.setItem('info',JSON.stringify(infoar));
 }
 else{
     infostr=localStorage.getItem('info')
     infoar=JSON.parse(infostr);
     infoar.push([title,desc]);
     localStorage.setItem('info',JSON.stringify(infoar));

 }
 keep();
}
function keep() {

               
     

    let tablebody= document.getElementById('tlbody');
    if(localStorage.getItem('info')==null){
   
    
        localStorage.setItem('info',JSON.stringify(infoar));
    }
    else{
        infostr=localStorage.getItem('info')
        infoar=JSON.parse(infostr);

    }
    tablebody.innerHTML='';
    let str="";
    infoar.forEach((element,index) => {
          str+=` 
          <tr>
          <th scope="row">${index+1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td>${element[2]}</td>
          </tr>
          `;
           
        
    });
    tablebody.innerHTML=str;
     
    
    }
    add.addEventListener("click",getk);
    keep();

// function deleted(itemindex){
//     infostr=localStorage.getItem('info');
//     infoar=JSON.parse(infostr);

//     infoar.splice(itemindex,1);
//     localStorage.setItem('info',JSON.stringify(infoar));
//     keep();

// }
function clearstr(){
    if(confirm("Are you sure?")){
        localStorage.clear();
        keep();
    }
}

function myFunction() {
    // Declare variables
    var input, filter, tblbody, tr, td, i, txtValue;
    input = document.getElementById("sb");
    filter = input.value.toUpperCase();
    tblbody = document.getElementById("tlbody");

    tr = tblbody.getElementsByTagName("tr");
  
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        
    }
  }
}
function sortTable(n) { 
    var table, i, x, y; 
    table = document.getElementById("myTable"); 
    var switching = true; 

    // Run loop until no switching is needed 
    while (switching) { 
        switching = false; 
        var rows = table.rows; 

        // Loop to go through all rows 
        for (i = 1; i < (rows.length - 1); i++) { 
            var Switch = false; 

            // Fetch 2 elements that need to be compared 
            x = rows[i].getElementsByTagName("TD")[n]; 
            y = rows[i + 1].getElementsByTagName("TD")[n]; 

            // Check if 2 rows need to be switched 
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
                { 

                // If yes, mark Switch as needed and break loop 
                Switch = true; 
                break; 
            } 
        } 
        if (Switch) { 
            // Function to switch rows and mark switch as completed 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
            switching = true; 
        } 
    } 
}

$('#identity').on('click',function(){
    console.log("column was clicked");
    var column=$(this).data('column')
    var order = $(this).data('order')
    console.log("column was clicked",column,order);
    if(order == 'desc'){
          $(this).data('order',"asc");
          infoar= infoar.sort((a,b)=> a[column]>b[column] ?1:-1);
    }
    else{
        $(this).data('order',"desc");
         infoar= infoar.sort((a,b)=> a[column]<b[column] ?1:-1);
    }
    keep();
})


