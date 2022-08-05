const style:any = {
  default: {
    hoverBgc: 'blue',
    hoverColor: '#fff',
    backgroundColor: 'rgb(239, 238, 238)',
    color: '#000'
  },
  success: {
    hoverBgc: '#ccc',
    hoverColor: '#fff',
    backgroundColor: 'blue',
    color: '#ffff'
  },
  danger: {
    hoverBgc: 'blue',
    hoverColor: '#fff',
    backgroundColor: 'red',
    color: '#ffff'
  },
  warn: {
    hoverBgc: 'blue',
    hoverColor: '#fff',
    backgroundColor: 'orange',
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
