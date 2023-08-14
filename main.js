const postsEl = document.getElementById('posts');
const btn = document.getElementById('userId');
const btns = document.getElementById('buttons');


const func = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    
    data.map((el) => {
        if (`${el['id']}` == 1) {
            btns.innerHTML += `<button id = 'btn${el.id}'>${el.id}</button>`;
        } else if (`${el['id']}` == 2) {
            btns.innerHTML += `<button id = 'btn${el.id}'>${el.id}</button>`;
        } else if (`${el['id']}` == 3) {
            btns.innerHTML += `<button id = 'btn${el.id}'>${el.id}</button>`;
        } else if (`${el['id']}` == 4) {
            btns.innerHTML += `<button id = 'btn${el.id}'>${el.id}</button>`;
        } else if (`${el['id']}` == 5) {
            btns.innerHTML += `<button id = 'btn${el.id}'>${el.id}</button>`;
        } else if (`${el['id']}` == 6) {
            btns.innerHTML += `<button id = 'btn${el.id}'>${el.id}</button>`;
        } else if (`${el['id']}` == 7) {
            btns.innerHTML += `<button id = 'btn${el.id}'>${el.id}</button>`;
        } else if (`${el['id']}` == 8) {
            btns.innerHTML += `<button id = 'btn${el.id}'>${el.id}</button>`;
        } else if (`${el['id']}` == 9) {
            btns.innerHTML += `<button id = 'btn${el.id}'>${el.id}</button>`;
        } else if (`${el['id']}` == 10) {
            btns.innerHTML += `<button id = 'btn${el.id}'>${el.id}</button>`;
        }
    });
    
    
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');
    const btn6 = document.getElementById('btn6');
    const btn7 = document.getElementById('btn7');
    const btn8 = document.getElementById('btn8');
    const btn9 = document.getElementById('btn9');
    const btn10 = document.getElementById('btn10');
    
    
    data.map((el) => {
        postsEl.innerHTML += `
        <p><b>Title №${el.id}:</b> ${el.title}</p>
        `;
    });
    btn.onclick = () => {
        postsEl.innerHTML = '';
        data.map((el) => {
            postsEl.innerHTML += `
            <p><b>Title №${el.id}:</b> ${el.title}</p>
            `;
        }
        );
    }
    
    const select = (userId) => {
        postsEl.innerHTML = '';
        const filteredPosts = data.filter((post) => post.userId === userId);
        filteredPosts.map((el) => {
          postsEl.innerHTML += `<p><b>Title №${el.id}:</b> ${el.title}</p>` ;
        });
      }
      
btn1.onclick = () => select(1);
btn2.onclick = () => select(2);
btn3.onclick = () => select(3);
btn4.onclick = () => select(4);
btn5.onclick = () => select(5);
btn6.onclick = () => select(6);
btn7.onclick = () => select(7);
btn8.onclick = () => select(8);
btn9.onclick = () => select(9);
btn10.onclick = () => select(10);
};

func();


