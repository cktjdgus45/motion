import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement>{
    constructor(title: string, url: string) {
        super(`<section class="video">
                <div class="video__player">
                    <iframe class="video__iframe"></iframe>
                    <h3 class="video__title"></h3>
                </div>
            </section>`);

        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        iframe.src = this.convertToEmbeddeddURL(url);
        const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
        titleElement.textContent = title;
    }
    private convertToEmbeddeddURL(url: string): string {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        console.log(match);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}

//input
//"https://www.youtube.com/watch?v=K3-AjZt2vnsTpQ"
//output
//"https://www.youtube.com/embed/AjZt2vnsTpQ"
//정규 표현식 regex 모든개발자라면 필수로 알아야한다.

//<iframe width="1280" height="720" src="https://www.youtube.com/embed/AjZt2vnsTpQ"
// frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
// gyroscope; picture-in-picture" allowfullscreen>
// </iframe>
