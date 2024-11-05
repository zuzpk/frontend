import { css } from "@zuzjs/ui";

const Style = {
    Input:  css(`bg:$input border:0 p:12 r:$radius c:$text w:100% s:$text-size`),
    Btn: css([
        `bg:$primary border:0 p:12,20 r:$radius c:$btn-text bold w:100% s:$text-size`,
        `&hover(bg:$primary-hover)`
    ]),
    Link: css([
        `tdn &hover(tdu) c:$primary`
    ])
}

export default Style;