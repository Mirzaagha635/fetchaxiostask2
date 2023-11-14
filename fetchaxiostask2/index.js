//Ən bahalı məhsul 
// function myFunc(){
//     fetch('https://northwind.vercel.app/api/products')
//     .then((res)=>res.json())
//     .then(data=>{
//         let product=data.sort((b,a)=>(a.unitPrice-b.unitPrice))
//         console.log("en bahali mehsul:", product[0]);
//     })

// }
// myFunc()

//Ortalama stok miqdarı

// function myfunc() {
//     let api ='https://northwind.vercel.app/api/products'
//     fetch(api)
//         .then((res) => res.json())
//         .then((data) => {
//             let total = 0;
//             data.forEach((item) => {
//                 total += item.unitsInStock
                

//             })
//             let result = total / data.length
//             let arr = Math.floor(result)
//             console.log("ortalama stok miqdari:", arr);
//     //console.log(data);
//         })
// }
// myfunc()

//“C” ilə başlayan məhsullar 

// function myFunc(){
//     fetch('https://northwind.vercel.app/api/products')
//     .then((res)=>res.json())
//     .then((data)=>{
//       let c=data.filter((item)=>item.name.startsWith("C"))
//       c.forEach((item)=>{
//         console.log(item);
//       })
      
//     })
// }
// myFunc()

//“London” şəhərindəki müştəriləri console a yaz 
//Region NULL olan nə qədər customer var?


// function myFunc(){
//     fetch('https://northwind.vercel.app/api/customers')
//     .then((res)=>res.json())
//     .then((data)=>{
//         let city=data.filter((item)=>item.address.city== "London")
//         console.log(city);
//         let region =data.filter((item)=> item.address.region== "NULL")
//         console.log("region null;", region);
//     })
// }
// myFunc()



//Id-si 1 olan userin nə qədər postu var?

// function myFunc() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => res.json())
//         .then((data) => {
        
//             let userPosts = data.filter((item) => item.userId === 1);


//             console.log("Id-si 1 olan userin post sayı: " + userPosts.length);
//         })
//         .catch((error) => {
//             console.error('Fetch əməliyyatında problem:', error);
//         });
// }

// myFunc();


//1 nömrəli albümdə nə qədər fotoqraf var?

// function getPhotoCountInAlbum(albumId) {
//     fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(photos => {
//             console.log(`Album ${albumId} daxilindəki fotoqrafların sayı: ${photos.length}`);
//         })
//         .catch(error => {
//             console.error('Fetch əməliyyatında problem:', error);
//         });
// }
// getPhotoCountInAlbum(1);


// function myFunc(){
//     fetch('https://jsonplaceholder.typicode.com/albums')
//     .then((res)=>res.json())
//     .then((data)=>{

//     })
// }
// myFunc(1)