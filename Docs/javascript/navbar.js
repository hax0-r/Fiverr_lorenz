
document.getElementById("navbar").innerHTML = `
    <div class="fixed bottom-28 right-0 overflow-hidden flex flex-col gap-3 z-40">
        <a href="">
            <div
                class="flex border  items-center translate-x-[77%] hover:translate-x-[0%] transition-all duration-500 gap-4 py-2 px-3 bg-[#f8931f] hover:bg-[#7c6498] rounded-l-md text-white">
                <i class="fa-solid fa-phone text-3xl py-[5px]"></i>
                <p class="text-lg font-semibold pl-1 "> 03379 / 582 82 82</p>
            </div>
        </a>
        <a href="">
            <div
                class="flex border items-center translate-x-[77%] hover:translate-x-[0%] transition-all duration-500 gap-4 py-2 px-3 bg-[#f8931f] hover:bg-[#7c6498] rounded-l-md text-white">
                <i class="fa-solid fa-envelope text-4xl "></i>
                <div class="">
                    <p class="text-lg font-bold max-w-[12rem] leading-tight">E-Mail schreiben <span
                            class="font-medium text-nowrap">An: buero@lorenzkg.de</span></p>
                </div>
            </div>
        </a>
    </div>

    <div id="scrollTopButton"
        class="fixed hidden z-40 border bg-[#7c6498] fastFadeIn right-5 bottom-5 cursor-pointer transition-all duration-500 hover:bg-[#674989] w-14 h-14 rounded-full flex items-center justify-center">
        <i class="fa-solid fa-chevron-up text-white text-2xl"></i>
    </div>

    <p class="bg-[#f2f2f2] text-zinc-500 text-center py-2 px-4 text-sm ">Lorenz Malermeister
        Fassadensanierungs- GmbH &nbsp; • &nbsp; Schillerstr. 25, 12529 Schönefeld bei Berlin &nbsp; • &nbsp; Telefon:
        <a class="hover:underline hover:text-black transition-all duration-500" href="">03379 / 582 82 82</a> &nbsp; •
        &nbsp; Mail:
        <a class="hover:underline hover:text-black transition-all duration-500"
            href="mailto:buero@lorenzkg.de">buero@lorenzkg.de</a>
    </p>

    <div class="md:px-10 px-5 py-8">
        <div class="max-w-7xl w-full mx-auto">
            <div class="flex items-center justify-between gap-3">
                <a href="/index.html" class="flex md:items-center md:gap-5 gap-3 md:flex-row flex-col">
                    <img src="/Docs/Assets/Images/Home/logo.png" class="md:max-w-[285px] sm:max-w-[200px] max-w-[130px] w-full" alt="">
                    <p class="font-semibold text-[#7f565a] md:max-w-[15rem] max-w-[12rem] leading-tight md:leading-normal w-full">
                        MALERMEISTER & TECHNIKER SEIT ÜBER 40
                        JAHREN</p>
                </a>

                <ul class="xl:flex hidden items-center gap-5 font-semibold text-lg text-[#f8931f]">
                    <li><a href="/ueber-uns.html" class="hover:text-[#7f565a] transition-all py-3 duration-500 block">ÜBER UNS</a>
                    </li>
                    <li><a href="/referenzen.html" class="hover:text-[#7f565a] transition-all py-3 duration-500 block">REFERENZEN</a>
                    </li>
                    <li><a href="/service.html" class="hover:text-[#7f565a] transition-all py-3 duration-500 block">SERVICE</a></li>
                    <li><a href="/ausbildung.html" class="hover:text-[#7f565a] transition-all py-3 duration-500 block">AUSBILDUNG</a>
                    </li>
                    <li><a href="/galerie.html" class="hover:text-[#7f565a] transition-all py-3 duration-500 block">GALERIE</a></li>
                    <li><a href="/kontakt.html" class="hover:text-[#7f565a] transition-all py-3 duration-500 block">KONTAKT</a></li>
                </ul>

                <div class="flex xl:hidden items-center justify-center cursor-pointer gap-3 text-white bg-[#7c6498] py-1 px-4 rounded-sm"
                    id="openNav2">
                    <i class="fa-solid fa-bars"></i> MENU
                </div>
            </div>
        </div>
    </div>

    <div class="md:px-10 px-5  bg-[#7c6498] sticky top-0 z-50 border-b">
        <div class="max-w-7xl w-full mx-auto flex items-center justify-between transition-all duration-500">
            <img src="/Docs/Assets/Images/Home/whiteLogo.webp"
                class="max-w-[150px] xl:hidden w-full fastFadeIn py-4 transition-all duration-500" id="whiteLogo"
                alt="">
            <ul class="xl:flex hidden items-center gap-10 font-semibold text-[#ffffff] transition-all duration-500">
                <li id="dropDown" class=" relative cursor-pointer"><a
                        class="hover:text-[#f8931f] transition-all py-5 duration-500 block"
                        id="arrowRotate">FASSADENSANIERUNG <i
                            class="fa-solid fa-angle-down ml-1 transition-transform duration-500"></i></a>
                    <ul
                        class="absolute fastFadeIn bg-[#8670A0] transition-all duration-500 rounded-b-md overflow-hidden">
                        <li><a href="/beschichtungssysteme.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Beschichtungssysteme</a>
                        </li>
                        <li><a href="/rissarmierung.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Rissarmierung</a>
                        </li>
                        <li><a href="/putzarbeiten-rissursachen.html"
                                class=" transition-all p-4 px-5 text-nowrap hover:bg-[#63517b] border-b border-white duration-500 block">Putzarbeiten
                                / Rissursachen</a>
                        </li>
                        <li><a href="/pruefmethoden.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Prüfmethoden</a>
                        </li>
                        <li><a href="/algenbekaempfung.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Algenbekämpfung</a>
                        </li>
                        <li><a href="/graffitibekaempfung.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Graffitibekämpfung</a>
                        </li>
                    </ul>
                </li>
                <li id="dropDown" class=" relative cursor-pointer"><a
                        class="hover:text-[#f8931f] transition-all py-5 duration-500 block"
                        id="arrowRotate">BETONSANIERUNG<i
                            class="fa-solid fa-angle-down ml-1 transition-transform duration-500"></i></a>
                    <ul
                        class="absolute fastFadeIn bg-[#8670A0] transition-all duration-500 rounded-b-md overflow-hidden">
                        <li><a href="/arbeitsschritte.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Arbeitsschritte</a>
                        </li>
                        <li><a href="/Detailinformationen-zu-Balkonabdichtungen.html"
                                class=" transition-all text-nowrap p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Detailinformationen
                                zur Betonsanierung</a>
                        </li>
                    </ul>
                </li>
                <li id="dropDown" class=" relative cursor-pointer"><a
                        class="hover:text-[#f8931f] transition-all py-5 duration-500 block"
                        id="arrowRotate">BALKONSANIERUNG <i
                            class="fa-solid fa-angle-down ml-1 transition-transform duration-500"></i></a>
                    <ul
                        class="absolute fastFadeIn bg-[#8670A0] transition-all duration-500 rounded-b-md overflow-hidden">
                        <li><a href="/balkonabdichtung.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Balkonabdichtung</a>
                        </li>
                        <li><a href="/Detailinformationen-zu-Balkonabdichtungen.html"
                                class=" transition-all text-nowrap p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Detailinformationen
                                zu Balkonabdichtungen</a>
                        </li>
                        <li><a href="/beschreibung-der-problemfelder.html"
                                class=" transition-all p-4 px-5 text-nowrap hover:bg-[#63517b] border-b border-white duration-500 block">Beschreibung
                                der Problemfelder...</a>
                        </li>
                    </ul>
                </li>
                <li><a href="/putzsanierung.html" class="hover:text-[#f8931f] transition-all py-5 duration-500 block">PUTZSANIERUNG</a>
                </li>
                <li><a href="/stucksanierung-fassaden-berlin.html" class="hover:text-[#f8931f] transition-all py-5 duration-500 block">STUCKSANIERUNG</a>
                </li>
            </ul>
            <i class="fa-solid fa-bars text-white text-2xl cursor-pointer xl:hidden" id="openNav"></i>
        </div>
    </div>

    <div class="bg-[#7c6498] transition-all duration-500 fixed top-0 right-0 z-50  overflow-hidden"
        id="responsiveNavbar" style="width: 0rem;">
        <ul class="flex flex-col font-semibold h-screen p-5 text-[#ffffff] mt-10 relative">
            <i class="fa-solid fa-x text-2xl text-white absolute -top-7 cursor-pointer p-1 left-4 " id="closeNav"></i>
            <li id="resDropDown" class="relative cursor-pointer"><a
                    class="hover:text-[#f8931f] transition-all py-5 duration-500 justify-between flex items-center"
                    id="arrowRotate">FASSADENSANIERUNG <i
                        class="fa-solid fa-angle-down ml-1 transition-transform duration-500"></i></a>
                <ul class=" bg-[#8670A0] fastFadeIn transition-all duration-500 rounded-b-md overflow-hidden">
                    <li><a href="/beschichtungssysteme.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Beschichtungssysteme</a>
                        </li>
                        <li><a href="/rissarmierung.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Rissarmierung</a>
                        </li>
                        <li><a href="/putzarbeiten-rissursachen.html"
                                class=" transition-all p-4 px-5 text-nowrap hover:bg-[#63517b] border-b border-white duration-500 block">Putzarbeiten
                                / Rissursachen</a>
                        </li>
                        <li><a href="/pruefmethoden.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Prüfmethoden</a>
                        </li>
                        <li><a href="/algenbekaempfung.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Algenbekämpfung</a>
                        </li>
                        <li><a href="/graffitibekaempfung.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Graffitibekämpfung</a>
                        </li>
                </ul>
            </li>
            <li id="resDropDown" class="relative cursor-pointer"><a
                    class="hover:text-[#f8931f] transition-all py-5 duration-500 justify-between flex items-center"
                    id="arrowRotate">BETONSANIERUNG<i
                        class="fa-solid fa-angle-down ml-1 transition-transform duration-500"></i></a>
                <ul class=" bg-[#8670A0] fastFadeIn transition-all duration-500 rounded-b-md overflow-hidden">
                  <li><a href="/arbeitsschritte.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Arbeitsschritte</a>
                        </li>
                        <li><a href="/Detailinformationen-zu-Balkonabdichtungen.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Detailinformationen
                                zur Betonsanierung</a>
                        </li>
                </ul>
            </li>
            <li id="resDropDown" class="relative cursor-pointer"><a
                    class="hover:text-[#f8931f] transition-all py-5 duration-500 justify-between flex items-center"
                    id="arrowRotate">BALKONSANIERUNG
                    <i class="fa-solid fa-angle-down ml-1 transition-transform duration-500"></i></a>
                <ul class=" bg-[#8670A0] fastFadeIn transition-all duration-500 rounded-b-md overflow-hidden">
                   <li><a href="/balkonabdichtung.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Balkonabdichtung</a>
                        </li>
                        <li><a href="/Detailinformationen-zu-Balkonabdichtungen.html"
                                class=" transition-all p-4 px-5 hover:bg-[#63517b] border-b border-white duration-500 block">Detailinformationen
                                zu Balkonabdichtungen</a>
                        </li>
                        <li><a href="/beschreibung-der-problemfelder.html"
                                class=" transition-all p-4 px-5 text-nowrap hover:bg-[#63517b] border-b border-white duration-500 block">Beschreibung
                                der Problemfelder...</a>
                        </li>
                </ul>
            </li>
            <li><a href="/putzsanierung.html" class="hover:text-[#f8931f] transition-all py-5 duration-500 block">PUTZSANIERUNG</a>
            </li>
            <li><a href="/stucksanierung-fassaden-berlin.html" class="hover:text-[#f8931f] transition-all py-5 duration-500 block">STUCKSANIERUNG</a>
            </li>
        </ul>
    </div>
`

const scrollTopButton = document.getElementById('scrollTopButton');
const whiteLogo = document.getElementById("whiteLogo")

window.onscroll = function () {
    if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
        scrollTopButton.classList.remove('hidden');
        whiteLogo.classList.remove('xl:hidden');
    } else {
        whiteLogo.classList.add('xl:hidden');
        scrollTopButton.classList.add('hidden');
    }
};

scrollTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const closeNav = document.getElementById("closeNav")
const openNav = document.getElementById("openNav")
const openNav2 = document.getElementById("openNav2")
const responsiveNavbar = document.getElementById("responsiveNavbar")

openNav.addEventListener('click', () => {
    responsiveNavbar.style.width = "20rem"
    responsiveNavbar.classList.add("border-l")
})
closeNav.addEventListener('click', () => {
    responsiveNavbar.style.width = "0rem"
    responsiveNavbar.classList.remove("border-l")
})
openNav2.addEventListener('click', () => {
    responsiveNavbar.style.width = "20rem"
    responsiveNavbar.classList.add("border-l")
})
