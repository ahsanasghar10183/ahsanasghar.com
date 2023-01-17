let counter_number = document.querySelectorAll('.acheivement_number');
counter_number.forEach(count => {
    count.innerHTML = 0;
    const updateCounter_value = ()=>{
        const data_target_value = +count.getAttribute('data-target');
        console.log(data_target_value);
        const startingCount = Number(count.innerHTML);
        const increament_by = data_target_value/10;
        if(startingCount<data_target_value){
            count.innerHTML=`${Math.round(startingCount + increament_by)}`;
            setTimeout(updateCounter_value, 100);
        }

    }
    updateCounter_value();
    });
  


