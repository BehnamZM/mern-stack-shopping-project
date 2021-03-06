import bcrypt from 'bcryptjs'
const data = {
  users: [
    {
      name: 'behnam',
      email: 'behnamzare100@yahoo.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: 'ali',
      email: 'ali@yahoo.com',
      password: bcrypt.hashSync('111111'),
      isAdmin: false
    },
  ], 
  products: [
    {
      //_id: 0,
      name: "سانسوریا",
      slug: "sanseveria1",
      image: "./src/assets/sanseveria (1).jpg",
      // [
        
      //   "./src/assets/sanseveria (2).jpg",
      //   "./src/assets/sanseveria (5).jpg",
      //   "./src/assets/sanseveria (6).jpg",
      //   "./src/assets/sanseveria (7).jpg"
      // ],
      category: "آپارتمانی",
      price: 390000,
      countInStock: 5,
      brand: "pronia",
      rating: 4.3,
      numReviews: 5,
      description: "گیاه سانسوریا جزو زیباترین و در عین حال مقاوم ترین نوع گیاهان آپارتمانی محسوب میشود و شما عزیزان هم اکنون میتوانید این گیاه را از سایت پرونیا تهیه کنید."
    },
    {
      //_id: 1,
      name: "سانسوریا",
      slug: "sanseveria2",
      image: "./src/assets/sanseveria (2).jpg",
      // [
        
      //   "./src/assets/sanseveria (2).jpg",
      //   "./src/assets/sanseveria (2).jpg",
      //   "./src/assets/sanseveria (2).jpg",
      //   "./src/assets/sanseveria (2).jpg"
      // ],
      category: "آپارتمانی",
      price: 420000,
      countInStock: 2,
      brand: "pronia",
      rating: 4.4,
      numReviews: 6,
      description: "گیاه سانسوریا جزو زیباترین و در عین حال مقاوم ترین نوع گیاهان آپارتمانی محسوب میشود و شما عزیزان هم اکنون میتوانید این گیاه را از سایت پرونیا تهیه کنید."
    },
    {
      //_id: 2,
      name: "سانسوریا",
      slug: "sanseveria3",
      image:  "./src/assets/sanseveria (5).jpg",
      // [
       
      //   "./src/assets/sanseveria (5).jpg",
      //   "./src/assets/sanseveria (5).jpg",
      //   "./src/assets/sanseveria (5).jpg",
      //   "./src/assets/sanseveria (5).jpg"
      // ],
      category: "آپارتمانی",
      price: 340000,
      countInStock: 1,
      brand: "pronia",
      rating: 4.1,
      numReviews: 1,
      description: "گیاه سانسوریا جزو زیباترین و در عین حال مقاوم ترین نوع گیاهان آپارتمانی محسوب میشود و شما عزیزان هم اکنون میتوانید این گیاه را از سایت پرونیا تهیه کنید."
    },
    {
      //_id: 3,
      name: "سانسوریا",
      slug: "sanseveria4",
      image: "./src/assets/sanseveria (6).jpg",
      // [
        
      //   "./src/assets/sanseveria (6).jpg",
      //   "./src/assets/sanseveria (6).jpg",
      //   "./src/assets/sanseveria (6).jpg",
      //   "./src/assets/sanseveria (6).jpg"
      // ],
      category: "آپارتمانی",
      price: 560000,
      countInStock: 0,
      brand: "pronia",
      rating: 3.9,
      numReviews: 7,
      description: "گیاه سانسوریا جزو زیباترین و در عین حال مقاوم ترین نوع گیاهان آپارتمانی محسوب میشود و شما عزیزان هم اکنون میتوانید این گیاه را از سایت پرونیا تهیه کنید."
    },
    {
      //_id: 4,
      name: "سانسوریا",
      slug: "sanseveria5",
      image: "./src/assets/sanseveria (7).jpg",
      // [
        
      //   "./src/assets/sanseveria (7).jpg",
      //   "./src/assets/sanseveria (7).jpg",
      //   "./src/assets/sanseveria (7).jpg",
      //   "./src/assets/sanseveria (7).jpg"
      // ],
      category: "آپارتمانی",
      price: 290000,
      countInStock: 3,
      brand: "pronia",
      rating: 4,      
      numReviews: 33,
      description:"یاه سانسوریا جزو زیباترین و در عین حال مقاوم ترین نوع گیاهان آپارتمانی محسوب میشود و شما عزیزان هم اکنون میتوانید این گیاه را از سایت پرونیا تهیه کید."
    },    {
      //_id: 5,
      name: "سانسوریا",
      slug: "sanseveria6",
      image: "./src/assets/sanseveria(8).png",
      // [
        
      //   "./src/assets/sanseveria(8).png",
      //   "./src/assets/sanseveria(8).png",
      //   "./src/assets/sanseveria(8).png",
      //   "./src/assets/sanseveria(8).png"
      // ],
      category: "آپارتمانی",
      price: 400000,
      countInStock: 3,
      brand: "pronia",
      rating: 3.8,
      numReviews: 1,
      description: "گیاه سانسوریا جزو زیباترین و در عین حال مقاوم ترین نوع گیاهان آپارتمانی محسوب میشود و شما عزیزان هم اکنون میتوانید این گیاه را از سایت پرونیا تهیه کنید."
    },
    {
      //_id: 6,
      name: "بنجامین",
      slug: "benjamin1",
      image: "./src/assets/benjamin1.jpg",
      // [
        
      //   "./src/assets/benjamin1.jpg",
      //   "./src/assets/benjamin1.jpg",
      //   "./src/assets/benjamin1.jpg",
      //   "./src/assets/benjamin1.jpg"
      // ],
      category: "آپارتمانی",
      price: 790000,
      countInStock: 5,
      brand: "pronia",
      rating: 4.2,
      numReviews: 5,
      description: "گیاه بنجامین جزو زیباترین و در عین حال مقاوم ترین نوع گیاهان آپارتمانی محسوب میشود و شما عزیزان هم اکنون میتوانید این گیاه را از سایت پرونیا تهیه کنید."
    },
    {
      //_id: 7,
      name: "بنجامین",
      slug: "benjamin8",
      image: "./src/assets/benjamin2.png",
      // [
        
      //   "./src/assets/benjamin2.png",
      //   "./src/assets/benjamin2.png",
      //   "./src/assets/benjamin2.png",
      //   "./src/assets/benjamin2.png"
      // ],
      category: "آپارتمانی",
      price: 640000,
      countInStock: 6,
      brand: "pronia",
      rating: 3.6,
      numReviews: 3,
      description: "گیاه بنجامین جزو زیباترین و در عین حال مقاوم ترین نوع گیاهان آپارتمانی محسوب میشود و شما عزیزان هم اکنون میتوانید این گیاه را از سایت پرونیا تهیه کنید."
    },
    {
      //_id: 8,
      name: "آدنیوم عربیکم",
      slug: "adeniom",
      image: "./src/assets/adeniom.jpg",
      // [
        
      //   "./src/assets/adeniom.jpg",
      //   "./src/assets/adeniom.jpg",
      //   "./src/assets/adeniom.jpg",
      //   "./src/assets/adeniom.jpg"
      // ],
      category: "آپارتمانی",
      price: 650000,
      countInStock: 4,
      brand: "pronia",
      rating: 4.5,
      numReviews: 2,
      description: "گیاه آدنیوم جزو زیباترین و در عین حال مقاوم ترین نوع گیاهان آپارتمانی محسوب میشود و شما عزیزان هم اکنون میتوانید این گیاه را از سایت پرونیا تهیه کنید."
    }
    
  ]
};
export default data;
