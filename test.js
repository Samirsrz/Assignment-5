





const allBtn = document.getElementsByClassName('add-btn');
let selectedCount = 0 ;



for(const btn of allBtn){
    btn.addEventListener('click', function(){
      
        if(selectedCount >= 4) {
            alert('You can only select up to 4 seats.');
            return;
        }

        btn.style.backgroundColor = 'lime';
        btn.style.color = 'black';
        btn.disabled = true; 
        selectedCount++;
        //btn.disabled = false;
      
       
      const seatsLeft = document.getElementById('seats-left');
      const correctedSeatsLeft = parseInt(seatsLeft.innerText);
      const seats = correctedSeatsLeft-1;


       const seatsBooking = document.getElementById('seats-booking');
       const correctedSeatsBooking = parseInt(seatsBooking.innerText);
       const seatBooked = correctedSeatsBooking + 1;
       

      if(seats>=4){

        
        
      seatsLeft.innerText = seats;
      seatsBooking.innerText = seatBooked; 


       const li = document.createElement("li");
       li.innerText = btn.innerText;

       const selectedSeats = document.getElementById('selected-seats');
       selectedSeats.appendChild(li)
      
       
       const li2 = document.createElement("li");
       li2.innerText = 'economy class';

        const selectedClass = document.getElementById('selected-class');
        selectedClass.appendChild(li2);
      
      
        const li3 = document.createElement("li");
       li3.innerText = '550';

        const selectedPrice = document.getElementById('selected-price');
        selectedPrice.appendChild(li3);


        const totalPrice = document.getElementById('total-price');
        const correctedTotalPrice = parseInt(totalPrice.innerText);
        
        const updatedPrice = correctedTotalPrice + 550;
        totalPrice.innerText = updatedPrice; 
     
        const grandTotalNew = document.getElementById('grand-total') 
        grandTotalNew.innerText = totalPrice.innerText;
        
    }
    
    

    })
}

        document.addEventListener("DOMContentLoaded", function() {
            const applyCouponButton = document.getElementById('apply-btn');
            const couponInput = document.getElementById('coupon');
            const totalPriceElement = document.getElementById('total-price');
            const grandTotalElement = document.getElementById('grand-total');

            couponInput.value = '';
            applyCouponButton.addEventListener('click', function() {
                const couponCode = couponInput.value.trim();
                const totalPrice = parseInt(totalPriceElement.textContent);

                
                if (couponCode === 'NEW15') {
                    
                    const discountAmount = totalPrice * 0.15;
                    const grandTotal = totalPrice - discountAmount;
                    grandTotalElement.textContent = grandTotal.toFixed(2);

                    couponInput.value = '';
                   //couponInput.style.display = 'none';
                    
                applyCouponButton.display = true;
                }

                else if(couponCode === 'Couple 20'){
                    const discountAmount = totalPrice * 0.20;
                   
                    const grandTotal = totalPrice - discountAmount;
                    grandTotalElement.textContent = grandTotal.toFixed(2);

                    
                    couponInput.value = '';
                   // couponInput.style.display = 'none';
                    applyCouponButton.disabled = true;


                }
            else if (couponInput.value.trim() === '' || couponInput.value.trim() !== 'NEW15' || couponInput.value.trim() !== 'Couple 20' && !applyCouponButton.disabled) {
                    const totalPrice = parseFloat(totalPriceElement.textContent);
                    grandTotalElement.textContent = totalPrice.toFixed(2);
                    couponInput.value = '';
                    applyCouponButton.disabled = true;
                }

            

            });

        

        });



  const nextButton = document.getElementById('next-button');
   nextButton.addEventListener('click', function(){

       const hideBody = document.getElementById('first-body');
       hideBody.classList.add('hidden');

       const showBody = document.getElementById('second-body');
       showBody.classList.remove('hidden');




   })