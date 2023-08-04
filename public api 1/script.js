
const api_url="https://bible-api.com/romans 12:1-2,5-7,9,13:1-9&10";
      

async function getapi(url) {
   
   
     
    const response = await fetch(url);
   
    
    var data = await response.json();
    console.log(data);
   
   
    hideloader();
    show(data.verses);
}


getapi(api_url);
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let tab =
        `<tr>
          <th>book_id</th>
          <th>book_name</th>
          <th>chapter</th>
          <th>text</th>
          <th>verse</th>
          
         </tr>`;
   
    
    for (let r of data) {
        tab += `<tr>
    <td>${r.book_id} </td>
    <td>${r.book_name}</td>
    <td>${r.chapter}</td>
    <td>${r.text}</td>         
    <td>${r.verse}</td> 
  


</tr>`;
    }
    
    document.getElementById("BOOK").innerHTML = tab;

}
