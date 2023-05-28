
    const a = document.getElementById("input");
    const form = document.getElementById("form");
    let x = Math.floor(Math.random() * 100);
  
    function get(event) {
      event.preventDefault();
      let y = a.value;
  
      if (y === String(Math.floor(x))) {
        alert("ok");
      }
    
  };
  