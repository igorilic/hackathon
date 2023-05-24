import {Meta, StoryObj} from '@storybook/react'

const meta: Meta = {
  title: 'Typography'
}
export default meta

export const Typography: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-3 w-7/12">
      <div className="flex flex-row gap-8 justify-between">
        <h1>Lexend | Bold | 28px | LH 34</h1>
        <h1>H1</h1>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <h2 className="text-3xl leading-extra-loose font-bold">
          Inter | Light | 28px | LH 34
        </h2>

        <h2 className="text-3xl leading-extra-loose font-light">
          H1--dashboard
        </h2>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <h2>Inter | Semi Bold | 22px | LH 24</h2>
        <h2>H2</h2>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <h3>Inter | Semi Bold | 20px | LH 24</h3>
        <h3>H3</h3>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <h4>Inter | Semi Bold | 18px | LH 24</h4>
        <h4>H4</h4>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <h5>Inter | Semi Bold | 16px | LH 26</h5>
        <h5>H5</h5>
      </div>
      <br />
      <div className="flex flex-row gap-8 justify-between">
        <p className="text-base leading-normal font-normal">
          Inter | Regular | 16px | LH 22
        </p>
        <p className="text-base leading-normal font-normal">text--regular</p>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <p className="text-base leading-normal font-medium">
          Inter | Medium | 16px | LH 22
        </p>
        <p className="text-base leading-normal font-medium">text--medium</p>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <p className="text-base leading-normal font-semibold">
          Inter | Semi Bold | 16px | LH 22
        </p>
        <p className="text-base leading-normal font-semibold">text--semibold</p>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <p className="text-base leading-normal font-normal italic">
          Inter | Regular | 16px | LH 22
        </p>
        <p className="text-base leading-normal font-normal italic">
          text--italic
        </p>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <p className="text-base leading-long font-normal">
          Inter | Regular | 16px | LH 26
        </p>
        <p className="text-base leading-long font-normal">text--long</p>
      </div>
      <br />
      <div className="flex flex-row gap-8 justify-between">
        <p className="text-sm leading-tight font-normal">
          Inter | Regular | 14px | LH 18
        </p>
        <p className="text-sm leading-tight font-normal">text-small--regular</p>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <p className="text-sm leading-normal font-medium">
          Inter | Medium | 14px | LH 18
        </p>
        <p className="text-sm leading-normal font-medium">text-small--medium</p>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <p className="text-sm leading-normal font-semibold">
          Inter | Semi Bold | 14px | LH 18
        </p>
        <p className="text-sm leading-normal font-semibold">
          text-small--semibold
        </p>
      </div>
      <br />
      <div className="flex flex-row gap-8 justify-between">
        <label>Inter | Regular | 12px | LH 16</label>
        <label>label--regular</label>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <label className="font-medium">Inter | Medium | 12px | LH 16</label>
        <label className="font-medium">label--medium</label>
      </div>
      <div className="flex flex-row gap-8 justify-between">
        <label className="font-semibold">
          Inter | Semi Bold | 12px | LH 16
        </label>
        <label className="font-semibold">label--semibold</label>
      </div>
    </div>
  )
}
