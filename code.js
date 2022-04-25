function calcular(){
    var box1 = window.document.getElementById('vel')
    var resp = window.document.getElementById('resp')
    var radar = window.document.getElementById('veloc')
    var vel = Number(box1.value)
    radar.innerHTML = `Velocidade Permitida: <strong>60km/h</strong> <br/> Velocidade atual: <strong>${vel}km/h</strong>`
    if (vel > 60){
        resp.innerHTML = '<p>A velocidade está acima do permitido! <br/> Infelizmente você foi multado...</p>'
    }else{
        resp.innerHTML = '<p>Você está na velocidade permitida!</br> Dirija com cuidado.</p>'
    }
}