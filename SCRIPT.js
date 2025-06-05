const userlist=document.getElementById("userList");
const reloadBtn=document.getElementById("reloadBtn");
const errordiv=document.getElementById("error");

async function fetchUsers() {
    userlist.innerHTML='';
    errordiv.innerHTML='';

    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("http error! Status:${response.status}");
        }
        const users=await response.json();
        users.forEach(user => {
            const usercard=document.createElement("div");
            usercard.className="user-card";
            usercard.innerHTML=`<h3>${user.name}</h3>
            <p><strong>EMAIL:</strong>${user.email}</p>
            <p><strong>ADDRESS:</strong>${user.address.street},${user.address.city}</p>`;
            userlist.appendChild(usercard);  
        });
    }

    catch(error){
            errordiv.textContent="Failed to fetch data"+ error.message;
        }   
        }
        reloadBtn.addEventListener("click", fetchUsers);
          

    
