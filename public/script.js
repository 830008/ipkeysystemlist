const url = "https://ipinfo.io/ip"
fetch(url)
.then(r => r.text())
.then(t =>
  
       fetch("/api", 
    
    
    
    
    
    
    
    
{
                    method: "POST",
                    body: JSON.stringify(t, null, ' '),
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }})
                
      
     )
