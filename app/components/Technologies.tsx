import Tile from "../elements/Tile";

export function Technologies() {
    return <div className="pt-10">
        <h1 className="text-3xl font-medium uppercase text-white py-5 text-center">Technologies</h1>
        <div className="grid grid-cols-6">
            <Tile title="HTML" url="https://cdn-icons-png.flaticon.com/512/1532/1532556.png" />
            <Tile title="CSS" url="https://www.iconbolt.com/iconsets/social-media-logos/css3-html-logo-social-social-media.svg" />
            <Tile title="Angular" url="https://angular.io/assets/images/logos/angular/angular.png" />
            <Tile title="React" url="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
            <Tile title="Tailwind" url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" />
            <Tile title="Nodejs" url="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png" />
            <Tile title="Selenium" url="https://static-00.iconduck.com/assets.00/selenium-icon-512x496-obrnvg2v.png" />
            <Tile title="Java" url="https://cdn-icons-png.flaticon.com/512/226/226777.png" />
            <Tile title="C#" url="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" />
            <Tile title="Python" url="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" />
            <Tile title="GitHub" url="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            <Tile title="Docker" url="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" />
            <Tile title="Jenkins" url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" />
        </div>
    </div>
}