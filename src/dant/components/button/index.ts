const style:any = {
  default: {
    hoverBgc: 'blue',
    hoverColor: '#fff',
    backgroundColor: 'rgb(239, 238, 238)',
    color: '#000'
  },
  success: {
    hoverBgc: 'rgba(0,0,255,.7)',
    hoverColor: '#fff',
    backgroundColor: 'rgb(0,0,255)',
    color: '#ffff'
  },
  danger: {
    hoverBgc: 'blue',
    hoverColor: '#fff',
    backgroundColor: 'rgb(255,0,0)',
    color: '#ffff'
  },
  warn: {
    hoverBgc: 'rgba(255, 153, 0,.7)',
    hoverColor: '#fff',
    backgroundColor: 'rgb(255, 153, 0)',
    color: '#ffff'
  }
}

const mouseEnter = (e:any, type:string) => {
  e.target.style.background = style[type].hoverBgc
  e.target.style.color = style[type].hoverColor
}
const mouseLeave = (e:any, type:string) => {
  e.target.style.background = style[type].backgroundColor
  e.target.style.color = style[type].color
}
export {
  style,
  mouseEnter,
  mouseLeave
}
