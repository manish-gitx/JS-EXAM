const post_btn=document.querySelector(".post-btn");
let posts=localStorage.getItem("posts")!==null ? JSON.parse(localStorage.getItem("posts")) :[];
const input_main=document.querySelector(".input-comment");
const right_post=document.querySelector(".right-main");
src_like="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"
src_liked="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455"

function getTemplate(input,liked,comment,cliked,id){
    return `<div class="interact" data-id="${id}">
    <div class="components">
        <img class="p-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739">
        <div class="user">
            <div class="user-1">
                <p class="username">@mainsh</p>
                <div class="edit-div">
                
                        <img  data-id="${id}" data-edit="input" class="edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661">
                
                        <img data-del="main" data-id="${id}" class="delete" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643">
   
                </div>
            </div>
            <textarea class="right-input" placeholder="Type" readonly="true">${input}</textarea>
                <div class="interact-icons">
                  
                        <img data-id="${id}" class="comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619">
                        <img data-id="${id}"  data-like="liked" class="like" src="${liked ? src_liked : src_like}">
                </div>
            
        </div>
        
    </div>
    <div class="post-comment" data-id="${id}">
        ${comment !== "" ? addCommentDom(comment,cliked,id) : ""}
    </div>
    </yydiv>`



}

function addToDom(input,liked,comment,cliked,id){
    right_post.innerHTML+=getTemplate(input,liked,comment,cliked,id);

}

function addPost(input){
    var post={
        id:Math.floor(Math.random() * 100000),
        input:input,
        liked:false,
        cliked:false,
        comment:""
    }
    addToDom(post.input,post.liked,post.comment,post.id);
    posts.push(post);
    localStorage.setItem("posts",JSON.stringify(posts));
    location.reload();
    

}

post_btn.addEventListener('click',(e)=>{
    var input_val=input_main.value;
    input_main.value=""
    addPost(input_val)
})

function removePost(data){
    posts=posts.filter(ele=>{
        return ele.id!==data;
    })
    localStorage.setItem("posts",JSON.stringify(posts));
};

function addCommentDom(text,cliked,id){
    return `<div class="interact1">
    <div class="components1">
        <img class="p-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739">
        <div class="user">
            <div class="user-1">
                <p class="username">@mainsh</p>
                <div class="edit-div">
                    
                        <img data-id=${id} data-edit="comment" class="edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661">
                  
                        <img  data-del="com" data-id=${id} class="delete" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643">
                </div>
            </div>
            <textarea class="right-input" placeholder="Type" readonly="true">${text}</textarea>
                <div class="interact-icons">
                        <img data-like="cliked" data-id=${id} class="like" src="${cliked ? src_liked : src_like}" >
                  
                </div>
            
        </div>
        


    </div>
</div>`

}
function addComment(id,text){
    posts = posts.map(post => {
        if (post.id === id) {
            post.comment = `${text}`;
        }
        return post;
    });
    localStorage.setItem("posts",JSON.stringify(posts))
}











function renderPosts(){
    for(i=0;i<posts.length;i++){
        addToDom(posts[i].input,posts[i].liked,posts[i].comment,posts[i].cliked,posts[i].id);
    }
}




function addCommentInput(id,text,k){
    console.log(id);
    console.log(text);
    console.log(k);
    posts = posts.map(post => {
        if (post.id === id) {
            post[k] = `${text}`;
        }
        return post;
    });
    localStorage.setItem("posts",JSON.stringify(posts))
    right_post.innerHTML=""
    renderPosts();
}

function updateLike(id,cond,tar){



   
    posts = posts.map(post => {
        if (post.id === id) {
            post[tar]=cond;
        }
        return post;
    });

    localStorage.setItem("posts",JSON.stringify(posts));
    right_post.innerHTML=""
    renderPosts();
    

}
renderPosts();


right_post.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        const ele=e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        const top=ele.parentNode.parentNode;
        ele.remove();

        if(e.target.dataset.del=="main"){
            data=ele.dataset.id;
            removePost(Number(data));
        }
        else{
            data=top.dataset.id;
            addComment(Number(data),"");
            // right_post.innerHTML=""
            // renderPosts();

        }
            

        
    }

    if(e.target.classList.contains("comment")){
        const ele=e.target.parentNode.parentNode.parentNode.parentNode;
        const post_comment=ele.querySelector(".post-comment");
        data=Number(ele.dataset.id);
       let text= prompt("please comment");
       if(text==null){
        return;
       }
       addComment(data,text);
       post_comment.innerHTML=addCommentDom(text,false,ele.dataset.id);
    }

    if(e.target.classList.contains("like")){
        const ele=e.target.parentNode.parentNode.parentNode.parentNode;
       var tar=e.target.dataset.like
       if(tar!=="liked"){
        data=(ele.parentNode.dataset.id);
       }
       else{
        data =(ele.dataset.id);
       }
       data=Number(data)

        cond=e.target.src;
        
        if(cond===src_liked){
            updateLike(data,false,tar);
            return;
        }
        else{
            updateLike(data,true,tar);
            return;

        }
        


    }

    if(e.target.classList.contains("edit")){
        let text_input=prompt("please edit")
        let k=e.target.dataset.edit

      
            addCommentInput(Number(e.target.dataset.id),text_input,k)
        
    }



});


























