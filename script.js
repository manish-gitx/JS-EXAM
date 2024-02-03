



const sub=document.querySelector(".post-btn");
const right=document.querySelector(".right-main");
const main_input=document.querySelector(".input-comment");
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
                            <button  class="transparent-button" id="edit">
                                <img  src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661">
                            </button>
                            <button id="delete" class="transparent-button">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643">
                            </button>
                        </div>
                    </div>
                    <textarea class="right-input" placeholder="Type">${inside}</textarea>
                    <button class="transparent-button">
                        <div class="interact-icons">
                            <img id="comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619">
                            <img id="like" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679">
                        </div>
                    </button>
                </div>
            </div>
        </div>
    `;

    const del=document.querySelector("#delete");
    
    del.addEventListener("click",(e)=>{
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
    })


})