import '../styles/base.scss'
import hero from '../templates/hero.html'
import colorSamples from '../templates/colorSamples.html'

const components = [
  hero,
  colorSamples
]

const main = document.querySelector('.main')
const fragment = document.createDocumentFragment();

components.forEach((component) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = component
  fragment.appendChild(wrapper)
})

main.appendChild(fragment)