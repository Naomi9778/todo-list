const body = document.getElementsByTagName('body')[0];

// const createSpanElement = (text) => {
//     // create span element
//     const span = document.createElement('span');
//     // change innerText
//     span.innerText = text;
//     // return span
//     return span;
// }

// // data
// const шүлэг = [['Хорвоогийн ', 'хүчирхэг ', 'амьтан ', 'хүн ',], [ 'Хосгүй ', 'хөгжилт ', 'ухаан ', 'сэтгэхүйт ','хүн ']]

// const render = (arr) => {
//     // create div element
//     const div = document.createElement('div');

//     // word loop
//     for (let i = 0; i < arr.length; i++) {
//         div.appendChild(createSpanElement(arr[i]));
//     }

//     // append body
//     body.appendChild(div);
    
// }

// // row loop
// for (let i = 0; i < шүлэг.length; i++) {
//     render(шүлэг[i])
// }

const createImgElement = (text , imageUrl ) => {
    const container = document.createElement('div')
    const Image = document.createElement('img');
    const p = document.createElement('p')

    Image.src = imageUrl;
    Image.width = 500;
    Image.height = 500;

    p.innerText = text;


    container.appendChild(Image)
    container.appendChild(p)
    body.appendChild(container)
}

createImgElement('Hello', 'https://cdn.dribbble.com/userupload/14718368/file/original-34f0be3a0678ff3bde5d577f8d51cfb1.jpg?format=webp&resize=400x300&vertical=center')
createImgElement('Hello', 'https://cdn.dribbble.com/userupload/14718368/file/original-34f0be3a0678ff3bde5d577f8d51cfb1.jpg?format=webp&resize=400x300&vertical=center')
createImgElement('Hello', 'https://cdn.dribbble.com/userupload/14718368/file/original-34f0be3a0678ff3bde5d577f8d51cfb1.jpg?format=webp&resize=400x300&vertical=center')

