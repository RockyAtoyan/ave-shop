import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";


const initState = {
    categories:[
        {name:'mens',values:{casual:['Jackets','Hoodies & Sweatshirts','Polo Shirts','Sportswear','Trousers & Chinos','T-Shirts'],formal:['Jackets','Shirts','Suits','Trousers']}},
        {name:'womens',values:{casual:['Jackets','Hoodies & Sweatshirts','Polo Shirts','Sportswear','Trousers & Chinos','T-Shirts'],formal:['Jackets','Shirts','Suits','Trousers']}},
        {name:'the brand'},
        {name:'local stores'},
        {name:'look book',values:{'our lookbook':['Latest posts(mixed)','Men`s lookbook','Women`s lookbook'],'your lookbook':['View and edit','Share','Delete']}},
    ],
    posts:[
        {id:1,productId:1,name:'Womens burnt orange casual tee',postDaysLeft:1,likeCount:2,ref:'M1',sellRating:1,arrivalDaysLeft:4,rating:1,image:'../assets/images/home/product_03.png',price:89.99,description:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.'},
        {id:2,productId:2,name:'Womens burnt orange casual tee',postDaysLeft:2,likeCount:1,ref:'M1',sellRating:1,arrivalDaysLeft:4,rating:1,image:'../assets/images/home/product_05.png',price:89.99,description:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.'},
        {id:3,productId:3,name:'Womens burnt orange casual tee',postDaysLeft:3,likeCount:4,ref:'M1',sellRating:1,arrivalDaysLeft:4,rating:1,image:'../assets/images/home/product_07.png',price:89.99,description:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.'},
        {id:4,productId:4,name:'Womens burnt orange casual tee',postDaysLeft:5,likeCount:3,ref:'M1',sellRating:1,arrivalDaysLeft:4,rating:1,image:'../assets/images/home/product_12.png',price:89.99,description:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.'},
        {id:5,productId:5,name:'Womens burnt orange casual tee',postDaysLeft:6,likeCount:5,ref:'M1',sellRating:1,arrivalDaysLeft:4,rating:1,image:'../assets/images/home/product_14.png',price:89.99,description:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.'},
        {id:6,title:'jane`s lookbook',btnValue:'view now',subtitle:'get the look for under £200!',text:'We invited actress Jane Marshall to join us \n' +
                'for the day and choose her perfect outfit from \n' +
                'our vast range of womens fashion.\n' +
                '/backspace' +
                'This is of course not true as this is just a design \n' +
                'for a website and this is simply filler text.',image:'../assets/images/lookbook/post_new1.png',},
        {id:7,title:'Win a new look!',btnValue:'shop now',subtitle:'add looks or items to your lookbook for a chance of winning ',text:'See an item or a complete look you like, click the  button to add it to yourlookbook and you’ll be automatically entered to our monthly draw where one winner gets a £300 gift voucher to spend on our website!' +
'/backspace' +
                'Terms: No purchase necessary. Vouchers are non-transferable and no cash alternative is ofered. Competition is for members only.',image:'../assets/images/lookbook/post_new2.png'},
        {id:8,productId:6,name:'Womens burnt orange casual tee',postDaysLeft:0,likeCount:0,ref:'M1',sellRating:1,arrivalDaysLeft:4,rating:1,image:'../assets/images/home/product_16.png',price:89.99,description:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.'},
        {id:9,productId:7,name:'Womens burnt orange casual tee',postDaysLeft:12,likeCount:2,ref:'M1',sellRating:1,arrivalDaysLeft:4,rating:1,image:'../assets/images/home/product_03.png',price:89.99,description:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.'},
        {id:10,productId:8,name:'Womens burnt orange casual tee',postDaysLeft:15,likeCount:10,ref:'M1',sellRating:1,arrivalDaysLeft:4,rating:1,image:'../assets/images/home/product_12.png',price:89.99,description:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.'},
        {id:11,productId:9,name:'Womens burnt orange casual tee',postDaysLeft:22,likeCount:22,ref:'M1',sellRating:1,arrivalDaysLeft:4,rating:1,image:'../assets/images/home/product_14.png',price:89.99,description:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.'},
    ],
    products:[
        {id:1,availability:true,colors:['beige','green'],sizes:['40','42','43','45'],about:{text:'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',list:['Elasticated cuffs','Casual fit','100% Cotton','Free shipping with 4 days delivery']},type: {sex:'mens',clothes: {type:'casual',name:'Jackets'}},name:'awe classic sweatshirt',sellRating:1,arrivalDaysLeft:4,rating:5,image:'../assets/images/home/product_03.png',price:89.99,subtitle:'Classic casual t-shirt for women on the move. \n' +
 '100% cotton.',description: {title:'Nunc egestas posuere enim, eu maximus erat posuere eget',text:'Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.\n' +
                    '\n' + '/backspace' +
                    'Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.'}},
        {id:2,availability:false,colors:['beige','green'],sizes:['40','42','43','45'],about:{text:'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',list:['Elasticated cuffs','Casual fit','100% Cotton','Free shipping with 4 days delivery']},type: {sex:'womens',clothes: {type:'casual',name:'Jackets'}},name:'Womens burnt orange casual tee',sellRating:7,arrivalDaysLeft:2,rating:4,image:'../assets/images/home/product_05.png',price:89.99,subtitle:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.',description: {title:'Nunc egestas posuere enim, eu maximus erat posuere eget',text:'Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.\n' +
                    '\n' + '/backspace' +
                    'Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.'}},
        {id:3,availability:true,colors:['beige','green'],sizes:['40','42','43','45'],about:{text:'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',list:['Elasticated cuffs','Casual fit','100% Cotton','Free shipping with 4 days delivery']},type: {sex:'mens',clothes: {type:'formal',name:'Shirts'}},name:'awe classic sweatshirt',sellRating:10,arrivalDaysLeft:4,rating:3,image:'../assets/images/home/product_07.png',price:89.99,subtitle:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.',description: {title:'Nunc egestas posuere enim, eu maximus erat posuere eget',text:'Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.\n' +
                    '\n' + '/backspace' +
                    'Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.'}},
        {id:4,availability:false,colors:['beige','green'],sizes:['40','42','43','45'],about:{text:'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',list:['Elasticated cuffs','Casual fit','100% Cotton','Free shipping with 4 days delivery']},type: {sex:'mens',clothes: {type:'casual',name:'Hoodies & Sweatshirts'}},name:'awe classic sweatshirt',sellRating:3,arrivalDaysLeft:4,rating:4,image:'../assets/images/home/product_12.png',price:89.99,subtitle:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.',description: {title:'Nunc egestas posuere enim, eu maximus erat posuere eget',text:'Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.\n' +
                    '\n' + '/backspace' +
                    'Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.'}},
        {id:5,availability:true,colors:['beige','green'],sizes:['40','42','43','45'],about:{text:'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',list:['Elasticated cuffs','Casual fit','100% Cotton','Free shipping with 4 days delivery']},type: {sex:'womens',clothes: {type:'casual',name:'Jackets'}},name:'Womens burnt orange casual tee',sellRating:5,arrivalDaysLeft:5,rating:3,image:'../assets/images/home/product_14.png',price:89.99,subtitle:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.',description: {title:'Nunc egestas posuere enim, eu maximus erat posuere eget',text:'Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.\n' +
                    '\n' + '/backspace' +
                    'Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.'}},
        {id:6,availability:false,colors:['beige','green'],sizes:['40','42','43','45'],about:{text:'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',list:['Elasticated cuffs','Casual fit','100% Cotton','Free shipping with 4 days delivery']},type: {sex:'womens',clothes: {type:'casual',name:'Jackets'}},name:'Womens burnt orange casual tee',sellRating:3,arrivalDaysLeft:7,rating:3,image:'../assets/images/home/product_16.png',price:89.99,subtitle:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.',description: {title:'Nunc egestas posuere enim, eu maximus erat posuere eget',text:'Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.\n' +
                    '\n' + '/backspace' +
                    'Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.'}},
        {id:7,availability:true,colors:['beige','green'],sizes:['40','42','43','45'],about:{text:'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',list:['Elasticated cuffs','Casual fit','100% Cotton','Free shipping with 4 days delivery']},type: {sex:'mens',clothes:{type:'casual',name:'Polo Shirts'}},name:'awe classic sweatshirt',sellRating:2,arrivalDaysLeft:6,rating:2,image:'../assets/images/home/product_03.png',price:89.99,subtitle:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.',description: {title:'Nunc egestas posuere enim, eu maximus erat posuere eget',text:'Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.\n' +
                    '\n' + '/backspace' +
                    'Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.'}},
        {id:8,availability:false,colors:['beige','green'],sizes:['40','42','43','45'],about:{text:'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',list:['Elasticated cuffs','Casual fit','100% Cotton','Free shipping with 4 days delivery']},type: {sex:'womens',clothes: {type:'casual',name:'Jackets'}},name:'Womens burnt orange casual tee',sellRating:3,arrivalDaysLeft:7,rating:3,image:'../assets/images/home/product_16.png',price:89.99,subtitle:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.',description: {title:'Nunc egestas posuere enim, eu maximus erat posuere eget',text:'Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.\n' +
                    '\n' + '/backspace' +
                    'Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.'}},
        {id:9,availability:true,colors:['beige','green'],sizes:['40','42','43','45'],about:{text:'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',list:['Elasticated cuffs','Casual fit','100% Cotton','Free shipping with 4 days delivery']},type: {sex:'mens',clothes:{type:'casual',name:'Polo Shirts'}},name:'awe classic sweatshirt',sellRating:2,arrivalDaysLeft:6,rating:2,image:'../assets/images/home/product_03.png',price:89.99,subtitle:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.',description: {title:'Nunc egestas posuere enim, eu maximus erat posuere eget',text:'Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.\n' +
                    '\n' + '/backspace' +
                    'Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.'}},
        {id:10,availability:false,colors:['beige','green'],sizes:['40','42','43','45'],about:{text:'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',list:['Elasticated cuffs','Casual fit','100% Cotton','Free shipping with 4 days delivery']},type: {sex:'womens',clothes: {type:'casual',name:'Jackets'}},name:'Womens burnt orange casual tee',sellRating:3,arrivalDaysLeft:7,rating:3,image:'../assets/images/home/product_16.png',price:89.99,subtitle:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.',description: {title:'Nunc egestas posuere enim, eu maximus erat posuere eget',text:'Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.\n' +
                    '\n' + '/backspace' +
                    'Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.'}},
        {id:11,availability:true,colors:['beige','green'],sizes:['40','42','43','45'],about:{text:'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',list:['Elasticated cuffs','Casual fit','100% Cotton','Free shipping with 4 days delivery']},type: {sex:'mens',clothes:{type:'casual',name:'Polo Shirts'}},name:'awe classic sweatshirt',sellRating:2,arrivalDaysLeft:6,rating:2,image:'../assets/images/home/product_03.png',price:89.99,subtitle:'Classic casual t-shirt for women on the move. \n' +
                '100% cotton.',description: {title:'Nunc egestas posuere enim, eu maximus erat posuere eget',text:'Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.\n' +
                    '\n' + '/backspace' +
                    'Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.'}},
    ] as ProductType[],
    sort:'popular',
    currentLocation:'',
    fetching:false,
    cartProducts:[] as any[],
    lookbook:[] as any[],
    searchValue:'',
}

export type ProductType = {
    "id":number
    "availability":boolean
    "colors":string[]
    "sizes":string[]
    "about":{
        "text":string
        "list":string[]
    }
    "type":{
        "sex":string
        "clothes": {
            "type":string
            "name":string
        }
    }
    "name":string
    "sellRating":number
    "arrivalDaysLeft":number
    "rating":number
    "image":string
    "price":number
    "subtitle":string
    "description":{
        "title":string
        "text":string
    }
}

export const shopReducer = (state = initState,action:ActionsType) => {
    if(action.type === "set-sort"){
        return {...state,sort: action.sort}
    } else if(action.type === 'set-current-location'){
        return {...state,currentLocation: action.location}
    } else if(action.type === 'set-fetching'){
        return {...state,fetching: action.fetching}
    } else if(action.type === 'set-cart-products'){
        return {...state,cartProducts: action.products}
    } else if(action.type === 'set-lookbook'){
        return {...state,lookbook: action.lookbook}
    } else if(action.type === 'set-search-value'){
        return {...state,searchValue: action.value}
    }
    return {...state}
}


type ActionsType = setSortType |
    setCurrentLocationType |
    setFetchingType |
    setCartProductsType |
    setMyLookbookType |
    setSearchValueType

type setSortType = {
    type:'set-sort',
    sort:string
}
export const setSort = (sort:string):setSortType => ({type:'set-sort',sort})

type setCurrentLocationType = {
    type:'set-current-location',
    location:any
}
export const setCurrentLocation = (location:any):setCurrentLocationType => ({type:'set-current-location',location})

type setFetchingType = {
    type:'set-fetching',
    fetching:boolean
}
export const setFetching = (fetching:boolean):setFetchingType => ({type:'set-fetching',fetching})

type setSearchValueType = {
    type:'set-search-value',
    value:string
}
export const setSearch = (value:string):setSearchValueType => ({type:'set-search-value',value})


type setCartProductsType = {
    type:'set-cart-products',
    products:any[]
}
export const setCartProducts = (products:any[]):setCartProductsType => ({type:'set-cart-products',products})

type setMyLookbookType = {
    type:'set-lookbook',
    lookbook:any[]
}
export const setMyLookbook = (lookbook:any[]):setMyLookbookType => ({type:'set-lookbook',lookbook})


type ThunkType = ThunkAction<Promise<void | any> | any, AppStateType, any, ActionsType>

export const getCartProducts = (products:any[]):ThunkType => dispatch => {
    dispatch(setCartProducts(products))
}