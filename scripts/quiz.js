var count = 1;
const options = document.querySelectorAll('.option');
const nextButton = document.querySelector('.next-button');
const size = document.querySelectorAll('.card').length;
const cardsQuestions = [2,7]

// NEXT CARD
document.querySelector('#btn-next').addEventListener('click', btn => {
    if(count == size){
        window.location.href = "/senha.html"
        return
    }
    
    document.querySelector('#card-'+ count).style.opacity = 0;
    setTimeout(()=>{
        document.querySelector('#card-'+ count).style.display ='none';
        count++;
        
        if(cardsQuestions.indexOf(count) != -1){
            btn.target.style.display = "none";  
            btn.target.style.opacity = "0";
        }

        document.querySelector('#card-'+ count).style.display ='flex';
        setTimeout(()=>{
            document.querySelector('#card-'+ count).style.opacity = 100;
        },50)
    },300)

    

})

// 
document.querySelectorAll('.card-container .card .options input[type="radio"]').forEach(input => {
    input.addEventListener('change', function () {
        document.querySelectorAll('.options input[type="radio"]').forEach(label => {
            label.classList.remove('active-true', 'active-false', 'active-neutral');
        });

        // Adiciona a classe correspondente ao label do radio selecionado
        const parentLabel = this;
        if (this.value === 'true') {
        parentLabel.classList.add('active-true');

        document.querySelector('#btn-next').style.display = "block";
        document.querySelector('#btn-next').style.opacity = "100%";

        } else if (this.value === 'false') {
        parentLabel.classList.add('active-false');
        }
    });
});
