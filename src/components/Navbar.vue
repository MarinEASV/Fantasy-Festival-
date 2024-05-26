<template>
        <nav class="container flex justify-between items-center w-[92%] mx-auto bg-dark_purple py-4 bg-opacity-50">
            <div>
                <img src="../assets/logo.png" alt="Logo">
            </div>
            <div
                class="nav-links duration-500 md:static absolute bg-dark_purple md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 font-body">
                    <li><a class="hover:text-gray-500 text-white" href="#">HOME</a></li>
                    <li><a class="hover:text-gray-500 text-white" href="#">ABOUT</a></li>
                    <li><a class="hover:text-gray-500 text-white" href="#">QUEST</a></li>
                    <li><a class="hover:text-gray-500 text-white" href="#">TICKETS</a></li>
                    <li><a class="hover:text-gray-500 text-white" href="#">CHARACTERS</a></li>
                </ul>
            </div>
            <div class="flex items-center gap-6">
                <button class="bg-yellow text-black px-5 py-2 hover:bg-[#87acec] font-body">BUY TICKET 📜</button>
                <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
        </nav>
</template>

<script setup>
const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e) {
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
        }
</script>

<style lang="scss" scoped>

body {
    background-color: yellow;
    font-family: 'OpenSans-Regular';
    margin: 0;
    padding: 0;
    color: #2a2a2a;
}


.section-1, .section-2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0;
}

.section-1 .text-content, .section-2 .text-content {
    flex: 1;
    padding: 20px;
}

.section-1 .image-content, .section-2 .image-content {
    flex: 1;
    text-align: center;
}

.image-content img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

.heading {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
}

.description {
    font-size: 18px;
    line-height: 1.6;
    margin: 20px 0;
}

.subheadings {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.subheading {
    width: 45%;
}

.subheading h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.subheading p {
    font-size: 16px;
}

.ticket-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2a2a2a;
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.ticket-button:hover {
    background-color: #444444;
}

.banner-image {
    width: 100%;
   
}

.banner-image img {
    width: 100%;
}

.section-2 {
    background-color: #181532;
    color: white;
    padding: 40px 20px;
    margin: -5px;
}

.section-2 .ticket-button {
    background-color: #F6C567;
}

.heading, .subheading-1, .h3 {
    font-family: 'Celtic Garamond the 2nd';
}

.ticket {
    width: 320px;
    height: auto;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
    background-position: center;
}

.ticket h3 {
    color: #181532;
    font-size: 1.75rem;
}

.ticket p, .ticket span {
    color: #181532;
}

.ticket .includes p {
    display: flex;
    justify-content: space-between;
}

.ticket .includes p span {
    flex: 1;
    margin-right: 10px;
}

.ticket .includes p span:last-child {
    margin-right: 0;
}

.ticket a {
    background-color: #181532;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    display: block;
    text-align: center;
    margin-top: 0px;
    transition: background-color 0.3s;
    

}

.ticket a:hover {
    background-color: #444444;
}

.text-left {
    padding-top: 0px;
}


/* Footer Section */
footer {
    background-color: #181532;
    padding: 40px 20px;
    color: white;
    position: relative;
}

.footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dragon-image img {
    max-width: 100%;
    height: auto;
    margin-left: 100px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 20px;
}

.contacts, .follow-us {
    flex: 1;
    margin-right: px;
}

.contacts {
margin-left: 170px;
}
.contacts h3, .follow-us h3 {
    font-family: 'Celtic Garamond the 2nd';
    margin-bottom: 10px;
}

.contacts p, .follow-us a {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    margin: 5px 0;
    color: white;
    text-decoration: none;
}

.follow-us a {
    margin-right: 10px;
    font-size: 24px;
}

.follow-us a:hover {
    color: #f6c567;
}

.contacts i, .follow-us i {
    margin-right: 10px;
}

@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-content {
        padding-left: 0;
        margin-top: 20px;
    }

    .contacts, .follow-us {
        margin-right: 0;
    }

    .follow-us a {
        margin-right: 20px;
        margin-bottom: 10px;
    }
}

</style>
