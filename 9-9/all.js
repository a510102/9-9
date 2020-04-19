const app = document.querySelector('.app');
const fristarea = `<div class="title">
                    <div class="x-coin lt">X</div>
                    <div class="x-coin rt">X</div>
                    <h1 class="title-title">九九乘法表</h1>
                    <h3 class="title-content">MULTIPLICATION CHART</h3>
                    <div class="x-coin lb">X</div>
                    <div class="x-coin rb">X</div>
                   </div>`;
let contentarea = '';
  for(let i=2; i < 10; i++) {
    let rightarea = ``;
    let leftarea = `<p class="box-title">${i}</p>`

    for(let j =1; j < 10; j++) {
        if ( j < 4 ) {
          leftarea += `<p class="box-content">${i} X ${j} = ${i*j}</p>`;
        } else {
          rightarea +=`<p class="box-content">${i} X ${j} = ${i*j}</p>`;
        }
    }
    contentarea += `<div class="box">
                      <div class="box-left">${leftarea}</div>
                      <div class="box-right">${rightarea}</div>
                    </div>`
  }
console.log(contentarea)
app.innerHTML = fristarea + contentarea;