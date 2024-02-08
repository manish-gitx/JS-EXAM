const sub=document.querySelector(".post-btn");
const right=document.querySelector(".right-main");
const main_input=document.querySelector(".input-comment");
const textcontent = document.querySelector("#text-area");

textcontent.addEventListener("input",(e)=>{
var length = e.target.value.length;
document.getElementById("post_count").innerHTML=`${length}/100`;
})

sub.addEventListener('click', () => {
    var inside = main_input.value;
    main_input.value="";
    right.innerHTML += `
        <div class="interact">
            <div class="components">
                <img class="p-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739">
                <div class="user">
                    <div class="user-1">
                        <p class="username">@mainsh</p>
                        <div class="edit">
                            <button  class="transparent-button edit-btn"  >
                                <img  src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661">
                            </button>
                            <button  class="transparent-button delete">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643">
                            </button>
                        </div>
                    </div>
                    <textarea class="right-input" placeholder="Type">${inside}</textarea>
                        <div class="interact-icons">
                            <button class="transparent-button id="comment-btn">
                                <img id="comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619">
                            </button>
                            <button class="transparent-button like-btn">
                                <img id="like" class="like-src" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679">
                            </button>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    `;

    const del=document.querySelectorAll(".delete");
    const r_input = document.querySelectorAll(".right-input");
    const like=document.querySelectorAll(".like-btn");
    like.forEach((ele) => {
        ele.addEventListener('click',()=>{
           const img=ele.querySelector("img");
           if(img.src==="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"){
            img.src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455"
           }
           else{
            img.src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
           }
        })

    });

    r_input.forEach(input => {
        input.setAttribute('readonly', true);
    });
const editButtons = document.querySelectorAll(".edit-btn");
editButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const textarea = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".right-input");
        console.log("manish")
        textarea.removeAttribute('readonly');
        textarea.focus()

        textarea.addEventListener("focusout", () => {
            textarea.setAttribute('readonly', true);
        });
    });
});
    del.forEach(ele=>{
        ele.addEventListener("click",(e)=>{
            e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();

        })
    })


})
