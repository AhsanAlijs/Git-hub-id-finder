const form = document.querySelector('#form');
const input = document.querySelector('#button')
const loading = document.querySelector('.loading')
const notFound = document.querySelector('.not')
const mainData = document.querySelector('.min-data');
async function renderUser() {
    loading.style.display = "block"
    try {
        const id = await axios.get(`https://api.github.com/users/${input.value}`);
        console.log(id.data);
        mainData.innerHTML = `
    <div class="left">
    <div class="">
    <img src="${id.data.avatar_url}" alt="User profile" class="profile-img">
    <div class="name">${id.data.name}</div>
    <div class="btn-main"><button class="btn-view"><a href="${id.data.html_url}" target="_blank" 
    class="profile">View Profilr</a></button></div>
    </div>
    
    <div class="new-sec">
    <div class="btn-div">
    <p class="blue"> Public Repo : ${id.data.public_repos}</p>
    <p class="gray"> Public Gists : ${id.data.public_gists}</p>
    <p class="green"> Followers : ${id.data.followers}</p>
    <p class="dark"> Following : ${id.data.following}</p>
    </div>
    
    <div class='additional-data'>
    <p class="data-para"><span class="bold">Company:</span> ${id.data.company}</p>
    <p class="data-para"><span class="bold">Bio:</span> ${id.data.bio}</p>
    <p class="data-para"><span class="bold">Website/Blog: </span><a href="${id.data.received_events_url}" class="cnahge">${id.data.received_events_url}<a></p>
    <p class="data-para"><span class="bold">Location:</span> ${id.data.location}</p>
    <p class="data-para"><span class="bold">Member Since:</span> ${id.data.created_at}</p>
    
    </div>
    </div>
    </div>
    `

    } catch (error) {

        notFound.innerHTML = `${input.value} is Not Found`



    } finally {
        input.value = ""
        loading.style.display = "none"
    }

}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderUser()
});
