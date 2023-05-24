import {Meta, StoryObj} from '@storybook/react'
const colorsObj: any = {
  primary: {
    '50': '#E6F2EB',
    '100': '#CCE4D7',
    '200': '#99C9AF',
    '300': '#66AE87',
    '400': '#33935F',
    '500': '#007837',
    '600': '#00602C',
    '700': '#004821',
    '800': '#003016',
    '900': '#00180B'
  },
  gray: {
    '50': '#F5F6F7',
    '100': '#E6EAED',
    // '150': '#CACCCF',
    '200': '#B8BBBF',
    '300': '#959A9E',
    '400': '#71787E',
    '500': '#4E565E',
    '600': '#3E454B',
    '700': '#2F3438',
    '800': '#1A1D20',
    '900': '#080909'
  },
  warning: {
    '50': '#FFF0ED',
    '100': '#FFE0DC',
    '200': '#FFC1B8',
    '300': '#FFA295',
    '400': '#FF8371',
    '500': '#FF644E',
    '600': '#CC503E',
    '700': '#993C2F',
    '800': '#66281F',
    '900': '#331410'
  },
  negative: {
    '50': '#FBEAF1',
    '100': '#F8D5E3',
    '200': '#F1ABC7',
    '300': '#E982AC',
    '400': '#E25890',
    '500': '#DB2E74',
    '600': '#992051',
    '700': '#6E173A',
    '800': '#420E23',
    '900': '#58122E'
  },
  info: {
    '50': '#E8F1F9',
    '100': '#D1E3F4',
    '200': '#A3C6E9',
    '300': '#76AADD',
    '400': '#488DD2',
    '500': '#1A71C7',
    '600': '#155A9F',
    '700': '#104477',
    '800': '#0A2D50',
    '900': '#051728'
  },
  background: {
    DEFAULT: '#E6EAED'
  },
  black: {
    DEFAULT: '#000000'
  },
  white: {
    DEFAULT: '#FFFFFF'
  }
}

const colorTypes = Object.keys(colorsObj)
const colorsArray = colorTypes.reduce<any>((agg, curr) => {
  const colorShades = Object.keys(colorsObj[curr])
  const colorShadesArray = colorShades.map((shade) => {
    return {
      name: `${curr}-${shade}`,
      hex: colorsObj[curr][shade]
    }
  })
  return [...agg, ...colorShadesArray]
}, [])

console.log(colorsArray)

type ColorType = {
  name: string
  hex: string
}

const meta: Meta = {
  title: 'Colors'
}
export default meta

const ColorPalette = ({
  colors,
  label
}: {
  colors: ColorType[]
  label: string
}) => {
  return (
    <div className="flex flex-row justify-between">
      <h2 className="text-2xl">{label}</h2>
      <div className="flex flex-wrap mx-2 my-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-24 p-2 flex flex-col"
            style={{backgroundColor: color.hex}}
          >
            <label className="text-white text-center">{color.name}</label>
            <label className="text-white text-center">{color.hex}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Colors: StoryObj = {
  render: () => (
    <div className="container mx-auto px-4 py-8">
      <h1>Color Palette Presentation</h1>

      <ColorPalette
        label="Primary"
        colors={colorsArray.filter((color: ColorType) =>
          color.name.includes('primary')
        )}
      />
      <ColorPalette
        label="Gray"
        colors={colorsArray.filter((color: ColorType) =>
          color.name.includes('gray')
        )}
      />
      <ColorPalette
        label="Warning"
        colors={colorsArray.filter((color: ColorType) =>
          color.name.includes('warning')
        )}
      />
      <ColorPalette
        label="Negative"
        colors={colorsArray.filter((color: ColorType) =>
          color.name.includes('negative')
        )}
      />
      <ColorPalette
        label="Info"
        colors={colorsArray.filter((color: ColorType) =>
          color.name.includes('info')
        )}
      />
    </div>
  )
}
