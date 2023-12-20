require("./index.css");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $ad7fda3db8f0e7c8$exports = {};
$ad7fda3db8f0e7c8$exports = new URL("image.7b4bb6da.png", "file:" + __filename).toString();


function $4f8e5fb2dc7a6f8f$export$120ff0929b202a6d(content, styles = "") {
    return `<div class= "row" style= "${styles}">${content}</div>`;
}
function $4f8e5fb2dc7a6f8f$export$aba86695643891f5(content) {
    return `<div class= "col-sm">${content}</div>`;
}
function $4f8e5fb2dc7a6f8f$export$dbf350e5966cf602(styles = {}) {
    const toString = (key)=>`${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(";");
}


class $95424e2a892ddbba$var$Block {
    constructor(value, options){
        this.value = value;
        this.options = options;
    }
    toHtml() {
        throw new Error('Method "toHtml" should be realised');
    }
}
class $95424e2a892ddbba$export$ccf187e9bb6e68c extends $95424e2a892ddbba$var$Block {
    constructor(value, options){
        super(value, options);
    }
    toHtml() {
        const { tag: tag = "h1", styles: styles } = this.options;
        return (0, $4f8e5fb2dc7a6f8f$export$120ff0929b202a6d)((0, $4f8e5fb2dc7a6f8f$export$aba86695643891f5)(`<${tag}>${this.value}</${tag}>`), (0, $4f8e5fb2dc7a6f8f$export$dbf350e5966cf602)(styles));
    }
}
class $95424e2a892ddbba$export$2db84c782bfb16e2 extends $95424e2a892ddbba$var$Block {
    constructor(value, options){
        super(value, options);
    }
}
class $95424e2a892ddbba$export$37a52fa31b599ac5 extends $95424e2a892ddbba$var$Block {
    constructor(value, options){
        super(value, options);
    }
    toHTML() {
        const { imageStyles: is, alt: alt = "", styles: styles } = this.options;
        return (0, $4f8e5fb2dc7a6f8f$export$120ff0929b202a6d)(`<img src="${this.value} alt="${alt}" style="${(0, $4f8e5fb2dc7a6f8f$export$dbf350e5966cf602)(is)}" " />`, (0, $4f8e5fb2dc7a6f8f$export$dbf350e5966cf602)(styles));
    }
}
class $95424e2a892ddbba$export$cd7860af6b6cb335 extends $95424e2a892ddbba$var$Block {
    constructor(value, options){
        super(value, options);
    }
    toHTML() {
        const html = this.value.map((0, $4f8e5fb2dc7a6f8f$export$aba86695643891f5)).join("");
        return (0, $4f8e5fb2dc7a6f8f$export$120ff0929b202a6d)(html), (0, $4f8e5fb2dc7a6f8f$export$dbf350e5966cf602)(this.options.styles);
    }
}


const $e843b91555fcaa3c$var$text = "123445";
const $e843b91555fcaa3c$export$39a8f6bed6e94390 = [
    new (0, $95424e2a892ddbba$export$ccf187e9bb6e68c)("Конструктор сайтов на чистом JavaScript", {
        tag: "h2",
        styles: {
            background: "linear-gradient(to right, #ff0099, #493240)",
            color: "#fff",
            padding: "1.5rem",
            "text-align": "center"
        }
    }),
    new (0, $95424e2a892ddbba$export$2db84c782bfb16e2)($e843b91555fcaa3c$var$text, {
        styles: {
            background: "linear-gradient(to left, #f2994a, #f2c94c)",
            padding: "1rem",
            "font-weight": "bold"
        }
    }),
    new (0, $95424e2a892ddbba$export$cd7860af6b6cb335)([
        "11111",
        "22222",
        "33333"
    ], {
        styles: {
            background: "linear-gradient (to bottom, #8e2de2, #4a00e0)",
            padding: "2rem",
            color: "#fff",
            "font-weight": "bold"
        }
    }),
    new (0, $95424e2a892ddbba$export$37a52fa31b599ac5)((0, (/*@__PURE__*/$parcel$interopDefault($ad7fda3db8f0e7c8$exports))), {
        styles: {
            padding: "2rem 0",
            display: "flex",
            "justify-content": "center"
        },
        imageStyles: {
            width: "500px",
            height: "auto"
        },
        alt: "it`s an image"
    })
];


class $077d9b32a0e76be8$export$ca6fd6057d03ddab {
    constructor(selector){
        this.$el = document.querySelector(selector);
    }
    render(model) {
        model.forEach((block)=>{
            this.$el.insertAdjacentHTML("beforeend", block.toHTML());
        });
    }
}



class $8dd0ce21849a98c3$export$1ba59dacbcbf90fe {
    constructor(selector){
        this.$el = document.querySelector(selector);
        this.$el.insertAdjacentHTML("afterbegin", this.template);
    }
    get template() {
        return "<h1>Template</h1>";
    }
}


const $d3928351bb4a0237$var$site = new (0, $077d9b32a0e76be8$export$ca6fd6057d03ddab)("#site");
$d3928351bb4a0237$var$site.render((0, $e843b91555fcaa3c$export$39a8f6bed6e94390));
const $d3928351bb4a0237$var$sidebar = new (0, $8dd0ce21849a98c3$export$1ba59dacbcbf90fe)("#panel");


