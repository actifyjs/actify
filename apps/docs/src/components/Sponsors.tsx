import { Button } from 'actify'
import NgrokerLogo from '@/components/NgrokerLogo'
import QzyLogo from '@/components/QzyLogo'
import TaildoorLogo from '@/components/TaildoorLogo'

const Sponsors = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-secondary text-2xl mb-4 text-center">Sponsors</h2>
      <div className="flex gap-2 items-center">
        <a tabIndex={-1} target="_blank" href="https://www.taildoor.com">
          <Button
            variant="text"
            className="[--md-text-button-container-height:64px] [--md-text-button-container-shape:0]"
          >
            <TaildoorLogo />
          </Button>
        </a>
        <a tabIndex={-1} target="_blank" href="https://ngroker.com">
          <Button
            variant="text"
            className="[--md-text-button-container-height:64px] [--md-text-button-container-shape:0]"
          >
            <NgrokerLogo />
          </Button>
        </a>
        <a tabIndex={-1} target="_blank" href="https://www.qzyidc.com">
          <Button
            variant="text"
            className="[--md-text-button-container-height:52px] [--md-text-button-container-shape:0]"
          >
            <QzyLogo />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Sponsors
